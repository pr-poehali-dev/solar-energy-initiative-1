import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import psycopg2

NOTIFY_EMAIL = "murmenergy@mail.ru"

def send_notification(name, phone, message, lead_id):
    smtp_password = os.environ.get('SMTP_PASSWORD')
    if not smtp_password:
        return

    msg = MIMEMultipart()
    msg['From'] = NOTIFY_EMAIL
    msg['To'] = NOTIFY_EMAIL
    msg['Subject'] = f'Новая заявка #{lead_id} — СК Пересвет'

    body = f"""Новая заявка с сайта!

Имя: {name}
Телефон: {phone}
Сообщение: {message or 'Не указано'}

---
Заявка #{lead_id}"""

    msg.attach(MIMEText(body, 'plain', 'utf-8'))

    server = smtplib.SMTP_SSL('smtp.mail.ru', 465)
    server.login(NOTIFY_EMAIL, smtp_password)
    server.sendmail(NOTIFY_EMAIL, NOTIFY_EMAIL, msg.as_string())
    server.quit()

def handler(event, context):
    """Сохраняет заявку клиента и отправляет уведомление на почту"""

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id', 'Access-Control-Max-Age': '86400'}, 'body': ''}

    headers = {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}

    if event.get('httpMethod') != 'POST':
        return {'statusCode': 405, 'headers': headers, 'body': json.dumps({'error': 'Method not allowed'})}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Имя и телефон обязательны'})}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO leads (name, phone, message) VALUES (%s, %s, %s) RETURNING id",
        (name, phone, message)
    )
    lead_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    try:
        send_notification(name, phone, message, lead_id)
    except Exception:
        pass

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True, 'id': lead_id})
    }

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"

const SUBMIT_URL = "https://functions.poehali.dev/cb55b5c6-b539-4b66-a17b-68583267b6fd"

interface LeadFormButtonProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function LeadFormButton({ children, variant = "default", size = "default", className }: LeadFormButtonProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setName("")
        setPhone("")
        setMessage("")
      } else {
        setError(data.error || "Ошибка отправки")
      }
    } catch {
      setError("Не удалось отправить заявку. Попробуйте позже.")
    } finally {
      setLoading(false)
    }
  }

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      setSuccess(false)
      setError("")
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon name="Zap" size={20} className="text-primary" />
            {success ? "Заявка отправлена!" : "Оставить заявку"}
          </DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="text-center py-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <Icon name="Check" size={32} className="text-green-500" />
              </div>
            </div>
            <p className="text-muted-foreground">
              Спасибо! Мы перезвоним вам в течение 15 минут.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                placeholder="Телефон"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Опишите задачу (необязательно)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Отправка..." : "Отправить заявку"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Перезвоним в течение 15 минут
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
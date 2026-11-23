"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Copy, Mail, Send } from "lucide-react"

const MY_EMAIL = "indiedevadi@gmail.com"

interface MailFormState {
  name: string
  subject: string
  message: string
}

function buildBody({ name, message }: MailFormState) {
  return `${message}\n\n—\nFrom: ${name}`
}

function buildGmailUrl({ name, subject, message }: MailFormState) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: MY_EMAIL,
    su: subject,
    body: buildBody({ name, subject, message }),
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}

function buildMailtoUrl({ name, subject, message }: MailFormState) {
  const params = new URLSearchParams({
    subject,
    body: buildBody({ name, subject, message }),
  })
  return `mailto:${MY_EMAIL}?${params.toString()}`
}

export default function MailForm() {
  const [form, setForm] = useState<MailFormState>({ name: "", subject: "", message: "" })
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState<"gmail" | "mailto" | null>(null)

  const updateField =
    (field: keyof MailFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm(prev => ({ ...prev, [field]: e.target.value }))
      setSent(null)
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = form.name.trim()
    const subject = form.subject.trim()
    const message = form.message.trim()
    if (!name || !subject || !message) return

    const data = { name, subject, message }
    const gmailWindow = window.open(buildGmailUrl(data), "_blank")
    if (!gmailWindow) {
      // Popup blocked — fall back to the visitor's default mail app.
      window.location.href = buildMailtoUrl(data)
      setSent("mailto")
    } else {
      setSent("gmail")
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(MY_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access can be blocked; the address is still visible to copy manually.
    }
  }

  const fallbackHref = buildMailtoUrl({
    name: form.name.trim(),
    subject: form.subject.trim(),
    message: form.message.trim(),
  })

  return (
    <div className="rounded-lg bg-muted border border-border p-6 shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Mail className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-foreground">Email me directly</h3>
          <p className="text-sm text-muted-foreground">
            Fill this in and it opens Gmail with your message ready to send straight to my inbox.
          </p>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            aria-label={`Copy ${MY_EMAIL}`}
          >
            {MY_EMAIL}
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="text-muted-foreground font-normal">{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="mail-name">Your name</Label>
            <Input
              id="mail-name"
              value={form.name}
              onChange={updateField("name")}
              placeholder="Aditya Singh"
              autoComplete="name"
              maxLength={80}
              className="bg-background"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="mail-subject">Subject</Label>
            <Input
              id="mail-subject"
              value={form.subject}
              onChange={updateField("subject")}
              placeholder="Let's work together"
              maxLength={120}
              className="bg-background"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="mail-message">Message</Label>
          <Textarea
            id="mail-message"
            value={form.message}
            onChange={updateField("message")}
            placeholder="Write your message here..."
            rows={5}
            maxLength={2000}
            className="min-h-28 resize-y bg-background"
            required
          />
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Button type="submit" className="w-full sm:w-auto">
            <Send className="mr-2 h-4 w-4" />
            Send via Gmail
          </Button>
          <a
            href={fallbackHref}
            className="text-center text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground sm:ml-2"
          >
            or use your own mail app
          </a>
        </div>

        {sent && (
          <p className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-foreground">
            {sent === "gmail" ? (
              <>Gmail should be open in a new tab — review the message and hit <strong>Send</strong>.</>
            ) : (
              <>Your mail app should be open with the message filled in — just hit <strong>Send</strong>.</>
            )}
          </p>
        )}
      </form>
    </div>
  )
}

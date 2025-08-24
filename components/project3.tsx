import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project3() {
  // Replace this with your actual demo image URL/path
  const demoImage = "/hacksecure.gif"

  // Replace with your actual project link (repo or live site)
  const projectLink = "https://www.hacksecure.in/"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Hack Secure Cybersecurity Training Platform
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          I built this project as a freelance job for Hack Secure, a cybersecurity training company. The aim was to create a full-stack website where students could access premium cybersecurity courses and CTF (Capture The Flag) training challenges after purchasing a subscription.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">What I Created</h2>
        <p className="leading-relaxed mb-2">
          I developed a full-stack platform that includes:
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1 mb-2">
          <li>User Authentication – Secure login and signup using Supabase authentication.</li>
          <li>Subscription System – Unlocks premium courses and challenges after payment.</li>
          <li>Payment Integration – Integrated Razorpay to securely handle student payments.</li>
          <li>Course Dashboard – Students can watch video lessons and tutorials.</li>
          <li>CTF Training Arena – Hands-on labs and challenges to help students practice and improve their cybersecurity skills.</li>
        </ul>
        <p className="italic leading-relaxed text-sm text-muted-foreground">
          (Note: The live deployed version currently appears like a front-end only site because administrators have not uploaded any courses yet. The backend is fully functional and tested locally.)
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies I Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Frontend: HTML, CSS, JavaScript, Nodejs</li>
          <li>Backend & Server: Supabase – for authentication, backend services, and database</li>
          <li>Payment Gateway: Razorpay – for handling subscriptions and payments securely</li>
          <li>Database: Supabase with JSON storage for dynamic course and user data</li>
          <li>Hosting & Deployment: (Specify your deployment platform — e.g., Netlify, Vercel, or custom server)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden rounded-lg shadow-md">
          <img
            src={demoImage}
            alt="Hack Secure platform demo screenshot"
            className="w-full object-cover"
          />
        </Card>
      </section>

      <section>
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.open(projectLink, "_blank", "noopener,noreferrer")}
        >
          Visit Project Website
        </Button>
      </section>
    </div>
  )
}

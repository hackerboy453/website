"use client"

import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/adi8805",
    icon: <FaGithub size={28} />,
    buttonText: "Follow on GitHub",
    img: "/github.jpg",
    ring: "ring-indigo-500",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/adi-sec-82121a2b0/",
    icon: <FaLinkedin size={28} />,
    buttonText: "Connect on LinkedIn",
    img: "/linkedin.jpg",
    ring: "ring-blue-500",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/epicgamesaga/",
    icon: <FaInstagram size={28} />,
    buttonText: "Follow on Instagram",
    img: "/instagram.jpg",
    ring: "ring-pink-500",
  },
]

export default function Contact() {
  return (
    <div className="w-full h-full max-h-full flex flex-col bg-card rounded-xl shadow-2xl overflow-hidden">
      {/* Heading */}
      <div className="pt-6 pb-4 px-4">
        <h2 className="text-4xl font-[cursive] text-center mb-4 underline decoration-indigo-500 decoration-2 text-foreground">
          Connect with me 🧑‍🤝‍🧑
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6">
        <div className="flex flex-col gap-8">
          {socialLinks.map(({ id, label, url, icon, buttonText, img, ring }) => (
            <div
              key={id}
              className="rounded-lg bg-muted p-6 flex flex-col items-center gap-4 shadow-md"
            >
              <img
                src={img}
                alt={`${label} Profile`}
                className={`w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 ${ring} bg-muted`}
              />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 mt-2 bg-primary hover:bg-primary/80 text-primary-foreground text-lg font-semibold rounded-lg px-6 py-3 w-full justify-center transition"
              >
                {icon}
                <span>{buttonText}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

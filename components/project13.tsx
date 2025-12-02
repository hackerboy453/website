"use client"

import React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project10() {
  // Update this to your real project URL or GitHub repository
  const projectLink = "https://github.com/adi8805/Open-source-antivirus-with-vulnerability-scanner-and-application-based-firewall"

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Desktop Antivirus, Vulnerability Scanner & Firewall
      </h1>

      {/* Motivation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          Me and my college friend wanted to build a practical minor project to
          present in college, so we decided to create a desktop antivirus and
          security tool focused on protecting user data. This project helped us
          learn how real security products combine malware signatures,
          vulnerability scanning, and firewall rules into a single system.
        </p>
      </section>

      {/* Project Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="leading-relaxed mb-2">
          This project is a desktop antivirus application that uses an
          open-source signature database to detect malicious files, a
          vulnerability scanner to detect outdated and vulnerable applications
          (based on CVEs from 2014 to 2025), and a simple firewall module that
          can block or allow selected applications from accessing the network.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>
            Signature-based antivirus engine that scans files against an
            open-source malware signature database (inspired by ClamAV).
          </li>
          <li>
            Vulnerability scanner that checks installed or user-selected
            applications against known CVEs from 2014–2025 to highlight
            outdated or risky software.
          </li>
          <li>
            Basic application-level firewall that can block specific programs
            from making network connections.
          </li>
          <li>
            Desktop GUI with system tray integration so the antivirus can run
            in the background and be easily controlled by the user.
          </li>
        </ul>
      </section>

      {/* Technologies Used */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>
            <strong>Core Language:</strong> Python.
          </li>
          <li>
            <strong>GUI Framework:</strong> Tkinter for building the desktop
            interface.
          </li>
          <li>
            <strong>Signature Engine:</strong> Uses an open-source antivirus
            signature database inspired by ClamAV for detecting malware.
          </li>
          <li>
            <strong>Vulnerability Data:</strong> CVE-based vulnerability
            scanning for applications from 2014 to 2025, referencing NIST and
            public vulnerability feeds.
          </li>
          <li>
            <strong>Networking & System Tools:</strong> Netstat and Python
            modules such as <code>subprocess</code>, <code>os</code>,{" "}
            <code>sys</code>, and <code>platform</code> to inspect running
            processes, network connections, and system information.
          </li>
          <li>
            <strong>Python Libraries:</strong> <code>threading</code>,{" "}
            <code>time</code>, <code>json</code>, <code>io</code>,{" "}
            <code>csv</code>, <code>re</code>, <code>packaging</code>,{" "}
            <code>shutil</code>, <code>webbrowser</code>, <code>pystray</code>,{" "}
            <code>iptc</code>, <code>ctypes</code>, and <code>PIL</code> for
            concurrency, data handling, file operations, tray icon management,
            image handling, and low-level system integration.
          </li>
        </ul>
      </section>

      {/* References */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">References</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>
            ClamAV – Open-source antivirus engine for detecting trojans,
            viruses, malware, and other malicious threats.
          </li>
          <li>
            Tkinter – Python&apos;s standard GUI toolkit for building desktop
            applications.
          </li>
          <li>
            NIST – National Institute of Standards and Technology, used as a
            reference for CVE and vulnerability information.
          </li>
          <li>
            Netstat – Command-line tool for listing network connections,
            routing tables, and interface statistics.
          </li>
        </ul>
      </section>

      {/* Demo GIF */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden">
          <Image
            src="/project_gif/antivirus.gif"
            alt="Antivirus application demo"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </Card>
      </section>

      {/* Call to Action */}
      <section>
        <Button
          variant="default"
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-transform transition-colors duration-200"
          onClick={() =>
            window.open(projectLink, "_blank", "noopener,noreferrer")
          }
        >
          View Project
        </Button>
      </section>
    </div>
  )
}

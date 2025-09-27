import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Project9() {
  // GitHub project link
  const projectLink = "https://github.com/adi8805/Online-Keylogger-With-ngrok-server" // Update if you have a new repository for the online version
  // Demo image placeholder
  const demoImage = "/project_gif/online_keylogger.gif" // Replace with a relevant demo GIF for the online version


  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        Keylogger (Online)
      </h1>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          I developed this online keylogger to explore client-server architecture and data exfiltration techniques as a fun, practical prank on a friend. The goal was to understand how a payload could capture data on a target machine and send it back to a remote server, offering insights into cybersecurity principles from an offensive perspective.
        </p>
        <Card className="bg-destructive/10 border-destructive/50 border-l-4 p-4 mt-4">
          <p className="text-destructive-foreground">
            <strong>Ethical Warning:</strong> This project was created for educational exploration. Deploying such a tool on anyone's machine without their explicit, informed consent is illegal and a serious privacy violation. This was purely a technical challenge, and the 'prank' was hypothetical.
          </p>
        </Card>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="leading-relaxed mb-2">
          This project consists of two main components: a client-side keylogger and a server-side listener. The keylogger captures all keystrokes on the target machine and periodically sends them to a remote Flask server, which then logs the data and provides a web interface to view it.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li><strong>Client-Side Logger:</strong> Captures keyboard events in real-time and stores them locally before transmission [2].</li>
          <li><strong>Data Exfiltration:</strong> Sends the captured keystrokes as JSON data to a remote server via HTTP POST requests [2].</li>
          <li><strong>Server-Side Listener:</strong> A Flask web server that receives and logs the keystroke data from the client.</li>
          <li><strong>Log Viewer:</strong> The server also hosts a simple web page to display the collected logs in real-time.</li>
          <li><strong>Stealth Operation:</strong> Runs silently in the background with console output disabled by default [2].</li>
          <li><strong>Graceful Exit:</strong> The logger stops and sends any remaining logs upon pressing the ESC key [2].</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li><strong>Python 3:</strong> Core language for both client and server scripts.</li>
          <li><strong>Flask:</strong> A micro web framework for the server to receive data and display logs.</li>
          <li><strong>pynput:</strong> Library to capture and listen for keyboard events on the client machine [2].</li>
          <li><strong>requests:</strong> Used by the client to send HTTP POST requests to the remote server [2].</li>
          <li><strong>threading:</strong> To run the console spinner animation concurrently without blocking the main logging thread [2].</li>
          <li><strong>Standard Libraries:</strong> `os`, `sys`, `time` for system-level operations and process handling [2].</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Demo</h2>
        <Card className="overflow-hidden rounded-lg shadow-md">
          <img
            src={demoImage}
            alt="Keylogger online demo animation"
            className="w-full object-cover"
          />
        </Card>
      </section>


      <section>
        <Button
          variant="default"
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-transform transition-colors duration-200"
          onClick={() => window.open(projectLink, "_blank", "noopener,noreferrer")}
        >
          View Project Repository
        </Button>
      </section>
    </div>
  )
}

"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Project10() {
  const projectLink = "https://freelanced-website-1.vercel.app/"

  const tags = [
    "#NextJS", "#React", "#Supabase", "#PostgreSQL", "#Formspree", "#Razorpay",
    "#TailwindCSS", "#TypeScript", "#Vercel", "#E-commerce", "#FullStack",
    "#FreelanceProject", "#WebDevelopment", "#ResponsiveDesign", "#PaymentGateway",
    "#FormHandling", "#Database", "#Authentication", "#ServerSideRendering",
    "#ModernWebDev", "#ClientProject", "#ProductCatalog", "#ShoppingCart",
    "#OrderManagement", "#ElectroTechMart"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg text-foreground">
      <h1 className="text-4xl font-bold mb-6 border-b border-border pb-3">
        ElectroTechMart - E-commerce Platform
      </h1>

      {/* Motivation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Motivation</h2>
        <p className="leading-relaxed">
          Built a complete e-commerce platform for a freelance client who needed a modern, 
          scalable online store for electronics and technology products. The goal was to create 
          a professional shopping experience with integrated payment processing, order management, 
          and customer communication features while leveraging cutting-edge web technologies.
        </p>
      </section>

      {/* Project Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Project Overview</h2>
        <p className="leading-relaxed mb-4">
          ElectroTechMart is a full-featured e-commerce website developed using Next.js and modern 
          web technologies. The platform provides a seamless shopping experience with secure payment 
          processing, real-time inventory management, and customer engagement tools.
        </p>
        <ul className="list-disc list-inside leading-relaxed space-y-2 mb-8">
          <li>Built with Next.js for optimal performance and SEO with server-side rendering</li>
          <li>Supabase backend for real-time database, authentication, and storage management</li>
          <li>Razorpay integration for secure and reliable payment processing</li>
          <li>Formspree implementation for customer inquiries and contact form handling</li>
          <li>Responsive design with TailwindCSS ensuring great UX across all devices</li>
          <li>Product catalog with search, filtering, and category organization</li>
          <li>Shopping cart functionality with order tracking and management</li>
          <li>Deployed on Vercel for fast, reliable hosting with automatic scaling</li>
        </ul>
      </section>

      {/* Tags Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technologies & Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-all cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-8 border-t border-border">
        <Button
          variant="default"
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200 px-8"
          onClick={() =>
            window.open(projectLink, "_blank", "noopener,noreferrer")
          }
        >
          Visit ElectroTechMart
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="hover:scale-[1.02] transition-all duration-200 px-8"
          onClick={() => {
            navigator.clipboard.writeText(tags.join(' '));
            alert('Tags copied to clipboard!');
          }}
        >
          Copy Tags
        </Button>
      </section>
    </div>
  )
}

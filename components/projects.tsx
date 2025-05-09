"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const projects = [
    {
      title: "Smart Library Assistant",
      description:
        "A library chatbot using Retrieval-Augmented Generation (RAG) for accurate, context-aware responses. Integrated FAISS vector storage and HuggingFaceEmbeddings for efficient semantic retrieval.",
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      codeLink: "#",
      technologies: ["RAG", "FAISS", "HuggingFaceEmbeddings", "Redis", "Chainlit"],
    },
    {
      title: "Analysis of 911 Calls",
      description:
        "Data-driven project analyzing emergency 911 calls from Detroit and New York City to predict hotspots and improve urban public safety operations using advanced modeling techniques.",
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      codeLink: "#",
      technologies: ["SARIMAX", "DBSCAN", "K-Means", "Data Analysis", "Python"],
    },
    {
      title: "Inventory Management System",
      description:
        "Advanced inventory management solution for a simulated retail business with real-time tracking, client management, and automated ordering features.",
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      codeLink: "#",
      technologies: ["SQL", "Node.js", "Angular", "RESTful API"],
    },
    {
      title: "Secure Cloud Storage",
      description:
        "Secure file storage system integrating Flask, AWS S3, and hybrid cryptographic techniques for high-stakes environments like military and industry.",
      image: "/placeholder.svg?height=400&width=600",
      demoLink: "#",
      codeLink: "#",
      technologies: ["AWS S3", "Flask", "AES", "RSA", "Steganography"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of my recent work, personal projects, and contributions.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} Screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

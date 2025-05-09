"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

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

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 blur-xl"></div>
              <div className="relative overflow-hidden rounded-full border-4 border-primary/20 shadow-xl">
                <Image
                  src="/kkk.png?height=320&width=320"
                  alt="Abhishek Rangi"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="text-muted-foreground">
              I'm a Computer Science graduate student at Towson University with a focus on On-device AI for medical
              data. With experience as a Full Stack Developer at DBS Tech India and a background in blockchain
              technology, I bring a diverse skill set to software development projects.
            </p>
            <p className="text-muted-foreground">
              My research interests include AI/ML, secure computing systems, and innovative software solutions. I'm
              passionate about creating technology that makes a positive impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href="https://github.com/Abhi-rangi" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href="https://linkedin.com/in/abhishek-rangi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href="mailto:abhishekrangi09@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <motion.div variants={itemVariants}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-sm text-muted-foreground">
                  MS in Computer Science at Towson University (2023-2025) with a 4.0 GPA. BTech in Computer Science &
                  Engineering from KMIT, India (2018-2022).
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Research</h3>
                <p className="text-sm text-muted-foreground">
                  Working on On-device AI for secure patient health monitoring. Published papers on Bare Machine
                  Computing security and applications.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Graduate Research Assistant at Towson University. Full Stack Developer at DBS Tech India. Blockchain
                  Intern at Virtusa.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

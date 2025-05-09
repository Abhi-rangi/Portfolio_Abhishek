"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Resume() {
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Skills data
  const skills = [
    { category: "Programming", items: ["Python", "C/C++", "Java", "TypeScript"] },
    { category: "AI/ML", items: ["LLMs", "LangChain", "RAG", "TensorFlow", "scikit-learn", "OpenCV"] },
    { category: "Web", items: ["React", "NextJS", "AngularJS", "Node.js", "jQuery"] },
    { category: "Databases", items: ["SQL", "MongoDB", "PostgreSQL", "SQLite"] },
    { category: "Tools", items: ["GitHub", "Bitbucket", "JIRA", "Jenkins"] },
  ]

  if (!mounted) {
    return <div className="py-20 bg-secondary/30">Loading...</div>
  }

  return (
    <section id="resume" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Resume</h2>
          <p className="text-muted-foreground max-w-2xl mb-8">
            A summary of my education, work experience, skills, and research
            publications.
          </p>
          <Button asChild className="gap-2">
            <a href="Resume_Abhishek.pdf">
              <Download className="h-4 w-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </Button>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="publications">Publications</TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Graduate Research Assistant
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Towson University, Bare Machine Computing (BMC) Research
                    </p>
                  </div>
                  <Badge>Aug 2023 - Present</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Assisted in developing a chat application utilizing C, C++,
                    and assembly language.
                  </li>
                  <li>
                    Surveyed over 100 research publications to identify
                    cybersecurity vulnerabilities and attacks in machines with
                    operating systems.
                  </li>
                  <li>
                    Supervise students during semesters, enhancing course
                    delivery and student engagement.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Full Stack Developer
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      DBS Tech India, Consumer Banking & Core. Engines
                      Technology (C2E)
                    </p>
                  </div>
                  <Badge>Aug 2022 - July 2023</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Engineered robust backend services using Java and developed
                    dynamic front-end interfaces with Angular.
                  </li>
                  <li>
                    Led the integration and management of PostgreSQL databases
                    and Java APIs.
                  </li>
                  <li>
                    Implemented microservices architecture to ensure scalable
                    and efficient application deployments.
                  </li>
                  <li>
                    Conducted comprehensive testing with Jasmine and JUnit,
                    maintaining high standards of software quality.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Blockchain Intern</h3>
                    <p className="text-sm text-muted-foreground">
                      Virtusa, Technology
                    </p>
                  </div>
                  <Badge>July 2021 - April 2022</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Implemented over 30 user stories within an Agile framework
                    using JIRA.
                  </li>
                  <li>
                    Developed and managed 13 REST API endpoints using Express
                    and Node.js.
                  </li>
                  <li>
                    Generated and managed large datasets in MongoDB,
                    facilitating effective testing.
                  </li>
                  <li>
                    Enhanced supply chain management solutions by integrating
                    blockchain technologies.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Master of Science, Computer Science
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Towson University, Towson, MD
                    </p>
                  </div>
                  <Badge>Aug 2023 - May 2025 (Expected)</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">CGPA - 4.0/4.0</p>
                <p className="text-sm text-muted-foreground">
                  Advisor: Dr. Yeong-Tae Song
                </p>
                <p className="text-sm text-muted-foreground">
                  Thesis: On-device AI on medical data
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Bachelor of Technology, Computer Science & Engineering
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Keshav Memorial Institute of Technology, Hyderabad
                      (Affiliated to JNTUH, India)
                    </p>
                  </div>
                  <Badge>July 2018 - July 2022</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">CGPA - 7.52/10</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="publications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">
                      On-Device AI for Secure Patient Health Monitoring
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Abhishek Rangi, Yeong-Tae Song
                    </p>
                  </div>
                  <Badge>2025</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  The 23rd IEEE/ACIS International Conference on Software
                  Engineering, Management and Applications (SERA 2025)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">
                      An Evaluation of the Security of Bare Machine Computing
                      (BMC) Systems against Cybersecurity Attacks
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Fahad Alotaibi, Ramesh K. Karne, Alexander L. Wijesinha,
                      Nirmala Soundararajan, Abhishek Rangi
                    </p>
                  </div>
                  <Badge>2024</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Journal of Cybersecurity and Privacy. 2024; 4(3):678-730.
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Paper
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">
                      A Chat Application on a Bare Internet
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Fahad Alotaibi, Ramesh K. Karne, Alexander L. Wijesinha,
                      Nirmala Soundararajan, Abhishek Rangi
                    </p>
                  </div>
                  <Badge>2024</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  2024 IEEE 48th Annual Computers, Software, and Applications
                  Conference (COMPSAC)
                </p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Paper
                  </a>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

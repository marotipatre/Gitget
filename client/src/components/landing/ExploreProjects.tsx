"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from './Navbar'

const projectCategories = ['Past', 'Live', 'Upcoming']

const projects = [
  { id: 1, name: 'Project A', description: 'A cool open source project', category: 'Live', rewards: '$500' },
  { id: 1, name: 'Project A', description: 'A cool open source project', category: 'Live', rewards: '$500' },
  { id: 1, name: 'Project A', description: 'A cool open source project', category: 'Live', rewards: '$500' },
  { id: 1, name: 'Project A', description: 'A cool open source project', category: 'Live', rewards: '$500' },
  { id: 2, name: 'Project B', description: 'An awesome library', category: 'Upcoming', rewards: '$1000' },
  { id: 3, name: 'Project C', description: 'A completed project', category: 'Past', rewards: '$750' },
  // Add more projects as needed
]

export function ExploreProjects() {
  const [activeCategory, setActiveCategory] = useState('Live')

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 w-[80%]">

          <h1 className="text-3xl font-bold mb-6">Projects</h1>
          <Tabs defaultValue="Live" onValueChange={setActiveCategory}>
              <TabsList>
                  {projectCategories.map((category) => (
                      <TabsTrigger key={category} value={category}>
                          {category}
                      </TabsTrigger>
                  ))}
              </TabsList>
              {projectCategories.map((category) => (
                  <TabsContent key={category} value={category}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {projects
                              .filter((project) => project.category === category)
                              .map((project) => (
                                  <Card key={project.id}>
                                      <CardHeader>
                                          <CardTitle>{project.name}</CardTitle>
                                          <CardDescription>{project.description}</CardDescription>
                                      </CardHeader>
                                      <CardContent>
                                          <p>Rewards: {project.rewards}</p>
                                      </CardContent>
                                      <CardFooter>
                                          <Button>View Details</Button>
                                      </CardFooter>
                                  </Card>
                              ))}
                      </div>
                  </TabsContent>
              ))}
          </Tabs>
      </div>
      </>
  )
}


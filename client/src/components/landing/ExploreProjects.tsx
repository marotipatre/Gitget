"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectDetailsModal } from '../ProjectDetailsModal'
import { CreateProfileModal } from '../CreateProfileModal'
import { Switch } from "@/components/ui/switch"

const projectCategories = ['Past', 'Live', 'Upcoming']

const projects = [
  { 
    id: 1, 
    name: 'Project A', 
    description: 'A cool open source project', 
    category: 'Live', 
    rewards: '$500',
    contributors: [
      { name: 'Alice', contributions: 50 },
      { name: 'Bob', contributions: 30 },
      { name: 'Charlie', contributions: 20 },
    ],
    repoUrl: 'https://github.com/example/project-a'
  },
  { 
    id: 2, 
    name: 'Project B', 
    description: 'An awesome library', 
    category: 'Upcoming', 
    rewards: '$1000',
    contributors: [
      { name: 'David', contributions: 40 },
      { name: 'Eve', contributions: 35 },
      { name: 'Frank', contributions: 25 },
    ],
    repoUrl: 'https://github.com/example/project-b'
  },
  { 
    id: 3, 
    name: 'Project C', 
    description: 'A completed project', 
    category: 'Past', 
    rewards: '$750',
    contributors: [
      { name: 'Grace', contributions: 60 },
      { name: 'Henry', contributions: 40 },
      { name: 'Ivy', contributions: 30 },
    ],
    repoUrl: 'https://github.com/example/project-c'
  },
]

export function ExploreProjects() {
  const [activeCategory, setActiveCategory] = useState('Live')
  const [isContributor, setIsContributor] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Explore Projects</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Are you a contributor?</span>
            <Switch
              checked={isContributor}
              onCheckedChange={setIsContributor}
            />
          </div>
          {isContributor && <CreateProfileModal />}
        </div>
      </div>
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
                      <ProjectDetailsModal project={project} />
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}


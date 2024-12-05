"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProjectDetailsModal } from '../ProjectDetailsModal'
import { CreateProfileModal } from '../CreateProfileModal'
import { Switch } from "@/components/ui/switch"
import { projects } from "./ProjectData"
import Image from 'next/image'

const projectCategories = ['Past', 'Live', 'Upcoming']



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
                  <Card 
                    key={project.id} 
                    className="transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:-translate-y-1"
                  >
                    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <Image
                        src={project.imageUrl}
                        alt={`${project.name} logo`}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-blue-600">Rewards: {project.rewards}</p>
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


import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface Contributor {
  name: string;
  contributions: number;
}

interface ProjectDetails {
  id: number;
  name: string;
  description: string;
  category: string;
  rewards: string;
  contributors: Contributor[];
  repoUrl: string;
}

const contributionData = [
  { name: 'Commits', value: 120 },
  { name: 'Pull Requests', value: 45 },
  { name: 'Issues', value: 30 },
  { name: 'Code Reviews', value: 60 },
];

export function ProjectDetailsModal({ project }: { project: ProjectDetails }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{project.name}</DialogTitle>
          <DialogDescription>{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Category:</strong> {project.category}</p>
              <p><strong>Rewards:</strong> {project.rewards}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contribution Analysis</CardTitle>
            </CardHeader>
            <CardContent className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={contributionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top Contributors</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {project.contributors.slice(0, 3).map((contributor, index) => (
                  <li key={index} className="text-sm">
                    {contributor.name} - {contributor.contributions} contributions
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-4 " >
          <Button onClick={() => window.open(project.repoUrl, '_blank')}>
            Go to Repository
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


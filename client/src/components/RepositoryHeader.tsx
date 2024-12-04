"use client";

import { useEffect, useState } from "react";
import { Repository } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

interface RepositoryHeaderProps {
  repositoryId: string;
}

export function RepositoryHeader({ repositoryId }: RepositoryHeaderProps) {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [loading, setLoading] = useState(true);
  const [validators,setValidators] = useState(0);

  useEffect(() => {
  
    
    async function fetchRepository() {
      try {
        const response = await fetch(
          `/api/github/repositories/${repositoryId}/`
        );
        const data = await response.json();

        console.log(data);
        setValidators(Math.floor(Math.random() * 30) + 1);
        setRepository(data);
      } catch (error) {
        console.error("Error fetching repository:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepository();
  }, [repositoryId]);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Skeleton className="h-8 w-1/3 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    );
  }

  if (!repository) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold">{repository.name}</h1>
      <p className="text-gray-500 mt-1">{repository.description}</p>
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
        <span className="text-purple-600">{repository.owner}</span>
        <span>•</span>
        <span className="text-blue-600">{repository.stars} stars</span>
        <span>•</span>
        <span className="text-black">{repository.forks} forks</span>
        <span>•</span>
        <span className="text-purple-600">{validators} Validators</span>
      </div>
    </div>
  );
}

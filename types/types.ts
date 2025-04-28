export interface ProjectCardProps {
    project: {
      title: string;
      description: string;
      tags: string[];
      image: string;
      link?: string;
    };
    index: number;
  }
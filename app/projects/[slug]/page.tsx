import React from 'react';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define the correct param type for Next.js 15+ App Router Page
type Props = {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col selection:bg-blue-500/30">
      <Navbar />
      
      <div className="flex-1 pt-12 pb-24 px-4 max-w-4xl mx-auto w-full">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12 border-b border-white/10 pb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{project.title}</h1>
            <p className="text-xl text-gray-400 max-w-2xl">{project.shortDescription}</p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-row md:flex-col gap-4 w-full md:w-auto shrink-0 mt-4 md:mt-0">
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors w-full"
              >
                <ExternalLink className="w-4 h-4" /> Live Project
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-lg font-medium transition-colors w-full"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            )}
          </div>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300">{project.longDescription}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Challenges Faced</h2>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <p>{project.challenges}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Future Plans & Improvements</h2>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <p>{project.futurePlans}</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

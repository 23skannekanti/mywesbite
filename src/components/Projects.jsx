import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const projects = [
  {
    title: "MEDIC(AI)RE",
    description:
      "Developed an AI healthcare app with 98% accurate real-time vitals tracking using Swift, AWS, and ChatGPT API.",
    tags: ["Swift", "React.js", "AWS DynamoDB", "ChatGPT API", "Tailwind CSS"],
    links: {
      github: "https://github.com/23skannekanti/MEDICAIRE",
      demo: "https://23skannekanti.github.io/MEDICAIRE/",
    },
  },
  {
    title: "BR(AI)N",
    description:
      "Engineered a YOLOv5 object detection model for real-time surgical analysis, enhancing intraoperative precision.",
    tags: ["React.js", "PyTorch", "OpenCV", "Flask", "YOLOv5"],
    links: {
      github: "https://github.com/23skannekanti/BRAIN-Project-Hackathon",
      demo: "#",
    },
  },
  {
    title: "POINTSTAKE",
    description:
      "Built a mobile app enabling users to share playlists, discover music, and engage with an extensive library of 200+ titles.",
    tags: ["AWS S3", "Swift", "Express.js", "RESTful APIs"],
    links: {
      github: "https://github.com/yourgithub/pointstake",
      demo: "#",
    },
  },
];

const ProjectShowcase = () => {
  return (
    <div className="pt-40 min-h-screen bg-[#020617] p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 hover:scale-105 hover:shadow-2xl p-6"
          >
            <MacOsButtons />
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                    Featured Project
                  </div>
                  <CardTitle className="text-slate-100 text-3xl font-bold">
                    {project.title}
                  </CardTitle>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.links.demo}
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            </CardHeader>

            <CardContent className="mt-4">
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;

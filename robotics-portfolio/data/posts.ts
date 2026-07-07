import { ReactNode } from "react";

export type PostEntry = {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  skills: string[];
  category: "project" | "competition";
  href: string;
  date?: string;
  status?: string;
};
// PROJECT
export const projectPosts: PostEntry[] = [
  {
    id: "ftc-2025-2026-offseason-robot",
    title: "FTC 2025-2026 Offseason Robot",
    summary: "An off-season mechanical design project focusing on building a <strong>virtual prototype for the FTC 2025–2026 season: DECODE</strong>. This season’s goal was to engineer an elite-level robot architecture that optimize 3 factors: <strong>Fast</strong> and <strong>flexible</strong> intake, <strong>Smooth</strong> and <strong>rapid</strong> transfer, <strong>Stable</strong> and <strong>precise</strong> shooter",
    description:
      "Designed and built an end-to-end autonomous warehouse robot with ROS navigation, sensor fusion, and embedded control. The project includes path planning, object detection, and hardware/software integration for reliable indoor mobility.",
    image:
      "p1/FTC-25-26-Offseason-Full.PNG",
    skills: ["3D Modeling", "2D Design", "Brainstorming", "Computer Vision", "Researching"],
    category: "project",
    href: "/projects/ftc-2025-2026-offseason-robot",
    date: "01/2026-05/2026",
    status: "Finished",
  },
  {
    id: "customized-swerve-chassis",
    title: "Customized Swerve Modules For Projects",
    summary: "An off-season mechanical design project focusing on building a <strong>virtual prototype for the FTC 2025–2026 season: DECODE</strong>. This season’s goal was to engineer an elite-level robot architecture that optimize 3 factors: <strong>Fast</strong> and <strong>flexible</strong> intake, <strong>Smooth</strong> and <strong>rapid</strong> transfer, <strong>Stable</strong> and <strong>precise</strong> shooter",
    description:
      "Designed and built an end-to-end autonomous warehouse robot with ROS navigation, sensor fusion, and embedded control. The project includes path planning, object detection, and hardware/software integration for reliable indoor mobility.",
    image:
      "p2/Swerve_V1.png",
    skills: ["3D Modeling", "2D Design", "Brainstorming", "Computer Vision", "Researching"],
    category: "project",
    href: "/projects/customized-swerve-chassis",
    date: "05/2026-Now",
    status: "Pending",
  },
];
// COMPETITION
export const competitionPosts: PostEntry[] = [
  {
    id: "first-tech-challenge-25-26",
    title: "First Tech Challenge 25-26",
    summary: "A team-based robotics competition entry emphasizing rapid prototyping and autonomous decision-making.",
    description:
      "Competed in a robotics competition to develop a robust autonomous system under tight timelines. The solution combined state estimation, ROS messaging, simulation testing, and a strong focus on reliability and team collaboration.",
    image:
      "c1/Logo.png",
    skills: ["Autonomous programming", "Teleoperate programming", "Java programming", "3D Modeling", "Teamwork"],
    category: "competition",
    href: "/competitions/first-tech-challenge-25-26",
    date: "09/2025-01/2026",
    status: "Finished",
  },
];

export const allPosts = [...projectPosts, ...competitionPosts];

export function getProjectPosts() {
  return projectPosts;
}

export function getCompetitionPosts() {
  return competitionPosts;
}

export function getAllPosts() {
  return allPosts;
}

export function getPostById(id: string) {
  return allPosts.find((post) => post.id === id);
}

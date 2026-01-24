import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
  FaJava,
  FaPhp,
  FaDocker,
  FaDatabase,
  FaCode,
} from "react-icons/fa"

import {
  SiFlutter,
  SiFirebase,
  SiTypescript,
  SiFramer,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiC,
  SiDotnet,
} from "react-icons/si"

import { TbApi } from "react-icons/tb"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C#", icon: <SiDotnet /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Framer Motion", icon: <SiFramer /> },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "NoSQL", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Figma", icon: <FaFigma /> },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
            >
              <h3>{category.title}</h3>

              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
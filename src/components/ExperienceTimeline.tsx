import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "AI Creative & AI Automation Engineer",
    company: "ShopOS ( SI House of Models )",
    period: "Jun 2024 – Dec 2025",
    description: [
      "Built AI-powered creative automation pipelines integrating generative models for large-scale image generation and ad creatives.",
      "Designed structured prompt systems controlling pose, camera angle, lighting, facial expression, and background composition for cinematic AI visuals.",
      "Developed automated AI workflows using ComfyUI, Python, and n8n to streamline creative production pipelines.",
      "Generated AI-based fashion visuals and advertising creatives for e-commerce and brand campaigns.",
      "Collaborated with creative and video teams to produce high-quality AI-generated assets aligned with brand identity and storytelling goals."
    ],
    technologies: ["Automation", "SDXL", "AI workflow", "ComfyUI", "POC Images Genration", "Prompt Engineering",  "Creative AI Tools", "Image Generation", "n8n Workflow Automation", "Cinematic Visual Composition" ],
  },
  {
    id: 2,
    role: "Mern Stack Developer",
    company: "The Madras Branding Company",
    period: "Feb 2024 – Jun 2024",
    description: [
      "Optimized backend queries and server-side rendering, improving website performance and reducing load times by 30%.",
      "Built scalable microservices supporting increased concurrent user traffic.Implemented responsive design and improved SEO performance for multiple client websites.",
      "Collaborated with cross-functional teams to integrate thirdparty payment gateways, enhancing transaction security and reducing cart abandonment by 20%."
    ],
    technologies: ["React js", "Node js", "Express js", "JavaScript", "HTML", "CSS", "Framer","Python","Mongo DB" ],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Grafix ui",
    period: "sep 2022 – Jan 2024",
    description: [
      "Developed responsive user interfaces using React.js, Next.js, HTML, CSS, and JavaScript.",
      "Improved user engagement through optimized UI/UX and faster page performance.Worked on scalable front-end systems for client web applications.",
      "Gained hands-on experience with modern frameworks like React, expanding technical skills and contributing to scalable front-end solutions."
    ],
    technologies: ["React js", "Node js", "Express js", "JavaScript", "HTML", "CSS", "Framer","Python","Mongo DB" ],
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Career
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold mt-4">
              Work <span className="gradient-text-primary">Experience</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp) => (
            <ScrollReveal key={exp.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 border border-primary/20"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Briefcase className="w-6 h-6" />
                    </div>

                    {/* Role + Company */}
                    <div>
                      <h3 className="text-2xl font-bold">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Date pill */}
                  <span className="px-4 py-1 text-sm rounded-full bg-secondary/40 text-muted-foreground w-fit">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="mt-6 space-y-4 text-muted-foreground">
                  {exp.description.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary text-xs">
                        ✓
                      </span>
                      <p className="leading-relaxed">
                        {point}
                      </p>
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
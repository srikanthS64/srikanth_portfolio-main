import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  {
    id: "ai-generation",
    title: "AI Template Images",
    description: "Exploring the boundaries of artificial creativity",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    count: 8,
    type: "image",
  },
  {
    id: "AI-Video-Generation",
    title: "AI Video Generation",
    description: "Cinematic storytelling in motion",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    count: 4,
    type: "video",
  },
 
];

const WorksGrid = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary text-sm font-medium uppercase tracking-widest"
            >

            </motion.span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mt-4 mb-6">
              Selected <span className="gradient-text-primary">Works</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id}>
              <Link to={`/works/${category.id}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredId(category.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover"
                >
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredId === category.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />

                  {/* Video indicator */}
                  {category.type === "video" && (
                    <motion.div
                      className="absolute top-4 right-4 p-3 rounded-full bg-primary/90 backdrop-blur-sm"
                      animate={{
                        scale: hoveredId === category.id ? 1.1 : 1,
                      }}
                    >
                      <Play className="w-4 h-4 text-primary-foreground fill-current" />
                    </motion.div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs text-primary uppercase tracking-wider">
                          {category.count} Projects
                        </span>
                        <h3 className="font-display text-2xl font-bold mt-1 mb-2 group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {category.description}
                        </p>
                      </div>
                      <motion.div
                        animate={{
                          x: hoveredId === category.id ? 0 : -10,
                          opacity: hoveredId === category.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-full glass"
                      >
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksGrid;

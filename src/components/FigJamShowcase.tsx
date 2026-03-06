import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import FigJam from "@/assets/download.svg";

const figJamItems = [
    {
        title: "CRM Works",
        description: "1 year of CRM workflows, system design, and automation planning.",
        link: "https://www.figma.com/board/Bq6dR4d1DsedsbdlOa8ZVI/srikanth?node-id=0-1&p=f&t=yfFQOVPlGccphuiJ-0",
        buttonText: "Open FigJam"
    },
    {
        title: "POC Works",
        description: "AI-driven proof-of-concept visuals and creative experiments.",
        link: "https://www.figma.com/board/z31FaShnjK1g9jxGSobB7z/Poc-Works?t=l8MIT6ysuphkOPMR-0",
        buttonText: "View POCs"
    },
    {
        title: "Automation Templates",
        description: "Template images and visual systems for AI automation workflows.",
        link: "https://www.figma.com/board/MnJUZtslBzMqIkgx1bKSQO/Templets-Images?t=QVZHDumGNSOru8GD-0",
        buttonText: "View Templates"
    }
];

const FigJamShowcase = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                            Related Work & FigJam Boards
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore detailed workflows, POCs, and automation templates through my FigJam boards.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {figJamItems.map((item, index) => (
                        <ScrollReveal key={index}>
                            <motion.a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full cursor-pointer"
                                whileHover={{ y: -8 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(var(--primary-rgb),0.3)] transition-all duration-300 flex flex-col items-center text-center">
                                    <div className="mb-6 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <img
                                            src={FigJam}
                                            alt="Figma"
                                            className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-muted-foreground mb-8 flex-grow">
                                        {item.description}
                                    </p>

                                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-medium">
                                        {item.buttonText}
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FigJamShowcase;

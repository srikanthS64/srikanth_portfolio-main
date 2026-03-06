import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingIcons from "@/components/FloatingIcons";
import AnimatedText from "@/components/AnimatedText";
import SocialLinks from "@/components/SocialLinks";
import profileImg from "@/assets/srikanth_hero.png";

const roles = ["AI Creative Analyst", "Prompt Engineer", "Cinematic Visual Composition", "AI Image & Video Generation Specialist", "ComfyUI Automation Engineer", "Python Automation", "n8n Workflow Automation", "AI API Integrations"];

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      <ParticleBackground />
      <FloatingIcons />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT COLUMN */}
        <div className="text-center lg:text-left">

          {/* Intro badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 mt-10"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Available for immediate joiner
            </span>
          </motion.div>

          {/* Hi text */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="block text-lg text-muted-foreground mb-2"
          >
            Hi, I’m
          </motion.span>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl font-bold leading-tight mb-6">
            <AnimatedText text="SRIKANTH" delay={0.8} />
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="text-md text-muted-foreground max-w-xl mb-10"
          >
            Generative AI Artist and Creative Automation Engineer specializing in cinematic AI visuals and scalable image generation workflows. Experienced with ComfyUI, Midjourney, ChatGPT, Python, and n8n to create high-quality AI visuals for fashion, advertising, and e-commerce brands.
          </motion.p>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            {roles.map((role, i) => (
              <span
                key={role}
                className="px-4 py-2 text-sm glass rounded-full text-muted-foreground"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* CTA — NOW LEFT ALIGNED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <Link to="/works">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 glass rounded-full"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[320px] h-[420px] bg-primary/30 rounded-3xl blur-3xl animate-pulse" />
          </div>

          {/* Floating Image */}
          <motion.img
            src={profileImg}
            alt="Srikanth"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-[300px] sm:w-[340px] lg:w-[380px] rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>



      {/* <SocialLinks /> */}

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
};

export default Hero;

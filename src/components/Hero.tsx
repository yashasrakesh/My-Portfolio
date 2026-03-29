import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { TypingAnimation } from './TypingAnimation';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 animated-bg opacity-10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">
              Yashas R
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium h-12 flex items-center justify-center">
            <TypingAnimation
              texts={[
                'Software Engineer',
                'Full Stack Developer',
                'AI Enthusiast',
                'Problem Solver'
              ]}
              className="text-primary font-semibold"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built, tested, improved — repeat.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-6 text-lg glow"
            onClick={() => scrollToSection('#projects')}
          >
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg glass border-primary/30"
            onClick={() => scrollToSection('#contact')}
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-16">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/yashasrakesh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/yashasr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass rounded-full text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:yashasrakesh47@gmail.com"
            className="p-3 glass rounded-full text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="animate-bounce"
        >
          <button
            onClick={() => scrollToSection('#skills')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
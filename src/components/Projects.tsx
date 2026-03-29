import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Invisible Cloak',
    description: 'A real-time computer vision project in Python that simulates an invisibility cloak by detecting a specific color and replacing it with the captured background, creating a seamless disappearing effect.',
    image: 'ok.png',
    tech: ['Python', 'OpenCV', 'NumPy'],
    github: 'https://github.com/yashasrakesh/Invisible-Cloak',
    demo: '',
    featured: true
  },
  {
    id: 2,
    title: 'Jan Sahayog',
    description: 'A MERN-stack platform to help citizens report local civic issues with precise geolocation using Leaflet maps and streamlined issue tracking.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Leaflet'],
    github: 'https://github.com/yashasrakesh',
    demo: '',
    featured: true
  },
  {
    id: 3,
    title: 'Visionary NeuralNet',
    description: 'Built a high-performance CNN for handwritten character recognition, achieving 90% accuracy on a custom dataset of 3,000 images with optimized performance using FFT and Flask-based web application.',
    image: 'r.png',
    tech: ['Python', 'Keras', 'Numpy', 'Deep Learning', 'CNN', 'Flask'],
    github: 'https://github.com/yashasrakesh',
    demo: '',
    featured: false
  },
  {
    id: 4,
    title: 'QR Code Generator',
    description: 'A QR code generator built in Java that takes a URL as input and converts it into a scannable QR code for fast and convenient access.',
    image: 's.png',
    tech: ['Java', 'ZXing'],
    github: 'https://github.com/yashasrakesh/QR-Code-Generator',
    demo: '',
    featured: false
  }

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`glass rounded-xl overflow-hidden shadow-card group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="glass border-primary/30"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass border-primary/30 px-8"
          >
            <Code className="mr-2" size={20} />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
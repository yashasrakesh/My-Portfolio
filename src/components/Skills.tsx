import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  Layers,
  GitBranch
} from 'lucide-react';

const skills = [
  {
    icon: Code2,
    name: 'Programming Languages',
    description: 'Java, Python, JavaScript',
    color: 'text-blue-400'
  },
  {
    icon: Globe,
    name: 'Web Development',
    description: 'HTML, CSS, Flask Framework',
    color: 'text-green-400'
  },
  {
    icon: Database,
    name: 'Databases',
    description: 'MySQL, MongoDB, AstraDB',
    color: 'text-purple-400'
  },
  {
    icon: Layers,
    name: 'Cloud & DevOps',
    description: 'Git, Power BI',
    color: 'text-orange-400'
  },
  {
    icon: Smartphone,
    name: 'AI & Machine Learning',
    description: 'Deep Learning, CNN, Flask, Numpy, Agentic AI',
    color: 'text-pink-400'
  },
  {
    icon: Palette,
    name: 'Soft Skills',
    description: 'Problem Solving, Teamwork, Adaptability',
    color: 'text-cyan-400'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="glass p-6 rounded-xl shadow-card group cursor-pointer"
            >
              <div className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon size={40} />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {skill.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
};
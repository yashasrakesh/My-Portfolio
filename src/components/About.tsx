import { motion } from 'framer-motion';
import { Download, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { label: 'Years Experience', value: 'Fresher' },
  { label: 'Projects Completed', value: '4+' },
  { label: 'Technologies', value: '5+' },
  { label: 'Internships', value: '1' }
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know me better and my journey in tech
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative glass rounded-2xl p-8 shadow-elevated">
              <div className="aspect-square rounded-xl bg-gradient-primary p-1">
                <img
                  src= "/DSC_0763 copy.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Floating info cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-lg p-3"
              >
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={16} className="text-primary" />
                  <span>Bangalore, India</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-lg p-3"
              >
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={16} className="text-primary" />
                  <span>Learning. Building. Improving.</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">
                  Software Engineer & AI Explorer
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Yashas, a developer who enjoys building things that actually matter. 
                  I’m driven by curiosity, consistency, and the process of improving every single day.

                </p>
                
                <p>
                  I’m always learning, always building, and always pushing myself to do better
                  whether that’s creating something from scratch, solving problems, 
                  or refining what already exists.
                </p>
                
                <p>
                  I enjoy taking ideas from zero to something real figuring things out along the way, 
                  solving problems, and making things work the way they should. The process matters to me as much as the outcome.
                  Over time, I’ve developed an interest in how things grow beyond just the build understanding value,
                  decision-making, and the bigger picture behind what gets created.
                  I’m always trying to connect what I build with and why it matters.
                </p> 
    
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button> */}
            <a href="Yashas_Resume.pdf" download>
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
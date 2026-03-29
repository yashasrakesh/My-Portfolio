// import { motion } from 'framer-motion';
// import { Heart, ArrowUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="relative py-12 border-t border-border/50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center text-center space-y-6">
//           {/* Back to top button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={scrollToTop}
//               className="glass rounded-full w-12 h-12 p-0"
//             >
//               <ArrowUp size={20} />
//             </Button>
//           </motion.div>

//           {/* Logo/Name */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//           >
//             <h3 className="text-xl font-bold gradient-text">YR</h3>
//           </motion.div>

//           {/* Copyright */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="flex items-center gap-2 text-muted-foreground"
//           >
//             <span>&copy; {new Date().getFullYear()} </span>
//             {/* <Heart size={16} className="text-primary fill-current" /> */}
//             <span>by Yashas R</span>
//           </motion.div>

//           {/* Additional info */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="text-sm text-muted-foreground"
//           >
//             Built with React, TypeScript, Tailwind CSS & Framer Motion
//           </motion.p>
//         </div>
//       </div>

//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl" />
//     </footer>
//   );
// };

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {

  const scrollToTop = () => {
    // 1. Window scroll (normal pages)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // 2. HTML root fallback
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // 3. Custom scroll container (MOST IMPORTANT)
    const container = document.getElementById('main-container');
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">

          {/* Back to top button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="glass rounded-full w-12 h-12 p-0"
            >
              <ArrowUp size={20} />
            </Button>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold gradient-text">Yashas Portfolio</h3>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span>&copy; {new Date().getFullYear()}</span>
            <span>by Yashas R</span>
          </motion.div>

          {/* Tech stack */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-muted-foreground"
          >
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </motion.p>

        </div>
      </div>

      {/* Background blur */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl pointer-events-none" />
    </footer>
  );
};
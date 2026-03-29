// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "@/hooks/use-theme";
// import Index from "./pages/Index";
// import NotFound from "./pages/NotFound";



// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Index />} />
//             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </ThemeProvider>
//   </QueryClientProvider>
// );

// export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
 useEffect(() => {
  const dot = document.querySelector('.cursor-dot') as HTMLElement;
  const outline = document.querySelector('.cursor-outline') as HTMLElement;

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  const moveMouse = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (dot) {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
  };

  const animate = () => {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    if (outline) {
      outline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
    }

    requestAnimationFrame(animate);
  };

  window.addEventListener('mousemove', moveMouse);
  animate();

  return () => {
    window.removeEventListener('mousemove', moveMouse);
  };
}, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <TooltipProvider>

          {/* 🔥 Custom Cursor Elements */}
          <div className="cursor-dot"></div>
          <div className="cursor-outline"></div>

          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>

        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
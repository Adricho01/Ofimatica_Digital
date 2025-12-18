import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  className?: string;
}

export function Section({ title, children, image, imageAlt, reverse = false, className }: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "grid md:grid-cols-2 gap-12 items-center",
          reverse ? "md:grid-flow-dense" : ""
        )}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(reverse ? "md:col-start-2" : "")}
          >
            {title && <h2 className="text-3xl font-bold mb-6 text-foreground">{title}</h2>}
            <div className="prose prose-slate prose-lg text-muted-foreground">
              {children}
            </div>
          </motion.div>
          
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn(
                "relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-square bg-slate-100",
                reverse ? "md:col-start-1" : ""
              )}
            >
              <img 
                src={image} 
                alt={imageAlt || title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

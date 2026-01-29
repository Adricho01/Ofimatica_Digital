import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import wordIcon from "@assets/word_document_3d_icon_1769725123740.png";
import excelIcon from "@assets/excel_spreadsheet_3d_icon_1769725123740.png";
import pptIcon from "@assets/powerpoint_slide_3d_icon_1769725123738.png";

interface SoftwareCardProps {
  type: "word" | "excel" | "powerpoint";
  delay?: number;
}

export function SoftwareCard({ type, delay = 0 }: SoftwareCardProps) {
  const config = {
    word: {
      name: "Microsoft Word",
      icon: wordIcon,
      color: "text-word",
      bg: "bg-blue-50",
      border: "hover:border-blue-200",
      href: "/word"
    },
    excel: {
      name: "Microsoft Excel",
      icon: excelIcon,
      color: "text-excel",
      bg: "bg-green-50",
      border: "hover:border-green-200",
      href: "/excel"
    },
    powerpoint: {
      name: "Microsoft PowerPoint",
      icon: pptIcon,
      color: "text-ppt",
      bg: "bg-orange-50",
      border: "hover:border-orange-200",
      href: "/powerpoint"
    }
  }[type];

  return (
    <Link href={config.href}>
      <a className="block h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay }}
          className={`h-full p-6 rounded-2xl bg-white border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${config.border} flex flex-col items-center text-center group`}
        >
          <div className={`w-20 h-20 mb-6 rounded-2xl ${config.bg} flex items-center justify-center p-3`}>
            <img src={config.icon} alt={config.name} className="w-full h-full object-contain" />
          </div>
          <h3 className={`text-xl font-bold mb-2 ${config.color}`}>{config.name}</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Descubre las funciones principales y aprende a dominar esta herramienta.
          </p>
          <div className={`mt-auto flex items-center text-sm font-medium ${config.color} opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all`}>
            Ver más <ArrowRight size={16} className="ml-1" />
          </div>
        </motion.div>
      </a>
    </Link>
  );
}

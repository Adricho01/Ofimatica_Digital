import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import wordIcon from "@assets/generated_images/word_document_3d_icon.png";
import wordUsageImage from "@assets/stock_images/person_writing_in_do_3d0d7775.jpg";
import { motion } from "framer-motion";
import { FileText, Edit3, Image as ImageIcon, Layout as LayoutIcon, Type, HelpCircle } from "lucide-react";

export default function Word() {
  return (
    <Layout>
      <div className="bg-blue-50/50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={wordIcon} 
            alt="Microsoft Word" 
            className="w-24 h-24 mb-6 drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Microsoft Word</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            El procesador de texto más utilizado del mundo, diseñado para ayudarte a crear documentos de calidad profesional.
          </p>
        </div>
      </div>

      {/* ¿Qué es? Section */}
      <div className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Qué es Microsoft Word?</h2>
              <p className="mb-4 text-lg font-medium text-blue-900">
                Un procesador de textos potente y versátil.
              </p>
              <p className="mb-4 text-muted-foreground">
                Microsoft Word es un software informático procesador de texto, uno de los más utilizados a la hora de trabajar con documentos digitales en la actualidad.
              </p>
              <p className="text-muted-foreground">
                <strong>¿Para qué sirve?</strong> En el ámbito educativo, sirve para redactar trabajos, informes, cartas, currículums y cualquier tipo de documento escrito que requiera una presentación ordenada y profesional.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={wordUsageImage} 
                alt="Persona escribiendo documento" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Características y Funciones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Edit3 className="w-6 h-6 text-blue-600" />,
                title: "Edición de Texto",
                desc: "Permite escribir, borrar, copiar y mover texto con facilidad. Incluye corrección ortográfica y gramatical."
              },
              {
                icon: <Type className="w-6 h-6 text-blue-600" />,
                title: "Formato",
                desc: "Cambio de tipografías, tamaños, colores, negritas, cursivas y subrayados para destacar información."
              },
              {
                icon: <ImageIcon className="w-6 h-6 text-blue-600" />,
                title: "Inserción Multimedia",
                desc: "Posibilidad de agregar imágenes, gráficos, formas y tablas para complementar el texto."
              },
              {
                icon: <LayoutIcon className="w-6 h-6 text-blue-600" />,
                title: "Diseño de Página",
                desc: "Configuración de márgenes, orientación del papel, columnas y encabezados/pies de página."
              },
              {
                icon: <FileText className="w-6 h-6 text-blue-600" />,
                title: "Plantillas",
                desc: "Acceso a diseños predefinidos para cartas, currículums, folletos y más."
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partes del Programa */}
      <div className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center mb-10">Partes del Programa</h2>
          <ul className="space-y-4 max-w-3xl mx-auto">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
            >
              <strong className="text-blue-700 block mb-1">Cinta de Opciones:</strong>
              Barra superior que contiene todas las herramientas y comandos organizados en pestañas (Inicio, Insertar, Diseño, etc.).
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
            >
              <strong className="text-blue-700 block mb-1">Área de Trabajo:</strong>
              El espacio en blanco central que simula una hoja de papel donde se escribe el contenido.
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
            >
              <strong className="text-blue-700 block mb-1">Barra de Estado:</strong>
              Ubicada en la parte inferior, muestra información como el número de páginas, palabras y el idioma.
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
            >
              <strong className="text-blue-700 block mb-1">Barra de Acceso Rápido:</strong>
              Pequeña barra superior izquierda con comandos frecuentes como Guardar, Deshacer y Rehacer.
            </motion.li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

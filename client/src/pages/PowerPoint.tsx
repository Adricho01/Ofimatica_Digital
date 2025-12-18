import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import pptIcon from "@assets/generated_images/powerpoint_slide_3d_icon.png";
import pptUsageImage from "@assets/stock_images/business_presentatio_8750b0c7.jpg";
import { motion } from "framer-motion";
import { Presentation, Play, MonitorPlay, Palette, Repeat } from "lucide-react";

export default function PowerPoint() {
  return (
    <Layout>
      <div className="bg-orange-50/50 border-b border-orange-100">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={pptIcon} 
            alt="Microsoft PowerPoint" 
            className="w-24 h-24 mb-6 drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Microsoft PowerPoint</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            La herramienta definitiva para crear presentaciones dinámicas, visuales e impactantes.
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Qué es Microsoft PowerPoint?</h2>
              <p className="mb-4 text-lg font-medium text-orange-900">
                Software de presentaciones visuales.
              </p>
              <p className="mb-4 text-muted-foreground">
                Microsoft PowerPoint es un programa diseñado para realizar presentaciones a través de diapositivas. Permite comunicar información e ideas de forma visual y atractiva.
              </p>
              <p className="text-muted-foreground">
                <strong>¿Para qué sirve?</strong> Es fundamental en la escuela para exposiciones orales, defensa de proyectos y creación de material didáctico visual. Ayuda a captar la atención de la audiencia.
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
                src={pptUsageImage} 
                alt="Presentación de negocio" 
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
                icon: <Presentation className="w-6 h-6 text-orange-600" />,
                title: "Diapositivas",
                desc: "Lienzos individuales donde se agrega el contenido. Se pueden añadir tantas como sean necesarias."
              },
              {
                icon: <Repeat className="w-6 h-6 text-orange-600" />,
                title: "Transiciones",
                desc: "Efectos visuales de movimiento que ocurren al pasar de una diapositiva a otra."
              },
              {
                icon: <Play className="w-6 h-6 text-orange-600" />,
                title: "Animaciones",
                desc: "Movimientos aplicados a elementos específicos (texto, imágenes) dentro de una diapositiva."
              },
              {
                icon: <Palette className="w-6 h-6 text-orange-600" />,
                title: "Temas de Diseño",
                desc: "Conjuntos de colores, fuentes y fondos predefinidos para dar un estilo profesional instantáneo."
              },
              {
                icon: <MonitorPlay className="w-6 h-6 text-orange-600" />,
                title: "Modo Presentación",
                desc: "Vista a pantalla completa para proyectar el contenido ante una audiencia."
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
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
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500"
            >
              <strong className="text-orange-800 block mb-1">Panel de Diapositivas:</strong>
              Columna izquierda que muestra miniaturas de todas las diapositivas para organizarlas.
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500"
            >
              <strong className="text-orange-800 block mb-1">Área de Diapositiva:</strong>
              Zona central grande donde se edita el diseño y contenido de la diapositiva actual.
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500"
            >
              <strong className="text-orange-800 block mb-1">Notas de Orador:</strong>
              Espacio inferior para escribir apuntes que solo ve el presentador, no la audiencia.
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500"
            >
              <strong className="text-orange-800 block mb-1">Botones de Vistas:</strong>
              Permiten cambiar entre vista normal, clasificador de diapositivas y vista de lectura o presentación.
            </motion.li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { SoftwareCard } from "@/components/SoftwareCard";
import heroImage from "@assets/generated_images/isometric_office_tools_illustration.png";
import officeImage from "@assets/stock_images/modern_office_worksp_c8a3af81.jpg";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Layers, GraduationCap, Link } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                Recurso Educativo
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Introducción a la <span className="text-primary">Ofimática</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Una guía completa para dominar las herramientas digitales esenciales: Word, Excel y PowerPoint. Mejora tus habilidades académicas y profesionales.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 -z-10 transform translate-y-12 scale-90" />
              <img 
                src={heroImage} 
                alt="Ofimática Ilustración" 
                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction - ¿Qué es la ofimática? */}
      <div className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Qué es la ofimática?</h2>
              <p className="mb-4 text-muted-foreground">
                La ofimática es el conjunto de técnicas, aplicaciones y herramientas informáticas que se utilizan en funciones de oficina para optimizar, automatizar y mejorar los procedimientos o tareas relacionados.
              </p>
              <p className="text-muted-foreground">
                Las herramientas ofimáticas permiten idear, crear, manipular, transmitir y almacenar información necesaria en una oficina o en el ámbito académico. Actualmente, es fundamental dominar estos paquetes de software para el desarrollo educativo y profesional.
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
                src={officeImage} 
                alt="Oficina moderna" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Importance & Benefits Grid */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Importancia y Beneficios</h2>
            <p className="text-muted-foreground">
              El dominio de las herramientas ofimáticas es una competencia transversal clave en la sociedad digital actual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
                title: "Aporte Educativo",
                desc: "Facilita la realización de trabajos académicos con presentaciones profesionales y organizadas."
              },
              {
                icon: <Clock className="w-6 h-6 text-blue-600" />,
                title: "Ahorro de Tiempo",
                desc: "Automatiza tareas repetitivas y permite cálculos complejos en segundos."
              },
              {
                icon: <Layers className="w-6 h-6 text-blue-600" />,
                title: "Organización",
                desc: "Permite estructurar grandes volúmenes de información de manera lógica y accesible."
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
                title: "Calidad Visual",
                desc: "Mejora significativamente la presentación de documentos, informes y exposiciones."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Uses Section */}
      <Section title="Usos de la Ofimática" image={heroImage} imageAlt="Estudiante usando ofimática">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
            </div>
            <span><strong>Tareas Escolares:</strong> Redacción de ensayos, monografías y reportes de investigación.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
            </div>
            <span><strong>Presentaciones:</strong> Creación de material visual de apoyo para exposiciones orales.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
            </div>
            <span><strong>Análisis de Datos:</strong> Organización de información numérica, creación de gráficos y cálculos matemáticos.</span>
          </li>
        </ul>
      </Section>

      {/* Software Navigation */}
      <div className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Explora las Herramientas</h2>
            <p className="text-muted-foreground">Selecciona una aplicación para aprender más sobre ella.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SoftwareCard type="word" delay={0} />
            <SoftwareCard type="excel" delay={0.1} />
            <SoftwareCard type="powerpoint" delay={0.2} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

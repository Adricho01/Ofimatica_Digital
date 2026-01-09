import { Layout } from "@/components/Layout";
import { SoftwareCard } from "@/components/SoftwareCard";
import heroImage from "@assets/generated_images/isometric_office_tools_illustration.png";
import officeImage from "@assets/stock_images/modern_office_worksp_c8a3af81.jpg";
import teamImage from "@assets/stock_images/business_team_collab_0630ae54.jpg";
import studentImage from "@assets/stock_images/student_laptop_educa_e17c455c.jpg";
import deskImage from "@assets/stock_images/office_desk_workspac_9427cd1d.jpg";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Layers, GraduationCap, Zap, Users, Globe, TrendingUp, BookOpen, Award, Target, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-32 lg:pt-36 lg:pb-48">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 backdrop-blur px-4 py-2 text-sm font-medium text-blue-800 mb-8 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Recurso Educativo 2025-2026
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Domina la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ofimática</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                Tu guía completa para convertirte en experto de Word, Excel y PowerPoint. Aprende las herramientas que transformarán tu productividad académica y profesional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/word">
                  <a className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5">
                    Comenzar Ahora
                  </a>
                </Link>
                <Link href="/comparacion">
                  <a className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all border border-slate-200 shadow-sm">
                    Ver Comparación
                  </a>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-40 animate-pulse" />
              <img 
                src={heroImage} 
                alt="Ofimática Ilustración" 
                className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3", label: "Herramientas", icon: <Layers className="w-5 h-5" /> },
              { value: "50+", label: "Conceptos", icon: <BookOpen className="w-5 h-5" /> },
              { value: "100%", label: "Gratuito", icon: <Award className="w-5 h-5" /> },
              { value: "∞", label: "Conocimiento", icon: <Lightbulb className="w-5 h-5" /> }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-xl mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ¿Qué es la ofimática? - Enhanced */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
                Concepto Fundamental
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                ¿Qué es la <span className="text-blue-600">Ofimática</span>?
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                La <strong>ofimática</strong> (del francés <em>bureautique</em>) es el conjunto de técnicas, aplicaciones y herramientas informáticas diseñadas para optimizar, automatizar y mejorar las tareas administrativas en oficinas y entornos académicos.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                El término combina "oficina" e "informática", reflejando la fusión perfecta entre el trabajo tradicional de oficina y la tecnología digital moderna.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Procesamiento de textos",
                  "Hojas de cálculo",
                  "Presentaciones",
                  "Bases de datos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl -rotate-3" />
              <img 
                src={officeImage} 
                alt="Espacio de trabajo moderno" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">+85%</div>
                    <div className="text-sm text-slate-500">Productividad</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Historia y Evolución */}
      <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Historia y Evolución</h2>
            <p className="text-lg text-slate-600">
              Desde las máquinas de escribir hasta la nube, la ofimática ha transformado completamente nuestra forma de trabajar.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200 hidden md:block" />
            <div className="space-y-12">
              {[
                { year: "1970s", title: "Los Inicios", desc: "Nacen los primeros procesadores de texto electrónicos, reemplazando a las máquinas de escribir." },
                { year: "1983", title: "Microsoft Word", desc: "Se lanza la primera versión de Word, revolucionando el procesamiento de documentos." },
                { year: "1985", title: "Microsoft Excel", desc: "Excel aparece para Macintosh, transformando el análisis de datos." },
                { year: "1990", title: "PowerPoint", desc: "Las presentaciones digitales se vuelven el estándar en empresas y escuelas." },
                { year: "2010+", title: "Era Cloud", desc: "Office 365 y Google Workspace permiten colaboración en tiempo real desde cualquier lugar." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 inline-block">
                      <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Importance & Benefits - Enhanced */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-6">
              ¿Por qué aprender?
            </div>
            <h2 className="text-4xl font-bold mb-6">Importancia y Beneficios</h2>
            <p className="text-lg text-slate-600">
              El dominio de las herramientas ofimáticas es una competencia transversal clave que marca la diferencia en el mundo digital actual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Éxito Académico",
                desc: "Mejora la calidad de tus trabajos, presentaciones y proyectos escolares con herramientas profesionales.",
                color: "blue"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Ahorro de Tiempo",
                desc: "Automatiza tareas repetitivas y realiza en minutos lo que antes tomaba horas.",
                color: "purple"
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Organización Total",
                desc: "Estructura grandes volúmenes de información de manera lógica, accesible y profesional.",
                color: "green"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Competitividad",
                desc: "Destaca en el mercado laboral con habilidades digitales que todas las empresas valoran.",
                color: "orange"
              }
            ].map((item, i) => {
              const colors: Record<string, { bg: string; text: string; border: string }> = {
                blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
                purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
                green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
                orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" }
              };
              const c = colors[item.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-2xl ${c.bg} border ${c.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className={`w-16 h-16 ${c.bg} ${c.text} rounded-2xl flex items-center justify-center mb-6 border ${c.border}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Uses Section with Image Grid */}
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-medium rounded-full mb-6">
                Aplicaciones Prácticas
              </div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Usos de la Ofimática</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <BookOpen className="w-6 h-6" />,
                    title: "Tareas Escolares",
                    desc: "Redacción de ensayos, monografías, reportes de investigación y trabajos académicos con formato profesional."
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "Presentaciones",
                    desc: "Creación de material visual de apoyo para exposiciones orales, defensas de tesis y conferencias."
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Análisis de Datos",
                    desc: "Organización de información numérica, creación de gráficos estadísticos y cálculos automatizados."
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Colaboración",
                    desc: "Trabajo en equipo en tiempo real, compartiendo documentos y editando simultáneamente."
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={studentImage} alt="Estudiante" className="rounded-2xl shadow-lg object-cover h-48 w-full" />
              <img src={teamImage} alt="Equipo" className="rounded-2xl shadow-lg object-cover h-48 w-full mt-8" />
              <img src={deskImage} alt="Escritorio" className="rounded-2xl shadow-lg object-cover h-48 w-full" />
              <img src={officeImage} alt="Oficina" className="rounded-2xl shadow-lg object-cover h-48 w-full mt-8" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Software Navigation - Enhanced */}
      <div className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-6">
              Explora y Aprende
            </div>
            <h2 className="text-4xl font-bold mb-4">Las Herramientas Principales</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Haz clic en cualquier herramienta para descubrir todo lo que puedes lograr con ella.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SoftwareCard type="word" delay={0} />
            <SoftwareCard type="excel" delay={0.1} />
            <SoftwareCard type="powerpoint" delay={0.2} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para comenzar?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Explora nuestras guías completas y conviértete en un experto de la ofimática.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/faq">
                <a className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg">
                  Ver Preguntas Frecuentes
                </a>
              </Link>
              <Link href="/comparacion">
                <a className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition-all border border-blue-400">
                  Comparar Herramientas
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

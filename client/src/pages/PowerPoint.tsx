import { Layout } from "@/components/Layout";
import pptIcon from "@assets/powerpoint_slide_3d_icon_1769725123738.png";
import pptImage1 from "@assets/stock_images/business_presentatio_8750b0c7.jpg";
import pptImage2 from "@assets/stock_images/powerpoint_presentat_f7546703.jpg";
import tabletImage from "@assets/stock_images/digital_tablet_prese_b835363a.jpg";
import diagramPowerPoint from "@/assets/images/powerpoint_parts_diagram_generated.png";
import { motion } from "framer-motion";
import { Presentation, Play, MonitorPlay, Palette, Repeat, Sparkles, CheckCircle2, Image as ImageIcon, Type, Shapes, Video, Volume2, MousePointer, Layers } from "lucide-react";
import { Link } from "wouter";

export default function PowerPoint() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-50 via-amber-100/50 to-red-50 border-b border-orange-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M30%200L60%2030L30%2060L0%2030z%22%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.03%22%2F%3E%3C%2Fsvg%3E')]" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                <Presentation className="w-4 h-4" />
                Presentaciones
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Microsoft <span className="text-orange-600">PowerPoint</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                La herramienta definitiva para crear presentaciones visuales impactantes. Comunica tus ideas con diapositivas profesionales, animaciones y efectos que cautivan a tu audiencia.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Diapositivas", "Animaciones", "Diseños", "Exposiciones"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white text-orange-700 rounded-full text-sm font-medium shadow-sm border border-orange-100">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-orange-200 to-red-200 rounded-full blur-3xl opacity-40" />
              <img src={pptIcon} alt="Microsoft PowerPoint" className="w-64 h-64 mx-auto drop-shadow-2xl relative z-10" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ¿Qué es? */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">¿Qué es Microsoft PowerPoint?</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>Microsoft PowerPoint</strong> es el software de presentaciones más utilizado en el mundo. Permite crear presentaciones compuestas por diapositivas que combinan texto, imágenes, gráficos, videos y animaciones.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Lanzado en 1987, PowerPoint revolucionó la forma de comunicar ideas, convirtiéndose en la herramienta esencial para conferencias, clases, reuniones de negocios y exposiciones académicas.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> ¿Para qué sirve en la escuela?
                </h3>
                <ul className="space-y-2 text-orange-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    Crear exposiciones visuales para presentar temas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    Defender proyectos y trabajos de investigación
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    Elaborar material didáctico atractivo
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src={pptImage1} alt="Presentación" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <MonitorPlay className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Presentaciones</div>
                    <div className="text-sm text-slate-500">impactantes</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elementos de una Diapositiva */}
      <div className="py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Elementos de una Diapositiva</h2>
            <p className="text-lg text-slate-600">
              Una buena diapositiva combina estos elementos de manera equilibrada.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Type />, term: "Texto", def: "Títulos, subtítulos y cuerpo de texto para comunicar la información principal." },
              { icon: <ImageIcon />, term: "Imágenes", def: "Fotografías, ilustraciones y gráficos que refuerzan el mensaje visual." },
              { icon: <Shapes />, term: "Formas", def: "Rectángulos, círculos, flechas y SmartArt para organizar información." },
              { icon: <Video />, term: "Multimedia", def: "Videos y audio que enriquecen la presentación." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-xl font-bold text-orange-600 mb-2">{item.term}</div>
                <p className="text-slate-600 text-sm">{item.def}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Características */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Características Principales</h2>
            <p className="text-lg text-slate-600">
              PowerPoint ofrece herramientas para crear presentaciones profesionales.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Layers />, title: "Diapositivas", desc: "Crea tantas diapositivas como necesites. Cada una es un lienzo para tu contenido." },
              { icon: <Repeat />, title: "Transiciones", desc: "Efectos visuales elegantes al pasar de una diapositiva a otra: desvanecer, empujar, girar..." },
              { icon: <Play />, title: "Animaciones", desc: "Da vida a los elementos: entradas, énfasis, salidas y trayectorias de movimiento." },
              { icon: <Palette />, title: "Temas de Diseño", desc: "Diseños profesionales predefinidos con combinaciones de colores, fuentes y estilos." },
              { icon: <MonitorPlay />, title: "Modo Presentación", desc: "Vista a pantalla completa para proyectar ante tu audiencia con controles de navegación." },
              { icon: <MousePointer />, title: "Notas del Orador", desc: "Apuntes privados que solo tú puedes ver mientras presentas." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips para buenas presentaciones */}
      <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={pptImage2} alt="Presentación profesional" className="rounded-2xl shadow-xl w-full object-cover aspect-video" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Tips para Presentaciones Efectivas</h2>
              <div className="space-y-6">
                {[
                  { num: "1", title: "Menos es más", desc: "No sobrecargues las diapositivas. Usa pocas palabras y deja que las imágenes hablen." },
                  { num: "2", title: "Usa la regla 6x6", desc: "Máximo 6 líneas de texto y 6 palabras por línea para mantener la legibilidad." },
                  { num: "3", title: "Contraste visual", desc: "Asegúrate de que el texto sea legible sobre el fondo. Usa colores con buen contraste." },
                  { num: "4", title: "Consistencia", desc: "Mantén el mismo estilo en todas las diapositivas: fuentes, colores y alineación." },
                  { num: "5", title: "Practica", desc: "Ensaya tu presentación varias veces para dominar el contenido y el tiempo." }
                ].map((tip, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {tip.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{tip.title}</h3>
                      <p className="text-slate-600">{tip.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partes del Programa */}
      <div className="py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Partes de la Ventana de PowerPoint</h2>
            <p className="text-lg text-slate-600">
              Conoce los elementos principales de la ventana de PowerPoint.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 rounded-2xl overflow-hidden shadow-2xl bg-white p-4 border border-orange-100"
          >
            <img 
              src={diagramPowerPoint} 
              alt="Diagrama de las partes de la ventana de PowerPoint" 
              className="w-full h-auto rounded-lg shadow-inner"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Barra de herramientas de Acceso Rápido", desc: "Contiene accesos directos a acciones frecuentes como Guardar, Deshacer y Rehacer. Se puede personalizar según el usuario." },
              { title: "Barra de título", desc: "Muestra el nombre de la presentación y el programa (PowerPoint). Incluye los botones para minimizar, maximizar/restaurar y cerrar." },
              { title: "Cinta de opciones", desc: "Es la franja donde están todas las herramientas organizadas en pestañas como Inicio, Insertar, Diseño, Transiciones, Animaciones, etc." },
              { title: "Área de esquema", desc: "Se ubica a la izquierda. Permite ver y organizar el contenido de las diapositivas en forma de esquema o miniaturas." },
              { title: "Área central", desc: "Es el área principal donde se crean y editan las diapositivas, se agrega texto, imágenes, gráficos y animaciones." },
              { title: "Área de notas", desc: "Espacio donde el presentador puede escribir notas de apoyo que no se ven durante la presentación al público." },
              { title: "Barra de estado", desc: "Se encuentra en la parte inferior. Muestra información como el número de diapositivas, idioma, notas y comentarios." },
              { title: "Botones de vista", desc: "Permiten cambiar la forma de visualizar la presentación: Vista normal, Clasificador de diapositivas y Presentación con diapositivas." },
              { title: "Zoom", desc: "Sirve para acercar o alejar la diapositiva y trabajar con mayor comodidad y dar formato al contenido." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500"
              >
                <h3 className="font-bold text-lg text-orange-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Atajos */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Atajos Útiles</h2>
              <div className="space-y-4">
                {[
                  { keys: "F5", desc: "Iniciar presentación desde el principio" },
                  { keys: "Shift + F5", desc: "Iniciar desde la diapositiva actual" },
                  { keys: "Ctrl + M", desc: "Insertar nueva diapositiva" },
                  { keys: "Ctrl + D", desc: "Duplicar diapositiva seleccionada" },
                  { keys: "Esc", desc: "Salir del modo presentación" },
                  { keys: "B", desc: "Pantalla en negro durante presentación" },
                  { keys: "W", desc: "Pantalla en blanco durante presentación" }
                ].map((tip, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                    <code className="px-3 py-1 bg-orange-100 text-orange-800 rounded font-mono text-sm font-bold min-w-[100px] text-center">
                      {tip.keys}
                    </code>
                    <span className="text-slate-700">{tip.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={tabletImage} alt="Tablet con presentación" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Recursos Adicionales */}
      <div className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-orange-50 border border-orange-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Necesitas profundizar?</h2>
            <p className="text-slate-600 mb-6">
              Descarga el manual completo en PDF para convertirte en un experto de Microsoft PowerPoint.
            </p>
            <a 
              href="https://escuela.fgr.gob.sv/wp-content/uploads/Leyes/Leyes-2/Manual-Power-Point.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-200"
            >
              <Presentation className="w-5 h-5" />
              Descargar Manual de PowerPoint (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres aprender más?</h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            Explora las otras herramientas de la suite Office.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/word">
              <a className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition">
                Aprender Word
              </a>
            </Link>
            <Link href="/excel">
              <a className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-400 transition border border-orange-400">
                Aprender Excel
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

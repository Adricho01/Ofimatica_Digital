import { Layout } from "@/components/Layout";
import wordIcon from "@assets/word_document_3d_icon_1769725123740.png";
import wordImage1 from "@assets/stock_images/person_writing_in_do_3d0d7775.jpg";
import wordImage2 from "@assets/stock_images/microsoft_word_docum_ceaa36ef.jpg";
import typingImage from "@assets/stock_images/person_typing_keyboa_fe683251.jpg";
import diagramWord from "@/assets/images/word_parts_diagram_generated.png";
import { motion } from "framer-motion";
import { FileText, Edit3, Image as ImageIcon, Layout as LayoutIcon, Type, Sparkles, CheckCircle2, BookOpen, FileCheck, Palette, List, Table2, Printer, Save, Share2 } from "lucide-react";
import { Link } from "wouter";

export default function Word() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-50 via-blue-100/50 to-indigo-50 border-b border-blue-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M15%200v30M0%2015h30%22%20stroke%3D%22%233b82f6%22%20stroke-opacity%3D%220.05%22%2F%3E%3C%2Fsvg%3E')]" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                Procesador de Texto
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Microsoft <span className="text-blue-600">Word</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                El procesador de texto más potente y utilizado del mundo. Crea documentos profesionales con facilidad, desde simples cartas hasta complejos informes académicos.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Documentos", "Informes", "Cartas", "Currículums"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-medium shadow-sm border border-blue-100">
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-40" />
              <img src={wordIcon} alt="Microsoft Word" className="w-64 h-64 mx-auto drop-shadow-2xl relative z-10" />
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
              <h2 className="text-4xl font-bold mb-6 text-slate-900">¿Qué es Microsoft Word?</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>Microsoft Word</strong> es el software de procesamiento de texto más popular del mundo, desarrollado por Microsoft como parte de la suite Office. Lanzado en 1983, ha evolucionado constantemente hasta convertirse en la herramienta estándar para la creación de documentos.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Con Word puedes crear, editar, formatear e imprimir documentos de texto con una calidad profesional. Desde una simple nota hasta un libro completo, Word tiene las herramientas para hacerlo posible.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> ¿Para qué sirve en la escuela?
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Redactar ensayos, monografías y trabajos de investigación
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Crear informes con formato profesional
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    Elaborar currículums y cartas formales
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
              <img src={wordImage1} alt="Escribiendo documento" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Formato .docx</div>
                    <div className="text-sm text-slate-500">Estándar mundial</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Características Principales */}
      <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Características Principales</h2>
            <p className="text-lg text-slate-600">
              Word ofrece un conjunto completo de herramientas para crear documentos impresionantes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Edit3 />, title: "Edición Avanzada", desc: "Escribir, borrar, copiar, pegar y mover texto con facilidad. Corrector ortográfico y gramatical en tiempo real." },
              { icon: <Type />, title: "Formato de Texto", desc: "Cambio de fuentes, tamaños, colores. Negritas, cursivas, subrayados, tachados y efectos de texto." },
              { icon: <ImageIcon />, title: "Inserción Multimedia", desc: "Agregar imágenes, formas, gráficos SmartArt, tablas, ecuaciones y videos." },
              { icon: <LayoutIcon />, title: "Diseño de Página", desc: "Márgenes, orientación, columnas, saltos de página, encabezados y pies de página." },
              { icon: <FileText />, title: "Plantillas", desc: "Cientos de plantillas profesionales para cartas, currículums, folletos, informes y más." },
              { icon: <Share2 />, title: "Colaboración", desc: "Comparte documentos en la nube, edita en tiempo real con otros y controla los cambios." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Funciones Detalladas */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={wordImage2} alt="Word en uso" className="rounded-2xl shadow-xl w-full object-cover aspect-video" />
            </motion.div>
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Funciones Avanzadas</h2>
              <div className="space-y-6">
                {[
                  { icon: <BookOpen />, title: "Índices y Tablas de Contenido", desc: "Genera automáticamente tablas de contenido basadas en los títulos del documento." },
                  { icon: <List />, title: "Listas y Viñetas", desc: "Crea listas numeradas, con viñetas o multinivel para organizar información." },
                  { icon: <Table2 />, title: "Tablas Avanzadas", desc: "Inserta y personaliza tablas con estilos, colores y fórmulas básicas." },
                  { icon: <Printer />, title: "Impresión Profesional", desc: "Vista previa, configuración de impresión y exportación a PDF." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partes del Programa */}
      <div className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Partes de la Ventana de Word</h2>
            <p className="text-lg text-slate-600">
              Conoce los elementos principales de la ventana de Word para trabajar eficientemente.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 rounded-2xl overflow-hidden shadow-2xl bg-white p-4 border border-blue-100"
          >
            <img 
              src={diagramWord} 
              alt="Diagrama de las partes de la ventana de Word" 
              className="w-full h-auto rounded-lg shadow-inner"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Barra de título", desc: "Muestra el nombre del documento y el programa (Word). También contiene los botones para minimizar, restaurar/maximizar y cerrar.", color: "blue" },
              { title: "Barra de menú", desc: "Contiene las opciones principales como Archivo, Inicio, Insertar, Diseño, Referencias, Revisar y Vista.", color: "indigo" },
              { title: "Cinta de opciones", desc: "Área donde aparecen los comandos organizados en grupos, como Fuente, Párrafo y Estilos.", color: "purple" },
              { title: "Pestaña de cinta de opciones", desc: "Son las pestañas que organizan las herramientas de Word (Inicio, Insertar, Diseño, etc.).", color: "violet" },
              { title: "Barra de estado", desc: "Se encuentra en la parte inferior. Muestra información como número de páginas, palabras y estado.", color: "blue" },
              { title: "Vistas del documento", desc: "Permiten cambiar la forma de visualizar el documento: modo lectura, diseño de impresión y web.", color: "indigo" },
              { title: "Zoom", desc: "Permite acercar o alejar el documento para verlo más grande o más pequeño.", color: "purple" },
              { title: "Barra de desplazamiento", desc: "Sirve para moverse por el documento hacia arriba, abajo o a los lados.", color: "violet" },
              { title: "Regla vertical y horizontal", desc: "Ayuda a alinear texto, ajustar márgenes y colocar imágenes correctamente.", color: "blue" },
              { title: "Barra de herramientas de acceso rápido", desc: "Incluye accesos directos a comandos frecuentes como Guardar, Deshacer y Rehacer.", color: "indigo" },
              { title: "Hoja de trabajo", desc: "Es el área donde se escribe, edita y da formato al contenido del documento.", color: "purple" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500"
              >
                <h3 className="font-bold text-lg text-blue-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Tips y Atajos Útiles</h2>
              <div className="space-y-4">
                {[
                  { keys: "Ctrl + S", desc: "Guardar documento" },
                  { keys: "Ctrl + C / V / X", desc: "Copiar / Pegar / Cortar" },
                  { keys: "Ctrl + Z / Y", desc: "Deshacer / Rehacer" },
                  { keys: "Ctrl + B / I / U", desc: "Negrita / Cursiva / Subrayado" },
                  { keys: "Ctrl + A", desc: "Seleccionar todo el documento" },
                  { keys: "Ctrl + F", desc: "Buscar texto en el documento" },
                  { keys: "Ctrl + H", desc: "Buscar y reemplazar" },
                  { keys: "F7", desc: "Revisar ortografía y gramática" }
                ].map((tip, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                    <code className="px-3 py-1 bg-blue-100 text-blue-800 rounded font-mono text-sm font-bold">
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
              <img src={typingImage} alt="Escribiendo" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Recursos Adicionales */}
      <div className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-blue-50 border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Necesitas profundizar?</h2>
            <p className="text-slate-600 mb-6">
              Descarga el manual completo en PDF para convertirte en un experto de Microsoft Word.
            </p>
            <a 
              href="https://www.pol.una.py/wp-content/uploads/2022/09/4.-Manual-de-Word.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
            >
              <FileText className="w-5 h-5" />
              Descargar Manual de Word (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres aprender más?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Explora las otras herramientas de la suite Office y compáralas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/excel">
              <a className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition">
                Aprender Excel
              </a>
            </Link>
            <Link href="/powerpoint">
              <a className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-400 transition border border-blue-400">
                Aprender PowerPoint
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

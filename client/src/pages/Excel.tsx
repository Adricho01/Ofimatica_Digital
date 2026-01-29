import { Layout } from "@/components/Layout";
import excelIcon from "@assets/excel_spreadsheet_3d_icon_1769725123740.png";
import excelImage1 from "@assets/stock_images/data_analysis_spread_8eba7386.jpg";
import excelImage2 from "@assets/stock_images/excel_spreadsheet_fi_0578f8c7.jpg";
import diagramExcel from "/attached_assets/excel_parts_diagram_generated_1769728355841.png";
import { motion } from "framer-motion";
import { Grid, BarChart3, Calculator, Database, Table, CheckCircle2, Sparkles, TrendingUp, Filter, PieChart, FileSpreadsheet, Sigma, Search, Percent } from "lucide-react";
import { Link } from "wouter";

export default function Excel() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-green-50 via-emerald-100/50 to-teal-50 border-b border-green-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M0%2010h40M0%2020h40M0%2030h40M10%200v40M20%200v40M30%200v40%22%20stroke%3D%22%2322c55e%22%20stroke-opacity%3D%220.08%22%2F%3E%3C%2Fsvg%3E')]" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                <Grid className="w-4 h-4" />
                Hoja de Cálculo
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Microsoft <span className="text-green-600">Excel</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                La hoja de cálculo más poderosa del mundo. Organiza datos, realiza cálculos complejos, crea gráficos impresionantes y analiza información como un profesional.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Cálculos", "Gráficos", "Datos", "Fórmulas"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white text-green-700 rounded-full text-sm font-medium shadow-sm border border-green-100">
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
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-200 to-emerald-200 rounded-full blur-3xl opacity-40" />
              <img src={excelIcon} alt="Microsoft Excel" className="w-64 h-64 mx-auto drop-shadow-2xl relative z-10" />
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
              <h2 className="text-4xl font-bold mb-6 text-slate-900">¿Qué es Microsoft Excel?</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                <strong>Microsoft Excel</strong> es un programa de hoja de cálculo desarrollado por Microsoft. Permite organizar datos en filas y columnas formando celdas, donde puedes introducir texto, números y fórmulas que calculan resultados automáticamente.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Desde su lanzamiento en 1985, Excel se ha convertido en la herramienta estándar para el análisis de datos, la contabilidad, la estadística y la gestión de información numérica en todo el mundo.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> ¿Para qué sirve en la escuela?
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Crear listas de calificaciones y promedios automáticos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Organizar datos de experimentos y proyectos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    Crear gráficos estadísticos para presentaciones
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
              <img src={excelImage1} alt="Análisis de datos" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Análisis</div>
                    <div className="text-sm text-slate-500">de datos</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Conceptos Básicos */}
      <div className="py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Conceptos Fundamentales</h2>
            <p className="text-lg text-slate-600">
              Antes de dominar Excel, es importante entender estos conceptos básicos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { term: "Celda", def: "La intersección de una fila y una columna. Es la unidad básica donde introduces datos." },
              { term: "Fila", def: "Serie horizontal de celdas identificada por números (1, 2, 3...)." },
              { term: "Columna", def: "Serie vertical de celdas identificada por letras (A, B, C...)." },
              { term: "Rango", def: "Grupo de celdas seleccionadas, como A1:C10." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{item.term}</div>
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
              Excel ofrece herramientas poderosas para todo tipo de análisis de datos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Calculator />, title: "Fórmulas", desc: "Realiza operaciones matemáticas automáticas. Desde sumas simples hasta cálculos financieros complejos." },
              { icon: <Sigma />, title: "Funciones", desc: "Más de 400 funciones predefinidas: SUMA, PROMEDIO, BUSCARV, SI, CONTAR y muchas más." },
              { icon: <BarChart3 />, title: "Gráficos", desc: "Crea visualizaciones impactantes: barras, líneas, circulares, dispersión, áreas, etc." },
              { icon: <Filter />, title: "Filtros y Ordenar", desc: "Organiza y filtra grandes cantidades de datos para encontrar lo que necesitas." },
              { icon: <Table />, title: "Tablas Dinámicas", desc: "Resume y analiza datos complejos con poderosas tablas dinámicas interactivas." },
              { icon: <Database />, title: "Base de Datos", desc: "Gestiona listas de información como si fueran bases de datos con validación." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fórmulas Comunes */}
      <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Fórmulas Más Usadas</h2>
              <p className="text-lg text-slate-600 mb-8">
                Estas son las fórmulas que más utilizarás en tus trabajos escolares y proyectos.
              </p>
              <div className="space-y-4">
                {[
                  { formula: "=SUMA(A1:A10)", desc: "Suma todos los valores del rango A1 a A10" },
                  { formula: "=PROMEDIO(B1:B20)", desc: "Calcula el promedio de los valores" },
                  { formula: "=CONTAR(C1:C50)", desc: "Cuenta cuántas celdas tienen números" },
                  { formula: "=MAX(D1:D100)", desc: "Encuentra el valor máximo del rango" },
                  { formula: "=MIN(E1:E100)", desc: "Encuentra el valor mínimo del rango" },
                  { formula: "=SI(A1>10,\"Alto\",\"Bajo\")", desc: "Evalúa una condición y devuelve un resultado" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <code className="text-green-700 font-mono font-bold block mb-1">{item.formula}</code>
                    <span className="text-slate-600 text-sm">{item.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src={excelImage2} alt="Excel con gráficos" className="rounded-2xl shadow-xl w-full object-cover aspect-video" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partes del Programa */}
      <div className="py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Partes de la Ventana de Excel</h2>
            <p className="text-lg text-slate-600">
              Conoce los elementos principales de la ventana de Excel.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 rounded-2xl overflow-hidden shadow-2xl bg-white p-4 border border-green-100"
          >
            <img 
              src={diagramExcel} 
              alt="Diagrama de las partes de la ventana de Excel" 
              className="w-full h-auto rounded-lg shadow-inner"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Barra de título", desc: "Muestra el nombre del archivo que estás usando y el programa (Excel). Ejemplo: Libro1 – Excel." },
              { title: "Barra de herramientas de acceso rápido", desc: "Contiene accesos directos a comandos frecuentes como Guardar, Deshacer y Rehacer. Se puede personalizar." },
              { title: "Cinta de opciones", desc: "Es la franja superior donde están las pestañas como Inicio, Insertar, Fórmulas, Datos, etc. Aquí se encuentran todas las herramientas." },
              { title: "Cuadro de nombres", desc: "Muestra la referencia de la celda activa (ej: A1, B5). También sirve para ir rápidamente a una celda escribiendo su nombre." },
              { title: "Barra de fórmulas", desc: "Permite ver, escribir o editar el contenido de una celda, como textos, números o fórmulas." },
              { title: "Fila", desc: "Son las líneas horizontales de la hoja de cálculo. Se identifican con números (1, 2, 3…)." },
              { title: "Columna", desc: "Son las líneas verticales de la hoja de cálculo. Se identifican con letras (A, B, C…)." },
              { title: "Celda", desc: "Es la intersección entre una fila y una columna. Aquí se ingresan los datos. Ejemplo: celda A1." },
              { title: "Hoja de cálculo", desc: "Es el área de trabajo formada por filas, columnas y celdas. Un archivo de Excel puede tener varias hojas." },
              { title: "Barra de desplazamiento", desc: "Permite moverte por la hoja de cálculo hacia arriba, abajo, izquierda o derecha." },
              { title: "Tipo de vista", desc: "Permite cambiar cómo se muestra la hoja (vista normal, diseño de página, vista previa de saltos)." },
              { title: "Barra de estado", desc: "Muestra información como el estado del documento, cálculos rápidos (suma, promedio) y el nivel de zoom." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500"
              >
                <h3 className="font-bold text-lg text-green-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres aprender más?</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Explora las otras herramientas de la suite Office.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/word">
              <a className="px-6 py-3 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition">
                Aprender Word
              </a>
            </Link>
            <Link href="/powerpoint">
              <a className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-400 transition border border-green-400">
                Aprender PowerPoint
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

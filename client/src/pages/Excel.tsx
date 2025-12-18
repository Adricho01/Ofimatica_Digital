import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import excelIcon from "@assets/generated_images/excel_spreadsheet_3d_icon.png";
import excelUsageImage from "@assets/stock_images/data_analysis_spread_8eba7386.jpg";
import { motion } from "framer-motion";
import { Grid, BarChart3, Calculator, Database, Table } from "lucide-react";

export default function Excel() {
  return (
    <Layout>
      <div className="bg-green-50/50 border-b border-green-100">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={excelIcon} 
            alt="Microsoft Excel" 
            className="w-24 h-24 mb-6 drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Microsoft Excel</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            La hoja de cálculo líder en el mercado para organizar datos, realizar cálculos y crear gráficos.
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">¿Qué es Microsoft Excel?</h2>
              <p className="mb-4 text-lg font-medium text-green-900">
                Una potente hoja de cálculo.
              </p>
              <p className="mb-4 text-muted-foreground">
                Microsoft Excel es un programa de hoja de cálculo que permite realizar operaciones con números organizados en una cuadrícula. Es útil para realizar desde simples sumas hasta cálculos complejos y gráficos.
              </p>
              <p className="text-muted-foreground">
                <strong>¿Para qué sirve?</strong> En el ámbito educativo, es ideal para crear horarios, organizar listas de datos, realizar cálculos matemáticos automáticos y representar información mediante gráficos estadísticos.
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
                src={excelUsageImage} 
                alt="Análisis de datos en hoja de cálculo" 
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
                icon: <Grid className="w-6 h-6 text-green-600" />,
                title: "Celdas y Hojas",
                desc: "Organización en filas (números) y columnas (letras). La intersección es una celda."
              },
              {
                icon: <Calculator className="w-6 h-6 text-green-600" />,
                title: "Fórmulas y Funciones",
                desc: "Capacidad de realizar operaciones matemáticas (suma, promedio, etc.) de forma automática."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-green-600" />,
                title: "Gráficos",
                desc: "Representación visual de los datos mediante gráficos de barras, líneas, circulares, etc."
              },
              {
                icon: <Database className="w-6 h-6 text-green-600" />,
                title: "Orden y Filtros",
                desc: "Herramientas para ordenar datos alfabéticamente o filtrar información específica."
              },
              {
                icon: <Table className="w-6 h-6 text-green-600" />,
                title: "Formato de Tabla",
                desc: "Diseños predefinidos para organizar y visualizar los datos de manera clara."
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
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
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500"
            >
              <strong className="text-green-800 block mb-1">Barra de Fórmulas:</strong>
              Espacio donde se introduce o edita el contenido de una celda (texto, números o fórmulas).
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500"
            >
              <strong className="text-green-800 block mb-1">Encabezados de Fila y Columna:</strong>
              Letras superiores (Columnas: A, B, C...) y números laterales (Filas: 1, 2, 3...) que identifican las celdas.
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500"
            >
              <strong className="text-green-800 block mb-1">Etiquetas de Hoja:</strong>
              Pestañas en la parte inferior que permiten cambiar entre diferentes hojas de cálculo dentro del mismo archivo.
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500"
            >
              <strong className="text-green-800 block mb-1">Celda Activa:</strong>
              La celda seleccionada actualmente, resaltada con un borde más grueso.
            </motion.li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

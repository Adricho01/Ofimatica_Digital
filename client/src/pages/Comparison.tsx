import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Comparison() {
  const comparisons = [
    {
      feature: "Propósito Principal",
      word: "Procesamiento de texto y documentos",
      excel: "Análisis y gestión de datos",
      powerpoint: "Creación de presentaciones visuales"
    },
    {
      feature: "Formato de Salida",
      word: "Documentos (.docx)",
      excel: "Hojas de cálculo (.xlsx)",
      powerpoint: "Diapositivas (.pptx)"
    },
    {
      feature: "Estructura Base",
      word: "Páginas continuas",
      excel: "Celdas organizadas en filas y columnas",
      powerpoint: "Diapositivas individuales"
    },
    {
      feature: "Funciones Principales",
      word: "Edición de texto, formato, estilos",
      excel: "Fórmulas, gráficos, análisis de datos",
      powerpoint: "Animaciones, transiciones, temas"
    },
    {
      feature: "Mejor Para...",
      word: "Informes, cartas, ensayos",
      excel: "Cálculos, presupuestos, estadísticas",
      powerpoint: "Exposiciones, conferencias"
    },
    {
      feature: "Colaboración",
      word: "Control de cambios y comentarios",
      excel: "Filtros y búsqueda colaborativa",
      powerpoint: "Notas del orador compartidas"
    }
  ];

  const useCases = [
    {
      software: "Word",
      cases: ["Trabajos escritos", "Currículums", "Cartas formales", "Manuales"],
      color: "blue"
    },
    {
      software: "Excel",
      cases: ["Listas de notas", "Presupuestos", "Registros de datos", "Cálculos"],
      color: "green"
    },
    {
      software: "PowerPoint",
      cases: ["Presentaciones académicas", "Proyectos escolares", "Conferencias", "Capacitaciones"],
      color: "orange"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-orange-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Comparación: Word, Excel y PowerPoint
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubre las diferencias y similitudes entre las tres principales herramientas ofimáticas.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Características Principales</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Característica</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-700">
                    <div className="flex items-center justify-center gap-2">
                      Word
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-green-700">
                    <div className="flex items-center justify-center gap-2">
                      Excel
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-orange-700">
                    <div className="flex items-center justify-center gap-2">
                      PowerPoint
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-6 py-4 font-semibold text-slate-900 border-r border-slate-200">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-center border-r border-slate-200">
                      {row.word}
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-center border-r border-slate-200">
                      {row.excel}
                    </td>
                    <td className="px-6 py-4 text-slate-600 text-center">
                      {row.powerpoint}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Casos de Uso Típicos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((item, idx) => {
              const colorClasses = {
                blue: "bg-blue-50 border-blue-200 text-blue-900",
                green: "bg-green-50 border-green-200 text-green-900",
                orange: "bg-orange-50 border-orange-200 text-orange-900"
              };
              const headerClasses = {
                blue: "bg-blue-100 text-blue-800",
                green: "bg-green-100 text-green-800",
                orange: "bg-orange-100 text-orange-800"
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border rounded-lg overflow-hidden ${colorClasses[item.color as keyof typeof colorClasses]}`}
                >
                  <div className={`px-6 py-4 font-bold text-lg ${headerClasses[item.color as keyof typeof headerClasses]}`}>
                    {item.software}
                  </div>
                  <ul className="px-6 py-4 space-y-3">
                    {item.cases.map((useCase, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <Check size={20} className="flex-shrink-0 mt-0.5 text-green-600" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decision Guide */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">¿Según tu necesidad cual usarias o eligirias?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Elige Word si...",
                points: [
                  "Necesitas redactar texto",
                  "Requieres formato profesional",
                  "Haces informes o ensayos",
                  "Necesitas control de cambios"
                ],
                color: "blue"
              },
              {
                title: "Elige Excel si...",
                points: [
                  "Trabajas con números",
                  "Necesitas hacer cálculos",
                  "Requieres gráficos estadísticos",
                  "Organizas bases de datos"
                ],
                color: "green"
              },
              {
                title: "Elige PowerPoint si...",
                points: [
                  "Necesitas hacer presentaciones",
                  "Requieres visual impactante",
                  "Haces exposiciones orales",
                  "Necesitas animaciones"
                ],
                color: "orange"
              }
            ].map((section, idx) => {
              const colors = {
                blue: { border: "border-blue-300", bg: "bg-blue-50" },
                green: { border: "border-green-300", bg: "bg-green-50" },
                orange: { border: "border-orange-300", bg: "bg-orange-50" }
              };
              const selectedColors = colors[section.color as keyof typeof colors];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-lg border-2 ${selectedColors.border} ${selectedColors.bg}`}
                >
                  <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="flex-shrink-0 mt-0.5 opacity-70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "¿Qué es la ofimática?",
          a: "La ofimática es el conjunto de técnicas, aplicaciones y herramientas informáticas utilizadas en funciones de oficina para optimizar, automatizar y mejorar procedimientos. Incluye herramientas como Word, Excel y PowerPoint."
        },
        {
          q: "¿Por qué es importante aprender ofimática?",
          a: "Es importante porque estas herramientas son esenciales en el mundo académico y profesional. Dominar la ofimática mejora la productividad, permite crear documentos profesionales y es requerido en la mayoría de trabajos."
        },
        {
          q: "¿Cuál es la diferencia entre las tres aplicaciones principales?",
          a: "Word es para procesamiento de texto, Excel es para análisis de datos y cálculos, y PowerPoint es para crear presentaciones visuales. Cada una tiene un propósito diferente."
        }
      ]
    },
    {
      category: "Microsoft Word",
      questions: [
        {
          q: "¿Cómo cambio el formato del texto en Word?",
          a: "Selecciona el texto que deseas modificar y usa las opciones de la Cinta de Opciones en la pestaña Inicio. Puedes cambiar fuente, tamaño, color, aplicar negritas, cursivas, etc."
        },
        {
          q: "¿Cómo inserto imágenes en un documento de Word?",
          a: "Ve a la pestaña Insertar, haz clic en Imágenes, elige la imagen de tu computadora, y Word la colocará en tu documento. Luego puedes redimensionarla y moverla."
        },
        {
          q: "¿Cuál es la diferencia entre párrafo e interlineado?",
          a: "El espaciado de párrafo es el espacio antes y después de un párrafo. El interlineado es el espacio entre las líneas dentro de un párrafo. Ambos se pueden ajustar en la pestaña Inicio."
        },
        {
          q: "¿Cómo corrijo automáticamente los errores ortográficos?",
          a: "Word incluye corrección automática. Ve a Archivo > Opciones > Revisión. Puedes activar la opción de revisar ortografía mientras escribes."
        }
      ]
    },
    {
      category: "Microsoft Excel",
      questions: [
        {
          q: "¿Qué es una fórmula en Excel?",
          a: "Una fórmula es una instrucción que realiza cálculos. Comienza con '=' y puede incluir referencias a celdas, números y operadores. Por ejemplo: =A1+B1 suma el contenido de las celdas A1 y B1."
        },
        {
          q: "¿Cómo creo un gráfico en Excel?",
          a: "Selecciona los datos que deseas representar, ve a la pestaña Insertar, elige el tipo de gráfico que prefieres (barras, líneas, pastel, etc.), y Excel lo creará automáticamente."
        },
        {
          q: "¿Qué es una función en Excel?",
          a: "Una función es una fórmula predefinida que realiza operaciones específicas. Por ejemplo: =SUMA() suma números, =PROMEDIO() calcula el promedio, =CONTAR() cuenta celdas con números."
        },
        {
          q: "¿Cómo filtro datos en Excel?",
          a: "Selecciona los datos, ve a la pestaña Datos, haz clic en Filtro. Aparecerán pequeños botones en los encabezados que te permiten filtrar por criterios específicos."
        }
      ]
    },
    {
      category: "Microsoft PowerPoint",
      questions: [
        {
          q: "¿Cómo agrego una nueva diapositiva?",
          a: "Ve a la pestaña Inicio, haz clic en Nueva Diapositiva, o usa el atajo de teclado Ctrl+M. PowerPoint añadirá una nueva diapositiva después de la actual."
        },
        {
          q: "¿Qué es una transición en PowerPoint?",
          a: "Una transición es el efecto visual que ocurre cuando pasas de una diapositiva a otra. Puedes aplicarlas en la pestaña Transiciones y elegir entre efectos como fade, wipe, push, etc."
        },
        {
          q: "¿Cuál es la diferencia entre animaciones y transiciones?",
          a: "Las transiciones son efectos entre diapositivas. Las animaciones son efectos que aplicas a elementos individuales dentro de una diapositiva (texto, imágenes, formas)."
        },
        {
          q: "¿Cómo empiezo una presentación desde el inicio?",
          a: "Presiona F5 en tu teclado para iniciar la presentación desde la primera diapositiva. Para empezar desde la actual, presiona Shift+F5."
        }
      ]
    },
    {
      category: "Productividad y Tips",
      questions: [
        {
          q: "¿Cuáles son los atajos de teclado más útiles?",
          a: "Algunos atajos útiles: Ctrl+C (copiar), Ctrl+V (pegar), Ctrl+X (cortar), Ctrl+Z (deshacer), Ctrl+S (guardar), Ctrl+A (seleccionar todo), Ctrl+B (negrita), Ctrl+I (cursiva)."
        },
        {
          q: "¿Cómo comparto documentos de Office?",
          a: "Puedes compartir documentos de varias formas: enviarlos por correo electrónico, guardarlos en la nube (OneDrive), usar el botón Compartir en Office, o dar acceso a través de un enlace."
        },
        {
          q: "¿Puedo trabajar sin conexión a internet?",
          a: "Sí, Word, Excel y PowerPoint funcionan completamente sin conexión. Si guardas en la nube, los cambios se sincronizarán cuando vuelvas a conectarte."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Preguntas Frecuentes (FAQ)
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre ofimática, Word, Excel y PowerPoint.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {faqs.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-slate-900 pb-4 border-b-2 border-blue-500">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.questions.map((faq, qIdx) => {
                    const faqIdx = catIdx * 100 + qIdx;
                    const isExpanded = expandedIdx === faqIdx;

                    return (
                      <motion.div
                        key={qIdx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => setExpandedIdx(isExpanded ? null : faqIdx)}
                          className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                        >
                          <h3 className="font-semibold text-slate-900 text-lg">{faq.q}</h3>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 ml-4"
                          >
                            <ChevronDown size={24} className="text-slate-600" />
                          </motion.div>
                        </button>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: isExpanded ? "auto" : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-white border-t border-slate-200 text-slate-700 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">¿No encontraste lo que buscas?</h3>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            Revisa las secciones detalladas de Word, Excel y PowerPoint para aprender más sobre cada herramienta.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/word" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Aprende Word
            </a>
            <a href="/excel" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Aprende Excel
            </a>
            <a href="/powerpoint" className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              Aprende PowerPoint
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

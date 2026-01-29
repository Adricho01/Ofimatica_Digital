import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Send } from "lucide-react";

export function WelcomeOverlay() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setSubmittedName(savedName);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!name.trim()) {
      setError(true);
      return;
    }
    localStorage.setItem("userName", name);
    setSubmittedName(name);
    setShowModal(false);
    setError(false);
  };

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-slate-100"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <User size={32} />
              </div>
              <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">¡Bienvenido!</h2>
              <p className="text-slate-500 text-center mb-8">Por favor, ingresa tu nombre para personalizar tu experiencia.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (error) setError(false);
                    }}
                    placeholder="Tu nombre aquí..."
                    className={`w-full px-4 py-3 rounded-xl border ${
                      error ? "border-red-500 bg-red-50" : "border-slate-200 focus:border-blue-500"
                    } outline-none transition-all`}
                    autoFocus
                  />
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-500 text-sm mt-2 font-medium"
                    >
                      Por favor ingresa tu nombre
                    </motion.p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                >
                  Confirmar <Send size={18} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {submittedName && (
        <div className="bg-blue-600 text-white py-3 px-4 text-center font-medium shadow-inner animate-in fade-in slide-in-from-top-4">
          <div className="container mx-auto flex items-center justify-center gap-2">
            <Sparkles size={18} className="animate-pulse" />
            Bienvenido, <span className="font-bold underline decoration-blue-300 underline-offset-4">{submittedName}</span>
          </div>
        </div>
      )}
    </>
  );
}

const Sparkles = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

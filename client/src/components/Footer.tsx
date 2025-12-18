export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-border mt-auto py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center items-center gap-2">
           <span className="bg-primary/10 text-primary w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">O</span>
           <span className="font-display font-bold text-lg text-foreground">Introducción a la Ofimática</span>
        </div>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
          Un recurso educativo diseñado para facilitar el aprendizaje de las herramientas digitales esenciales.
        </p>
        <div className="border-t border-border/50 pt-6">
          <p className="text-xs text-muted-foreground">
            © 2025 – 2026 Todos los derechos reservados. Contenido de uso educativo.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Word from "@/pages/Word";
import Excel from "@/pages/Excel";
import PowerPoint from "@/pages/PowerPoint";
import Comparison from "@/pages/Comparison";
import FAQ from "@/pages/FAQ";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/word" component={Word} />
      <Route path="/excel" component={Excel} />
      <Route path="/powerpoint" component={PowerPoint} />
      <Route path="/comparacion" component={Comparison} />
      <Route path="/faq" component={FAQ} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

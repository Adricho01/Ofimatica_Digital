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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/word" component={Word} />
      <Route path="/excel" component={Excel} />
      <Route path="/powerpoint" component={PowerPoint} />
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

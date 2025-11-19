import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PriceConfigurator from "./components/PriceConfigurator";
import Locations from "./components/Locations";
import Reviews from "./components/Reviews";
import VideoGrid from "./components/VideoGrid";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PriceConfigurator />
        <Locations />
        <Reviews />
        <VideoGrid />
        <Contact />
      </main>
      <Chatbot />
      <footer className="py-10 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Handy Reparatur 2GO — Tech Repair Partners GmbH</div>
          <div>Impressum • Datenschutz • AGB</div>
        </div>
      </footer>
    </div>
  );
}

export default App;

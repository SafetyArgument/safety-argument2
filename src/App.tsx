/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from "react";
import { LegalContent } from './components/LegalContent';
import { IndustrialBackground } from './components/IndustrialBackground';
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Coffee, Sun, Moon, ChevronDown, Menu, X } from "lucide-react";

// Collapsible Section Component
function CollapsibleSection({ id, title, children, isOpen, onToggle }: { id: string; title: string; children: ReactNode; isOpen: boolean; onToggle: () => void }) {
  return (
    <div id={id} className="py-2 border-b border-zinc-200 dark:border-zinc-800">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left text-xl font-bold hover:text-emerald-600 dark:hover:text-[#849443] transition"
      >
        {title}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-zinc-600 dark:text-zinc-400 whitespace-pre-line text-sm">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'disclaimer' | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Gold color for dark mode
  const gold = "#849443";

  return (
    <div className={`min-h-screen ${darkMode ? "bg-black text-slate-100" : "bg-white text-slate-900"} font-sans transition-colors duration-300`}>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full ${darkMode ? "bg-zinc-900/80 border-zinc-800" : "bg-white/80 border-zinc-200"} backdrop-blur-sm border-b z-50`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={darkMode ? "/Images/Logo_bw.jpg" : "/Images/Logo_wb.jpg"} alt="Logo" className="w-8 h-8" />
            <span className="text-lg font-bold tracking-tight">Safety Argument</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="https://blog.safetyassurance.au" className={`hover:${darkMode ? `text-[${gold}]` : "text-emerald-600"} transition`}>Blog</a>
            <button onClick={() => { setActiveTab('terms'); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); }} className={`hover:${darkMode ? `text-[${gold}]` : "text-emerald-600"} transition`}>Terms</button>
            <button onClick={() => { setActiveTab('privacy'); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); }} className={`hover:${darkMode ? `text-[${gold}]` : "text-emerald-600"} transition`}>Privacy</button>
            <button onClick={() => { setActiveTab('disclaimer'); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); }} className={`hover:${darkMode ? `text-[${gold}]` : "text-emerald-600"} transition`}>Disclaimer</button>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="https://system.safetyargument.com.au" className={`hidden md:block px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-[#849443] text-white" : "bg-emerald-600 text-white"} hover:opacity-90 transition`}>System Profiler</a>
            <a href="https://risk.safetyargument.com.au" className={`hidden md:block px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-[#849443] text-white" : "bg-emerald-600 text-white"} hover:opacity-90 transition`}>Risk Profiler</a>
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? "bg-zinc-900" : "bg-white"} border-t border-zinc-800 p-6 flex flex-col gap-4`}>
            <a href="https://blog.safetyassurance.au" className="text-sm font-medium">Blog</a>
            <button onClick={() => {setActiveTab('terms'); setIsMobileMenuOpen(false); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });}} className="text-sm font-medium text-left">Terms</button>
            <button onClick={() => {setActiveTab('privacy'); setIsMobileMenuOpen(false); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });}} className="text-sm font-medium text-left">Privacy</button>
            <button onClick={() => {setActiveTab('disclaimer'); setIsMobileMenuOpen(false); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });}} className="text-sm font-medium text-left">Disclaimer</button>
            <a href="https://system.safetyargument.com.au" onClick={() => setIsMobileMenuOpen(false)} className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-[#849443] text-white" : "bg-emerald-600 text-white"} text-center`}>System Profiler</a>
            <a href="https://risk.safetyargument.com.au" onClick={() => setIsMobileMenuOpen(false)} className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-[#849443] text-white" : "bg-emerald-600 text-white"} text-center`}>Risk Profiler</a>
          </div>
        )}
      </nav>
      <IndustrialBackground />

      {/* Hero Section */}
      <section id="home" className={`pt-32 pb-12 ${darkMode ? "bg-gradient-to-b from-zinc-900/90 to-black/90" : "bg-gradient-to-b from-zinc-50/90 to-white/90"}`}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-6xl font-bold tracking-tighter" style={{ color: darkMode ? gold : "#059669" }}>Safety Argument</h1>
          <p className="mt-8 text-xl max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Modern technologies and industries are so complex that they cannot go without risk management. 
            Assuring stakeholders in systems' performance and safety requires structured safety arguments 
            which present a systematic approach to safety assurance.
          </p>
        </motion.div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-12 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Our Approach</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "WHAT", desc: "Structured safety argument to the best practice." },
            { title: "WHY", desc: "Pre-emptive investigation, ensuring legal and moral duties are met." },
            { title: "WHEN", desc: "Each phase of life cycle." },
            { title: "WHO", desc: "Organisation facilitators." },
            { title: "HOW", desc: "Driven by attitude, governed by law, informed by standards, perfected by principles." },
            { title: "WHERE", desc: "In documents and assets." },
          ].map((item) => (
            <div key={item.title} className={`flex gap-4 p-6 border rounded-2xl ${darkMode ? "border-zinc-800 bg-zinc-800" : "border-zinc-100 bg-zinc-50"}`}>
              <span className="font-bold" style={{ color: darkMode ? gold : "#059669" }}>{item.title}</span>
              <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-24 ${darkMode ? "bg-zinc-800/90" : "bg-zinc-50/90"}`}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
          <img src="/Images/Andriy.jpg" alt="Andriy" className="w-48 h-48 rounded-full object-cover border-4" style={{ borderColor: darkMode ? gold : "#059669" }} />
          <div>
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <div className={`border-l-4 pl-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed`} style={{ borderColor: darkMode ? gold : "#059669" }}>
              Since 2003 Andriy is a skilful professional who contributed to projects in Australia and overseas, 
              growing in various roles: management, safety assurance, integration, design, construction support, 
              commissioning & early maintenance. It spans various systems in rail infrastructure, road tunnels, 
              oil and gas, mining machinery, HVAC, electrical distribution and generation.
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          As pigeon post is obsolete and drone delivery services are a mode of future ... Please, use all that's available to reach out. 
          How about a coffee in Elwood or Melbourne CBD? We are keen to help!
        </p>
        <div className="flex flex-col gap-4">
          <a href="mailto:andriy@safetyargument.com.au" className={`flex items-center gap-2 hover:underline`} style={{ color: darkMode ? gold : "#059669" }}>
            <Mail className="w-5 h-5" /> andriy@safetyargument.com.au
          </a>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <MapPin className="w-5 h-5" /> Suite 6, Level 24, 570 Bourke st, Melbourne, 3000, Victoria
          </div>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <Coffee className="w-5 h-5" /> Let's grab a coffee!
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className={`border-t ${darkMode ? "border-zinc-800" : "border-zinc-200"} py-12`}>
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>© Safety Argument Pty Ltd, 2022 - 2026 | Reason. Foresee. Practice™</p>
          <p className="mt-2">ABN: 286 626 358 14 | ACN: 662 635 814</p>
          
          {/* Legal Sections (Tabbed Footer Menu) */}
          <div className="mt-6 flex justify-center flex-wrap gap-6">
            {(['terms', 'privacy', 'disclaimer'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(activeTab === tab ? null : tab)}
                className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition ${
                  activeTab === tab
                    ? "text-[#849443]"
                    : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                }`}
              >
                {tab === 'terms' ? 'Terms of Service' : tab === 'privacy' ? 'Privacy Policy' : 'Disclaimer'}
              </button>
            ))}
          </div>
          <LegalContent activeTab={activeTab} />
        </div>
      </footer>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from "react";
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
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

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
            <img src={darkMode ? "https://raw.githubusercontent.com/SafetyArgument/safety-argument1/refs/heads/main/Images/Logo_bw.jpg" : "https://raw.githubusercontent.com/SafetyArgument/safety-argument1/refs/heads/main/Images/Logo_wb.jpg"} alt="Logo" className="w-8 h-8" />
            <span className="text-lg font-bold tracking-tight">Safety Argument</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="https://blog.safetyassurance.au" className={`hover:${darkMode ? `text-[${gold}]` : "text-emerald-600"} transition`}>Blog</a>
            <a href="#terms" onClick={() => {setTermsOpen(true); setIsMobileMenuOpen(false);}} className={`hover:${darkMode ? `text-[${gold}]` : "text-emerald-600"} transition`}>Terms</a>
            <a href="#privacy" onClick={() => {setPrivacyOpen(true); setIsMobileMenuOpen(false);}} className={`hover:${darkMode ? `text-[${gold}]` : "text-emerald-600"} transition`}>Privacy</a>
            <a href="#disclaimer" onClick={() => {setDisclaimerOpen(true); setIsMobileMenuOpen(false);}} className={`hover:${darkMode ? `text-[${gold}]` : "text-emerald-600"} transition`}>Disclaimer</a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#contact" className={`hidden md:block px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-[#849443] text-white" : "bg-emerald-600 text-white"} hover:opacity-90 transition`}>Get in touch</a>
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? "bg-zinc-900" : "bg-white"} border-t border-zinc-800 p-6 flex flex-col gap-4`}>
            <a href="https://blog.safetyassurance.au" className="text-sm font-medium">Blog</a>
            <a href="#terms" onClick={() => {setTermsOpen(true); setIsMobileMenuOpen(false);}} className="text-sm font-medium">Terms</a>
            <a href="#privacy" onClick={() => {setPrivacyOpen(true); setIsMobileMenuOpen(false);}} className="text-sm font-medium">Privacy</a>
            <a href="#disclaimer" onClick={() => {setDisclaimerOpen(true); setIsMobileMenuOpen(false);}} className="text-sm font-medium">Disclaimer</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-[#849443] text-white" : "bg-emerald-600 text-white"} text-center`}>Get in touch</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-32 pb-12 ${darkMode ? "bg-gradient-to-b from-zinc-900 to-black" : "bg-gradient-to-b from-zinc-50 to-white"}`}>
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
      <section id="experience" className={`py-24 ${darkMode ? "bg-zinc-800" : "bg-zinc-50"}`}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
          <img src="https://raw.githubusercontent.com/SafetyArgument/safety-argument1/refs/heads/main/Images/Andriy.jpg" alt="Andriy" className="w-48 h-48 rounded-full object-cover border-4" style={{ borderColor: darkMode ? gold : "#059669" }} />
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
      <footer className={`border-t ${darkMode ? "border-zinc-800" : "border-zinc-200"} py-12`}>
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <p>© Safety Argument Pty Ltd, 2022 - 2026 | Reason. Foresee. Practice™</p>
          <p className="mt-2">ABN: 286 626 358 14 | ACN: 662 635 814</p>
        </div>
      </footer>

      {/* Legal Sections */}
      <div className="max-w-5xl mx-auto px-6 mt-12">
        <CollapsibleSection id="terms" title="Terms of Service" isOpen={termsOpen} onToggle={() => setTermsOpen(!termsOpen)}>
          Last updated: October 09, 2022
          Please read these terms and conditions carefully before using Our Service.
          <h3 className="text-lg font-bold mt-4 mb-2">Interpretation and Definitions</h3>
          <h4 className="font-bold mt-2 mb-1">Interpretation</h4>
          The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          <h4 className="font-bold mt-2 mb-1">Definitions</h4>
          For the purposes of these Terms and Conditions:
          <ul className="list-disc pl-5">
            <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
            <li><strong>Country</strong> refers to: Victoria, Australia</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Safety Argument Pty Ltd of Suit 6, L24, 570 Bourke St., Melbourne, 3000, Victoria.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><strong>Service</strong> refers to the Website.</li>
            <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
            <li><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</li>
            <li><strong>Website</strong> refers to Safety Argument, accessible from https://www.safetyargument.com.au</li>
            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>
          <h4 className="font-bold mt-2 mb-1">Acknowledgment</h4>
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
          You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of
          Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
          <h4 className="font-bold mt-2 mb-1">Intellectual property rights</h4>
          Unless otherwise indicated, the Site is our proprietary property and all source code, data bases, functionality, software, website design, audio, video, text, photographs, and graphics on the site (collectively, the "content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned and controlled by us or licenced to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United states, international copyright laws, and international conventions. The content and the Marks are provided on the site "as is" for your information and personal use only. Except as expressly provided in these Terms of Service, not part of the site and no content or marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
          Provided that you are eligible to use the Site, you are granted a limited license to access and use the site and to download or print a copy of any portion of the content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the site, the content and the marks.
          <h4 className="font-bold mt-2 mb-1">Contribution licence</h4>
          You agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings). By submitting suggestions or other feedback ("Submission") regarding the site, you agree that we can use and share such feedback for any purpose without compensation to you.
          You acknowledge and agree that any questions, comments, suggestions, ideas, feedbacks, or other information regarding the site ("submissions") provided by you are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such submissions, and you hereby warrant that any such submissions are original with you or that you have the right to submit such submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your submissions.
          <h4 className="font-bold mt-2 mb-1">Links to Other Websites</h4>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
          The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
          We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
          <h4 className="font-bold mt-2 mb-1">Termination</h4>
          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
          Upon termination, Your right to use the Service will cease immediately.
          <h4 className="font-bold mt-2 mb-1">Limitation of Liability</h4>
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or Nil if You haven't purchased anything through the Service.
          To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
          Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
          <h4 className="font-bold mt-2 mb-1">"AS IS" and "AS AVAILABLE" Disclaimer</h4>
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
          Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied:
          <ul className="list-disc pl-5">
            <li>(i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon;</li>
            <li>(ii) that the Service will be uninterrupted or error-free;</li>
            <li>(iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or</li>
            <li>(iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</li>
          </ul>
          Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
          <h4 className="font-bold mt-2 mb-1">Governing Law</h4>
          The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
          <h4 className="font-bold mt-2 mb-1">Acceptable use</h4>
          You must comply with our acceptable use terms in order to receive or continue to recieve our services.
          You may not use our services:
          <ul className="list-disc pl-5">
            <li>to breach the law;</li>
            <li>to cause (directly or indirectly) damage to any persons property;</li>
            <li>in connection with prohbited or potentially prohibited content (as defined under the law);</li>
            <li>in connection with restricted content (as defined under the law);</li>
            <li>in connection with discrimination;</li>
            <li>in connection with obscene, defamatory, offensive, abusive or illegal purposes;</li>
            <li>in connection with an infringement or third party rights; or</li>
            <li>in connection with spam, hacking or other similar activities.</li>
          </ul>
          In any of the above circumstances, or any other circumstances in which We reasonably believe Our reputation may be harmed, We may immediately cease providing the Services to you without further notice. If a potential infringement of this Acceptable Use terms comes to your attention, you should report such matters to our contact nominated at the bottom of these terms of service.
          <h4 className="font-bold mt-2 mb-1">Disputes Resolution</h4>
          If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
          <h4 className="font-bold mt-2 mb-1">For European Union (EU) Users</h4>
          If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.
          <h4 className="font-bold mt-2 mb-1">United States Legal Compliance</h4>
          You represent and warrant that
          <ul className="list-disc pl-5">
            <li>(i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and</li>
            <li>(ii) You are not listed on any United States government list of prohibited or restricted parties.</li>
          </ul>
          <h4 className="font-bold mt-2 mb-1">Severability and Waiver</h4>
          <h5 className="font-bold mt-1 mb-0.5">Severability</h5>
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
          <h5 className="font-bold mt-1 mb-0.5">Waiver</h5>
          Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any
          subsequent breach.
          <h4 className="font-bold mt-2 mb-1">Translation Interpretation</h4>
          These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
          <h4 className="font-bold mt-2 mb-1">Changes to These Terms and Conditions</h4>
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
          By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
          <h4 className="font-bold mt-2 mb-1">Contact Us</h4>
          If you have any questions about these Terms and Conditions, You can contact us:
          By email: andriy@safetyargument.com.au
        </CollapsibleSection>

        <CollapsibleSection id="privacy" title="Privacy Policy" isOpen={privacyOpen} onToggle={() => setPrivacyOpen(!privacyOpen)}>
          Last updated: October 08, 2022
          Privacy Policy of www.safetyargument.com.au
          This Application collects some Personal Data from its Users.
          <h4 className="font-bold mt-2 mb-1">Owner and Data Controller</h4>
          Safety Argument Pty Ltd of Suite 6, L24, 570 Bourke St., Melbourne, 3000 , Victoria
          Owner contact andriy@safetyargument.com.au
          <h4 className="font-bold mt-2 mb-1">Types of Data collected</h4>
          Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Usage Data; Trackers.
          Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection. Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application. Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service. Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner. Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.
          Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.
          <h4 className="font-bold mt-2 mb-1">Mode and place of processing the Data</h4>
          <h5 className="font-bold mt-1 mb-0.5">Methods of processing</h5>
          The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.
          <h5 className="font-bold mt-1 mb-0.5">Legal basis of processing</h5>
          The Owner may process Personal Data relating to Users if one of the following applies:
          <ul className="list-disc pl-5">
            <li>Users have given their consent for one or more specific purposes.</li>
            <li>Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;</li>
            <li>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;</li>
            <li>processing is necessary for compliance with a legal obligation to which the Owner is subject;</li>
            <li>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;</li>
            <li>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.</li>
          </ul>
          In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
          <h5 className="font-bold mt-1 mb-0.5">Place</h5>
          The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.
          Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.
          Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.
          If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.
          <h5 className="font-bold mt-1 mb-0.5">Retention time</h5>
          Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.
          Therefore:
          Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed. Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner. The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.
          Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.
          <h4 className="font-bold mt-2 mb-1">The purposes of processing</h4>
          The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: Displaying content from external platforms.
          For specific information about the Personal Data used for each purpose, the User may refer to the section “Detailed information on the processing of Personal Data”.
          <h4 className="font-bold mt-2 mb-1">Detailed information on the processing of Personal Data</h4>
          Personal Data is collected for the following purposes and using the following services:
          Displaying content from external platforms
          <h4 className="font-bold mt-2 mb-1">The rights of Users</h4>
          Users may exercise certain rights regarding their Data processed by the Owner.
          In particular, Users have the right to do the following:
          <ul className="list-disc pl-5">
            <li>Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.</li>
            <li>Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.</li>
            <li>Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.</li>
            <li>Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.</li>
            <li>Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.</li>
            <li>Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.</li>
            <li>Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof.</li>
            <li>Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.</li>
          </ul>
          <h5 className="font-bold mt-1 mb-0.5">Details about the right to object to processing</h5>
          Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.
          Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.
          <h5 className="font-bold mt-1 mb-0.5">How to exercise these rights</h5>
          Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.
          <h4 className="font-bold mt-2 mb-1">Additional information about Data collection and processing</h4>
          <h5 className="font-bold mt-1 mb-0.5">Legal action</h5>
          The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services.
          The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.
          <h5 className="font-bold mt-1 mb-0.5">Additional information about User's Personal Data</h5>
          In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.
          <h5 className="font-bold mt-1 mb-0.5">System logs and maintenance</h5>
          For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.
          <h5 className="font-bold mt-1 mb-0.5">Information not contained in this policy</h5>
          More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.
          <h5 className="font-bold mt-1 mb-0.5">How “Do Not Track” requests are handled</h5>
          This Application does not support “Do Not Track” requests.
          To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.
          <h5 className="font-bold mt-1 mb-0.5">Changes to this privacy policy</h5>
          The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within this Application and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the top.
          Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.
          <h4 className="font-bold mt-2 mb-1">Definitions and legal references</h4>
          <h5 className="font-bold mt-1 mb-0.5">Personal Data (or Data)</h5>
          Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.
          <h5 className="font-bold mt-1 mb-0.5">Usage Data</h5>
          Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.
          <h5 className="font-bold mt-1 mb-0.5">User</h5>
          The individual using this Application who, unless otherwise specified, coincides with the Data Subject.
          <h5 className="font-bold mt-1 mb-0.5">Data Subject</h5>
          The natural person to whom the Personal Data refers.
          <h5 className="font-bold mt-1 mb-0.5">Data Processor (or Data Supervisor)</h5>
          The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.
          <h5 className="font-bold mt-1 mb-0.5">Data Controller (or Owner)</h5>
          The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.
          <h5 className="font-bold mt-1 mb-0.5">This Application</h5>
          The means by which the Personal Data of the User is collected and processed.
          <h5 className="font-bold mt-1 mb-0.5">Service</h5>
          The service provided by this Application as described in the relative terms (if available) and on this site/application.
          <h5 className="font-bold mt-1 mb-0.5">European Union (or EU)</h5>
          Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.
          <h5 className="font-bold mt-1 mb-0.5">Cookie</h5>
          Cookies are Trackers consisting of small sets of data stored in the User's browser.
          <h5 className="font-bold mt-1 mb-0.5">Tracker</h5>
          Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the User’s device.
          <h4 className="font-bold mt-2 mb-1">Legal information</h4>
          This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation).
          This privacy policy relates solely to this Application, if not stated otherwise within this document.
        </CollapsibleSection>

        <CollapsibleSection id="disclaimer" title="Disclaimer" isOpen={disclaimerOpen} onToggle={() => setDisclaimerOpen(!disclaimerOpen)}>
          Last updated: October 08, 2022
          <h4 className="font-bold mt-2 mb-1">website disclaimer</h4>
          The information provided by Safety Argument Pty Ltd ('we', 'us', or 'our') on www.safetyargument.com.au (the 'Site') is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          Under no circumstances shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
          <h4 className="font-bold mt-2 mb-1">External links disclaimer</h4>
          The site may contain (or may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or graphics or other website elements or advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability, or any information offered by third-party websites linked through the site or any website or feature linked in any banner or graphics or other advertising. We will not be a party to or in any way be responsible for monitoring any transactions between you and third-party providers or products or services.
          <h4 className="font-bold mt-2 mb-1">Professional disclaimer</h4>
          The site cannot and does not contain engineering advice. The engineering information is provided for general information and educational purposes only and is not suitable for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of engineering advise on the site. The use or reliance of any information contained on the site is solely at your own risk.
        </CollapsibleSection>
      </div>
    </div>
  );
}

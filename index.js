
import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { html } from 'htm/preact';

const Logo = ({ className = "h-10 w-auto" }) => html`
  <svg class=${className} viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#00B4D8;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0077B6;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#48CAE4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#00B4D8;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path d="M60 40H290V130C290 230 175 300 175 300C175 300 60 230 60 130V40Z" stroke="url(#logoGradient)" stroke-width="12" fill="none" stroke-linejoin="round"/>
    <path d="M66 46H284V80H66V46Z" fill="url(#logoGradient)"/>
    <circle cx="90" cy="63" r="6" fill="white"/>
    <circle cx="115" cy="63" r="6" fill="white"/>
    <circle cx="140" cy="63" r="6" fill="white"/>
    <circle cx="175" cy="170" r="60" stroke="url(#innerGradient)" stroke-width="15" fill="none"/>
    <circle cx="175" cy="170" r="30" fill="url(#logoGradient)"/>
    <circle cx="190" cy="155" r="10" fill="white"/>
    <path d="M85 210C100 240 180 270 240 200" stroke="url(#logoGradient)" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M230 215L245 195L265 215" stroke="url(#logoGradient)" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const ShieldIcon = ({ color = "text-brand-cyan" }) => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 ${color}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.944c0-2.226-.55-4.32-1.5-6.084z" />
  </svg>
`;

const DlpIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
`;

const PrivacyPolicyView = ({ onNavigate }) => html`
  <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up">
    <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">Privacy Policy</h1>
    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-6">
      <p class="text-sm italic">Last Updated: May 2025</p>
      <p>EyeBall ("we", "us", or "our") values your privacy. This policy explains how we handle information across our security platform and browser technology.</p>
      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">1. Data Collection</h2>
      <p>We collect minimal personal data. Our technology primarily processes <strong>Usage Data</strong> and <strong>Security Events</strong> to protect your browsing environment. This data is processed locally whenever possible.</p>
      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">2. Processing Purpose</h2>
      <p>Data processing is conducted solely to provide threat detection, DLP services, and platform maintenance. We do not sell your data or use it for advertising.</p>
      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">3. Security Measures</h2>
      <p>We implement state-of-the-art encryption and access controls to ensure that your security data remains confidential and accessible only to authorized administrators.</p>
    </div>
    <div class="mt-16 text-center">
       <button onClick=${() => onNavigate('landing')} class="text-brand-blue hover:text-brand-cyan font-bold transition">Back to main page</button>
    </div>
  </section>
`;

const TermsOfServiceView = ({ onNavigate }) => html`
  <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up">
    <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">Terms of Service & EULA</h1>
    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-6">
      <p class="text-sm italic">Last Updated: May 2025</p>
      <div class="bg-brand-dark-secondary border border-white/10 p-6 rounded-xl space-y-4 mb-8">
        <h2 class="text-xl font-bold text-white">Licensing Models & Definitions</h2>
        <p><strong>Device License:</strong> A ‘Device’ license is applicable to dedicated endpoints (one primary user per OS instance).</p>
        <p><strong>Shared Host License:</strong> A ‘Shared Host’ (e.g., RDS, Citrix, Terminal Server) requires licensing per Active User (unique user identity generating events in a billing period), or per Concurrent User if explicitly specified in the relevant purchase order.</p>
      </div>
      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">1. Usage Rights</h2>
      <p>EyeBall grants you a non-exclusive, non-transferable license to use the security software in accordance with the purchased business tier.</p>
      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">2. Prohibited Conduct</h2>
      <p>You may not reverse-engineer, decompile, or attempt to extract the source code of the EyeBall security engine.</p>
    </div>
    <div class="mt-16 text-center">
       <button onClick=${() => onNavigate('landing')} class="text-brand-blue hover:text-brand-cyan font-bold transition">Back to main page</button>
    </div>
  </section>
`;

const FreemiumView = ({ onNavigate }) => html`
  <section class="min-h-[80vh] flex flex-col items-center justify-center py-24 px-4 animate-fade-in-up text-center">
    <div class="max-w-3xl">
      <h2 class="text-4xl md:text-6xl font-extrabold text-white mb-6">Start for Free</h2>
      <p class="text-xl text-brand-light-secondary mb-12">
        Experience enterprise-grade browser security with our Free Tier. No credit card, no complex setup. Just elite protection.
      </p>
      <div class="bg-white/5 border border-white/10 p-10 rounded-3xl mb-12">
        <div class="text-5xl font-black text-white mb-4">$0<span class="text-lg text-brand-light-secondary font-normal">/forever</span></div>
        <ul class="text-left space-y-4 max-w-xs mx-auto mb-10">
          <li class="flex items-center text-brand-light"><svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>URL Filtering</li>
          <li class="flex items-center text-brand-light"><svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Basic DLP Protection</li>
          <li class="flex items-center text-brand-light"><svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>Standard Email Support</li>
        </ul>
        <button class="w-full bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-4 rounded-xl transition-all shadow-lg">Get Started Now</button>
      </div>
      <button onClick=${() => onNavigate('landing')} class="text-brand-light-secondary hover:text-white transition underline">Back to main page</button>
    </div>
  </section>
`;

const BusinessFeatures = () => html`
  <section id="features-grid" class="py-24 bg-brand-dark relative">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-extrabold text-white mb-12">Enterprise-Grade Security</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="bg-white/5 p-10 rounded-3xl border border-white/10 text-left hover:border-brand-blue/50 transition-all">
          <h3 class="text-2xl font-bold text-white mb-4">Native Browser DLP</h3>
          <p class="text-brand-light-secondary leading-relaxed">Control sensitive data exfiltration to GenAI tools (like ChatGPT) and public websites in real-time. Detect PII and secrets before they leave the browser.</p>
        </div>
        <div class="bg-white/5 p-10 rounded-3xl border border-white/10 text-left hover:border-brand-cyan/50 transition-all">
          <h3 class="text-2xl font-bold text-white mb-4">Zero Blind Spots</h3>
          <p class="text-brand-light-secondary leading-relaxed">Gain absolute visibility into the browser DOM that traditional EDRs and SASE proxies miss. See exactly what is happening inside encrypted sessions.</p>
        </div>
      </div>
    </div>
  </section>
`;

const App = () => {
  const [view, setView] = useState('landing');

  const navigateTo = (viewName) => {
    window.location.hash = viewName;
    // HashChange listener will update state
  };

  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash.replace('#', '');
      const validViews = ['privacy', 'terms', 'landing', 'freemium'];
      if (validViews.includes(h)) {
        setView(h);
      } else if (h === '') {
        setView('landing');
      }
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    navigateTo(target);
  };

  return html`
    <div class="flex flex-col min-h-screen">
      <header class="bg-brand-dark/90 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div class="container mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#landing" onClick=${(e) => handleLinkClick(e, 'landing')} class="flex items-center space-x-3 group">
            <${Logo} className="h-10 w-auto group-hover:scale-105 transition-transform" />
            <span class="text-2xl font-bold text-white">EyeBall</span>
          </a>
          <div class="flex items-center space-x-6">
            <nav class="hidden md:flex space-x-6 text-sm font-medium text-brand-light-secondary mr-4">
              <a href="#features-grid" class="hover:text-white transition-colors">Features</a>
              <a href="#freemium" onClick=${(e) => handleLinkClick(e, 'freemium')} class="hover:text-white transition-colors">Free Tier</a>
            </nav>
            <a href="#freemium" onClick=${(e) => handleLinkClick(e, 'freemium')} class="bg-brand-blue hover:bg-brand-cyan text-brand-dark px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-blue/20">Try Free</a>
          </div>
        </div>
      </header>

      <main class="flex-grow pt-20">
        ${view === 'privacy' ? html`<${PrivacyPolicyView} onNavigate=${navigateTo} />` : 
          view === 'terms' ? html`<${TermsOfServiceView} onNavigate=${navigateTo} />` : 
          view === 'freemium' ? html`<${FreemiumView} onNavigate=${navigateTo} />` : 
          html`
          <section class="py-24 md:py-36 text-center animate-fade-in-up">
            <div class="container mx-auto px-4">
              <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold text-brand-blue uppercase bg-brand-blue/10 rounded-full border border-brand-blue/20">
                 Enterprise Browser Security
              </span>
              <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">The Browser is Your Perimeter. Secure It.</h1>
              <p class="max-w-2xl mx-auto text-lg text-brand-light-secondary mb-10 leading-relaxed">
                EyeBall transforms the enterprise browser into a fully visible, secure environment. Protect your data and manage SaaS with zero latency.
              </p>
              <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="mailto:info@eyeballsec.com" class="w-full sm:w-auto bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-3 px-10 rounded-full transition-all text-center">Request Demo</a>
                <a href="#freemium" onClick=${(e) => handleLinkClick(e, 'freemium')} class="w-full sm:w-auto border border-white/20 hover:border-white/50 text-white font-bold py-3 px-10 rounded-full transition-all text-center">Start Free Tier</a>
              </div>
            </div>
          </section>
          <${BusinessFeatures} />
        `}
      </main>

      <footer class="bg-brand-dark-secondary border-t border-white/5 py-12">
        <div class="container mx-auto px-4 text-center">
          <div class="flex justify-center space-x-8 text-sm text-brand-light-secondary mb-8">
            <a href="#privacy" onClick=${(e) => handleLinkClick(e, 'privacy')} class="hover:text-white transition">Privacy Policy</a>
            <a href="#terms" onClick=${(e) => handleLinkClick(e, 'terms')} class="hover:text-white transition">Terms of Service</a>
            <a href="mailto:info@eyeballsec.com" class="hover:text-white transition">Contact Support</a>
          </div>
          <div class="flex items-center justify-center space-x-3 mb-4 opacity-50">
             <${Logo} className="h-6 w-auto grayscale" />
             <span class="text-sm font-bold text-brand-light-secondary">EyeBall Security</span>
          </div>
          <p class="text-xs text-brand-light-secondary opacity-50">© 2025 EyeBall Security. All rights reserved. Secure the Web.</p>
        </div>
      </footer>
    </div>
  `;
};

render(html`<${App} />`, document.getElementById('root'));

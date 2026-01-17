
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
    <!-- Outer Shield / Browser Frame -->
    <path d="M60 40H290V130C290 230 175 300 175 300C175 300 60 230 60 130V40Z" stroke="url(#logoGradient)" stroke-width="12" fill="none" stroke-linejoin="round"/>
    <!-- Top Bar with Dots -->
    <path d="M66 46H284V80H66V46Z" fill="url(#logoGradient)"/>
    <circle cx="90" cy="63" r="6" fill="white"/>
    <circle cx="115" cy="63" r="6" fill="white"/>
    <circle cx="140" cy="63" r="6" fill="white"/>
    <!-- The Eye -->
    <circle cx="175" cy="170" r="60" stroke="url(#innerGradient)" stroke-width="15" fill="none"/>
    <circle cx="175" cy="170" r="30" fill="url(#logoGradient)"/>
    <circle cx="190" cy="155" r="10" fill="white"/>
    <!-- Orbital Swoosh with Arrow -->
    <path d="M85 210C100 240 180 270 240 200" stroke="url(#logoGradient)" stroke-width="12" fill="none" stroke-linecap="round"/>
    <path d="M230 215L245 195L265 215" stroke="url(#logoGradient)" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const ShieldIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.944c0-2.226-.55-4.32-1.5-6.084z" />
  </svg>
`;

const DlpIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
`;

const SaasIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m18-10a4 4 0 00-4-4H9a4 4 0 00-4 4v2m14-2a4 4 0 004 4v2m-4-4h-2m-4-4h-2m8-4H9" />
  </svg>
`;

const WebProtectIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
`;

const AttackDefenseIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118-8.944c0-2.226-.55-4.32-1.5-6.084z" />
  </svg>
`;

const FastDeploymentIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4" />
  </svg>
`;

const LatencyIcon = () => html`
<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg>
`;

const PrivacyPolicyView = () => html`
  <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up">
    <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">Privacy Policy</h1>
    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-6">
      <p class="text-sm italic">Last Updated: May 2025</p>
      
      <p>EyeBall ("we", "us", or "our") values your privacy. This policy explains how we handle information across our security platform and browser technology.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">1. Data Collection</h2>
      <p>We collect minimal personal data (e.g., email for accounts). Our technology primarily processes <strong>Usage Data</strong> and <strong>Security Events</strong> to protect your browsing environment. This data is used to identify threats and is handled with high security.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">2. Processing Purpose</h2>
      <p>Data processing is conducted to provide threat detection, DLP services, and platform maintenance. We do not sell your data to third parties.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">3. Security Measures</h2>
      <p>We implement technical and organizational measures to ensure a level of security appropriate to the risk, including encryption and strict access controls.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">4. Contact</h2>
      <p>Reach out at <a href="mailto:info@eyeballsec.com" class="text-brand-blue hover:underline">info@eyeballsec.com</a> for any privacy concerns.</p>
    </div>
    
    <div class="mt-16 text-center">
      <button onClick=${() => window.scrollTo(0,0)} class="text-brand-blue hover:text-brand-cyan font-bold transition">Back to Top</button>
    </div>
  </section>
`;

const TermsOfServiceView = () => html`
  <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up">
    <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-8 text-center">Terms of Service & EULA</h1>
    <div class="bg-brand-dark-secondary border border-white/5 p-4 rounded-lg mb-8 text-sm italic text-center text-brand-light-secondary">
      This Agreement governs your access and use of the EyeBall security platform and browser engine. PLEASE READ CAREFULLY.
    </div>
    
    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-6">
      <p class="text-sm italic">Last Updated: May 2025</p>
      
      <p>By using the EyeBall Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are entering into this agreement on behalf of a company, you represent that you have the authority to bind such entity.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">1. License and Access</h2>
      <p>EyeBall grants you a non-exclusive, non-transferable, revocable license to use the Services. You may not: (a) reverse engineer or decompile the software; (b) use the Services for any illegal or unauthorized purpose; (c) bypass any security measures; or (d) use the Services to build a competitive product.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">2. Freemium Model & Support Policy</h2>
      <div class="bg-brand-blue/5 border-l-4 border-brand-blue p-6 my-6 rounded-r-xl">
        <h3 class="text-lg font-bold text-white mb-2 uppercase tracking-wider">Critical Limitations for Free Users</h3>
        <p class="mb-4 text-brand-light">The EyeBall Freemium Tier is provided strictly under the following terms:</p>
        <ul class="list-disc pl-6 space-y-3 text-brand-light">
          <li><strong>BEST EFFORT BASIS:</strong> The service is provided "as-is". EyeBall makes no warranties regarding the availability, effectiveness, or reliability of threat detection for Freemium accounts.</li>
          <li><strong>EMAIL-ONLY SUPPORT:</strong> Support is limited exclusively to <span class="text-brand-blue font-bold underline">info@eyeballsec.com</span>. Response times are not guaranteed.</li>
          <li><strong>ABSOLUTE USER RISK:</strong> You assume <strong>all responsibility and risk</strong> for any security incidents, data loss, or system issues. EyeBall is not liable for any damages resulting from the use of the Freemium Tier.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">3. Intellectual Property</h2>
      <p>All intellectual property rights in and to the Services (including software, algorithms, and logos) are owned solely by EyeBall. No ownership is transferred to you.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">4. Data and Confidentiality</h2>
      <p>You grant EyeBall the right to collect and analyze anonymized usage data to improve our security database. Each party agrees to maintain the confidentiality of any non-public information received from the other party.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">5. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless EyeBall and its officers from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Services or your violation of these Terms.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">6. Limitation of Liability</h2>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EYEBALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES. FOR FREEMIUM USERS, OUR TOTAL LIABILITY IS EXPRESSLY LIMITED TO <strong>$0.00</strong>.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">7. Disclaimer of Warranties</h2>
      <p>EYEBALL DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. WE DO NOT WARRANT THAT THE SERVICES WILL BE SECURE, UNINTERRUPTED, OR ERROR-FREE.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">8. Termination</h2>
      <p>EyeBall reserves the right to terminate or suspend your access to the Services at any time, without prior notice or liability, for any reason, including breach of these Terms.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">9. Governing Law</h2>
      <p>These Terms shall be governed and construed in accordance with the laws of the applicable jurisdiction, without regard to its conflict of law provisions.</p>

      <h2 class="text-2xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">10. Contact Us</h2>
      <p>For any legal inquiries, please contact <a href="mailto:info@eyeballsec.com" class="text-brand-blue hover:underline">info@eyeballsec.com</a>.</p>
    </div>
    
    <div class="mt-16 text-center">
      <button onClick=${() => window.scrollTo(0,0)} class="text-brand-blue hover:text-brand-cyan font-bold transition">Back to Top</button>
    </div>
  </section>
`;

const FreemiumView = () => {
    return html`
        <section class="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 animate-fade-in-up">
            <div class="max-w-4xl w-full">
                <div class="text-center mb-16">
                    <span class="inline-block px-4 py-1 mb-4 text-xs font-bold text-brand-green uppercase bg-brand-green/10 rounded-full border border-brand-green/20">
                        Freemium Model
                    </span>
                    <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">Security for Everyone</h2>
                    <p class="text-xl text-brand-light-secondary max-w-2xl mx-auto leading-relaxed">
                        We believe that enterprise-grade security should be accessible. With our <strong>Freemium</strong> model, you can experience the power of EyeBall immediately, at no cost.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Free Plan -->
                    <div class="bg-white/5 border-2 border-brand-blue/30 rounded-3xl p-8 relative overflow-hidden group">
                        <div class="absolute top-0 right-0 p-4">
                            <span class="text-brand-blue font-bold text-xs uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full">Freemium</span>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-2">Free Tier</h3>
                        <p class="text-brand-light-secondary text-sm mb-6">Essential protection for small teams and individuals.</p>
                        <div class="text-4xl font-extrabold text-white mb-8">$0<span class="text-lg text-brand-light-secondary font-normal">/mo</span></div>
                        
                        <ul class="space-y-4 mb-10">
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                URL Filtering
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                SaaS and Shadow IT Visibility
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                File Scanning (limit daily usage)
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Content Blocking
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Download & Upload Management
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Extension Management
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                DLP in GenAI web
                            </li>
                        </ul>

                        <button class="w-full bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20">
                            Get Started Now
                        </button>
                    </div>

                    <!-- Pro Plan Preview -->
                    <div class="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col opacity-80 hover:opacity-100 transition-opacity">
                        <h3 class="text-2xl font-bold text-white mb-2">Pro</h3>
                        <p class="text-brand-light-secondary text-sm mb-6">Advanced controls for growing organizations.</p>
                        <div class="text-4xl font-extrabold text-white mb-8">Contact Sales</div>
                        
                        <ul class="space-y-4 mb-10 flex-grow">
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Extended logs retention
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Tenant Restriction
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Company Websites Protection
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                AI Protection
                            </li>
                        </ul>

                        <a href="mailto:info@eyeballsec.com" class="w-full border border-white/20 hover:border-white/50 text-white font-bold py-4 rounded-xl transition-all text-center">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div class="mt-16 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl p-6 text-center">
                    <p class="text-brand-light-secondary text-sm">
                        No credit card required to start. Experience the future of browser security in under 60 seconds.
                    </p>
                </div>
            </div>
        </section>
    `;
}

const BusinessFeatures = ({ onStartFree }) => {
    const features = [
        {
            icon: html`<${ShieldIcon} />`,
            title: 'Active Threat Visibility',
            description: 'Monitor and neutralize web threats in real-time before they impact the OS.',
            points: [
                'Instant phishing & malware detection.',
                'Intelligent Zero-Day exploit isolation.',
                'Granular control over file movements.',
                '<strong>Zero-Blind-Spots:</strong> No need for full decryption of web traffic for security analysis.'
            ]
        },
        {
            icon: html`<${DlpIcon} />`,
            title: 'Native Browser DLP',
            description: 'Context-aware data protection that sees what users see.',
            points: [
                'Detect and redact PII in real-time.',
                'Block sensitive data leakage to GenAI/LLMs.',
                'Apply dynamic watermarking to web apps.',
                'Prevent copy/paste and screenshot exfiltration.'
            ]
        },
        {
            icon: html`<${SaasIcon} />`,
            title: 'SaaS Governance',
            description: 'Clear visibility into shadow IT and enterprise SaaS usage.',
            points: [
                'Auto-discovery of unmanaged web apps.',
                'Enforce tenant restrictions (M365/Google).',
                'Hardened browser session persistence.',
                'Credential theft prevention.'
            ]
        },
        {
            icon: html`<${WebProtectIcon} />`,
            title: 'Enterprise App Hardening',
            description: 'Apply zero-trust principles directly to your most sensitive web applications.',
            points: [
                '<strong>Credential Isolation:</strong> Automatically block the use of corporate passwords on personal or unauthorized websites.',
                'Contextual safeguards: restrict printing, downloads, and uploads per app.',
                'Prevent data theft via copy/paste or malicious extensions.',
                'Browser environment hardening: disable dev tools and secure session cookies.',
                'Apply dynamic, user-specific watermarks to critical screens.'
            ]
        },
        {
            icon: html`<${AttackDefenseIcon} />`,
            title: 'Advanced Exploitation Defense',
            description: 'Stop sophisticated browser attacks and UI redressing before they bypass your OS security.',
            points: [
                'Industry-leading <strong>AntiFix Protection</strong> to defeat CLICKFIX social engineering.',
                'Block cross-domain script execution and unauthorized form manipulation.',
                'Real-time DOM monitoring to stop script injection and session hijacking.',
                'Native UI protection against clickjacking and frame-sniffing.',
                'AI-driven behavioral analysis of malicious web components.'
            ]
        },
        {
            icon: html`<${FastDeploymentIcon} />`,
            title: 'Frictionless Deployment',
            description: 'Deploy across your entire fleet in minutes with zero impact on user productivity.',
            points: [
                '<strong>5-Minute Setup:</strong> Lightning-fast rollout that gets your organization protected instantly.',
                '<strong>Universal Harmony:</strong> Full native support for Chrome, Edge, Brave, and all Chromium browsers.',
                '<strong>Zero Habit Disruption:</strong> Security that works silently without changing how your users browse.',
                '<strong>User-Centric Adoption:</strong> No training required; employees keep their native browser experience.'
            ]
        }
    ];

  return html`
    <section id="features-grid" class="py-24 bg-brand-dark relative overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20 animate-fade-in-up">
                <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Pro Security for Every Scale</h2>
                <div class="text-xl text-brand-light-secondary max-w-3xl mx-auto leading-relaxed">
                    Elite Protection, Zero Complexity. SMBs and SMEs deserve Pro-grade security without the management nightmare. 
                    <span class="text-brand-blue block mt-2 font-semibold">No lag. No overhead. Just total clarity.</span>
                    <div class="text-2xl md:text-3xl font-black text-brand-cyan mt-6 drop-shadow-sm animate-pulse-soft cursor-pointer hover:scale-105 transition-transform" onClick=${onStartFree}>
                        Try it yourself! It's free!
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                <div class="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-brand-blue/50 transition-all duration-500 group animate-fade-in-up">
                    <div class="flex flex-col h-full">
                        <div class="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                             <${Logo} className="h-10 w-auto" />
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">Eliminate Visibility Gaps</h3>
                        <p class="text-brand-light-secondary leading-relaxed mb-6">Legacy EDRs can't see what happens inside the encrypted browser session. EyeBall provides deep visibility into every DOM event, every API call, and every user action—closing the gap legacy tools leave open.</p>
                    </div>
                </div>

                <div class="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-brand-cyan/50 transition-all duration-500 group animate-fade-in-up">
                    <div class="flex flex-col h-full">
                        <div class="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                             <${LatencyIcon} />
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">Performance-First Security</h3>
                        <p class="text-brand-light-secondary leading-relaxed mb-4">Traditional SASE proxies route your traffic through slow cloud hubs. EyeBall's engine runs on-device, providing instant security with 0ms of network overhead.</p>
                        
                        <div class="mt-auto pt-6 h-36 relative">
                            <svg class="w-full h-full" viewBox="0 0 200 70">
                                <text x="10" y="8" fill="#00B4D8" font-size="7" font-weight="bold">EyeBall (Direct - 0ms)</text>
                                <path d="M 10 20 H 190" stroke="#00B4D8" stroke-width="2" stroke-dasharray="4 4" class="opacity-30" />
                                <circle cx="0" cy="0" r="3.5" fill="#00B4D8">
                                    <animateMotion dur="1.2s" repeatCount="indefinite" path="M 10 20 H 190" />
                                </circle>
                                
                                <text x="10" y="66" fill="#D1D5DB" font-size="7">Traditional Proxy (Delayed Hubs)</text>
                                <path id="proxyPath" d="M 10 45 C 50 45, 50 25, 80 25 H 120 C 150 25, 150 45, 190 45" stroke="#6B7280" stroke-width="1.5" stroke-dasharray="2 2" />
                                <circle cx="80" cy="25" r="2.5" fill="#6B7280" />
                                <circle cx="120" cy="25" r="2.5" fill="#6B7280" />
                                <circle cx="0" cy="0" r="3" fill="#6B7280">
                                    <animateMotion 
                                        dur="6s" 
                                        repeatCount="indefinite" 
                                        path="M 10 45 C 50 45, 50 25, 80 25 H 120 C 150 25, 150 45, 190 45"
                                        keyPoints="0; 0.35; 0.35; 0.65; 0.65; 1"
                                        keyTimes="0; 0.25; 0.4; 0.6; 0.75; 1"
                                        calcMode="linear"
                                    />
                                </circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                ${features.map((feature, index) => html`
                    <div class="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col hover:bg-white/[0.08] transition-all animate-fade-in-up" style=${{animationDelay: `${index * 0.1}s`}}>
                        <div class="mb-6">${feature.icon}</div>
                        <h3 class="text-xl font-bold text-white mb-3">${feature.title}</h3>
                        <p class="text-brand-light-secondary mb-6 flex-grow leading-relaxed">${feature.description}</p>
                        <ul class="space-y-3 text-sm text-brand-light">
                            ${feature.points.map(point => html`
                                <li class="flex items-start">
                                    <svg class="w-4 h-4 mr-3 mt-0.5 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                    <span dangerouslySetInnerHTML=${{__html: point}}></span>
                                </li>
                            `)}
                        </ul>
                    </div>
                `)}
            </div>
        </div>
    </section>
  `;
};

const App = () => {
  const [view, setView] = useState('landing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (newView) => {
    setView(newView);
  };

  return html`
    <div class="flex flex-col min-h-screen">
      <header class="bg-brand-dark/90 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <button onClick=${() => handleNavigate('landing')} class="flex items-center space-x-3 focus:outline-none group">
              <div class="relative">
                 <div class="absolute -inset-1 bg-brand-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                 <${Logo} className="relative h-12 w-auto" />
              </div>
              <span class="text-2xl font-bold text-white tracking-tight">EyeBall</span>
            </button>
            
            <div class="flex items-center space-x-6">
              <nav class="hidden md:flex space-x-6 text-sm font-medium text-brand-light-secondary">
                <button onClick=${() => handleNavigate('landing')} class="hover:text-white transition-colors">Features</button>
                <a href="mailto:info@eyeballsec.com" class="hover:text-white transition-colors">Demo</a>
              </nav>
              <button 
                onClick=${() => handleNavigate('freemium')} 
                class="bg-brand-blue hover:bg-brand-cyan text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-brand-blue/20"
              >
                Start for free
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main class="flex-grow pt-20">
        ${view === 'privacy' ? html`<${PrivacyPolicyView} />` : 
          view === 'terms' ? html`<${TermsOfServiceView} />` :
          view === 'freemium' ? html`<${FreemiumView} />` : html`
          <section id="hero" class="relative py-24 md:py-36 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-secondary to-brand-dark bg-300% animate-gradient-bg -z-10"></div>
             <div class="absolute inset-0 bg-grid-pattern opacity-10 -z-10"></div>
             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10"></div>
             
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
              <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 rounded-full border border-brand-blue/20">
                 Secure the Web. Full visibility, Zero blind spots.
              </span>
              <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-4">
                The Browser is Your Perimeter.
              </h1>
              <h2 class="text-2xl md:text-3xl font-medium text-brand-cyan mb-8">
                 Secure it with EyeBall.
              </h2>
              <p class="max-w-3xl mx-auto text-lg md:text-xl text-brand-light-secondary mb-12 leading-relaxed">
                Stop flying blind. EyeBall transforms the enterprise browser into a fully visible, secure environment. Protect your data, manage SaaS adoption, and eliminate zero-day threats before they reach the endpoint.
              </p>
              <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="mailto:info@eyeballsec.com" class="w-full sm:w-auto bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-blue/20">
                  Request a Demo
                </a>
                <button onClick=${() => {
                    if (view !== 'landing') {
                        handleNavigate('landing');
                        setTimeout(() => document.getElementById('features-grid')?.scrollIntoView({ behavior: 'smooth' }), 100);
                    } else {
                        document.getElementById('features-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }
                }} class="text-white hover:text-brand-blue font-semibold transition-colors flex items-center group">
                  Explore Technology
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          </section>

          <div id="features">
             <${BusinessFeatures} onStartFree=${() => handleNavigate('freemium')} />
          </div>
        `}
      </main>

      <footer class="bg-brand-dark-secondary border-t border-white/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div class="flex items-center justify-center space-x-3 mb-6">
             <${Logo} className="h-10 w-auto grayscale opacity-50" />
             <span class="text-xl font-bold text-brand-light-secondary">EyeBall</span>
          </div>
          <p class="text-brand-light-secondary">EyeBall 2025. Secure the Web. All rights reserved.</p>
          <div class="mt-6 flex justify-center space-x-8 text-sm text-brand-light-secondary">
             <button onClick=${() => handleNavigate('privacy')} class="hover:text-white transition">Privacy Policy</button>
             <button onClick=${() => handleNavigate('terms')} class="hover:text-white transition">Terms of Service</button>
             <a href="mailto:info@eyeballsec.com" class="hover:underline">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  `;
};

render(html`<${App} />`, document.getElementById('root'));

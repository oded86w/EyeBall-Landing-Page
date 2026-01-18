
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
    <div class="mb-16 text-center border-b border-white/10 pb-12">
      <h1 class="text-5xl font-black text-white mb-4">Privacy Policy</h1>
      <p class="text-brand-blue font-mono text-sm tracking-widest uppercase">Version 2.1 | Effective: May 2025</p>
    </div>
    
    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-12">
      <section>
        <h2 class="text-2xl font-bold text-white mb-6">1. Commitment to Privacy</h2>
        <p>At EyeBall Security, we understand that our mission—protecting your organization’s data—is inextricably linked to protecting user privacy. This policy outlines our rigorous standards for data handling, built on the principle of <strong>Privacy by Design</strong>. We strive to process data locally whenever possible to ensure maximum confidentiality.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">2. Information Collection & Origin</h2>
        <p>To provide high-fidelity threat detection and DLP (Data Loss Prevention) services, we collect data in the following categories:</p>
        <ul class="list-none space-y-4">
          <li class="pl-4 border-l-2 border-brand-blue">
            <strong class="text-white block mb-1">2.1 Automatically Collected Technical Data</strong>
            Information regarding the browser environment, including version, OS details, IP addresses (obfuscated by default), and unique installation IDs required for license validation and security patching.
          </li>
          <li class="pl-4 border-l-2 border-brand-blue">
            <strong class="text-white block mb-1">2.2 Security Telemetry</strong>
            Metadata regarding security events, such as blocked phishing attempts, malicious script executions, and policy violation logs (e.g., unauthorized file uploads or sensitive data prompts in GenAI tools).
          </li>
          <li class="pl-4 border-l-2 border-brand-blue">
            <strong class="text-white block mb-1">2.3 Admin-Provided Content</strong>
            Configuration settings, policy definitions, and administrative contact information provided by your organization's IT or Security teams.
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">3. Data Processing & "Local-First" Architecture</h2>
        <p>A core differentiator of the EyeBall platform is our local processing engine. Unlike legacy cloud proxies (SASE/SSE), our DLP analysis happens <strong>on the endpoint</strong>. This means:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Sensitive content monitored for redaction never leaves the browser memory.</li>
          <li>Only metadata about the violation (e.g., "PII detected on site X") is reported to the central management console.</li>
          <li>We do not record keystrokes or screen activity outside of specific security policy enforcements defined by your company.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">4. Purpose of Processing</h2>
        <p>Your data is processed exclusively for:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Threat Prevention:</strong> Protecting users from web-borne exploits.</li>
          <li><strong>Compliance:</strong> Providing audit logs required for regulatory standards (GDPR, HIPAA, SOC2).</li>
          <li><strong>Product Improvement:</strong> Using anonymized telemetry to train our threat detection models against new zero-day attacks.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">5. Data Retention & Erasure</h2>
        <p>Retention periods are determined by your organization’s subscription level and internal policy. By default, security logs are retained for 90 days. Admins may request immediate erasure of specific telemetry data via the EyeBall Management Portal.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">6. Third-Party Disclosures</h2>
        <p>EyeBall Security <strong>never</strong> sells, rents, or trades your data with third parties for marketing purposes. We may share anonymized threat indicators with global security researchers to strengthen the digital ecosystem, or disclose information when legally mandated by a valid court order.</p>
      </section>

      <div class="bg-brand-dark-secondary p-8 rounded-2xl border border-white/5 text-center">
        <p class="text-white font-bold mb-2">Questions or Privacy Requests?</p>
        <p>Contact our Data Protection Officer at <a href="mailto:privacy@eyeballsec.com" class="text-brand-blue hover:underline">privacy@eyeballsec.com</a></p>
      </div>
    </div>
  </section>
`;

const TermsOfServiceView = () => html`
  <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up">
    <div class="mb-16 text-center border-b border-white/10 pb-12">
      <h1 class="text-5xl font-black text-white mb-4">Terms of Service</h1>
      <p class="text-brand-cyan font-mono text-sm tracking-widest uppercase">Master Subscription Agreement | May 2025</p>
    </div>

    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-12">
      <section>
        <h2 class="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
        <p>This Master Subscription Agreement ("Agreement") is between EyeBall Security Inc. ("EyeBall") and the organization or individual ("Customer") accessing our services. By deploying our software, you acknowledge that you have read, understood, and agreed to be bound by these terms.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">2. License & Scope of Use</h2>
        <ul class="list-none space-y-4">
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.1 Grant of License</strong>
            EyeBall grants a non-exclusive, non-transferable right to use the browser extension and management portal for the number of seats specified in your Order Form.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.2 Restrictions</strong>
            Customer shall not: (i) reverse engineer or attempt to derive source code; (ii) use the service to build a competitive product; (iii) use the software to interfere with third-party networks or systems.
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">3. Confidentiality</h2>
        <p>Each party acknowledges that in the course of performance, they may have access to the other party's non-public, proprietary information ("Confidential Information"). Both parties agree to use at least a reasonable degree of care to prevent unauthorized disclosure of such information.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">4. Intellectual Property Rights</h2>
        <p>EyeBall Security retains all rights, title, and interest in and to the software, documentation, and any improvements thereto. Customer owns all data processed through the service, granting EyeBall a limited license to process said data solely to provide the services.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">5. Warranty & Disclaimer</h2>
        <p>EyeBall warrants that the service will perform substantially in accordance with our technical documentation. <strong>EXCEPT AS EXPRESSLY SET FORTH HEREIN, THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE".</strong> We do not warrant that the service will be error-free or that all security threats will be blocked.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">6. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, EyeBall’s total liability for any claim arising out of this Agreement shall not exceed the total fees paid by Customer in the 12 months preceding the claim. We are not liable for any indirect, consequential, or punitive damages.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">7. Term & Termination</h2>
        <p>Either party may terminate this Agreement upon 30 days' notice for a material breach. Upon termination, Customer must remove all instances of the EyeBall extension from their managed fleet.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">8. Governing Law</h2>
        <p>This Agreement shall be governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be settled in the competent courts of Delaware.</p>
      </section>

      <div class="bg-brand-dark-secondary p-8 rounded-2xl border border-white/5 text-center mt-12">
        <p class="text-white font-bold mb-2 text-sm uppercase tracking-widest">Legal Inquiries</p>
        <p class="text-sm">For legal notices, please reach out to <a href="mailto:legal@eyeballsec.com" class="text-brand-cyan hover:underline">legal@eyeballsec.com</a></p>
      </div>
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
                                DLP in GenAI web
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                File Scanning (limit daily usage)
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Download & Upload Management
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Extension Management
                            </li>
                        </ul>
                        <a href="https://console.eyeballsecurity.com" target="_blank" rel="noopener noreferrer" class="w-full bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20 text-center block">
                            Get Started Now
                        </a>
                    </div>
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
                                Tenant Restriction & Watermarking
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                AI Advanced Protection
                            </li>
                            <li class="flex items-center text-brand-light text-sm">
                                <svg class="w-5 h-5 mr-3 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Uncompromising Enterprise DLP capability across all web interactions
                            </li>
                        </ul>
                        <a href="mailto:info@eyeballsecurity.com" class="w-full border border-white/20 hover:border-white/50 text-white font-bold py-4 rounded-xl transition-all text-center">
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
                '<strong>Zero-Blind-Spots:</strong> No decryption required for deep traffic analysis.'
            ]
        },
        {
            icon: html`<${DlpIcon} />`,
            title: 'Native Browser DLP',
            description: 'Context-aware data protection that sees what users see.',
            points: [
                'Detect and redact PII in real-time.',
                'Block sensitive leakage to GenAI/LLMs.',
                'Apply user-specific watermarks to critical web pages.'
            ]
        },
        {
            icon: html`<${SaasIcon} />`,
            title: 'SaaS Governance',
            description: 'Clear visibility into shadow IT and enterprise SaaS usage.',
            points: [
                'Auto-discovery of unmanaged web apps.',
                'Enforce tenant restrictions (M365/Google).',
                'Hardened browser session persistence.'
            ]
        },
        {
            icon: html`<${WebProtectIcon} />`,
            title: 'Enterprise Hardening',
            description: 'Apply zero-trust principles directly to your sensitive applications.',
            points: [
                '<strong>Credential Isolation:</strong> Prevent corporate password reuse.',
                'Restrict printing, downloads, and copy/paste per-app.',
                'Environment hardening against malicious extensions.'
            ]
        },
        {
            icon: html`<${AttackDefenseIcon} />`,
            title: 'Advanced Exploit Defense',
            description: 'Stop sophisticated attacks before they bypass OS security.',
            points: [
                '<strong>AntiFix Protection</strong> against social engineering.',
                'Block cross-domain scripts and unauthorized form manipulation.',
                'Real-time DOM monitoring for script injection.'
            ]
        },
        {
            icon: html`<${FastDeploymentIcon} />`,
            title: 'Frictionless Deployment',
            description: 'Deploy across your fleet in minutes with zero habits disruption.',
            points: [
                '<strong>5-Minute Setup:</strong> Lightning-fast rollout.',
                'Support for Chrome, Edge, Brave, and Chromium browsers.',
                '<strong>Zero Habit Disruption:</strong> Security that works silently.'
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
                        <p class="text-brand-light-secondary leading-relaxed mb-6">Legacy EDRs can't see inside the encrypted browser session. EyeBall provides deep visibility into every DOM event, closing the gap legacy tools leave open.</p>
                    </div>
                </div>
                <div class="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-brand-cyan/50 transition-all duration-500 group animate-fade-in-up">
                    <div class="flex flex-col h-full">
                        <div class="w-14 h-14 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                             <${LatencyIcon} />
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">Performance-First Security</h3>
                        <p class="text-brand-light-secondary leading-relaxed mb-4">EyeBall's engine runs on-device, providing instant security with 0ms of network overhead. No traffic rerouting, no lag.</p>
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
                                    <animateMotion dur="6s" repeatCount="indefinite" path="M 10 45 C 50 45, 50 25, 80 25 H 120 C 150 25, 150 45, 190 45" keyPoints="0; 0.35; 0.35; 0.65; 0.65; 1" keyTimes="0; 0.25; 0.4; 0.6; 0.75; 1" calcMode="linear" />
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

  // Sync state with URL hash for direct links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'landing';
      const validViews = ['landing', 'freemium', 'privacy', 'terms'];
      if (validViews.includes(hash)) {
        setView(hash);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHash);
    handleHash(); // Initial load

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (newView) => {
    window.location.hash = newView;
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
                <a href="mailto:info@eyeballsecurity.com" class="hover:text-white transition-colors">Demo</a>
              </nav>
              <button onClick=${() => handleNavigate('freemium')} class="bg-brand-blue hover:bg-brand-cyan text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-brand-blue/20">
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
                 Secure the Web. Zero blind spots.
              </span>
              <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-4">
                The Browser is Your Perimeter.
              </h1>
              <h2 class="text-2xl md:text-3xl font-medium text-brand-cyan mb-8">Secure it with EyeBall.</h2>
              <p class="max-w-3xl mx-auto text-lg md:text-xl text-brand-light-secondary mb-12 leading-relaxed">
                EyeBall transforms the enterprise browser into a fully visible, secure environment. Protect your data, manage SaaS, and eliminate zero-day threats.
              </p>
              <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="mailto:info@eyeballsecurity.com" class="w-full sm:w-auto bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-blue/20">
                  Request a Demo
                </a>
                <button onClick=${() => {
                    handleNavigate('landing');
                    setTimeout(() => document.getElementById('features-grid')?.scrollIntoView({ behavior: 'smooth' }), 100);
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
             <a href="mailto:support@eyeballsecurity.com" class="hover:underline">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  `;
};

render(html`<${App} />`, document.getElementById('root'));

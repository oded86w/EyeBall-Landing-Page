
import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { html } from 'htm/preact';

const handleImageFallback = (e) => {
  if (e.target && e.target.src) {
    const currentSrc = e.target.src;
    
    if (e.target.dataset.fallbackAttempted) {
      if (!currentSrc.includes('logo.svg') && !e.target.dataset.finalFallback) {
        e.target.dataset.finalFallback = 'true';
        e.target.src = 'public/logo.svg';
      }
      return;
    }
    
    e.target.dataset.fallbackAttempted = 'true';
    const match = currentSrc.match(/\/([^\/]+\.(gif|png|svg|jpg|jpeg|webp))$/i);
    if (match && match[1]) {
      const filename = match[1];
      if (currentSrc.includes('/public/')) {
        e.target.src = filename;
      } else {
        e.target.src = 'public/' + filename;
      }
    }
  }
};

const Logo = ({ className = "h-10 w-auto", variant = "blue" }) => {
  const src = variant === "white" ? "white.png" : "blue.png";
  return html`
    <img src=${src} onError=${handleImageFallback} class=${className} alt="EyeBall Logo" />
  `;
};

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

const GenAIIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.5 8L19 5L16 4.5L19 4L19.5 1L20 4L23 4.5L20 5L19.5 8Z"/>
    <path d="M9 21L8.1 15.9L3 15L8.1 14.1L9 9L9.9 14.1L15 15L9.9 15.9L9 21Z"/>
    <path d="M19 19L18.6 16.6L16.2 16.2L18.6 15.8L19 13.4L19.4 15.8L21.8 16.2L19.4 16.6L19 19Z"/>
  </svg>
`;

const SaasIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m18-10a4 4 0 00-4-4H9a4 4 0 00-4 4v2m14-2a4 4 0 004 4v2m-4-4h-2m-4-4h-2m8-4H9" />
  </svg>
`;

const WebFilterIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
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

const ExtensionIcon = () => html`
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
`;

const ContactFormView = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    country: '',
    phone: '',
    userCount: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    /**
     * GOOGLE FORM CONFIGURATION
     * מזהה הטופס הנכון שחולץ מהקישור המלא שסיפקת.
     */
    const FORM_ID = '1FAIpQLScYi-BZpQhljVCBqYnBE6kSKd_jzfoc3e2nW6X3uXdqjSqD5w'; 
    const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;
    
    // מיפוי השדות לפי ה-Entry IDs שסיפקת באופן מדויק
    const entryMap = {
      name: 'entry.574550258', 
      email: 'entry.1872030215',
      company: 'entry.1461556309',
      jobTitle: 'entry.175529297',
      country: 'entry.1264833653',
      phone: 'entry.480554394',
      userCount: 'entry.1043238434',
      message: 'entry.1871175189'
    };

    const urlParams = new URLSearchParams();
    Object.keys(formData).forEach(key => {
      urlParams.append(entryMap[key], formData[key]);
    });

    try {
      // שליחה במצב no-cors היא הדרך היחידה לשלוח ל-Google Forms ישירות מהדפדפן
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlParams.toString()
      });
      
      // מאחר וזה no-cors, אנחנו מניחים הצלחה אם לא נזרקה שגיאה קטסטרופלית
      setStatus('success');
    } catch (error) {
      console.error('Submission failed:', error);
      // ברוב המקרים גם אם יש שגיאת CORS ב-Console, הנתונים מגיעים לגוגל
      setStatus('success');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return html`
      <section class="max-w-2xl mx-auto py-32 px-6 text-center animate-fade-in-up">
        <div class="mb-8 inline-flex items-center justify-center w-24 h-24 bg-brand-green/10 rounded-full border border-brand-green/20">
          <svg class="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 class="text-4xl font-black text-white mb-4">Request Received!</h2>
        <p class="text-xl text-brand-light-secondary mb-8 leading-relaxed">
          Our security specialists are reviewing your details. We'll be in touch within 24 hours to schedule your personalized EyeBall demo.
        </p>
        <button onClick=${() => window.location.hash = 'landing'} class="bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-4 px-10 rounded-full transition shadow-xl shadow-brand-blue/20">
          Return Home
        </button>
      </section>
    `;
  }

  return html`
    <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h1 class="text-5xl font-black text-white mb-6 leading-tight">Secure Your Browser Workspace.</h1>
          <p class="text-lg text-brand-light-secondary mb-10 leading-relaxed">
            Ready to eliminate visibility gaps? Fill out the form to request a custom demo or a Pro trial tailored to your organization's needs.
          </p>
          

        </div>

        <div class="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
          <form onSubmit=${handleSubmit} class="space-y-5">
            <div>
              <label class="block text-xs font-bold text-brand-light-secondary uppercase tracking-widest mb-2">Full Name</label>
              <input required name="name" value=${formData.name} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="John Doe" />
            </div>
            <div>
              <label class="block text-xs font-bold text-brand-light-secondary uppercase tracking-widest mb-2">Work Email</label>
              <input required type="email" name="email" value=${formData.email} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="john@company.com" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-brand-light-secondary uppercase tracking-widest mb-2">Company</label>
                <input required name="company" value=${formData.company} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="Acme Inc." />
              </div>
              <div>
                <label class="block text-xs font-bold text-brand-light-secondary uppercase tracking-widest mb-2">Job Title</label>
                <input required name="jobTitle" value=${formData.jobTitle} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="CISO / IT Mgr" />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-brand-light-secondary uppercase tracking-widest mb-2">Country</label>
                <input required name="country" value=${formData.country} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="e.g. United States" />
              </div>
              <div>
                <label class="block text-xs font-bold text-brand-light-secondary uppercase tracking-widest mb-2">Mobile Phone</label>
                <input required type="tel" name="phone" value=${formData.phone} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold text-brand-light-secondary uppercase tracking-widest mb-2">Number of Users</label>
              <select required name="userCount" value=${formData.userCount} onChange=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition appearance-none">
                <option value="" disabled selected>Select user range...</option>
                <option value="1-50">1-50 Users</option>
                <option value="51-250">51-250 Users</option>
                <option value="251-1000">251-1,000 Users</option>
                <option value="1000+">1,000+ Users</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-bold text-brand-light-secondary uppercase tracking-widest mb-2">How can we help?</label>
              <textarea name="message" value=${formData.message} onInput=${handleChange} class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition h-32" placeholder="Tell us about your security goals..."></textarea>
            </div>
            
            <button disabled=${status === 'sending'} type="submit" class="w-full bg-brand-blue hover:bg-brand-cyan text-brand-dark font-black py-4 rounded-xl transition shadow-xl shadow-brand-blue/20 flex items-center justify-center space-x-2">
              ${status === 'sending' ? html`
                <svg class="animate-spin h-5 w-5 text-brand-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              ` : 'Submit Request'}
            </button>
            <p class="text-center text-[10px] text-brand-light-secondary opacity-50 uppercase tracking-tighter">
              By clicking "Submit Request", you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  `;
};

const PrivacyPolicyView = () => html`
  <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up">
    <div class="mb-16 text-center border-b border-white/10 pb-12">
      <h1 class="text-5xl font-black text-white mb-4">Privacy Policy</h1>
      <p class="text-brand-blue font-mono text-sm tracking-widest uppercase">Version 4.0 | Effective: May 2025</p>
    </div>
    
    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-12 text-xs">
      <section>
        <h2 class="text-xl font-bold text-white mb-4">1. INTRODUCTION AND SCOPE</h2>
        <p>This Privacy Policy ("Policy") describes how EyeBall Security Inc. ("EyeBall", "we", "us", or "our") collects, uses, discloses, and otherwise processes personal information in connection with our website, cloud services, browser extensions, and other products (collectively, the "Service"). This Policy applies to all individuals who access or use our Service, including employees of our Customers ("Users"). By using the Service, you agree to the practices described in this Policy. If you do not agree, please do not access or use the Service.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">2. INFORMATION WE COLLECT</h2>
        <p>We collect information that identifies, relates to, describes, or is reasonably capable of being associated with you ("Personal Information"). The categories of Personal Information we collect depend on how you interact with us.</p>
        <ul class="list-none space-y-4">
          <li class="pl-4 border-l-2 border-brand-blue">
            <strong class="text-white block mb-1">2.1 Information Provided Directly by You or Your Organization</strong>
            <p>This includes: (a) <strong>Identifiers:</strong> Name, business email address, phone number, job title, and company name; (b) <strong>Account Information:</strong> Usernames, passwords, and security credentials; (c) <strong>Communications:</strong> Information provided when you contact us for support or inquiries; (d) <strong>Configuration Data:</strong> Security policies, allowlists, and administrative settings.</p>
          </li>
          <li class="pl-4 border-l-2 border-brand-blue">
            <strong class="text-white block mb-1">2.2 Information Collected Automatically</strong>
            <p>When you use the Service, we automatically collect: (a) <strong>Device Information:</strong> Hardware model, operating system version, unique device identifiers, and browser type; (b) <strong>Log Data:</strong> IP addresses, access times, pages viewed, and the page you visited before navigating to our Service; (c) <strong>Usage Data:</strong> Information about how you interact with the Service, including features used and frequency of use; (d) <strong>Security Telemetry:</strong> Metadata and raw information regarding security events, blocked threats, and policy violations.</p>
          </li>
          <li class="pl-4 border-l-2 border-brand-blue">
            <strong class="text-white block mb-1">2.3 Information from Third Parties</strong>
            <p>We may receive information from third-party sources, such as business partners, security researchers, and public databases, to enhance our threat intelligence and service delivery.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">3. HOW WE USE YOUR INFORMATION</h2>
        <p>We process Personal Information for various business and commercial purposes, including:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Service Operation:</strong> To provide, maintain, and improve the Service, including processing transactions and providing support.</li>
          <li><strong>Security and Threat Prevention:</strong> To identify and block malicious activity, protect against unauthorized access, and ensure the integrity of our systems.</li>
          <li><strong>Research and Development:</strong> <strong>EyeBall uses raw information, security telemetry, and usage data to develop additional protections, train machine learning models, and analyze emerging cyber threats.</strong> This includes the use of anonymized and aggregated data for industry-wide security research.</li>
          <li><strong>Communication:</strong> To send technical notices, updates, security alerts, and administrative messages.</li>
          <li><strong>Analytics:</strong> To monitor and analyze trends, usage, and activities in connection with our Service.</li>
          <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes, and to protect our rights and the rights of others.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">4. DATA SHARING AND DISCLOSURE</h2>
        <p>We may share your Personal Information in the following circumstances:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Service Providers:</strong> With vendors and service providers who perform services on our behalf (e.g., cloud hosting, analytics).</li>
          <li><strong>Affiliates:</strong> With our current or future parent company, subsidiaries, or other companies under common control.</li>
          <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
          <li><strong>Legal Requirements:</strong> If we believe disclosure is necessary to comply with a legal obligation, protect our rights, or prevent fraud or abuse.</li>
          <li><strong>Security Cooperation:</strong> With global security researchers, threat intelligence sharing platforms, and law enforcement to combat cyber threats.</li>
          <li><strong>With Your Consent:</strong> At your direction or with your express consent.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">5. COOKIES AND TRACKING TECHNOLOGIES</h2>
        <p>We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and to distinguish you from other users. You can control the use of cookies at the individual browser level, but if you choose to disable cookies, it may limit your use of certain features or functions on our Service.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">6. DATA SECURITY</h2>
        <p>We implement reasonable administrative, technical, and physical safeguards designed to protect Personal Information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">7. DATA RETENTION</h2>
        <p>We retain Personal Information for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required or permitted by law. Retention periods vary depending on the type of data and the nature of our relationship with you.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">8. INTERNATIONAL TRANSFERS</h2>
        <p>EyeBall is based in the United States and processes information on servers located in various jurisdictions. Your Personal Information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">9. YOUR RIGHTS AND CHOICES</h2>
        <p>Depending on your location, you may have certain rights regarding your Personal Information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below. We will respond to your request in accordance with applicable law.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">10. CHILDREN'S PRIVACY</h2>
        <p>Our Service is not directed to individuals under the age of 18. We do not knowingly collect Personal Information from children. If we become aware that a child has provided us with Personal Information, we will take steps to delete such information.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">11. CHANGES TO THIS POLICY</h2>
        <p>We may update this Policy from time to time. If we make material changes, we will notify you by revising the date at the top of the Policy and, in some cases, providing additional notice (such as adding a statement to our homepage or sending you a notification).</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">12. CONTACT US</h2>
        <p>If you have any questions or concerns about this Policy or our privacy practices, please contact our Data Protection Officer at <a onClick=${() => window.location.hash = 'contact'} class="text-brand-blue hover:underline cursor-pointer">legal@eyeballsecurity.com</a>.</p>
      </section>

      <div class="bg-brand-dark-secondary p-8 rounded-2xl border border-white/5 text-center mt-12">
        <p class="text-white font-bold mb-2 text-sm uppercase tracking-widest">PRIVACY COMPLIANCE</p>
        <p class="text-xs italic">By continuing to use the EyeBall Service, you acknowledge that you have read and understood this comprehensive Privacy Policy.</p>
      </div>
    </div>
  </section>
`;

const TermsOfServiceView = () => html`
  <section class="max-w-4xl mx-auto py-24 px-6 animate-fade-in-up">
    <div class="mb-16 text-center border-b border-white/10 pb-12">
      <h1 class="text-5xl font-black text-white mb-4">Terms of Service</h1>
      <p class="text-brand-cyan font-mono text-sm tracking-widest uppercase">Global Cloud Service Agreement | Version 5.0 | June 2026</p>
      <p class="text-red-400 font-mono text-xs mt-3 bg-red-950/40 border border-red-500/20 px-4 py-2 rounded-xl inline-block">
        IMPORTANT LEGAL NOTICE: THIS AGREEMENT CONTAINS A BINDING ARBITRATION PROVISION, CLASS ACTION WAIVER, COVENANT NOT TO SUE, AND ABSOLUTE WARRANTY AND LIABILITY LIMITATIONS.
      </p>
    </div>

    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-12 text-sm">
      
      <div class="bg-white/5 border-l-4 border-brand-blue p-6 rounded-r-2xl border border-white/5 space-y-3">
        <span class="text-xs font-mono font-bold text-brand-blue uppercase tracking-widest block">LEGAL AGREEMENT</span>
        <p class="text-xs text-brand-light leading-relaxed">
          THE TERMS OF SERVICE SET FORTH BELOW (THESE “TERMS”) GOVERN YOUR USE OF EYEBALL SECURITY'S SERVICES (AS DEFINED BELOW) AND ARE A LEGAL AGREEMENT BETWEEN THE INDIVIDUAL USING THE SERVICES AND ANY LEGAL ENTITY ON WHOSE BEHALF SUCH INDIVIDUAL IS ACTING (“YOU” OR “YOUR”) AND EYEBALL SECURITY LTD. (“EYEBALL”). PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE SERVICES.
        </p>
        <p class="text-xs text-brand-light leading-relaxed font-bold">
          BY YOUR USE OF SERVICE PROVIDED OR YOUR CLICKING TO ACCEPT OR AGREE THESE TERMS, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, DO NOT ACCESS OR OTHERWISE USE ANY INFORMATION CONTAINED IN THE SERVICE. YOUR CONTINUED USE OF SERVICE PROVIDED SHALL BE DEEMED TO BE YOUR CONTINUED AGREEMENT TO ABIDE BY EACH OF THE TERMS SET FORTH BELOW.
        </p>
      </div>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">1. SERVICES</h2>
        <p><strong>"Services"</strong> shall mean any products, SaaS applications, secure browser extensions, web management portals, client virtualization modules, telemetry pipelines, local client engines, and services provided by EyeBall, including but not limited to the cloud dashboard, browser extension registry, database rules, APIs, and associated defense software provided in connection therewith.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">2. RIGHT TO USE AND RESTRICTIONS</h2>
        <ul class="list-none space-y-4">
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.1 Right to Use the Services</strong>
            If You purchased a valid subscription license to a Service, subject to these Terms and the terms specified in Your order for Services (including from an EyeBall authorized reseller or distributor), as approved by EyeBall, at its sole discretion (“Service Order”), and payment of the applicable fees, EyeBall hereby grants only to You, a non-exclusive, non-sublicensable, non-transferable license for the service term specified in your Service Order (“Service Term”) to access and use the Services in accordance with the relevant documentation provided by EyeBall. Except as otherwise specified herein or as agreed in writing, during the Service Term, the subscription license and payment of the applicable fees shall be non-cancellable and non-refundable. You shall not be entitled to a refund of any fees paid for Services that are terminated before the end of the applicable Service term.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.2 Permitted Use, Restrictions, and Anti-Reverse Engineering</strong>
            <p class="mb-2"><strong>Reasonable and Original Intended Purpose:</strong> You hereby expressly represent, warrant, and covenant that You and Your authorized Users shall use the Services and Technology solely and exclusively in a reasonable, lawful manner for their original, intended corporate browser security, threat defense, and data protection purposes as explicitly documented. Any use of the Services for any unintended, excessive, abusive, or unauthorized purposes, or in any manner that impairs or disrupts the hosting infrastructure of EyeBall, is strictly prohibited and constitutes a material, non-curable breach of these Terms.</p>
            <p class="mb-2"><strong>Absolute Anti-Reverse Engineering, Dismantling, and Deconstruction Bar:</strong> You are strictly and absolutely prohibited from under any circumstances, directly or indirectly: (i) copying, extracts, or replicating any part of the Technology; (ii) reverse engineering, reverse-translating, decompiling, disassembling, tracing, debugging, decrypting, or otherwise attempting to discover or reconstruct the source code, proprietary algorithms, threat signatures, blocklists, internal rules, or database structures of the software, extension, or hosted platform; (iii) investigating, parsing, analyzing, or probing the service architecture to perform comparative analysis, test coverage bypasses, or discover security vulnerabilities without the absolute expressed, notarized written approval of EyeBall's Chief Executive; and (iv) utilizing the software or any output therefrom to develop or train any competitive web security solution or enterprise browser extension.</p>
            <p>No Service, nor any portion or output of the Technology, may be sold, resold, leased, rented, or distributed to any unauthorized party.</p>
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.3 Managed Service Provider</strong>
            If it is indicated in Your Service Order that You provide the Services to Your customers as a managed service provider (MSP), the Services are licensed to You only for the operations of Your customers. You are responsible for: (i) compliance with these Terms by Your customers; (ii) obtaining the express consent of each Customer to these Terms; and (iii) maintaining evidence of such consent.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.4 Trial or Evaluation License</strong>
            If You use the Services for an initial trial, beta, or evaluation period, the right to use the Services is valid only for the designated period determined by EyeBall, at its sole discretion, and is designed to allow You to evaluate the Services during such period. EyeBall may, in its sole discretion, at any time prior to or during such period, discontinue provision of the Services and terminate the right to use the Services with immediate effect, creating zero liability.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.5 Third Party Applications</strong>
            Certain Services are linked and connected to Third Party Applications or LLMs. You agree that EyeBall has no control over Third Party Applications nor the content or information posted therein. EyeBall shall have no responsibility or liability whatsoever in connection with any Third Party Application.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.6 Excess Usage</strong>
            Without derogating from the above, if Your usage of the Services exceeds the Permitted Scope, EyeBall shall be entitled to: (i) charge You per its list price for such additional Service subscription licenses as required; and (ii) upon notice, limit, suspend or terminate Your license to use the Service.
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">3. MAINTENANCE AND SUPPORT</h2>
        <p class="mb-4">Subject to Your purchase of support and maintenance as described in Your Service Order and to payment of the applicable fees, You shall be provided with support and maintenance per the applicable service level indicated in your Service Order.</p>
        <p><strong>Freemium and Trial Support:</strong> Users on the "Freemium" or "Free" tier acknowledge that support is limited strictly to bug reporting via web. Support is provided on a <strong>"BEST EFFORT"</strong> basis only. EyeBall makes no guarantees regarding response times, resolution, or the availability of support personnel for Freemium or promotional accounts.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">4. SERVICE LEVEL & SERVICE CREDITS</h2>
        <ul class="list-none space-y-4">
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">4.1 Service Availability</strong>
            EyeBall will use commercially reasonable efforts to ensure that each hosting service remains available at a Monthly Service Availability target of 99.9% for paid accounts.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">4.2 Service Credits as Sole Remedy</strong>
            If Availability falls below the designated threshold, You may request EyeBall to extend Your current Service Term by additional days at no extra charge (3 days credit for monthly availability below 99.9%, 10 days credit for monthly availability below 99%).
            <p class="mt-2 text-white font-bold">YOU AGREE THAT THE GRANT OF SERVICE CREDITS IN ACCORDANCE WITH THIS SECTION IS YOUR SOLE AND EXCLUSIVE REMEDY IN CONNECTION WITH THE AVAILABILITY, PERFORMANCES, LATENCY, AND FUNCTIONALITY OF THE SERVICES OR A FAILURE BY EYEBALL TO COMPLY WITH CONTROLS.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">5. PRIVACY, DATA USE & AUTHORIZATIONS</h2>
        <p class="mb-4">You acknowledge and agree that use of Services is subject to the processing of information pursuant to EyeBall’s Privacy Policy. You represent and warrant that You have obtained all necessary authorizations, approvals, consents and permits per the applicable law for (i) providing the telemetry and metadata You share with EyeBall; and (ii) EyeBall’s processing and storing of such data in accordance with its policies.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">6. TITLE AND INTELLECTUAL PROPERTY</h2>
        <p>All right, title, and interest in and to the Services, including, without limitation, any technologies, products, database schemas, extension code, proprietary algorithms and intellectual property rights in connection with the Services, and any improvement or derivative work in connection therewith shall remain exclusively with EyeBall and its licensors. The Services are protected under international copyright, trademark, trade secret and patent laws. The license granted herein does not constitute a sale of the Services or any portion thereof. You grant EyeBall a worldwide, royalty-free, perpetual license to use any suggestions, enhancement requests, or feedback without any restriction or compensation.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">7. TERM AND TERMINATION</h2>
        <p>These Terms are effective for the Service Term. EyeBall may terminate these Terms immediately upon Your breach of any of the provisions hereof. These Terms will terminate immediately without notice from EyeBall if You fail to comply with any material provision. Upon termination of Your right to use the Services under these Terms, You agree to cease all use of the Services, remove the browser extension software, and certify such deletion to EyeBall.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">8. INDEMNIFICATION</h2>
        <ul class="list-none space-y-4">
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">8.1 EyeBall Limited Indemnity</strong>
            EyeBall shall defend or settle third-party claims asserting that commercial, paid Services directly infringe a valid patent or copyright, up to the maximum liability cap. EyeBall's indemnification is conditional on You promptly notifying EyeBall of the claim, presenting sole control of defense to EyeBall, and offering reasonable assistance. If infringement occurs, EyeBall may replace the Service or terminate and refund depreciated subscription fees.
            <p class="text-xs uppercase mt-2 font-bold text-white">THE FOREGOING PROVISIONS STATE THE ENTIRE LIABILITY AND OBLIGATIONS OF EYEBALL WITH RESPECT TO ANY ACTUAL OR ALLEGED INFRINGEMENT OF ANY INTELLECTUAL PROPERTY RIGHTS BY THE SERVICES AND IS IN LIEU OF ANY WARRANTIES OF NONINFRINGEMENT.</p>
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">8.2 Broad Customer Indemnity</strong>
            <p class="text-xs text-brand-light-secondary leading-relaxed">
              You agree to defend, indemnify and hold harmless EyeBall, its vendors, officers, directors, employees, affiliates, subsidiaries, licensors, agents and suppliers from and against any and all claims, damages, obligations, losses, liabilities, costs, debts, and expenses (including but not limited to attorney’s fees) arising from: (i) Your unauthorized use of the Services; (ii) Your violation of any applicable laws, regulations or third party rights in connection with Your browser fleet; and (iii) Your breach or violation of Your representations, any of these Terms, or the applicable terms of a Third Party Application.
            </p>
          </li>
        </ul>
      </section>

      <section class="border-t border-b border-white/10 py-8 space-y-6">
        <h2 class="text-2xl font-black text-rose-400 uppercase tracking-widest">9. WARRANTIES DISCLAIMER & ABSOLUTE LIMITATION OF LIABILITY</h2>
        
        <div>
          <h3 class="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider mb-2">9.1 Limited Limited Warranty & "As Is" Disclaimer</h3>
          <p class="uppercase font-mono text-xs leading-relaxed text-white">
            TO THE FULLEST EXTENT ALLOWED UNDER APPLICABLE LAW, THE SERVICES ARE PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED. EYEBALL DOES NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR THAT THE RUNTIME USE WILL BE UNINTERRUPTED OR ERROR FREE. EYEBALL DISCLAIMS ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. CYBERSECURITY IS A DYNAMIC FIELD; EYEBALL DOES NOT AND CANNOT GUARANTY THAT ALL BRIDGES, DATA EXFILTRATIONS, CRITICAL ZERO-DAYS, AND PHISHING INCIDENTS WILL BE DETECTED OR PREVENTED.
          </p>
        </div>

        <div>
          <h3 class="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider mb-2">9.2 Complete Damages Waiver & Strict Liability Cap</h3>
          <p class="uppercase font-mono text-xs leading-relaxed text-brand-light">
            TO THE FULLEST EXTENT ALLOWED UNDER APPLICABLE LAW, IN NO EVENT WILL EYEBALL, ITS FOUNDERS, DIRECTORS, OR PARTNERS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS, REPUTATIONAL DAMAGE, SECURITY RE-BUILD CHARGES, OR FOR LOSS OF OR CORRUPTION OF DATA, OR FOR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SECURED ENGINES), IRRESPECTIVE OF THEORY, EVEN IF EYEBALL HAS BEEN ADVISED OF SUCH POTENTIAL DAMAGE.
          </p>
          <div class="mt-4 bg-black/50 p-6 rounded-xl border border-rose-500/30">
            <p class="text-xs font-mono uppercase text-rose-400 font-bold leading-normal mb-2">
              EYEBALL’S MAXIMUM ACCUMULATIVE SYSTEM LIABILITY IN CONNECTION WITH THESE TERMS AND THE ASSOCIATED DEFENSE SUITE IS STRICTLY LIMITED TO:
            </p>
            <ul class="list-disc pl-5 text-xs font-mono text-white space-y-1.5">
              <li>FOR PAID SUBSCRIPTION ACCOUNTS: THE ACTUAL NET LICENSE FEES RECEIVED BY EYEBALL IN THE EXACT ONE (1) MONTH IMMEDIATELY PRECEDING THE RELEVANT INCIDENT GIVING RISE TO LIABILITY.</li>
              <li>FOR FREE, IN-APP DEMO, SUBSCRIPTION TRIAL, OR FREEMIUM ACCOUNTS: EXACTLY $0.00 USD (ZERO DOLLARS).</li>
            </ul>
          </div>
        </div>

        <div class="bg-red-950/20 p-5 rounded-xl border border-red-500/20">
          <h3 class="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">9.3 ABSOLUTE RELEASE AND COVENANT NOT TO SUE</h3>
          <p class="text-xs text-brand-light-secondary leading-relaxed">
            CUSTOMER AND ITS REPRESENTATIVES IRREVOCABLY RELEASE, ACQUIT, AND FOREVER DISCHARGE EYEBALL AND ITS OFFICERS FROM ANY CLAIMS, OR LIABILITY IN CONNECTION WITH BREACHES, OUTAGES, CYBER EXPLOITS, TELEMETRY ACCURACY, AND LLM PROMPT DISCLOSURES. CUSTOMER PROMISES COVENANT NEVER TO SUE EYEBALL OR COMMENCE LEGAL LITIGATIONS FOR COMPROMISES OCCURRING ON ITS BROWSER FLEET.
          </p>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">10. PRE-RELEASE AND BETA VERSIONS</h2>
        <p>With respect to any pre-release version of a Service, including beta features or early access threat modules, EyeBall grants You a license strictly for internal evaluation. Beta services are experimental. IN NO EVENT WILL EYEBALL BE LIABLE TO YOU OR ANY OTHER PERSON FOR DAMAGES, EXPENSES, OR OUTAGES ENCOUNTERED BY YOU IN CONNECTION WITH BETA SECURITY SERVICES. YOUR SOLE REMEDY IS TO TERMINATE THE BETA EVALUATION.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">11. COMPLIANCE WITH LAW & SANCTIONS</h2>
        <p>You agree to use the Services only as permitted by and in compliance with all applicable regional and international regulations. You represent and warrant that You are not: (i) designated or controlled by any person designated under sanctions administered by the United States, European Union, United Kingdom, Switzerland, or Israel, including the OFAC Specially Designated Nationals (SDN) or Commerce blocklists, or (ii) located in an embargoed region. EyeBall holds the absolute unilateral right to immediately suspend or terminate access without notice if any compliance breach occurs.</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">12. GENERAL & BINDING INDIVIDUAL ARBITRATION</h2>
        <ul class="list-none space-y-4">
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">12.1 Governing Law</strong>
            The laws of the State of Delaware, USA, shall govern all issues arising under or relating to these Terms, giving zero effect to conflict of laws principles thereof.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">12.2 Binding Individual Arbitration only</strong>
            All disputes arising under or relating to these Terms shall be resolved exclusively in confidential, binding individual arbitration administered by JAMS/AAA sitting in Wilmington, Delaware. 
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan font-bold text-brand-cyan">
            <strong class="text-brand-cyan block mb-1 uppercase">12.3 Class Action Waiver Death-Valve</strong>
            ANY DISPUTE, LITIGATION, OR ARBITRATION SHALL ONLY OCCUR IN YOUR INDIVIDUAL CAPACITY, AND NOT AS A CLASS REPRESENTATIVE, MEMBER, OR PLAINTIFF IN ANY CLASS, COLLECTIVE, OR CONSOLIDATED PROCEEDING. CLASS ARBITRATIONS, CLASS LAWSUITS, AND CONSOLIDATED CLAIMS ARE FOREVER WAIVED.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">12.4 Severability and Integration</strong>
            This Agreement represents the entire agreement between the parties relative to the secure browser operations. If any section is ruled invalid or unenforceable, that part will be minimally reformed, and all remaining clauses shall survive fully intact.
          </li>
        </ul>
      </section>

      <div class="bg-brand-dark-secondary p-8 rounded-2xl border border-white/5 text-center mt-12">
        <p class="text-white font-bold mb-2 text-sm uppercase tracking-widest font-mono text-brand-cyan">EYEBALL SECURITY SYSTEM - LEGAL TRUST GROUP</p>
        <p class="text-xs">For official corporate inquiries or formal corporate notices, reach us exclusively via <a onClick=${() => window.location.hash = 'freemium'} class="text-brand-cyan hover:underline cursor-pointer">legal@eyeballsecurity.com</a></p>
      </div>
    </div>
  </section>
`;

const FreemiumView = () => {
    return html`
        <section class="min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 animate-fade-in-up">
            <div class="max-w-4xl w-full">
                <div class="text-center mb-12">
                    <span class="inline-block px-4 py-1.5 mb-4 text-xs font-bold text-brand-blue uppercase bg-brand-blue/10 rounded-full border border-brand-blue/20">
                        EyeBall Platform
                    </span>
                    <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">Complete Browser Enterprise Protection</h2>
                    <p class="text-xl text-brand-light-secondary max-w-2xl mx-auto leading-relaxed">
                        Unifying state-of-the-art data loss prevention and zero-day threat defense into a single, cohesive, enterprise-grade plan.
                    </p>
                </div>
                <div class="max-w-3xl mx-auto bg-gradient-to-b from-white/10 to-white/5 border border-brand-blue/30 rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-2xl shadow-brand-blue/5">
                    <div class="absolute top-0 right-0 p-4">
                        <span class="text-brand-blue font-bold text-xs uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full">Enterprise Pro</span>
                    </div>
                    <div class="mb-8">
                        <h3 class="text-3xl font-bold text-white mb-3">Enterprise Suite</h3>
                        <p class="text-brand-light-secondary text-sm">Full client-side monitoring, zero-trust controls, and absolute visibility. Zero blind spots.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                        <div class="flex items-start text-brand-light text-sm">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>URL Filtering</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>SaaS and Shadow IT Visibility</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>DLP in GenAI web</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>File Scanning (limit daily usage)</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>Download & Upload Management</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>Extension Management</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm md:col-span-2">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>Protection from browser-based attacks like ClickFix and ClickHijacking</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>Tenant Restriction</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>Protection on company website and SaaS</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>Password Protection</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm md:col-span-2">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>AI Usage Monitoring & Analytics (Prompt Analyzer) - Full organizational visibility into user AI queries and prompts</span>
                        </div>
                        <div class="flex items-start text-brand-light text-sm md:col-span-2">
                            <svg class="w-5 h-5 mr-3 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                            <span>Uncompromising Enterprise DLP capability across all web interactions</span>
                        </div>
                    </div>
                    
                    <button onClick=${() => window.location.hash = 'contact'} class="w-full bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20 text-center block text-lg transform hover:scale-[1.01] active:scale-95 duration-200">
                        START NOW
                    </button>
                </div>
                <div class="mt-12 text-center">
                    <p class="text-brand-light-secondary text-sm font-sans">
                        Securing corporate perimeters and unmanaged devices instantly.
                    </p>
                </div>
            </div>
        </section>
    `;
};

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
            ],
            gridClass: 'col-span-1'
        },
        {
            icon: html`<${DlpIcon} />`,
            title: 'Native Browser DLP',
            description: 'Context-aware data protection that sees what users see in real-time.',
            points: [
                'Detect and redact PII, HIPAA, and PCI data in real-time.',
                'Block unapproved browser downloads, clipboard copies, and printing.',
                'Apply user-specific, tamper-proof watermarks to critical SaaS platforms.',
                'Deep contextual scanning: Sees raw text before it is copied or submitted.'
            ],
            hasDemo: true,
            badgeText: 'eyeball://dlp-shield-active',
            imageSrc: '/EyeBallDLSITEVID-optimize.gif',
            bulletColor: 'text-brand-blue',
            gridClass: 'col-span-1 md:col-span-2 lg:col-span-2 shadow-xl'
        },
        {
            icon: html`<${GenAIIcon} />`,
            title: 'Adaptive GenAI Security',
            description: 'Enable safe adoption of AI tools while preventing corporate intellectual property exposure.',
            points: [
                '<strong>Prompt Analyzer:</strong> Gain complete visibility and full compliance analytics of all corporate AI usage.',
                '<strong>Real-Time Redact & Masking:</strong> Automatically strip passwords, API keys, source code, and PII before requests reach LLM servers.',
                '<strong>Shadow AI Discovery:</strong> Map every AI service in use across the enterprise, safeguarding authorized tools and blocking risky unmanaged ones.',
                '<strong>GenAI Tenant Restrictions:</strong> Enforce organization-level restrictions on ChatGPT and Claude, ensuring employees use sanctioned enterprise accounts.'
            ],
            hasDemo: true,
            badgeText: 'eyeball://ai-blocking-shield',
            imageSrc: '/Eyeball-AIREDACToptimize.gif',
            bulletColor: 'text-emerald-400',
            gridClass: 'col-span-1 md:col-span-2 lg:col-span-2 shadow-xl'
        },
        {
            icon: html`<${SaasIcon} />`,
            title: 'SaaS Governance',
            description: 'Clear visibility into shadow IT and enterprise SaaS usage.',
            points: [
                '<strong>Shadow IT Auto-Discovery:</strong> Detect and catalog unmanaged SaaS platforms, rogue web applications, and active user profiles on unauthorized sites.',
                '<strong>Tenant Restrictions Enforcement:</strong> Instantly restrict logins to pre-approved Microsoft 365, Google Workspace, GitHub, Slack, and ChatGPT organizational tenants.',
                '<strong>Session Shielding & Persistence:</strong> Lock down session tokens and browser cookie caches to prevent lateral session hijacking attacks.'
            ],
            gridClass: 'col-span-1'
        },
        {
            icon: html`<${WebFilterIcon} />`,
            title: 'Web Filtering & Browsing Control',
            description: 'Granular website policies and browsing compliance rules enforced locally at the endpoint.',
            points: [
                '<strong>Website Blocklist & Filtering:</strong> Instantly block or monitor access to specific websites, IP addresses, and custom URL categories.',
                '<strong>No Network Proxies or SSL Inspection:</strong> Runs natively in the client browser with zero network interruption, completely bypassing the need for complex, heavy SSL/TLS decryption tunnels.',
                '<strong>File Upload Restrictions:</strong> Block file uploads on specific channels like <strong>WhatsApp Web</strong> or applications protected by <strong>Certificate Pinning</strong> where legacy network decryption is completely blind.',
                '<strong>Granular Download Controls:</strong> Regulate downloads block-by-block, prevent risky extensions (.exe, .scr, .zip), and inspect objects dynamically before they touch the host storage.',
                '<strong>Instant Rules Deployment:</strong> Deploy and propagate policy updates globally in under 10 seconds across your entire fleet, retaining pure wire-speed browsing.'
            ],
            hasDemo: true,
            badgeText: 'eyeball://url-compliance-gate',
            imageSrc: '/Eyeball-DemoURLF-optimize-1.gif',
            demos: [
                {
                    label: 'URL Filtering',
                    badgeText: 'eyeball://url-compliance-gate',
                    imageSrc: '/Eyeball-DemoURLF-optimize-1.gif'
                },
                {
                    label: 'Upload file blocking',
                    badgeText: 'eyeball://upload-blocker-gate',
                    imageSrc: '/Eyeball-WhatsappBlock-optimize.gif'
                }
            ],
            bulletColor: 'text-sky-400',
            gridClass: 'col-span-1 md:col-span-2 lg:col-span-2 shadow-xl'
        },
        {
            icon: html`<${WebProtectIcon} />`,
            title: 'Enterprise Hardening',
            description: 'Apply zero-trust principles directly to your sensitive applications.',
            points: [
                '<strong>Anti-Screen Exfiltration (Watermarking):</strong> Inject dynamically generated, user-specific watermarks onto corporate web pages to prevent photo-taking and printscreen exploits.',
                '<strong>Credential Isolation:</strong> Actively monitor and block reuse of company credentials on personal and non-work-related public domains.',
                '<strong>Contextual Copy/Block Polices:</strong> Block printing, untrusted downloads, and copy-paste clipboard events selectively for designated sensitive URLs.'
            ],
            gridClass: 'col-span-1'
        },
        {
            icon: html`<${ExtensionIcon} />`,
            title: 'Browser Extension Control',
            description: 'Govern and secure browser extensions to eliminate browser-based threat vectors.',
            points: [
                '<strong>Full Extension Visibility:</strong> Gain deep, continuous visibility and a unified inventory of all browser extensions installed across all organization endpoints.',
                '<strong>Comprehensive Allowlists:</strong> Enforce strict, role-based allowlists to ensure endpoints only run pre-vetted, licensed corporate extensions.',
                '<strong>Custom Blocklist Management:</strong> Easily ban specific browsers add-ons and enforce centralized blocklists instantly across your fleet.',
                '<strong>Active Threat Intelligence Blocking:</strong> Automatically block dangerous, unvetted, or malicious extensions powered by real-time EyeBall Defense Research.'
            ],
            gridClass: 'col-span-1'
        },
        {
            icon: html`<${AttackDefenseIcon} />`,
            title: 'Advanced Exploit Defense',
            description: 'Stop sophisticated web exploits and client-level attacks before they run.',
            points: [
                '<strong>AntiFix Protection:</strong> Resilient armor against deceptive malware, clickjacking, and browser compromises.',
                'Block cross-domain malicious code and unauthorized forms injection.',
                'Real-time behavioral DOM monitoring for malicious content.'
            ],
            hasDemo: true,
            badgeText: 'eyeball://exploit-shield-anti-fix',
            imageSrc: '/Eyeball-DemoANTIFIX-optimize.gif',
            bulletColor: 'text-rose-400',
            gridClass: 'col-span-1 md:col-span-2 lg:col-span-2 shadow-xl'
        },
        {
            icon: html`<${FastDeploymentIcon} />`,
            title: 'Frictionless Deployment',
            description: 'Deploy across your fleet in minutes with zero habits disruption.',
            points: [
                '<strong>5-Minute Setup:</strong> Lightning-fast rollout.',
                'Support for Chrome, Edge, Brave, and Chromium browsers.',
                '<strong>Zero Habit Disruption:</strong> Security that works silently.'
            ],
            gridClass: 'col-span-1 md:col-span-2 lg:col-span-3'
        }
    ];

    const [activeDemoIndices, setActiveDemoIndices] = useState({});

    // Auto-cycle effect for features with multiple demos
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveDemoIndices(prev => {
                const nextIndices = { ...prev };
                features.forEach(f => {
                    if (f.demos) {
                        const currentIdx = prev[f.title] || 0;
                        const nextIdx = (currentIdx + 1) % f.demos.length;
                        nextIndices[f.title] = nextIdx;
                    }
                });
                return nextIndices;
            });
        }, 7500);
        return () => clearInterval(interval);
    }, []);

  return html`
    <section id="features-grid" class="py-24 bg-brand-dark relative overflow-hidden">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20 animate-fade-in-up">
                <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Pro Security for Every Scale</h2>
                <div class="text-xl text-brand-light-secondary max-w-3xl mx-auto leading-relaxed">
                    Elite Protection, Zero Complexity. SMBs and SMEs deserve Pro-grade security without the management nightmare. 
                    <span class="text-brand-blue block mt-2 font-semibold">No lag. No overhead. Just total clarity.</span>
                    <div class="text-2xl md:text-3xl font-black text-brand-blue mt-6 drop-shadow-sm animate-pulse-soft cursor-pointer hover:scale-105 transition-transform" onClick=${onStartFree}>
                        START NOW →
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
                <div class="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-brand-blue/50 transition-all duration-500 group animate-fade-in-up">
                    <div class="flex flex-col h-full">
                        <div class="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                             <${Logo} className="h-10 w-auto" variant="blue" />
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
                ${features.map((feature, index) => {
                    if (feature.hasDemo) {
                        const activeIndex = activeDemoIndices[feature.title] || 0;
                        const currentDemo = feature.demos ? feature.demos[activeIndex] : null;
                        const currentImage = currentDemo ? currentDemo.imageSrc : feature.imageSrc;
                        const currentBadge = currentDemo ? currentDemo.badgeText : feature.badgeText;

                        return html`
                            <div class="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-all animate-fade-in-up ${feature.gridClass}" style=${{animationDelay: `${index * 0.1}s`}}>
                                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 h-full items-center">
                                    <div class="md:col-span-6 flex flex-col h-full justify-between">
                                        <div>
                                            <div class="mb-6">${feature.icon}</div>
                                            <h3 class="text-xl font-bold text-white mb-3">${feature.title}</h3>
                                            <p class="text-brand-light-secondary mb-6 leading-relaxed text-sm md:text-base">${feature.description}</p>
                                        </div>
                                        <ul class="space-y-4 text-sm text-brand-light">
                                            ${feature.points.map(point => html`
                                                <li class="flex items-start">
                                                    <svg class="w-4 h-4 mr-3 mt-0.5 ${feature.bulletColor} flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                                    <span dangerouslySetInnerHTML=${{__html: point}}></span>
                                                </li>
                                            `)}
                                        </ul>
                                    </div>
                                    <div class="md:col-span-6 flex items-center justify-center">
                                        <div class="w-full relative rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
                                            
                                            <!-- Browser Tabs (if multi-demo) -->
                                            ${feature.demos ? html`
                                                <div class="flex items-center bg-white/[0.02] border-b border-white/10 px-3 pt-2">
                                                    <div class="flex space-x-1">
                                                        ${feature.demos.map((demo, dIdx) => {
                                                            const isActive = dIdx === activeIndex;
                                                            return html`
                                                                <button 
                                                                    onClick=${() => {
                                                                        setActiveDemoIndices({
                                                                            ...activeDemoIndices,
                                                                            [feature.title]: dIdx
                                                                        });
                                                                    }}
                                                                    class="px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold rounded-t-lg border-t border-x transition-all duration-200 ${
                                                                        isActive 
                                                                            ? 'bg-brand-dark border-white/10 text-brand-blue' 
                                                                            : 'border-transparent text-white/40 hover:text-white/70 hover:bg-white/5'
                                                                    }"
                                                                >
                                                                    ${demo.label}
                                                                </button>
                                                            `;
                                                        })}
                                                    </div>
                                                </div>
                                            ` : null}

                                            <div class="flex items-center space-x-2 px-4 py-3 bg-white/5 border-b border-white/15">
                                                <div class="flex space-x-1.5 flex-shrink-0">
                                                    <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block pointer-events-none"></span>
                                                    <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block pointer-events-none"></span>
                                                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block pointer-events-none"></span>
                                                </div>
                                                <div class="flex-grow text-center min-w-0">
                                                    <div class="bg-black/20 text-white/50 text-[10px] font-mono py-1 px-3 rounded-md inline-block max-w-[185px] truncate">
                                                        ${currentBadge}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-1 bg-gradient-to-b from-brand-dark to-brand-dark-secondary">
                                                <img src=${currentImage} onError=${handleImageFallback} alt="${feature.title} Demo" class="w-full h-auto object-cover rounded-b-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }
                    return html`
                        <div class="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:bg-white/[0.08] hover:border-white/20 transition-all animate-fade-in-up ${feature.gridClass}" style=${{animationDelay: `${index * 0.1}s`}}>
                            <div>
                                <div class="mb-6">${feature.icon}</div>
                                <h3 class="text-xl font-bold text-white mb-3">${feature.title}</h3>
                                <p class="text-brand-light-secondary mb-6 leading-relaxed text-sm md:text-base">${feature.description}</p>
                            </div>
                            <ul class="space-y-3.5 text-sm text-brand-light font-sans">
                                ${feature.points.map(point => html`
                                    <li class="flex items-start">
                                        <svg class="w-4 h-4 mr-3 mt-0.5 text-brand-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                        <span dangerouslySetInnerHTML=${{__html: point}}></span>
                                    </li>
                                `)}
                            </ul>
                        </div>
                    `;
                })}
            </div>
        </div>
    </section>
  `;
};

const CaseStudies = () => {
  const cases = [
    {
      title: "Real-Time PII Redaction in Generative AI",
      industry: "Financial Services",
      challenge: "Employees were using public GenAI tools for data analysis, risking the exposure of sensitive customer PII (Personally Identifiable Information) to third-party LLMs.",
      solution: "EyeBall's native DLP engine was configured to monitor all text input fields on known AI domains. Using local pattern matching, it identified and redacted credit card numbers and SSNs in real-time.",
      result: "Zero data leaks reported over a 6-month period, with over 450 attempted PII submissions blocked and logged for security review."
    },
    {
      title: "Neutralizing Zero-Day Phishing at the Edge",
      industry: "Healthcare Provider",
      challenge: "A sophisticated phishing campaign bypassed traditional email filters, leading users to a high-fidelity clone of the internal patient portal.",
      solution: "EyeBall's DOM-monitoring engine detected unauthorized form manipulation and credential harvesting patterns on the spoofed site. It immediately neutralized the 'Submit' button and alerted the SOC.",
      result: "Prevented 12 high-value account takeovers. The attack was stopped at the browser level before any data reached the attacker's server."
    },
    {
      title: "Securing Shadow IT & Cloud Storage",
      industry: "Tech Startup",
      challenge: "Developers were using personal cloud storage accounts to share large datasets, bypassing corporate security policies and risking IP theft.",
      solution: "EyeBall auto-discovered unauthorized SaaS usage and enforced a granular policy: allowing read access to personal accounts but blocking all file uploads containing source code patterns.",
      result: "Identified 15+ previously unknown shadow IT apps and successfully blocked 3 attempted exfiltrations of proprietary source code."
    },
    {
      title: "Dynamic URL Filtering for Remote Work",
      industry: "Retail & E-commerce",
      challenge: "Remote employees were inadvertently visiting high-risk domains and productivity-draining sites, leading to increased malware exposure and reduced focus.",
      solution: "EyeBall implemented a dynamic URL filtering policy that categorized web traffic in real-time. It blocked access to known malicious domains and enforced strict categories for work-related browsing.",
      result: "Reduced malware incidents by 85% and improved employee focus by blocking over 10,000 non-work-related site visits monthly."
    },
    {
      title: "Securing File Transfers in Legal Services",
      industry: "Legal & Professional Services",
      challenge: "Paralegals were accidentally uploading sensitive case files to personal cloud storage and downloading unverified attachments from external webmail.",
      solution: "EyeBall's file protection engine was set to block all uploads to non-approved domains and scan all downloads for malicious signatures before they reached the local disk.",
      result: "Prevented 22 unauthorized uploads of confidential client data and blocked 5 malware-laden downloads from suspicious webmail sources."
    },
    {
      title: "Stopping 'ClickFix' Social Engineering Attacks",
      industry: "Technology & Software",
      challenge: "Users were targeted by 'ClickFix' attacks—malicious overlays that trick users into clicking hidden buttons to grant permissions or download malware.",
      solution: "EyeBall's DOM-integrity engine identified invisible overlays and 'clickjacking' attempts. It highlighted the hidden elements and blocked the interaction before the user could click.",
      result: "Successfully neutralized 14 sophisticated social engineering attempts that had bypassed traditional browser security extensions."
    },
    {
      title: "Hardening Internal Portals for Government Agencies",
      industry: "Public Sector & Government",
      challenge: "Sensitive internal portals were vulnerable to data theft via screen captures, unauthorized printing, and credential reuse across personal accounts.",
      solution: "EyeBall applied user-specific watermarks to all internal pages, disabled the 'Print' function, and enforced a 'No-Reuse' policy for corporate passwords on external sites.",
      result: "Eliminated the risk of untraceable data leaks via photos/screenshots and ensured that compromised personal passwords could not be used to access government systems."
    },
    {
      title: "Closing the EDR Blind Spot for Remote SMBs",
      industry: "SMB & Distributed Teams",
      challenge: "A growing SMB relied on EDR for endpoint security, but remote employees on laptops were frequently targeted by browser-based threats while working outside the corporate firewall.",
      solution: "EyeBall was deployed to provide on-device browser security, filling the gap left by EDRs that cannot inspect encrypted web traffic or prevent DOM-based data exfiltration.",
      result: "Achieved 100% visibility into remote browsing activity without a VPN or cloud proxy, blocking 30+ phishing attempts that bypassed existing endpoint security in the first month."
    }
  ];

  return html`
    <section id="case-studies" class="py-24 bg-brand-dark">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-white">Case Studies: EyeBall in Action</h2>
          <p class="mt-4 text-lg text-brand-light-secondary max-w-2xl mx-auto">Real-world examples of how we eliminate browser blind spots and stop data leaks.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          ${cases.map((c, index) => html`
            <div class="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/[0.08] transition-all animate-fade-in-up" style=${{animationDelay: `${index * 0.1}s`}}>
              <div class="mb-4">
                <span class="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full">${c.industry}</span>
              </div>
              <h3 class="text-2xl font-bold text-white mb-6">${c.title}</h3>
              
              <div class="space-y-6 flex-grow">
                <div>
                  <h4 class="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">The Challenge</h4>
                  <p class="text-brand-light-secondary text-sm leading-relaxed">${c.challenge}</p>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">The Solution</h4>
                  <p class="text-brand-light-secondary text-sm leading-relaxed">${c.solution}</p>
                </div>
                <div class="pt-4 border-t border-white/10">
                  <h4 class="text-xs font-bold text-brand-green uppercase tracking-wider mb-2">The Result</h4>
                  <p class="text-brand-light font-medium text-sm leading-relaxed">${c.result}</p>
                </div>
              </div>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
};

const VerticalLandingPages = () => html`
  <section id="verticals" class="py-24 bg-brand-dark-secondary border-y border-white/5">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/[0.08] transition-all">
          <h2 class="text-3xl font-bold text-white mb-6">DLP for ChatGPT & GenAI</h2>
          <p class="text-brand-light-secondary mb-8 leading-relaxed">
            The rise of Generative AI brings new risks. EyeBall provides specialized Data Loss Prevention for ChatGPT, Claude, Gemini, and other LLMs. Prevent sensitive source code, PII, and corporate secrets from being leaked to public AI models in real-time.
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-brand-light">
              <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Real-time prompt redaction
            </li>
            <li class="flex items-center text-brand-light">
              <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Block unauthorized file uploads to LLMs
            </li>
            <li class="flex items-center text-brand-light">
              <svg class="w-5 h-5 mr-3 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Audit logs for all GenAI interactions
            </li>
          </ul>
          <button onClick=${() => window.location.hash = 'freemium'} class="text-brand-blue font-bold hover:underline">Learn more about GenAI protection →</button>
        </div>
        
        <div class="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/[0.08] transition-all">
          <h2 class="text-3xl font-bold text-white mb-6">Security for Finance & Healthcare</h2>
          <p class="text-brand-light-secondary mb-8 leading-relaxed">
            High-compliance industries require zero-compromise security. EyeBall helps Finance and Healthcare organizations meet strict regulatory requirements (HIPAA, SOC2, GDPR) by securing the primary workspace: the browser.
          </p>
          <ul class="space-y-4 mb-8">
            <li class="flex items-center text-brand-light">
              <svg class="w-5 h-5 mr-3 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              HIPAA-compliant data handling
            </li>
            <li class="flex items-center text-brand-light">
              <svg class="w-5 h-5 mr-3 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Prevent PII/PHI leaks in web apps
            </li>
            <li class="flex items-center text-brand-light">
              <svg class="w-5 h-5 mr-3 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Enforce strict tenant restrictions
            </li>
          </ul>
          <button onClick=${() => window.location.hash = 'freemium'} class="text-brand-cyan font-bold hover:underline">Explore compliance solutions →</button>
        </div>
      </div>
    </div>
  </section>
`;

const FAQ = () => {
  const faqs = [
    {
      question: "What is EyeBall?",
      answer: "EyeBall is a next-generation browser security platform that transforms the enterprise browser into a fully visible, secure environment. It provides full visibility and zero blind spots, protecting your data, managing SaaS usage, and eliminating zero-day threats directly at the browser level."
    },
    {
      question: "What is Browser-Based DLP?",
      answer: "Browser-Based Data Loss Prevention (DLP) is a security technology that monitors and controls the transfer of sensitive information directly within the web browser. Unlike traditional network-based DLP, it can inspect encrypted traffic and user interactions (like copy-pasting into ChatGPT) without needing complex SSL decryption proxies."
    },
    {
      question: "How does EYEBALL protect against phishing?",
      answer: "EyeBall uses real-time DOM monitoring and behavioral analysis to detect phishing sites as they load. It can identify unauthorized form manipulation, credential harvesting patterns, and 'ClickFix' social engineering attempts, neutralizing the threat before the user can submit sensitive information."
    },
    {
      question: "Is EYEBALL better than a standard VPN?",
      answer: "Yes, for browser security. A VPN only encrypts the 'tunnel' between the user and the network; it doesn't see what's happening inside the browser. EyeBall provides deep visibility into web applications, SaaS usage, and data movement, filling the security gaps that VPNs and EDRs leave open."
    },
    {
      question: "How does EyeBall differ from traditional EDR?",
      answer: "Endpoint Detection and Response (EDR) tools often have blind spots when it comes to encrypted browser activity. EyeBall operates directly within the browser, providing deep visibility into DOM events and web traffic that EDRs miss, without requiring complex SSL decryption."
    },
    {
      question: "Does EyeBall impact browser performance?",
      answer: "No. EyeBall is built for performance. Our on-device engine provides instant security with zero network latency. Unlike cloud proxies that route traffic through remote hubs, EyeBall processes security policies locally, ensuring a seamless user experience."
    },
    {
      question: "What browsers does EyeBall support?",
      answer: "EyeBall supports all major Chromium-based browsers, including Google Chrome, Microsoft Edge, Brave, and others, across Windows, macOS, and Linux environments."
    },
    {
      question: "How does EyeBall handle user privacy?",
      answer: "EyeBall follows 'Privacy by Design' principles. Most data analysis happens locally on the endpoint. We only report security-relevant metadata to the management console, ensuring that personal browsing activity remains private while corporate data stays secure."
    }
  ];

  return html`
    <section id="faq" class="py-24 bg-brand-dark-secondary">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p class="mt-4 text-lg text-brand-light-secondary">Everything you need to know about EyeBall browser security.</p>
        </div>
        <div class="max-w-3xl mx-auto space-y-6">
          ${faqs.map(faq => html`
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-blue/30 transition-all">
              <h3 class="text-xl font-bold text-white mb-3">${faq.question}</h3>
              <p class="text-brand-light-secondary leading-relaxed">${faq.answer}</p>
            </div>
          `)}
        </div>
      </div>
    </section>
  `;
};

const DEFAULT_POSTS = [
  {
    id: "1",
    slug: "clickfix-threat-campaigns",
    title: "The Rise of ClickFix Campaigns: How Threat Actors Bypass Enterprise Sandbox Gateways",
    excerpt: "Threat actors are shifting away from traditional attachments towards highly interactive browser social engineering, notably through fake update popups that exploit clipboard buffers.",
    content: "## The Evolution of Social Engineering: ClickFix Campaigns\n\nIn recent months, cybersecurity research groups have observed a massive surge in a highly sophisticated browser-based cyberattack technique known as **ClickFix** or **ClickHijacking**.\n\nUnlike conventional phishing campaigns that rely on social engineering to trick users into downloading malicious executables (`.exe`), or supplying credentials on lookalike forms, ClickFix leverages the user\'s ultimate trust in their native browser interface.\n\n### How Does it Work?\n1. **Compromised Portals**: Users landing on otherwise benign websites, which have been compromised by attackers, suddenly encounter a popup claiming a critical component is missing (e.g., \"Google Chrome update failed,\" \"Microsoft OneDrive certificate expired,\" or \"PDF Viewer plugin missing\").\n2. **The Paste Exploitation**: The prompt instructs the user to copy a line of code and execute it using the Windows Command Prompt or PowerShell (via a keyboard shortcut such as `Win + R`, copy-paste and Enter).\n3. **Sandbox Gateways Bypass**: Because the actual file was not downloaded over HTTP, traditional Secure Web Gateways (SWG) and email security sandboxes see nothing suspicious in transit. The execution is driven entirely by human interaction within the local operating system, initiating malware deployment (like Lumma Stealer or RedLine).\n\n### The Rise of Imitation CAPTCHAs: Exploiting Trust in Google and Cloudflare\n\nAn extremely dangerous and pervasive development in modern ClickFix campaigns is the **impersonation of security verification barriers**, specifically spoofing trusted verification elements like **Google reCAPTCHA** and **Cloudflare Turnstile**.\n\nInstead of displaying a missing plugin notification, the threat actor injects a highly convincing, high-fidelity replica of a standard anti-bot verification screen directly into the compromised web page to force the user\'s hand:\n\n* **The Fake Verification Prompt**: The user is presented with a fake modal saying *\"Verification Required: Please confirm you are not a robot to proceed.\"*\n* **The Deceptive Actions Guideline**: When the victim clicks the fake *\"I am not a robot\"* checkbox or tries to solve a mock puzzle overlay, the site generates a popup displaying instructions to allegedly *\"verify your system capabilities.\"* \n* **System Compromise under Security Guise**: The instructions claim that to finalize the Google reCAPTCHA or Cloudflare verification, the user must press `Win + R` to open the Run box, copy the automatically generated \"verification key\" (which is actually a base64-encoded PowerShell payload sitting in their clipboard buffer), paste it into the prompt, and press Enter.\n\nBy framing the execution of a malicious file or script as a legitimate security verification step authorized by Google or Cloudflare, attackers successfully manipulate even tech-savvy enterprise employees, exploiting a lifetime of habits conditioned around solving CAPTCHAs.\n\n---\n\n### Mitigating ClickFix in the Modern Enterprise\n\nSecuring the modern enterprise perimeter requires intercepting the attack chain *before* the user acts. Legacy secure web gateways cannot inspect the on-screen rendering structure to detect malicious instructions.\n\n* **Context-Aware Content Analysis**: Security systems must analyze real-time DOM elements to identify fraudulent prompts.\n* **CAPTCHA Integrity Checks**: Monitoring for localized DOM overlays that pretend to render official iFrames (like Google or Cloudflare hostnames) but operate entirely within malicious foreign scopes.\n* **Behavioral Clipboard Auditing**: Restricting dynamic script copy-pasting from unauthorized websites prevents users from copying malicious operational scripts.\n* **Active Defense Hooks**: Dynamic client-side extensions can immediately block overlay injection scripts on compromised SaaS portals and external URLs.\n\nWith EyeBall, zero-day social engineering vectors like ClickFix and ClickHijacking are neutralized immediately. Code injections are rendered harmless before the browser even gets to execute them.",
    author: "EyeBall Threat Intelligence",
    authorTitle: "Research & Analysis Group",
    category: "Threat Intel",
    readTime: "5 min read",
    date: "June 18, 2026",
    coverPattern: "linear-gradient(135deg, #0d1b2a 0%, #172554 100%)",
    tags: ["ClickFix", "Social Engineering", "Zero-Day"]
  },
  {
    id: "2",
    slug: "prompt-analyzer-security-compliance",
    title: "Prompt Analyzer: Total Security and Visibility for Enterprise Generative AI",
    excerpt: "Enterprise usage of GenAI tools like ChatGPT, Claude, and Gemini has doubled, raising massive compliance and intellectual property leakage threats. Here is how EyeBall resolves it.",
    content: "## Data Loss Prevention (DLP) Meets Generative AI\n\nThe exponential integration of custom GenAI applications across corporate roles brings unimaginable productivity gains — along with record-high compliance, intellectual property, and PII leakage risks.\n\nWhen an employee asks an AI model to \"debug this proprietary authentication script\" or \"summarize these user transaction records,\" that intellectual asset is sent directly to external vendor infrastructures. This constitutes a severe, unauthorized data breach under GDPR, CCPA, and general enterprise compliance frameworks.\n\n### Enter the Prompt Analyzer\nLegacy firewalls face a binary constraint: they can either block Claude/ChatGPT entirely (stifling innovation) or allow it wide open (exposing the enterprise).\n\nThe **EyeBall Prompt Analyzer** introduces a third alternative: **real-time local prompt evaluation, redaction, and total visibility**.\n\n---\n\n### Core Capabilities of the Prompt Analyzer\n\n1. **Contextual Token Auditing**: The analyzer intercepts queries in real-time as they are inputted, searching for structural signatures (e.g., programmatic passwords, proprietary API keys, internal source code, and customer records).\n2. **On-the-Fly Redaction**: PII, credit card details, and secret tokens are sanitized and redacted instantly *before* they leave the local perimeter.\n3. **Anonymized Processing**: Keeps the conversation fully private. Analytics databases show top aggregate concepts, queries, and risks—giving security leadership 100% visibility without reading safe private exchanges.\n\nWith EyeBall, you can empower your workforce to leverage LLMs safely while maintaining flawless telemetry and airtight defense boundaries.",
    author: "EyeBall Threat Intelligence",
    authorTitle: "Research & Analysis Group",
    category: "Generative AI",
    readTime: "4 min read",
    date: "June 15, 2026",
    coverPattern: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
    tags: ["Generative AI", "DLP", "Compliance"]
  },
  {
    id: "3",
    slug: "modern-browser-isolation-vs-swg",
    title: "Why Modern Browser Isolation Outperforms Legacy Secure Web Gateways (SWG)",
    excerpt: "Legacy network-level security proxies introduce crippling latency and break modern complex web applications. Endpoint browser security is the breakthrough alternative.",
    content: "## Network Security is Too Slow for the Fast Web\n\nThe corporate network perimeter is dead. With 90% of office applications operating directly on cloud SaaS models, funneling all organizational traffic through heavy, remote Secure Web Gateways (SWG) or Virtual Private Networks (VPN) creates severe structural friction.\n\nStandard network security proxies operate by decrypted-packet inspection. This technique:\n* Degrades browser responsiveness and bandwidth efficiency.\n* Breaks dynamic JavaScript elements on state-of-the-art SaaS sites.\n* Fails to detect client-side DOM exploitations, malicious extensions, and data theft inside unmanaged browser workspaces.\n\n### The Lightweight Alternative: Endpoint Browser Security\nRather than routing gigabytes of traffic to remote proxy servers, next-generation browser security integrates as a **lightweight, native extension boundary** within your browser of choice.\n\n---\n\n### Key Advantages of Endpoint Browser Isolation\n\n* **Zero-Latency Performance**: By running processing natively inside the endpoint browser sandbox, pages load instantly at wire speed.\n* **Total Local Context**: The protection layer sits within the browser DOM. It reads extension authorizations, download/upload file schemas, and prompt transfers directly without payload decryption overhead.\n* **Frictionless Fleet Integration**: Deploys instantly to thousands of workstations in 60 seconds.\n\nBy ensuring 100% visible perimeters with zero lag, EyeBall represents the future of corporate web security.",
    author: "EyeBall Threat Intelligence",
    authorTitle: "Research & Analysis Group",
    category: "Browser Security",
    readTime: "6 min read",
    date: "June 10, 2026",
    coverPattern: "linear-gradient(135deg, #022c22 0%, #065f46 100%)",
    tags: ["Secure Browsers", "SWG", "Network Security"]
  },
  {
    id: "4",
    slug: "critical-need-browser-extension-management",
    title: "The Critical Need for Browser Extension Management",
    excerpt: "Browser extensions are the quietest threat vectors inside corporate environments. Learn how EyeBall handles blocklists, proactive whitelist controls, and auto-blocks malicious extensions.",
    content: "## The Untamed Frontier: Browser Extensions as Threat Vectors\n\nWeb browsers are the standard OS for the modern enterprise worker. However, while extensive resources are spent securing physical endpoints, network firewalls, and cloud access, one massive back-door remains dangerously unregulated: **Browser Extensions**.\n\nExtensions operate with immense permissions. Many require permission to \"read and change all your data on the websites you visit.\" In practice, this means an extension can intercept keystrokes, hijack authentication cookies, read incoming PII, and redirect browser requests.\n\n### The Real Risks of Unmanaged Extensions\n* **SaaS Supply Chain Hijacking**: Legitimate extensions with large user bases are frequently sold to suspicious third-party operators, who silently update them with secondary components to collect corporate metadata.\n* **Malware Delivery Systems**: Threat actors actively publish extensions mimicking genuine business products like PDF converters, screen recorders, or ad blockers to act as localized payloads.\n* **Severe Compliance Violations**: Data collected by rogue extensions is exfiltrated to offshore storage clusters, creating immediate compliance breaches under ISO 27001, CCPA, and GDPR.\n\n---\n\n### Dual-Topology Extension Management with EyeBall\n\nTo address this massive security gap without hamstringing employee productivity, **EyeBall** introduces **proactive Browser Extension Management**. Rather than a static, configuration-heavy network block, EyeBall integrates directly with the web client runtime, giving administrators comprehensive command through two central topologies:\n\n1. **Selective Blocklisting (Granular Denial)**:\n   Enterprises can identify, review, and block specific high-risk browser extensions across the entire fleet immediately. If a known extension exhibits suspicious API requests or changes ownership, it is restricted instantly.\n\n2. **Strict Whitelisting (Default-Deny Workspace)**:\n   For zero-trust environments, EyeBall enables automatic blocking of all browser extensions by default. Employees can run only specific, approved extensions that security teams have thoroughly audited and certified for production. This stops shadow IT cold.\n\n---\n\n### The Malicious Extension Shield: Automated Native Defense\n\nBeyond standard administrative lists, human-led verification struggles to scale with daily web application updates.\n\nThis is why EyeBall is armed with an automated **Malicious Extension Shield**. Running locally at the browser level, this feature proactively analyzes dynamic extension behavior, evaluates extension permission anomalies, and matches known malware hashes against threat databases.\n\nWhen a malicious extension is detected:\n* It is **quarantined and deactivated automatically** in real-time.\n* Detailed diagnostic details are instantly logged for SOC review.\n* The end-user is safely notified without interruption to active web sessions.\n\nWith EyeBall, browser extensions transition from insecure back-doors to a fully monitored, fully protected, and perfectly compliant operational asset.",
    author: "EyeBall Threat Intelligence",
    authorTitle: "Research & Analysis Group",
    category: "Browser Security",
    readTime: "5 min read",
    date: "June 20, 2026",
    coverPattern: "linear-gradient(135deg, #022c22 0%, #0d1b2a 100%)",
    tags: ["Browser Security", "Extensions", "Zero-Trust"]
  },
  {
    id: "5",
    slug: "demystifying-tenant-restrictions-endpoint-browser",
    title: "Demystifying Tenant Restrictions: Securing the Multi-Tenant SaaS Workspace",
    excerpt: "SaaS multi-tenant environments introduce a major security leak: unregulated switching between personal and corporate accounts. Learn why Tenant Restriction is critical for SMBs and SMEs, and how EyeBall delivers robust enterprise-grade security with absolute operational simplicity and zero configuration overhead.",
    content: "## The SaaS Blind Spot: Multi-Tenant Access Risks in SMBs & SMEs\n\nAs growing businesses, particularly agile mid-market SMEs and SMBs, transition heavily to cloud-native SaaS environments, security teams face a critical data loss prevention (DLP) challenge: **unregulated tenant switching**.\n\nWhile a company may securely manage and audit its own official, sanctioned business accounts, employees can easily open a secondary browser tab and authenticate into their *personal or external third-party accounts* on the exact same SaaS platforms. Because these services are hosted on the identical, trusted vendor domains (e.g., `login.microsoftonline.com` or `accounts.google.com`), legacy firewalls and DNS-level network security filters view the traffic as legitimate and safe.\n\nThis gap creates an immediate risk for several critical threat vectors:\n\n*   **Unsanctioned Data Exfiltration:** Employees can easily exfiltrate proprietary source code, internal budgets, or customer details by copying them from corporate workspaces and pasting them into personal OneDrive folders, consumer Gmail accounts, or personal GitHub repositories.\n*   **Unregulated GenAI Data Leaks:** Teams often paste sensitive company IP or code snippets into personal **ChatGPT** or **Claude** accounts to work faster, inadvertently allowing public engines to ingest proprietary data for future training models.\n*   **Shadow IT Channels:** Unmonitored personal accounts completely bypass corporate compliance audits, causing immediate breaches under SOC 2, ISO 27001, and GDPR.\n\n---\n\n### Why Tenant Restrictions Matter Beyond the Enterprise Sector (SME & SMB Focus)\n\nThere is a common misconception that Tenant Restrictions are only needed by Fortune 500 corporations with mammoth security teams. In reality, SMBs and mid-market SMEs face identical core risks, but with distinct challenges:\n\n*   **No Multi-Million Dollar Security budgets:** Setting up Tenant Restrictions traditionally required expensive net-decryption proxies, dedicated key-management authorities, backhauled VPN tunnels, and manual maintenance.\n*   **Identical Compliance Demands:** Modern SMBs/SMEs must answer the same grueling enterprise security questionnaires to close contracts and win customers.\n*   **Agile Environments Need Modern Controls:** Restricting employees' digital workflows with laggy VPNs or intrusive lockouts hurts speed and productivity. SMBs require solutions that work seamlessly behind the scenes.\n\n---\n\n## What is Tenant Restriction and Why is It Important?\n\n**Tenant Restriction** is an access-control capability that restricts company-owned endpoints from accessing unsanctioned, external tenants or private domains within multi-tenant cloud platforms. \n\nBy parsing and intercepting authorization handshakes at the client layer, custom, validated HTTP headers are injected into outbound traffic. The SaaS vendor's servers read these headers and dynamically deny any login attempt that doesn't match the company's approved list.\n\nHistorically, this involved massive infrastructure complexity. **With EyeBall, Tenant Restriction is brought directly to the local browser engine.** Growing businesses can now deploy elite enterprise-grade protections with **absolute operational simplicity and maximum convenience**.\n\n---\n\n## Deploying Tenant Restrictions in EyeBall: 1-Click Operations\n\nEyeBall consolidates complex enterprise engineering into a simple, single-page settings dashboard. Admins can enforce airtight policies across their entire landscape using standard configurations:\n\n### 1. Microsoft 365: Allowed Tenant IDs (GUIDs)\n*   **The Problem:** Staff logging into personal Outlook or OneDrive accounts on company-owned PCs, leaking corporate documents.\n*   **The EyeBall Solution:** Admins input sanctioned tenant GUIDs. EyeBall automatically inserts `Restrict-Access-To-Tenants` headers within the raw browser-request channel. Microsoft instantly blocks personal profile logins while corporate directories run continuously with zero lag.\n\n### 2. Google Workspace: Allowed Domains\n*   **The Problem:** Writing and sending confidential drafts from private consumer `@gmail.com` accounts.\n*   **The EyeBall Solution:** Enter approved business domains. EyeBall appends the `X-Goog-Allowed-Domains` header to every authorization handshake. Google restricts logins strictly to the defined company addresses, ensuring personal accounts are entirely inaccessible.\n\n### 3. GitHub: Allowed Organizations\n*   **The Problem:** Developers cloning, editing, or uploading code to personal, unmonitored GitHub repos from business hardware.\n*   **The EyeBall Solution:** Input approved organization handles. EyeBall restricts association exclusively to compliant enterprise workspaces, making unauthorized code pushes impossible.\n\n### 4. Slack: Allowed Workspaces\n*   **The Problem:** Employees joining unsanctioned Slack workspace environments where business ideas and files escape logging boundaries.\n*   **The EyeBall Solution:** Define approved channels. EyeBall prevents authentication attempts to any Slack directory outside the designated workspace set.\n\n### 5. OpenAI - ChatGPT: Allowed Workspace IDs\n*   **The Problem:** Feeding corporate code and design plans into unmanaged consumer ChatGPT channels.\n*   **The EyeBall Solution:** Restrict access to designated corporate workspaces only. Consumer logins are automatically closed off, safeguarding corporate intelligence from training libraries.\n\n### 6. Claude (Requires Policy Configuration)\n*   **The Problem:** Under-the-radar AI queries on private Claude tiers where business-grade retention agreements do not apply.\n*   **The EyeBall Solution:** Enforce workspace boundaries strictly on Anthropic's Claude instances, blocking personal logins that lack compliant security policies.\n\n---\n\n## Why EyeBall is the Perfect Match for Growing Businesses (SMEs & SMBs)\n\nTraditional approaches to tenant enforcement are incredibly fragile and complex, requiring full performance-degrading network proxies. **EyeBall redefines SaaS security by executing policies natively inside the client's local web-request cycle:**\n\n*   **Zero-Proxy, Zero-Decryption Architecture:** No physical routing proxy required. EyeBall executes policies directly inside the endpoint browser, eliminating SSL/TLS blind spots and heavy cloud computing fees.\n*   **Instant Fleet-wide Propagation:** Type your approved domains or IDs, click **Deploy**, and watch policies update globally within 10 seconds across all active browser instances.\n*   **Airtight Security with Maximum Convenience:** SaaS performance is completely unaffected. Employees enjoy high-speed browsing, while business assets receive multi-million dollar defense structures.\n\nGain full control over your SaaS landscape today. Activate Tenant Restrictions in EyeBall with just a couple of clicks, bring enterprise-grade protection to your business effortlessly, and eliminate cross-tenant data leaks once and for all.",
    author: "EyeBall Threat Intelligence",
    authorTitle: "Research & Analysis Group",
    category: "Browser Security",
    readTime: "5 min read",
    date: "June 23, 2026",
    coverPattern: "linear-gradient(135deg, #1e1b4b 0%, #0d1b2a 100%)",
    tags: ["Tenant Restriction", "SaaS Security", "DLP", "SME Security", "SMB Security", "Zero-Trust", "SaaS Access Control"]
  }
];

const BlogView = () => {
  const [posts, setPosts] = useState(() => {
    const stored = localStorage.getItem('eyeball_posts');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        let postsList = parsed.map(post => {
          if (["Sharon Cohen", "Daniel Levi", "Maya Green", "Security Expert"].includes(post.author)) {
            return {
              ...post,
              author: "EyeBall Threat Intelligence",
              authorTitle: post.authorTitle === "Head of Threat Intelligence" || post.authorTitle === "Chief Information Security Officer" || post.authorTitle === "VP of Enterprise Architecture" || post.authorTitle === "Senior Security Analyst" ? "Research & Analysis Group" : post.authorTitle
            };
          }
          return post;
        });

        // Ensure newly pre-seeded default posts are auto-injected or updated if present
        DEFAULT_POSTS.forEach(defaultPost => {
          const idx = postsList.findIndex(p => p.id === defaultPost.id || p.slug === defaultPost.slug);
          if (idx !== -1) {
            postsList[idx] = { ...postsList[idx], ...defaultPost };
          } else {
            postsList.push(defaultPost);
          }
        });

        return postsList;
      } catch (e) {
        return DEFAULT_POSTS;
      }
    }
    return DEFAULT_POSTS;
  });

  const [activePost, setActivePost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    localStorage.setItem('eyeball_posts', JSON.stringify(posts));
  }, [posts]);

  // Sync active post with URL hash for search engine deep linking and direct crawling (e.g. #blog/clickfix-threat-campaigns)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('blog/')) {
        const slug = hash.substring(5);
        const matched = posts.find(p => p.slug === slug);
        if (matched) {
          setActivePost(matched);
        } else {
          setActivePost(null);
        }
      } else if (hash === 'blog') {
        setActivePost(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [posts]);

  // Dynamic SEO meta tags, social preview parameters, and JSON-LD structured schema.org injection for AI scrapers/Google Bot
  useEffect(() => {
    if (activePost) {
      document.title = `${activePost.title} | EyeBall Threat Intel Blog`;

      const updateMeta = (name, attr, value) => {
        let el = document.querySelector(`meta[${attr}="${name}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute(attr, name);
          document.head.appendChild(el);
        }
        el.setAttribute('content', value);
      };

      updateMeta('description', 'name', activePost.excerpt);
      updateMeta('keywords', 'name', `${activePost.tags ? activePost.tags.join(', ') : ''}, ${activePost.category}, Browser Security, DLP, EyeBall Threat Intelligence`);
      updateMeta('og:title', 'property', activePost.title);
      updateMeta('og:description', 'property', activePost.excerpt);
      updateMeta('og:type', 'property', 'article');
      updateMeta('og:url', 'property', window.location.href);

      let ldJsonScript = document.getElementById('eyeball-blog-ld-json');
      if (!ldJsonScript) {
        ldJsonScript = document.createElement('script');
        ldJsonScript.id = 'eyeball-blog-ld-json';
        ldJsonScript.type = 'application/ld+json';
        document.head.appendChild(ldJsonScript);
      }

      const schema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": activePost.title,
        "description": activePost.excerpt,
        "datePublished": "2026-06-21T00:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": activePost.author,
          "title": activePost.authorTitle
        },
        "publisher": {
          "@type": "Organization",
          "name": "EyeBall Security Inc.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://eyeballsecurity.com/logo.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": window.location.href
        },
        "about": [
          {
            "@type": "Thing",
            "name": activePost.category
          }
        ],
        "keywords": activePost.tags ? activePost.tags.join(', ') : '',
        "articleBody": activePost.content
      };

      ldJsonScript.textContent = JSON.stringify(schema);
    } else {
      document.title = "EyeBall - Secure the Web | Zero Blind Spots";
      
      const restoreMeta = (name, attr, value) => {
        const el = document.querySelector(`meta[${attr}="${name}"]`);
        if (el) el.setAttribute('content', value);
      };

      restoreMeta('description', 'name', "EyeBall is a next-generation browser security and secure browser platform, providing a zero-blind-spot alternative to legacy gateways, extensions, and enterprise browsers like Netskope, Zscaler, Harmony Browse, Surf, Seraphic, Island, and Layer X with advanced URL filtering, Clickfix protection, and phishing protection.");
      restoreMeta('keywords', 'name', "Netskope, Zscaler, Harmony browse, Surf, Seraphic, Island security, Layer X, URL filtering, Browser security, Clickfix, Phishing protection, Secure browser, Enterprise Browser, DLP, Browser Isolation");
      restoreMeta('og:title', 'property', "EyeBall - Secure the Web | Zero Blind Spots");
      restoreMeta('og:description', 'property', "Zero-blind-spot secure browser extension and platform. Next-gen DLP and security alternative to Netskope, Zscaler, Harmony Browse, Surf, Seraphic, Island, and Layer X.");
      restoreMeta('og:type', 'property', 'website');
      restoreMeta('og:url', 'property', 'https://eyeballsecurity.com');

      const ldJsonScript = document.getElementById('eyeball-blog-ld-json');
      if (ldJsonScript) {
        ldJsonScript.remove();
      }
    }
  }, [activePost]);

  // Safe inner markdown inline helper
  const renderInlineHTML = (text) => {
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    
    // Replace daring bold **
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
    // Replace markup code `
    escaped = escaped.replace(/`(.*?)`/g, '<code class="bg-white/10 text-brand-cyan px-1.5 py-0.5 rounded font-mono text-xs border border-white/5">$1</code>');
    return escaped;
  };

  // Safe custom paragraph line-by-line render
  const renderRichMarkdown = (text) => {
    if (!text) return '';
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('## ')) {
        return html`<h2 key=${idx} class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4 border-b border-white/10 pb-2">${trimmed.replace('## ', '')}</h2>`;
      }
      if (trimmed.startsWith('### ')) {
        return html`<h3 key=${idx} class="text-xl md:text-2xl font-bold text-brand-blue mt-8 mb-3">${trimmed.replace('### ', '')}</h3>`;
      }
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const cleanLine = trimmed.replace(/^[\*\-]\s+/, '');
        return html`
          <li key=${idx} class="flex items-start mb-3 ml-4 text-brand-light-secondary">
            <span class="text-brand-blue mr-2.5 mt-1.5 text-xs">✦</span>
            <span dangerouslySetInnerHTML=${{ __html: renderInlineHTML(cleanLine) }}></span>
          </li>
        `;
      }
      if (trimmed === '---') {
        return html`<hr key=${idx} class="border-t border-white/10 my-10" />`;
      }
      if (trimmed === '') {
        return html`<div key=${idx} class="h-4"></div>`;
      }
      return html`
        <p key=${idx} class="text-brand-light-secondary leading-relaxed mb-5 text-base md:text-lg" 
           dangerouslySetInnerHTML=${{ __html: renderInlineHTML(trimmed) }}>
        </p>
      `;
    });
  };

  const categories = ['All', 'Threat Intel', 'Generative AI', 'Browser Security', 'DLP'];

  // Filter & Sort Posts from newest to oldest
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  // Hot category tag color builders
  const getCategoryThemeClass = (cat) => {
    switch (cat) {
      case 'Threat Intel': return 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/25';
      case 'Generative AI': return 'bg-brand-purple/10 text-brand-purple border-brand-purple/25';
      case 'Browser Security': return 'bg-brand-green/10 text-brand-green border-brand-green/25';
      default: return 'bg-brand-blue/10 text-brand-blue border-brand-blue/25';
    }
  };

  // Pre-configured Cyber gradients
  const gradients = [
    { name: 'Midnight Deep Blue', code: 'linear-gradient(135deg, #0d1b2a 0%, #172554 100%)' },
    { name: 'Plasma Void Indigo', code: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)' },
    { name: 'Emerald Sentinel', code: 'linear-gradient(135deg, #022c22 0%, #065f46 100%)' },
    { name: 'Obsidian Crimson', code: 'linear-gradient(135deg, #180202 0%, #7f1d1d 100%)' },
    { name: 'Solaris Flare Decay', code: 'linear-gradient(135deg, #3b0764 0%, #a21caf 100%)' }
  ];

  return html`
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
      
      <!-- HEADER DIRECTORY BRANDING -->
      <div class="mb-12 text-center relative py-10 bg-white/5 border border-white/5 rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/5">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="absolute top-0 right-0 w-36 h-36 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
        
        <span class="inline-flex select-none items-center space-x-1.5 px-3.5 py-1.5 mb-3 text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 rounded-full border border-brand-cyan/20">
          <span>Intelligence Research Center</span>
        </span>
        <h1 class="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4 animate-pulse-soft">
          EyeBall Threat Intel Blog
        </h1>
        <p class="text-brand-light-secondary max-w-2xl mx-auto text-base md:text-lg">
          Expert analysis, zero-day research bulletins, and data protection strategies for the modern enterprise browser footprint.
        </p>
      </div>

      <!-- VIEW RENDER CONDITIONALS -->
      ${activePost ? html`
        <!-- DETAILED SINGLE BULLETIN RENDER -->
        <article class="max-w-4xl mx-auto py-4 animate-fade-in-up">
          
          <!-- Sticky Back Nav -->
          <button onClick=${() => { window.location.hash = 'blog'; window.scrollTo(0,0); }} class="flex items-center space-x-2 text-sm font-mono text-brand-blue hover:text-brand-cyan mb-8 transition group pb-2">
            <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            <span>BACK TO RESOURCE DIRECTORY</span>
          </button>

          <!-- Headline Banner Cover -->
          <div style="background: ${activePost.coverPattern || 'linear-gradient(135deg, #0d1b2a 0%, #172554 100%)'}" class="h-64 sm:h-80 w-full rounded-3xl relative overflow-hidden flex flex-col justify-end p-6 sm:p-10 border border-white/15 shadow-2xl">
            <div class="absolute inset-0 bg-brand-dark/30 backdrop-blur-[1px]"></div>
            
            <div class="relative z-10">
              <span class="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold tracking-wider uppercase rounded border ${getCategoryThemeClass(activePost.category)}">
                ${activePost.category}
              </span>
              <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
                ${activePost.title}
              </h1>
            </div>
          </div>

          <!-- Metadata Grid Line -->
          <div class="flex flex-wrap items-center justify-between py-6 border-b border-white/10 mb-10 text-sm gap-4 text-brand-light-secondary font-mono">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue font-bold">
                ${activePost.author.charAt(0)}
              </div>
              <div>
                <p class="text-white font-semibold">${activePost.author}</p>
                <p class="text-xs text-brand-light-secondary">${activePost.authorTitle || 'Security Researcher'}</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-6 text-xs text-brand-light-secondary font-mono">
              <span>Published: <strong>${activePost.date}</strong></span>
              <span>•</span>
              <span>Read Time: <strong>${activePost.readTime}</strong></span>
            </div>
          </div>

          <!-- Article Post Body Content -->
          <div class="prose prose-invert prose-brand max-w-none text-brand-light-secondary leading-relaxed font-sans mb-16 space-y-4">
            ${renderRichMarkdown(activePost.content)}
          </div>

          <!-- Meta Tag Badges -->
          ${activePost.tags && activePost.tags.length > 0 && html`
            <div class="border-t border-white/10 pt-6 flex flex-wrap gap-2 items-center mb-16">
              <span class="text-xs font-mono text-brand-light-secondary uppercase tracking-widest mr-2">Tags:</span>
              ${activePost.tags.map((tag, i) => html`
                <span key=${i} class="bg-white/5 border border-white/10 text-brand-light-secondary text-xs px-3 py-1 rounded-full font-mono">
                  #${tag}
                </span>
              `)}
            </div>
          `}

          <!-- Elegant Footer CTAs -->
          <div class="bg-gradient-to-r from-brand-blue/10 via-brand-dark-secondary to-brand-dark border border-brand-blue/20 rounded-3xl p-8 text-center relative overflow-hidden mb-16">
            <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <h3 class="text-2xl font-bold text-white mb-2 relative z-10">Deploy Zero-Blind-Spot Browser Security</h3>
            <p class="text-brand-light-secondary text-sm max-w-xl mx-auto mb-6 relative z-10">
              Need to actively neutralize threats like ClickFix or monitor employee GenAI usage with Prompt Analyzer? Secure up into EyeBall Enterprise Suite today.
            </p>
            <a href="#contact" class="inline-block relative z-10 bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold px-8 py-3 rounded-xl transition shadow-lg shadow-brand-blue/25 text-sm uppercase tracking-wider">
              START NOW
            </a>
          </div>

        </article>
      ` : html`
        
        <!-- INTELLIGENCE HUB DIRECTORY VIEW -->
        <div class="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <!-- Category Filter Ribbon -->
          <div class="flex flex-wrap gap-2">
            ${categories.map(cat => html`
              <button key=${cat} onClick=${() => setSelectedCategory(cat)} class="px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition ${selectedCategory === cat ? 'bg-brand-blue text-brand-dark font-bold' : 'bg-white/5 text-brand-light-secondary hover:bg-white/10 hover:text-white border border-white/5'}">
                ${cat}
              </button>
            `)}
          </div>

          <!-- Live Search Input -->
          <div class="relative w-full md:max-w-xs">
            <input type="text" value=${searchQuery} onInput=${e => setSearchQuery(e.target.value)} placeholder="Search threat database..." class="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-full px-5 py-2.5 text-white text-xs font-mono focus:outline-none transition" />
            <svg class="w-4 h-4 text-brand-light-secondary absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>

        </div>

        <!-- Featured / Standard Grid Cards Layout -->
        ${filteredPosts.length === 0 ? html`
          <div class="text-center py-20 bg-white/5 border border-white/5 rounded-3xl">
            <svg class="w-12 h-12 text-brand-light-secondary mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 0115.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p class="font-mono text-sm tracking-wider uppercase text-brand-light-secondary">No matching security research bulletins found.</p>
            <button onClick=${() => { setSearchQuery(''); setSelectedCategory('All'); }} class="mt-4 text-xs font-mono text-brand-blue hover:underline">Reset Filters</button>
          </div>
        ` : html`
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${filteredPosts.map(post => html`
              <article key=${post.id} onClick=${() => { window.location.hash = `blog/${post.slug}`; window.scrollTo(0,0); }} class="group bg-brand-dark-secondary rounded-3xl border border-white/5 hover:border-brand-blue/30 overflow-hidden cursor-pointer transition-all duration-300 hover:translate-y-[-4px] flex flex-col shadow-xl hover:shadow-brand-blue/5">
                
                <!-- Card Header Visual Gradient -->
                <div style="background: ${post.coverPattern || 'linear-gradient(135deg, #0d1b2a 0%, #172554 100%)'}" class="h-44 w-full relative overflow-hidden transition-all duration-300 group-hover:scale-[1.01] flex items-end p-5">
                  <div class="absolute inset-0 bg-gradient-to-t from-brand-dark-secondary to-transparent"></div>
                  
                  <span class="relative z-10 px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase rounded border ${getCategoryThemeClass(post.category)}">
                    ${post.category}
                  </span>
                </div>

                <!-- Card Info -->
                <div class="p-6 flex flex-col flex-grow">
                  <div class="flex items-center justify-between text-xs font-mono text-brand-light-secondary mb-3">
                    <span>${post.date}</span>
                    <span>${post.readTime}</span>
                  </div>
                  
                  <h3 class="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition line-clamp-2 tracking-tight leading-snug">
                    ${post.title}
                  </h3>
                  
                  <p class="text-brand-light-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                    ${post.excerpt}
                  </p>

                  <div class="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <div class="w-6 h-6 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-[10px] text-brand-blue font-bold flex items-center justify-center font-mono">
                        ${post.author.charAt(0)}
                      </div>
                      <span class="text-xs font-semibold text-brand-light">${post.author}</span>
                    </div>
                    
                    <span class="text-xs font-mono font-bold text-brand-blue group-hover:text-brand-cyan transition flex items-center">
                      <span>READ BULLETIN</span>
                      <svg class="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                  </div>
                </div>
              </article>
            `)}
          </div>
        `}
      `}
    </div>
  `;
};

const App = () => {
  const [view, setView] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sync state with URL hash for direct links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'landing';
      const validViews = ['landing', 'freemium', 'privacy', 'terms', 'contact', 'blog'];
      const landingSections = ['features', 'case-studies', 'faq', 'verticals', 'hero'];

      setMobileMenuOpen(false); // Close mobile menu on hash/view change

      if (hash.startsWith('blog')) {
        setView('blog');
        window.scrollTo(0, 0);
      } else if (validViews.includes(hash)) {
        setView(hash);
        window.scrollTo(0, 0);
      } else if (landingSections.includes(hash)) {
        if (view !== 'landing') {
          setView('landing');
        }
        // Allow time for the view to switch before scrolling
        setTimeout(() => {
          const element = document.getElementById(hash === 'features' ? 'features-grid' : hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }

      // Track page views in Umami Cloud for all SPA hash-based routing views & blog articles
      const trackPage = () => {
        if (window.umami && typeof window.umami.track === 'function') {
          const customUrl = window.location.pathname + (window.location.hash || '#landing');
          window.umami.track((props) => ({
            ...props,
            url: customUrl
          }));
          return true;
        }
        return false;
      };

      if (!trackPage()) {
        // If Umami is still loading, wait for it to be ready
        const umamiRetry = setInterval(() => {
          if (trackPage()) {
            clearInterval(umamiRetry);
          }
        }, 150);
        // Timeout after 5 seconds to prevent endless polling
        setTimeout(() => clearInterval(umamiRetry), 5000);
      }
    };

    window.addEventListener('hashchange', handleHash);
    handleHash(); // Initial load

    return () => window.removeEventListener('hashchange', handleHash);
  }, [view]);

  const handleNavigate = (newView) => {
    window.location.hash = newView;
    setMobileMenuOpen(false);
  };

  return html`
    <div class="flex flex-col min-h-screen">
      <header class="bg-brand-dark/90 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <a href="#landing" onClick=${(e) => { e.preventDefault(); handleNavigate('landing'); }} class="flex items-center space-x-3 focus:outline-none group">
              <${Logo} className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" variant="blue" />
              <span class="text-2xl font-bold text-white tracking-tight">EyeBall</span>
            </a>
            <div class="flex items-center space-x-4 md:space-x-6">
              <nav class="hidden md:flex space-x-6 text-sm font-medium text-brand-light-secondary">
                <a href="#features" class="hover:text-white transition-colors">Features</a>
                <a href="#case-studies" class="hover:text-white transition-colors">Case Studies</a>
                <a href="#faq" class="hover:text-white transition-colors">FAQ</a>
                <a href="#blog" onClick=${(e) => { e.preventDefault(); handleNavigate('blog'); }} class="hover:text-white transition-colors ${view === 'blog' ? 'text-brand-blue font-bold border-b-2 border-brand-blue pb-1' : ''}">Blog</a>
              </nav>
              <a href="#freemium" onClick=${(e) => { e.preventDefault(); handleNavigate('freemium'); }} class="bg-brand-blue hover:bg-brand-cyan text-brand-dark px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-brand-blue/20">
                START NOW
              </a>
              
              <!-- Mobile menu button -->
              <button onClick=${() => setMobileMenuOpen(!mobileMenuOpen)} class="md:hidden flex items-center justify-center p-2 rounded-xl text-brand-light-secondary hover:text-white hover:bg-white/5 transition-colors focus:outline-none" aria-label="Toggle Menu">
                ${mobileMenuOpen ? html`
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ` : html`
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                `}
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation Dropdown Panel -->
        ${mobileMenuOpen && html`
          <div class="md:hidden bg-brand-dark/95 border-b border-white/10 backdrop-blur-2xl transition-all duration-300 animate-fade-in-down">
            <div class="px-4 pt-2 pb-6 space-y-2">
              <a href="#features" onClick=${() => setMobileMenuOpen(false)} class="block px-4 py-3 rounded-xl text-brand-light-secondary hover:text-white hover:bg-white/5 transition-all font-medium text-base">Features</a>
              <a href="#case-studies" onClick=${() => setMobileMenuOpen(false)} class="block px-4 py-3 rounded-xl text-brand-light-secondary hover:text-white hover:bg-white/5 transition-all font-medium text-base">Case Studies</a>
              <a href="#faq" onClick=${() => setMobileMenuOpen(false)} class="block px-4 py-3 rounded-xl text-brand-light-secondary hover:text-white hover:bg-white/5 transition-all font-medium text-base">FAQ</a>
              <a href="#blog" onClick=${(e) => { e.preventDefault(); handleNavigate('blog'); }} class="block px-4 py-3 rounded-xl hover:text-white hover:bg-white/5 transition-all font-medium text-base ${view === 'blog' ? 'text-brand-blue bg-white/5 font-bold' : 'text-brand-light-secondary'}">Blog</a>
              <div class="pt-4 border-t border-white/5 px-4">
                <a href="#freemium" onClick=${(e) => { e.preventDefault(); handleNavigate('freemium'); }} class="block w-full text-center bg-brand-blue hover:bg-brand-cyan text-brand-dark py-3.5 rounded-xl text-base font-bold transition-all shadow-lg shadow-brand-blue/20">
                  START NOW
                </a>
              </div>
            </div>
          </div>
        `}
      </header>
      
      <main class="flex-grow pt-20">
        ${view === 'privacy' ? html`<${PrivacyPolicyView} />` : 
          view === 'terms' ? html`<${TermsOfServiceView} />` :
          view === 'freemium' ? html`<${FreemiumView} />` :
          view === 'contact' ? html`<${ContactFormView} />` :
          view === 'blog' ? html`<${BlogView} />` : html`
          <section id="hero" class="relative py-24 md:py-36 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-secondary to-brand-dark bg-300% animate-gradient-bg -z-10"></div>
             <div class="absolute inset-0 bg-grid-pattern opacity-10 -z-10"></div>
             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10"></div>
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
              <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 rounded-full border border-brand-blue/20">
                 Secure the Web. Zero blind spots.
              </span>
              <div class="flex items-center justify-center space-x-4 mb-4">
                <${Logo} className="h-14 sm:h-20 md:h-24 w-auto" variant="blue" />
                <span class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-none tracking-tighter">
                  EyeBall
                </span>
              </div>
              <h1 class="text-3xl md:text-5xl font-bold text-brand-cyan mb-8">
                The Browser is Your Perimeter. Secure It.
              </h1>
              <p class="max-w-3xl mx-auto text-lg md:text-xl text-brand-light-secondary mb-12 leading-relaxed">
                EyeBall is a next-generation browser security platform that transforms the enterprise browser into a fully visible, secure environment. By providing full visibility and zero blind spots, EyeBall protects your data, manages SaaS usage, and eliminates zero-day threats directly at the browser level.
              </p>
              <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#freemium" onClick=${(e) => { e.preventDefault(); handleNavigate('freemium'); }} class="w-full sm:w-auto bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-blue/20 text-center">
                  START NOW
                </a>
                <a href="#features" class="text-white hover:text-brand-blue font-semibold transition-colors flex items-center group">
                  Explore Technology
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
              </div>
            </div>
          </section>
          <div id="features">
             <${BusinessFeatures} onStartFree=${() => handleNavigate('freemium')} />
          </div>
          <${CaseStudies} />
          <${FAQ} />
        `}
      </main>

      <footer class="bg-brand-dark-secondary border-t border-white/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div class="flex items-center justify-center space-x-3 mb-6">
             <${Logo} className="h-10 w-auto opacity-50 hover:opacity-80 transition-opacity" variant="white" />
             <span class="text-xl font-bold text-brand-light-secondary">EyeBall</span>
          </div>
          <p class="text-brand-light-secondary">EyeBall 2025. Secure the Web. All rights reserved.</p>
          <div class="mt-6 flex justify-center space-x-8 text-sm text-brand-light-secondary font-mono">
             <a href="#blog" onClick=${(e) => { e.preventDefault(); handleNavigate('blog'); }} class="hover:text-white transition">Blog</a>
             <a href="#privacy" onClick=${(e) => { e.preventDefault(); handleNavigate('privacy'); }} class="hover:text-white transition">Privacy Policy</a>
             <a href="#terms" onClick=${(e) => { e.preventDefault(); handleNavigate('terms'); }} class="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  `;
};

const container = document.getElementById('root');
if (container) {
  container.innerHTML = '';
}
render(html`<${App} />`, container);

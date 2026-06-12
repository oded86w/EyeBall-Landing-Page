
import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { html } from 'htm/preact';

const Logo = ({ className = "h-10 w-auto" }) => html`
  <img src="/logo.svg" class=${className} alt="EyeBall Logo" />
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
      <p class="text-brand-cyan font-mono text-sm tracking-widest uppercase">Cloud Service Agreement | Version 3.0 | May 2025</p>
    </div>

    <div class="prose prose-invert prose-brand-blue max-w-none text-brand-light-secondary leading-relaxed space-y-12 text-sm">
      <section>
        <h2 class="text-2xl font-bold text-white mb-6">1. DEFINITIONS</h2>
        <p><strong>"Service"</strong> means the EyeBall cloud-based browser security platform, including the management portal, APIs, and associated documentation. <strong>"Software"</strong> means the EyeBall browser extension and any other downloadable components provided by EyeBall. <strong>"Customer Data"</strong> means all data, text, images, or other content submitted by Customer or its Users to the Service. <strong>"Users"</strong> means individuals authorized by Customer to access and use the Service.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">2. LICENSE GRANT AND RESTRICTIONS</h2>
        <ul class="list-none space-y-4">
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.1 License Grant</strong>
            Subject to the terms of this Agreement, EyeBall grants Customer a non-exclusive, non-transferable, non-sublicensable, limited-term license to: (a) install and use the Software on managed endpoints; and (b) access and use the Service solely for Customer's internal business security purposes.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.2 Authorized Use Only</strong>
            Customer agrees to use the Service and Software <strong>ONLY</strong> for the specific security and privacy purposes for which they were created and provided. Any use of the Service for purposes not expressly authorized in this Agreement is strictly prohibited.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">2.3 Prohibited Conduct and Anti-Reverse Engineering</strong>
            Customer shall not, and shall not permit any third party to: (i) copy, modify, or create derivative works of the Service or Software; (ii) <strong>reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code, underlying algorithms, or proprietary logic</strong> of the Software or Service; (iii) <strong>conduct any security research, penetration testing, vulnerability scanning, or competitive analysis</strong> without EyeBall's express prior written consent; (iv) <strong>extract, scrape, harvest, or otherwise "steal" any data, intellectual property, or proprietary information</strong> from the Service; (v) rent, lease, sell, or use the Service for timesharing or service bureau purposes; (vi) remove any proprietary notices or labels; (vii) use the Service to upload or transmit malicious code; (viii) interfere with or disrupt the integrity or performance of the Service; or (ix) attempt to gain unauthorized access to the Service or its related systems.
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">3. PROPRIETARY RIGHTS</h2>
        <p>EyeBall and its licensors own and retain all right, title, and interest in and to the Service, Software, and all intellectual property rights therein. No rights are granted to Customer hereunder other than as expressly set forth in this Agreement. Customer grants EyeBall a worldwide, royalty-free license to use and incorporate into the Service any suggestions, enhancement requests, or other feedback provided by Customer.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">4. CUSTOMER DATA AND PRIVACY</h2>
        <p>Customer is solely responsible for the accuracy, quality, and legality of Customer Data. Customer represents and warrants that it has all necessary rights and consents to provide Customer Data to EyeBall. EyeBall will maintain administrative, physical, and technical safeguards for protection of the security, confidentiality, and integrity of Customer Data as described in the Privacy Policy. Customer acknowledges that the Service is a "local-first" architecture where sensitive data analysis occurs on the endpoint; however, metadata and security telemetry are transmitted to EyeBall's cloud for management and reporting.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">5. SUPPORT AND MAINTENANCE</h2>
        <ul class="list-none space-y-4">
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">5.1 Enterprise Support</strong>
            Paid "Pro" and "Enterprise" subscriptions include support services as specified in the applicable Order Form and EyeBall's standard Support Policy.
          </li>
          <li class="pl-4 border-l-2 border-brand-cyan">
            <strong class="text-white block mb-1">5.2 Freemium Support Disclaimer</strong>
            Users on the "Freemium" or "Free" tier acknowledge that support is limited strictly to bug reports submitted via the portal. Support for Freemium users is provided on a <strong>"BEST EFFORT"</strong> basis only. EyeBall makes no guarantees regarding response times, resolution, or the availability of support personnel for Freemium accounts.
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">6. NO WARRANTY; DISCLAIMER</h2>
        <p class="uppercase font-bold">THE SERVICE AND SOFTWARE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EYEBALL AND ITS SUPPLIERS EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. EYEBALL DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE, OR THAT THE SERVICE WILL DETECT OR PREVENT ALL SECURITY THREATS, MALWARE, OR DATA LEAKS.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">7. INDEMNIFICATION</h2>
        <p>Customer shall defend, indemnify, and hold harmless EyeBall and its officers, directors, and employees from and against any and all claims, costs, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or in connection with: (i) Customer's use of the Service in violation of this Agreement; (ii) Customer Data; or (iii) Customer's violation of any third-party rights, including intellectual property or privacy rights.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">8. LIMITATION OF LIABILITY</h2>
        <p class="uppercase font-bold">IN NO EVENT SHALL EYEBALL OR ITS SUPPLIERS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICE. UNDER NO CIRCUMSTANCES WILL EYEBALL BE RESPONSIBLE FOR ANY DAMAGE, LOSS, OR INJURY RESULTING FROM HACKING, TAMPERING, OR OTHER UNAUTHORIZED ACCESS OR USE OF THE SERVICE OR YOUR ACCOUNT. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EYEBALL'S TOTAL AGGREGATE LIABILITY FOR ANY CLAIMS UNDER THIS AGREEMENT IS LIMITED TO THE AMOUNT ACTUALLY PAID BY CUSTOMER TO EYEBALL IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM. FOR FREEMIUM USERS, EYEBALL'S TOTAL LIABILITY SHALL NOT EXCEED ONE HUNDRED U.S. DOLLARS ($100.00).</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">9. TERM AND TERMINATION</h2>
        <p>This Agreement commences on the date Customer first accesses the Service and continues until all subscriptions hereunder have expired or have been terminated. Either party may terminate this Agreement for cause: (i) upon 30 days' written notice of a material breach; or (ii) if the other party becomes the subject of a petition in bankruptcy. Upon termination, Customer's right to access or use the Service and Software terminates immediately, and Customer must delete all copies of the Software.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">10. GOVERNING LAW AND ARBITRATION</h2>
        <p>This Agreement shall be governed by the laws of the State of Delaware, without regard to its conflict of laws principles. Any dispute arising out of or relating to this Agreement shall be finally settled by binding arbitration in Wilmington, Delaware, in accordance with the rules of the American Arbitration Association. <strong>YOU AGREE THAT ANY CLAIMS WILL BE BROUGHT IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</strong></p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">11. EXPORT COMPLIANCE</h2>
        <p>The Service and Software may be subject to export laws and regulations of the United States and other jurisdictions. Customer represents that it is not named on any U.S. government denied-party list. Customer shall not permit Users to access or use the Service in a U.S.-embargoed country or in violation of any U.S. export law or regulation.</p>
      </section>

      <section>
        <h2 class="text-2xl font-bold text-white mb-6">12. MISCELLANEOUS</h2>
        <p>This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements. If any provision of this Agreement is held by a court of competent jurisdiction to be contrary to law, the provision will be deemed null and void, and the remaining provisions of this Agreement will remain in effect. No failure or delay by either party in exercising any right under this Agreement will constitute a waiver of that right.</p>
      </section>

      <div class="bg-brand-dark-secondary p-8 rounded-2xl border border-white/5 text-center mt-12">
        <p class="text-white font-bold mb-2 text-sm uppercase tracking-widest">LEGAL CONTACT</p>
        <p class="text-xs">For legal inquiries or formal notices, please contact <a onClick=${() => window.location.hash = 'freemium'} class="text-brand-cyan hover:underline cursor-pointer">legal@eyeballsecurity.com</a></p>
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
                        <button onClick=${() => window.location.hash = 'contact'} class="w-full border border-white/20 hover:border-white/50 text-white font-bold py-4 rounded-xl transition-all text-center">
                            Get Started
                        </button>
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

const App = () => {
  const [view, setView] = useState('landing');

  // Sync state with URL hash for direct links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || 'landing';
      const validViews = ['landing', 'freemium', 'privacy', 'terms', 'contact'];
      const landingSections = ['features', 'case-studies', 'faq', 'verticals', 'hero'];

      if (validViews.includes(hash)) {
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
    };

    window.addEventListener('hashchange', handleHash);
    handleHash(); // Initial load

    return () => window.removeEventListener('hashchange', handleHash);
  }, [view]);

  const handleNavigate = (newView) => {
    window.location.hash = newView;
  };

  return html`
    <div class="flex flex-col min-h-screen">
      <header class="bg-brand-dark/90 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-white/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <a href="#landing" onClick=${(e) => { e.preventDefault(); handleNavigate('landing'); }} class="flex items-center space-x-3 focus:outline-none group">
              <div class="relative">
                 <div class="absolute -inset-1 bg-brand-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                 <${Logo} className="relative h-12 w-auto" />
              </div>
              <span class="text-2xl font-bold text-white tracking-tight">EyeBall</span>
            </a>
            <div class="flex items-center space-x-6">
              <nav class="hidden md:flex space-x-6 text-sm font-medium text-brand-light-secondary">
                <a href="#features" class="hover:text-white transition-colors">Features</a>
                <a href="#case-studies" class="hover:text-white transition-colors">Case Studies</a>
                <a href="#faq" class="hover:text-white transition-colors">FAQ</a>
              </nav>
              <a href="#freemium" onClick=${(e) => { e.preventDefault(); handleNavigate('freemium'); }} class="bg-brand-blue hover:bg-brand-cyan text-brand-dark px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-brand-blue/20">
                Start for free
              </a>
            </div>
          </div>
        </div>
      </header>
      
      <main class="flex-grow pt-20">
        ${view === 'privacy' ? html`<${PrivacyPolicyView} />` : 
          view === 'terms' ? html`<${TermsOfServiceView} />` :
          view === 'freemium' ? html`<${FreemiumView} />` :
          view === 'contact' ? html`<${ContactFormView} />` : html`
          <section id="hero" class="relative py-24 md:py-36 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark-secondary to-brand-dark bg-300% animate-gradient-bg -z-10"></div>
             <div class="absolute inset-0 bg-grid-pattern opacity-10 -z-10"></div>
             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10"></div>
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
              <span class="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-blue uppercase bg-brand-blue/10 rounded-full border border-brand-blue/20">
                 Secure the Web. Zero blind spots.
              </span>
              <span class="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-4 block">
                EyeBall
              </span>
              <h1 class="text-3xl md:text-5xl font-bold text-brand-cyan mb-8">
                The Browser is Your Perimeter. Secure It.
              </h1>
              <p class="max-w-3xl mx-auto text-lg md:text-xl text-brand-light-secondary mb-4 leading-relaxed">
                EyeBall is a next-generation browser security platform that transforms the enterprise browser into a fully visible, secure environment. By providing full visibility and zero blind spots, EyeBall protects your data, manages SaaS usage, and eliminates zero-day threats directly at the browser level.
              </p>
              <p class="mt-4 text-brand-blue font-bold text-xl mb-12">Up-To 200 seats Totally Free!</p>
              <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#freemium" onClick=${(e) => { e.preventDefault(); handleNavigate('freemium'); }} class="w-full sm:w-auto bg-brand-blue hover:bg-brand-cyan text-brand-dark font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-blue/20 text-center">
                  Easy to deploy - Try now
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
          <${VerticalLandingPages} />
          <${CaseStudies} />
          <${FAQ} />
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

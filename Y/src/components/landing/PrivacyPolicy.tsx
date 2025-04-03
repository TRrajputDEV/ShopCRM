// src/pages/PrivacyPolicy.jsx
import { Shield, Clock, Server, Lock, Users, Globe, Database, ExternalLink } from 'lucide-react';
import PageNavigation from '@/components/landing/PageNavigation';
import Footer from '@/components/landing/Footer';

const PrivacyPolicy = () => {
  const lastUpdated = 'March 15, 2024';
  
  const breadcrumbs = [
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageNavigation title="Privacy Policy" breadcrumbs={breadcrumbs} />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <div className="flex items-center text-gray-500">
                <Clock size={16} className="mr-1" />
                <span className="text-sm">Last Updated: {lastUpdated}</span>
              </div>
            </div>
            
            <div className="mb-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-start">
                <Shield className="flex-shrink-0 mr-3 text-orange-600" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Your Privacy Matters</h2>
                  <p className="text-gray-700">
                    At Shop CRM, we take your privacy seriously. This policy explains what information we collect,
                    how we use it, and the choices you have regarding your data. We designed our data practices to ensure
                    transparency and give you control over your information.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2 flex items-center">
                      <Users className="mr-2 text-orange-600" size={20} />
                      Account Information
                    </h3>
                    <p className="text-gray-700">
                      When you register for Shop CRM, we collect information such as your name, email address, 
                      business name, phone number, and payment details. This information is necessary to provide 
                      our services and communicate with you about your account.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2 flex items-center">
                      <Database className="mr-2 text-orange-600" size={20} />
                      Customer Data
                    </h3>
                    <p className="text-gray-700">
                      As you use our CRM system, you input and store information about your own customers. 
                      This may include names, contact information, purchase history, preferences, and notes. 
                      You control this data, and we process it according to your instructions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2 flex items-center">
                      <Server className="mr-2 text-orange-600" size={20} />
                      Usage Information
                    </h3>
                    <p className="text-gray-700">
                      We collect information about how you interact with our services, including log data, 
                      device information, IP address, browser type, pages viewed, features used, and other 
                      diagnostic data. This helps us improve our services and troubleshoot issues.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2 flex items-center">
                      <Globe className="mr-2 text-orange-600" size={20} />
                      Cookies and Similar Technologies
                    </h3>
                    <p className="text-gray-700">
                      We use cookies and similar tracking technologies to enhance your experience, analyze usage, 
                      and improve our marketing efforts. You can control cookies through your browser settings, 
                      although this may limit certain features of our services.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <div className="ml-4 space-y-4">
                  <p className="text-gray-700">We use the information we collect to:</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Send technical notices, updates, security alerts, and support messages</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Personalize and improve your experience</li>
                    <li>Develop new products and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Sharing and Disclosure</h2>
                <div className="ml-4 space-y-6">
                  <p className="text-gray-700">
                    We do not sell your personal information or your customers' data. We may share information in the following circumstances:
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">With Service Providers</h3>
                    <p className="text-gray-700">
                      We work with third-party service providers who provide hosting, maintenance, backup, storage, 
                      payment processing, analysis, and other services. These providers may access your information 
                      solely to perform these tasks on our behalf.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">For Legal Reasons</h3>
                    <p className="text-gray-700">
                      We may disclose information if required by law, regulation, legal process, or governmental request. 
                      We may also share information to protect the rights, property, and safety of our users, the public, 
                      or Shop CRM.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Business Transfers</h3>
                    <p className="text-gray-700">
                      If Shop CRM is involved in a merger, acquisition, or sale of assets, your information may be 
                      transferred as part of that transaction. We will notify you of any change in ownership or use 
                      of your information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">With Your Consent</h3>
                    <p className="text-gray-700">
                      We may share information with third parties when you give us explicit consent to do so.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                <div className="ml-4 space-y-4">
                  <div className="flex items-start">
                    <Lock className="flex-shrink-0 mr-3 text-orange-600 mt-1" />
                    <p className="text-gray-700">
                      We implement appropriate technical and organizational measures to protect your information 
                      against unauthorized access, alteration, disclosure, or destruction. These measures include 
                      encryption, access controls, regular security assessments, and employee training.
                      <br /><br />
                      While we strive to protect your information, no method of transmission over the Internet 
                      or electronic storage is 100% secure. We cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Access and Update</h3>
                    <p className="text-gray-700">
                      You can access and update certain information about yourself through your account settings.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Data Retention</h3>
                    <p className="text-gray-700">
                      We retain your information for as long as necessary to provide our services, comply with legal 
                      obligations, resolve disputes, and enforce our agreements. You can request deletion of your 
                      account by contacting our support team.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Communication Preferences</h3>
                    <p className="text-gray-700">
                      You can opt out of marketing communications by clicking the "unsubscribe" link in any email 
                      or updating your communication preferences in your account settings. We may still send you 
                      service-related communications.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Your Legal Rights</h3>
                    <p className="text-gray-700">
                      Depending on your location, you may have rights to:
                    </p>
                    <ul className="list-disc ml-6 text-gray-700 space-y-2 mt-2">
                      <li>Access personal information we hold about you</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Object to processing of your information</li>
                      <li>Request restriction of processing</li>
                      <li>Request transfer of your information</li>
                      <li>Withdraw consent</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. International Data Transfers</h2>
                <div className="ml-4">
                  <p className="text-gray-700">
                    We may transfer, store, and process your information in countries other than your own. 
                    When we do so, we ensure appropriate safeguards are in place to protect your information 
                    and comply with applicable data protection laws.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
                <div className="ml-4">
                  <p className="text-gray-700">
                    Our services are not directed to individuals under 16. We do not knowingly collect personal 
                    information from children. If we learn we have collected personal information from a child 
                    without parental consent, we will delete that information.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
                <div className="ml-4">
                  <p className="text-gray-700">
                    We may update this privacy policy from time to time. We will notify you of any significant 
                    changes by posting the new policy on this page and updating the "Last Updated" date. We 
                    encourage you to review this policy periodically.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                <div className="ml-4">
                  <p className="text-gray-700 mb-4">
                    If you have questions or concerns about this privacy policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-800 font-medium">Shop CRM Privacy Team</p>
                    <p className="text-gray-700">Email: privacy@shopcrm.com</p>
                    <p className="text-gray-700">Address: 123 Commerce Street, Suite 500, San Francisco, CA 94103</p>
                    <p className="text-gray-700">Phone: (555) 123-4567</p>
                  </div>
                </div>
              </section>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm">
                  © {new Date().getFullYear()} Shop CRM. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  <a href="/terms-of-service" className="text-orange-600 hover:text-orange-800 text-sm flex items-center">
                    Terms of Service <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
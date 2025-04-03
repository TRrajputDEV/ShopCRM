// src/pages/TermsOfService.jsx
import { Clock, FileText, AlertTriangle, Check, X, ExternalLink } from 'lucide-react';
import PageNavigation from '@/components/landing/PageNavigation';
import Footer from '../components/landing/Footer';

const TermsOfService = () => {
  const lastUpdated = 'March 15, 2024';
  const effectiveDate = 'April 1, 2024';
  
  const breadcrumbs = [
    { label: 'Terms of Service', path: '/terms-of-service' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageNavigation title="Terms of Service" breadcrumbs={breadcrumbs} />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
              <div className="flex items-center text-gray-500">
                <Clock size={16} className="mr-1" />
                <span className="text-sm">Last Updated: {lastUpdated}</span>
              </div>
            </div>
            
            <div className="mb-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex items-start">
                <FileText className="flex-shrink-0 mr-3 text-orange-600" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Agreement Overview</h2>
                  <p className="text-gray-700">
                    These Terms of Service ("Terms") govern your use of the Shop CRM platform and services 
                    ("Services") provided by Shop CRM, Inc. ("we," "us," or "our"). By accessing or using our 
                    Services, you agree to be bound by these Terms. If you do not agree to these Terms, 
                    please do not use our Services.
                  </p>
                  <p className="text-gray-700 mt-2">
                    These Terms are effective as of {effectiveDate} for all users.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Account Registration</h2>
                <div className="ml-4 space-y-4">
                  <p className="text-gray-700">
                    To access our Services, you may need to create an account. When you register, you agree to:
                  </p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Promptly update your account information as needed</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized access or use of your account</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    We reserve the right to disable any account if we reasonably believe you have violated these Terms.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Subscription and Payments</h2>
                <div className="ml-4 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Subscription Plans</h3>
                    <p className="text-gray-700">
                      We offer various subscription plans for our Services. The features, limitations, and pricing 
                      for each plan are described on our website. We may modify our subscription plans at any time,
                      with notice to affected subscribers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Terms</h3>
                    <p className="text-gray-700">
                      Subscription fees are billed in advance on a monthly or annual basis, depending on your 
                      selected plan. By providing payment information, you authorize us to charge the applicable 
                      subscription fees to your designated payment method.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Free Trials</h3>
                    <p className="text-gray-700">
                      We may offer free trial subscriptions. At the end of the trial period, your subscription 
                      will automatically convert to a paid subscription unless you cancel before the trial expires.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Refunds</h3>
                    <p className="text-gray-700">
                      Subscription fees are non-refundable except as expressly provided in these Terms or as 
                      required by applicable law. If you cancel your subscription, you will continue to have 
                      access to the Services until the end of your current billing period.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Your Data and Privacy</h2>
                <div className="ml-4 space-y-4">
                  <p className="text-gray-700">
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
                    protect your information when you use our Services. By using our Services, you agree 
                    to our collection and use of information as described in our Privacy Policy.
                  </p>
                  <p className="text-gray-700">
                    You retain all rights to your data uploaded to our Services. You grant us a limited 
                    license to use your data solely to provide and improve our Services.
                  </p>
                  <p className="text-gray-700">
                    You are responsible for ensuring that your collection and use of customer data through 
                    our Services complies with applicable laws and regulations, including obtaining any 
                    necessary consents.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
                <div className="ml-4 space-y-6">
                  <p className="text-gray-700">
                    You agree to use our Services only for lawful purposes and in accordance with these Terms.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                      <Check className="mr-2 text-green-600" size={20} />
                      Permitted Uses
                    </h3>
                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                      <li>Managing your customer relationships</li>
                      <li>Tracking and analyzing sales data</li>
                      <li>Communicating with your customers</li>
                      <li>Storing customer information in compliance with applicable laws</li>
                      <li>Integrating with compatible third-party services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                      <X className="mr-2 text-red-600" size={20} />
                      Prohibited Uses
                    </h3>
                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                      <li>Violating any applicable laws or regulations</li>
                      <li>Infringing the intellectual property rights of others</li>
                      <li>Harassing, threatening, or intimidating others</li>
                      <li>Distributing malware or other harmful code</li>
                      <li>Attempting to gain unauthorized access to our systems or other users' accounts</li>
                      <li>Reselling, duplicating, or reverse engineering our Services</li>
                      <li>Using our Services to send unsolicited communications (spam)</li>
                      <li>Overloading, flooding, or interfering with our Services</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
                <div className="ml-4 space-y-4">
                  <p className="text-gray-700">
                    Our Services, including all content, features, and functionality, are owned by Shop CRM, 
                    Inc. and are protected by copyright, trademark, and other intellectual property laws. 
                    These Terms do not grant you any right, title, or interest in our Services, content, or trademarks.
                  </p>
                  <p className="text-gray-700">
                    We welcome feedback on our Services. By providing feedback, you grant us a non-exclusive, 
                    perpetual, irrevocable, transferable right to use, modify, and incorporate your feedback 
                    into our Services without compensation to you.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitations of Liability</h2>
                <div className="ml-4 space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="flex-shrink-0 mr-3 text-orange-600 mt-1" />
                    <p className="text-gray-700">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SHOP CRM, INC. BE LIABLE FOR 
                      ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, 
                      INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR 
                      OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO 
                      USE, OUR SERVICES.
                      <br /><br />
                      OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATING TO THESE TERMS OR OUR 
                      SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO US DURING THE 12 MONTHS IMMEDIATELY 
                      PRECEDING THE EVENT GIVING RISE TO SUCH LIABILITY.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Disclaimers</h2>
                <div className="ml-4">
                  <p className="text-gray-700">
                    OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                    EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF 
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                    <br /><br />
                    WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS 
                    WILL BE CORRECTED, OR THAT OUR SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE 
                    FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
                <div className="ml-4 space-y-4">
                  <p className="text-gray-700">
                    You may terminate your account and subscription at any time through your account settings 
                    or by contacting our support team.
                  </p>
                  <p className="text-gray-700">
                    We may terminate or suspend your access to our Services immediately, without prior notice 
                    or liability, for any reason, including if you breach these Terms.
                  </p>
                  <p className="text-gray-700">
                    Upon termination, your right to use our Services will immediately cease. All provisions of 
                    these Terms that by their nature should survive termination shall survive, including ownership 
                    provisions, warranty disclaimers, indemnity, and limitations of liability.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
                <div className="ml-4">
                  <p className="text-gray-700">
                    We may update these Terms from time to time. We will notify you of any significant changes 
                    by posting the new Terms on this page and updating the "Last Updated" date. Your continued 
                    use of our Services after such changes constitutes your acceptance of the new Terms.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law and Dispute Resolution</h2>
                <div className="ml-4">
                  <p className="text-gray-700">
                    These Terms shall be governed by the laws of the State of California, without regard to its 
                    conflict of law provisions.
                    <br /><br />
                    Any dispute arising from or relating to these Terms or our Services shall be resolved exclusively 
                    through binding arbitration in San Francisco, California, except that you may bring a claim in 
                    small claims court if your claim qualifies.
                    <br /><br />
                    ANY ARBITRATION UNDER THESE TERMS WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS 
                    AND CLASS ACTIONS ARE NOT PERMITTED.
                  </p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
                <div className="ml-4">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-800 font-medium">Shop CRM Legal Department</p>
                    <p className="text-gray-700">Email: legal@shopcrm.com</p>
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
                  <a href="/privacy-policy" className="text-orange-600 hover:text-orange-800 text-sm flex items-center">
                    Privacy Policy <ExternalLink size={14} className="ml-1" />
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

export default TermsOfService;
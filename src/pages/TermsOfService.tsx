import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        {/* Ad at top of content */}
        <div className="mb-8">
          <AdSense 
            adSlot="1234567896" 
            adFormat="horizontal"
          />
        </div>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using PixelGuard ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PixelGuard provides a free, browser-based image compression and resizing tool that processes images entirely on the client side. The Service allows you to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Compress images to reduce file size</li>
              <li>Resize images to specific dimensions</li>
              <li>Convert images between supported formats (JPEG, PNG, WebP, AVIF, BMP, TIFF)</li>
              <li>Process images locally without uploads to our servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <h3 className="text-xl font-medium mb-2">3.1 Acceptable Use</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes. You are responsible for ensuring that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>You own the rights to or have permission to process any images you use with the Service</li>
              <li>Your use of the Service does not violate any applicable laws or regulations</li>
              <li>You do not use the Service to process illegal, harmful, or offensive content</li>
              <li>You do not attempt to interfere with or disrupt the Service</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-6">3.2 Copyright and Intellectual Property</h3>
            <p className="text-muted-foreground leading-relaxed">
              You retain all rights to images you process using PixelGuard. You are solely responsible for ensuring you have the necessary rights to process any images and that your use does not infringe upon any third-party intellectual property rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PixelGuard is provided on an "as is" and "as available" basis. We strive to maintain the Service's availability but do not guarantee:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Uninterrupted or error-free operation</li>
              <li>Freedom from viruses or other harmful components</li>
              <li>Accuracy or reliability of results</li>
              <li>Continued availability of any particular feature</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              All image processing occurs locally in your browser. We do not upload, store, or have access to your images. For details about our data practices, please review our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Browser Compatibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PixelGuard relies on modern web browser features including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Web Workers</li>
              <li>Canvas API</li>
              <li>File API</li>
              <li>Modern JavaScript (ES6+)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              The Service may not function properly on older browsers or devices. We recommend using the latest version of Chrome, Firefox, Safari, or Edge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the fullest extent permitted by law, PixelGuard and its operators shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of data, profits, revenue, or business opportunities</li>
              <li>Damage to your device or data resulting from Service use</li>
              <li>Errors or interruptions in the Service</li>
              <li>Actions or inactions of third parties</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Your use of the Service is at your sole risk. You are responsible for maintaining backups of your original images before processing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL MEET YOUR REQUIREMENTS OR THAT OPERATION WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Service may display advertisements and use analytics services provided by third parties, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Google AdSense for advertisements</li>
              <li>Google Analytics for usage analytics</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These services are governed by their own terms of service and privacy policies. We are not responsible for the content or practices of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless PixelGuard and its operators from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Service after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about these Terms of Service, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </section>

          <section className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              By using PixelGuard, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>

        {/* Ad at bottom of content */}
        <div className="mt-8">
          <AdSense 
            adSlot="1234567897" 
            adFormat="rectangle"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;

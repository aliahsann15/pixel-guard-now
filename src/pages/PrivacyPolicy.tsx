import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        {/* Ad at top of content */}
        <div className="mb-8">
          <AdSense 
            adSlot="1234567894" 
            adFormat="horizontal"
          />
        </div>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At PixelGuard, we take your privacy seriously. This Privacy Policy explains how we handle information when you use our image compression and resizing service. The core principle of our service is simple: <strong className="text-foreground">your files never leave your device</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Processing</h2>
            <h3 className="text-xl font-medium mb-2">Client-Side Only Processing</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All image processing happens directly in your web browser using client-side JavaScript and Web Workers. When you upload an image to PixelGuard:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>The image is processed entirely on your device</li>
              <li>No image data is transmitted to our servers or any third-party services</li>
              <li>No image data is stored locally or remotely</li>
              <li>Processing happens in your browser's memory and is cleared when you close the page</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2">Analytics Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use Google Analytics to understand how visitors use our website. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Page views and navigation patterns</li>
              <li>Browser type and version</li>
              <li>Device type and screen resolution</li>
              <li>Geographic location (country/city level)</li>
              <li>Referral source</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong className="text-foreground">Important:</strong> Google Analytics only collects page-level information. It does not and cannot access or track your images.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies for analytics purposes through Google Analytics and to serve advertisements through Google AdSense. These cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Help us understand website usage patterns</li>
              <li>Enable personalized advertising</li>
              <li>Do not access or track your uploaded images</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can disable cookies in your browser settings, though this may affect your experience with advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Google AdSense</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your visits to this and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google's Ads Settings</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              PixelGuard does not share, sell, or transmit your images to any third parties. The only third-party services we use are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-4">
              <li><strong className="text-foreground">Google Analytics:</strong> For website analytics (page-level only)</li>
              <li><strong className="text-foreground">Google AdSense:</strong> For displaying advertisements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Neither service has access to the images you process on PixelGuard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since all processing happens in your browser and no images are transmitted to our servers, your images remain completely secure and private. We implement industry-standard security measures for our website infrastructure, including HTTPS encryption for all connections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since we don't collect or store your images, there is no personal image data to access, modify, or delete. For analytics data collected by Google Analytics, you can:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Use browser extensions to block Google Analytics</li>
              <li>Disable cookies in your browser</li>
              <li>Use private/incognito browsing mode</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              PixelGuard does not knowingly collect any personal information from children under 13. Our service is designed to process images locally without collecting personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </section>
        </div>

        {/* Ad at bottom of content */}
        <div className="mt-8">
          <AdSense 
            adSlot="1234567895" 
            adFormat="rectangle"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

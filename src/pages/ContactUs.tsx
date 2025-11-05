import { Mail, MessageSquare, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdSense from '@/components/AdSense';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>

        {/* Ad after header */}
        <div className="mb-8">
          <AdSense 
            adSlot="1234567898" 
            adFormat="horizontal"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>Send us an email anytime</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:aliahsann15@gmail.com" 
                className="text-primary hover:underline text-lg font-medium"
              >
                aliahsann15@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                We typically respond within 24-48 hours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Feedback</CardTitle>
                  <CardDescription>Help us improve PixelGuard</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:aliahsann15@gmail.com" 
                className="text-primary hover:underline text-lg font-medium"
              >
                aliahsann15@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Share your suggestions and ideas
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                What types of questions can I ask?
              </h3>
              <p className="text-muted-foreground text-sm">
                We welcome questions about how to use PixelGuard, technical support issues, feature requests, partnership inquiries, and general feedback about our service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                How long does it take to get a response?
              </h3>
              <p className="text-muted-foreground text-sm">
                We aim to respond to all inquiries within 24-48 hours during business days. For urgent technical issues, please include "URGENT" in your email subject line.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                Do you offer business partnerships?
              </h3>
              <p className="text-muted-foreground text-sm">
                Yes! If you're interested in partnerships, integrations, or business inquiries, please email us at{' '}
                <a href="mailto:aliahsann15@gmail.com" className="text-primary hover:underline">
                  aliahsann15@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                Can you help with technical issues?
              </h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! When reporting technical issues, please include your browser name and version, operating system, and a description of the problem. Screenshots are always helpful.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-primary text-white border-0">
          <CardContent className="pt-6">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Your Privacy Matters</h3>
              <p className="opacity-90 mb-4">
                Remember, all image processing happens in your browser. We never see or store your images.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/privacy-policy">Read Our Privacy Policy</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Before contacting us, you might find helpful information in our{' '}
            <button 
              onClick={() => {
                window.location.href = '/#faq';
              }}
              className="text-primary hover:underline"
            >
              FAQ section
            </button>
          </p>
        </div>

        {/* Ad at bottom */}
        <div className="mt-8">
          <AdSense 
            adSlot="1234567899" 
            adFormat="rectangle"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;

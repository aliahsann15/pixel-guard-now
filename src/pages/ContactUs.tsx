import { Mail, MessageSquare, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';

const ContactUs = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SEO
        title="Contact PixelGuard — Image Compressor Support"
        description="Contact PixelGuard for help with private image compression, photo resizing, WebP export, feature requests, or browser-based image optimization support."
        path="/contact"
      />
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="mb-4 text-4xl font-bold sm:text-6xl">Contact PixelGuard Support</h1>
          <p className="text-muted-foreground text-lg">
            Need help with private image compression, photo resizing, WebP export, or a technical issue? Send us a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="glass-panel">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Mail className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>Questions about the image compressor</CardDescription>
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

          <Card className="glass-panel">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                  <MessageSquare className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <CardTitle>Feedback</CardTitle>
                  <CardDescription>Suggest better compression and resizing features</CardDescription>
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

        <Card className="glass-panel mb-12">
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

        <Card className="glass-panel border-primary/20 bg-gradient-subtle text-white">
          <CardContent className="pt-6">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Your Privacy Matters</h3>
              <p className="opacity-90 mb-4">
                Every image you optimize is processed locally in your browser. PixelGuard does not upload, view, or store your files.
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

      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;

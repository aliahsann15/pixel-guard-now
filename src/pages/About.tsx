import { Link } from 'react-router-dom';
import { Zap, Globe, Users, Heart, Lock, Sparkles, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdSense from '@/components/AdSense';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About PixelGuard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted, privacy-first image compression and resizing tool. Built for photographers, designers, bloggers, and anyone who values both quality and privacy.
          </p>
        </div>

        {/* AdSense Ad */}
        <div className="mb-12">
          <AdSense 
            adSlot="1234567900" 
            adFormat="horizontal"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Mission Section */}
        <Card className="p-8 mb-12 bg-gradient-subtle">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At PixelGuard, we believe that image optimization shouldn't come at the cost of your privacy. That's why we created a powerful, completely client-side tool that processes images directly in your browser—no uploads, no servers, no tracking.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide free, accessible, and secure image compression technology to everyone, whether you're optimizing photos for your blog, preparing images for social media, or reducing file sizes for faster website loading.
              </p>
            </div>
          </div>
        </Card>

        {/* What Makes Us Different */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What Makes PixelGuard Different
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Privacy First
                  </h3>
                  <p className="text-muted-foreground">
                    Your images are processed entirely in your browser using Web Workers and modern compression APIs. They never leave your device, ensuring complete privacy and security.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Lightning Fast
                  </h3>
                  <p className="text-muted-foreground">
                    No waiting for uploads or downloads. Process images instantly with our optimized compression algorithms that work at native browser speed.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Always Free
                  </h3>
                  <p className="text-muted-foreground">
                    No subscriptions, no hidden fees, no limitations. PixelGuard is completely free to use for personal and commercial projects.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Professional Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Advanced compression technology that maintains image quality while dramatically reducing file sizes. Perfect for web optimization.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Technology Section */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Technology & Innovation
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              PixelGuard is built using cutting-edge web technologies including React, TypeScript, and modern browser APIs. We leverage Web Workers for multi-threaded processing, ensuring your browser remains responsive even when compressing large batches of images.
            </p>
            <p className="leading-relaxed">
              Our compression engine supports multiple formats including JPEG, PNG, WebP, AVIF, BMP, and TIFF. We use industry-standard algorithms combined with browser-native compression capabilities to deliver optimal results.
            </p>
            <p className="leading-relaxed">
              The entire application runs client-side with zero backend dependencies, which means faster processing, lower latency, and absolute privacy. Your images are processed locally on your device and never transmitted over the internet.
            </p>
          </div>
        </Card>

        {/* AdSense Ad */}
        <div className="mb-12">
          <AdSense 
            adSlot="1234567901" 
            adFormat="rectangle"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Who Uses PixelGuard */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Who Uses PixelGuard
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Content Creators
              </h3>
              <p className="text-sm text-muted-foreground">
                Bloggers and YouTubers optimizing images for faster page loads
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Designers
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional designers preparing assets for web and mobile
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Developers
              </h3>
              <p className="text-sm text-muted-foreground">
                Web developers optimizing website performance and load times
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Photographers
              </h3>
              <p className="text-sm text-muted-foreground">
                Photographers sharing high-quality images online
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Social Media Managers
              </h3>
              <p className="text-sm text-muted-foreground">
                Optimizing images for Facebook, Instagram, Twitter, and more
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Privacy-Conscious Users
              </h3>
              <p className="text-sm text-muted-foreground">
                Anyone who values data security and privacy
              </p>
            </Card>
          </div>
        </div>

        {/* Commitment Section */}
        <Card className="p-8 mb-12 bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our Commitment to You
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Privacy:</strong> Your images and data will never be collected, stored, or shared.</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Performance:</strong> We continuously improve our algorithms to deliver faster, better compression.</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Accessibility:</strong> PixelGuard will always be free and accessible to everyone.</span>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong className="text-foreground">Support:</strong> We're here to help. Contact us anytime with questions or feedback.</span>
            </li>
          </ul>
        </Card>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-subtle p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We'd love to hear from you. Get in touch with our team.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

import { Link } from 'react-router-dom';
import { Zap, Globe, Users, Heart, Lock, Sparkles, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SEO
        title="About PixelGuard — Private Browser Image Compression"
        description="Learn how PixelGuard compresses images and resizes photos locally in your browser, helping creators reduce file size without uploading private files."
        path="/about"
      />
      <Header />

      <main className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-6xl">
            About PixelGuard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            PixelGuard is a privacy-first image compressor and photo resizer for creators, developers, marketers, and everyday users who need smaller image files without uploading private photos to a server.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="glass-panel mb-12 bg-gradient-subtle p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
              <Heart className="h-6 w-6 text-sky-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At PixelGuard, we believe image optimization should be fast, useful, and private by default. That is why our compressor processes images locally in your browser instead of sending your photos, screenshots, or design assets to a remote server.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to make free browser-based image compression accessible to everyone, whether you are preparing blog graphics, resizing social media images, or reducing file sizes for faster web pages.
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
            <Card className="glass-panel p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Lock className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Privacy First
                  </h3>
                  <p className="text-muted-foreground">
                    Your images are processed in your browser using Web Workers and modern canvas APIs. They never need to leave your device for compression, resizing, or previewing.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-panel p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Zap className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Lightning Fast
                  </h3>
                  <p className="text-muted-foreground">
                    Skip the upload queue. PixelGuard starts optimizing as soon as your browser reads the image, which keeps the workflow fast for everyday web images.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-panel p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Globe className="h-6 w-6 text-sky-300" />
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

            <Card className="glass-panel p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Sparkles className="h-6 w-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Professional Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Fine-tune quality, dimensions, and output format so your images stay useful for websites, email, social posts, and portfolios.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Technology Section */}
        <Card className="glass-panel mb-12 p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Technology & Innovation
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              PixelGuard is built with React, TypeScript, Web Workers, canvas processing, and the Pica image resizing library. The processing work runs off the main interface so the app stays responsive while optimizing an image.
            </p>
            <p className="leading-relaxed">
              PixelGuard accepts JPEG, PNG, WebP, BMP, and TIFF files and can export common web-friendly formats such as JPEG, PNG, and WebP. Browser-native encoding helps you balance quality and file size.
            </p>
            <p className="leading-relaxed">
              The core image workflow runs client-side, which means less waiting, no image upload step, and a clear privacy advantage for sensitive photos or business assets.
            </p>
          </div>
        </Card>

        {/* Who Uses PixelGuard */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Who Uses PixelGuard
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-panel p-6 text-center">
              <Users className="mx-auto mb-4 h-12 w-12 text-sky-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Content Creators
              </h3>
              <p className="text-sm text-muted-foreground">
                Bloggers and publishers reducing image file size for faster page loads
              </p>
            </Card>

            <Card className="glass-panel p-6 text-center">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-sky-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Designers
              </h3>
              <p className="text-sm text-muted-foreground">
                Designers preparing lighter assets for web, email, and mobile layouts
              </p>
            </Card>

            <Card className="glass-panel p-6 text-center">
              <Globe className="mx-auto mb-4 h-12 w-12 text-sky-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Developers
              </h3>
              <p className="text-sm text-muted-foreground">
                Developers improving image weight, load time, and Core Web Vitals
              </p>
            </Card>

            <Card className="glass-panel p-6 text-center">
              <Heart className="mx-auto mb-4 h-12 w-12 text-sky-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Photographers
              </h3>
              <p className="text-sm text-muted-foreground">
                Photographers sharing high-quality images online
              </p>
            </Card>

            <Card className="glass-panel p-6 text-center">
              <Zap className="mx-auto mb-4 h-12 w-12 text-sky-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Social Media Managers
              </h3>
              <p className="text-sm text-muted-foreground">
                Resizing and compressing posts, profile images, and campaign assets
              </p>
            </Card>

            <Card className="glass-panel p-6 text-center">
              <Shield className="mx-auto mb-4 h-12 w-12 text-sky-300" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Privacy-Conscious Users
              </h3>
              <p className="text-sm text-muted-foreground">
                Anyone who wants image compression without uploading files
              </p>
            </Card>
          </div>
        </div>

        {/* Commitment Section */}
        <Card className="glass-panel mb-12 border-primary/20 bg-primary/5 p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Our Commitment to You
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
              <span><strong className="text-foreground">Privacy:</strong> Your images and data will never be collected, stored, or shared.</span>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
              <span><strong className="text-foreground">Performance:</strong> We continuously improve our algorithms to deliver faster, better compression.</span>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
              <span><strong className="text-foreground">Accessibility:</strong> PixelGuard will always be free and accessible to everyone.</span>
            </li>
            <li className="flex items-start gap-3">
              <Heart className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-300" />
              <span><strong className="text-foreground">Support:</strong> We're here to help. Contact us anytime with questions or feedback.</span>
            </li>
          </ul>
        </Card>

        {/* Contact CTA */}
        <div className="glass-panel rounded-[2rem] bg-gradient-subtle p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We'd love to hear from you. Get in touch with our team.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-2xl bg-white font-semibold text-slate-950 hover:bg-slate-100">
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

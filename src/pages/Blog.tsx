import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdSense from '@/components/AdSense';

const blogPosts = [
  {
    id: 1,
    title: 'Why Client-Side Image Compression Matters for Privacy',
    excerpt: 'Learn why processing images in your browser is more secure than uploading them to servers, and how PixelGuard protects your privacy.',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Privacy'
  },
  {
    id: 2,
    title: 'The Complete Guide to Image Formats: JPEG vs PNG vs WebP vs AVIF',
    excerpt: 'Understand the differences between image formats and choose the best one for your needs. Compare quality, file size, and browser support.',
    date: '2025-01-10',
    readTime: '8 min read',
    category: 'Guide'
  },
  {
    id: 3,
    title: 'How to Optimize Images for Web Performance',
    excerpt: 'Discover the best practices for reducing image file sizes while maintaining quality. Improve your website speed and SEO rankings.',
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Web Performance'
  },
  {
    id: 4,
    title: 'Best Image Sizes for Social Media Platforms in 2025',
    excerpt: 'Complete guide to optimal image dimensions for Facebook, Instagram, Twitter, LinkedIn, and other social media platforms.',
    date: '2024-12-28',
    readTime: '7 min read',
    category: 'Social Media'
  },
  {
    id: 5,
    title: 'Batch Image Processing: Save Time with Bulk Compression',
    excerpt: 'Learn how to compress multiple images at once and streamline your workflow with batch processing techniques.',
    date: '2024-12-20',
    readTime: '4 min read',
    category: 'Tips & Tricks'
  },
  {
    id: 6,
    title: 'Understanding Image Quality vs File Size Trade-offs',
    excerpt: 'Find the perfect balance between image quality and file size for different use cases, from web to print.',
    date: '2024-12-15',
    readTime: '6 min read',
    category: 'Guide'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">PixelGuard</span>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Image Optimization Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tips, guides, and best practices for image compression, web performance, and privacy-focused image processing.
          </p>
        </div>

        {/* AdSense Ad */}
        <div className="mb-12">
          <AdSense 
            adSlot="1234567902" 
            adFormat="horizontal"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="p-6 hover:shadow-soft transition-shadow flex flex-col">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {post.category}
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* AdSense Ad */}
        <div className="mb-12">
          <AdSense 
            adSlot="1234567903" 
            adFormat="rectangle"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 text-center bg-gradient-subtle">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest tips and tricks for image optimization, web performance, and privacy-focused technology delivered to your inbox.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Us for Updates
            </Button>
          </Link>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8 bg-card">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PixelGuard. All rights reserved. | 
            <Link to="/privacy-policy" className="hover:text-primary ml-2">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="hover:text-primary ml-2">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;

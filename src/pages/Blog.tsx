import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogPosts';
import SEO from '@/components/SEO';

const Blog = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SEO
        title="Image Compression Blog — WebP, Photo Resizing & Web Performance"
        description="Read practical guides on image compression, WebP conversion, photo resizing, privacy-first tools, and reducing image file size for faster websites."
        path="/blog"
      />
      <Header />

      <main className="container mx-auto max-w-6xl px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-6xl">
            Image Compression and Web Performance Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical guides for compressing images, resizing photos, choosing JPEG, PNG, or WebP, and improving website speed without compromising privacy.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`}>
              <Card className="glass-panel flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <div className="flex-1">
                  <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-sky-300">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-white/10 pt-4 text-xs text-muted-foreground">
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
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="glass-panel bg-gradient-subtle p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get practical image optimization tips, private compression workflows, and web performance resources from PixelGuard.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-2xl bg-white font-semibold text-slate-950 hover:bg-slate-100">
              Contact Us for Updates
            </Button>
          </Link>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getBlogPostBySlug, blogPosts } from '@/data/blogPosts';
import SEO from '@/components/SEO';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Blog Post Not Found — PixelGuard"
          description="The PixelGuard image optimization article you requested could not be found. Browse image compression, resizing, and WebP guides."
          path="/blog"
        />
        <Header />
        <main className="container mx-auto px-4 py-12 max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SEO
        title={`${post.title} — PixelGuard Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />
      <Header />

      <main className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-sky-300">
              {post.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-invert glass-panel mb-12 max-w-none rounded-[2rem] p-6 sm:p-8
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-muted prose-pre:border prose-pre:border-white/10
              prose-table:border-collapse prose-th:border prose-th:border-white/10 prose-th:p-2 prose-th:bg-muted
              prose-td:border prose-td:border-white/10 prose-td:p-2"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />

          {/* CTA Section */}
          <Card className="glass-panel mb-12 bg-gradient-subtle p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Ready to Try PixelGuard?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Reduce image file size, resize photos, and export web-friendly formats with private browser-based processing.
            </p>
            <Link to="/">
              <Button size="lg" className="rounded-2xl bg-white font-semibold text-slate-950 hover:bg-slate-100">
                Start Compressing Now
              </Button>
            </Link>
          </Card>

        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                  <Card className="glass-panel h-full p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                    <div className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-sky-300">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

import { motion } from 'framer-motion';
import { Zap, Maximize2, FileType, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Powerful Compression',
    description: 'Reduce file sizes by up to 80% with minimal quality loss.',
  },
  {
    icon: Maximize2,
    title: 'Easy Resizing',
    description: 'Set exact dimensions or use presets for social platforms.',
  },
  {
    icon: FileType,
    title: 'Format Flexibility',
    description: 'Convert between JPEG, PNG, WebP, AVIF, BMP, TIFF.',
  },
  {
    icon: Shield,
    title: 'Built for Privacy',
    description: 'All processing happens locally in your browser; nothing is uploaded.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose PixelGuard?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional-grade image optimization with privacy and simplicity at its core.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-soft transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

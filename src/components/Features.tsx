import { motion } from 'framer-motion';
import { Zap, Maximize2, FileType, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Reduce Image File Size',
    description: 'Compress photos, screenshots, and web graphics with a practical quality slider for smaller files.',
  },
  {
    icon: Maximize2,
    title: 'Resize Photos Precisely',
    description: 'Set exact pixel dimensions or use quick width presets while keeping the original aspect ratio.',
  },
  {
    icon: FileType,
    title: 'Export JPEG, PNG, or WebP',
    description: 'Convert supported browser images into common web-friendly formats for websites, email, and social media.',
  },
  {
    icon: Shield,
    title: 'Private Browser Processing',
    description: 'Your images are optimized on your device with no upload step, no signup, and no server-side file storage.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Image Optimization Built for Privacy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A fast, free image compressor and photo resizer for people who need smaller files without sending private images to a server.
          </p>
        </motion.div>

        <div className="grid grid-flow-dense gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-white/10 bg-white/[0.055] p-6 shadow-card backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.08] hover:shadow-soft">
                <div className="mb-8 flex items-center justify-between">
                  <div className="w-fit rounded-2xl border border-white/10 bg-white/10 p-3 shadow-[0_0_34px_rgba(37,99,235,0.16)]">
                    <feature.icon className="h-6 w-6 text-sky-300 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <span className="text-sm font-semibold text-white/30">0{index + 1}</span>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-primary/60 via-success/40 to-transparent opacity-60" />
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="leading-7 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

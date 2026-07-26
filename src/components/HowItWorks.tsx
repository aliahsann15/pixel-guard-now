import { motion } from 'framer-motion';
import { Upload, Settings, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload',
    description: 'Choose a JPEG, PNG, WebP, BMP, or TIFF image from your device.',
    number: '01',
  },
  {
    icon: Settings,
    title: 'Adjust',
    description: 'Set compression quality, output format, and exact resize dimensions.',
    number: '02',
  },
  {
    icon: Download,
    title: 'Download',
    description: 'Preview the optimized result and save the compressed image locally.',
    number: '03',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#06101f] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-40" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            How to Compress an Image Online
          </h2>
          <p className="text-lg text-muted-foreground">
            Optimize images in your browser in three simple steps
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7 text-center shadow-card backdrop-blur-xl">
                  <div className="relative inline-block mb-7">
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"></div>
                    <div className="relative rounded-3xl border border-white/10 bg-white/10 p-6">
                      <step.icon className="h-10 w-10 text-sky-300" />
                    </div>
                    <span className="absolute -right-3 -top-3 rounded-full border border-white/10 bg-slate-950 px-2.5 py-1 text-xs font-bold text-success">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-full top-1/2 h-px w-full -translate-x-1/2 bg-gradient-to-r from-primary/60 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

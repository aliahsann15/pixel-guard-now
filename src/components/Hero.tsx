import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ImageDown, LockKeyhole, SlidersHorizontal } from 'lucide-react';
import heroImage from '@/assets/hero-privacy-compression.png';

const Hero = () => {
  const scrollToTool = () => {
    document.getElementById('tool')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative -mt-10 isolate overflow-hidden bg-[#06101f] py-20 text-white sm:py-28 lg:min-h-[calc(100vh-4rem)] lg:py-24">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(29,116,243,0.28),transparent_34%),radial-gradient(circle_at_82%_56%,rgba(28,190,116,0.22),transparent_34%),linear-gradient(135deg,#06101f_0%,#091827_48%,#020617_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:54px_54px] opacity-30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-center lg:mx-0 lg:text-left"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 shadow-2xl shadow-primary/10 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_24px_hsl(var(--success))]" />
              Free private image compressor and resizer
            </div>

            <h1 className="max-w-5xl text-balance text-[clamp(3rem,7.2vw,6.75rem)] font-bold leading-[0.94] tracking-normal text-white">
              Compress images online without uploading them.
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
              PixelGuard helps you reduce image file size, resize photos, and export JPEG, PNG, or WebP directly in your browser. Your images are processed locally on your device, so there is no upload, no signup, and no server storage.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToTool}
                className="group h-12 bg-white px-6 font-semibold text-slate-950 shadow-[0_18px_60px_rgba(37,99,235,0.28)] hover:bg-slate-100"
              >
                Compress Images Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-12 border-white/20 bg-white/5 px-6 font-semibold text-white backdrop-blur hover:bg-white/10 hover:text-white"
              >
                See How It Works
              </Button>
            </div>

            <div className="mt-9 grid gap-3 text-left text-sm text-slate-300 sm:grid-cols-3">
              {[
                { icon: LockKeyhole, label: 'Client-side privacy' },
                { icon: SlidersHorizontal, label: 'Quality and resize control' },
                { icon: ImageDown, label: 'JPEG, PNG, WebP output' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur">
                  <item.icon className="h-4 w-4 text-success" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:-ml-24 lg:w-[165%] xl:-ml-32 xl:w-[178%] 2xl:-ml-40 2xl:w-[188%]"
          >
            <div className="absolute inset-x-8 bottom-8 top-16 rounded-[3rem] bg-primary/20 blur-3xl" />
            <img
              src={heroImage}
              alt="Private browser image compressor showing local photo resizing, file size reduction, and WebP conversion"
              className="relative mb-20 -mt-20 -ml-32 w-full max-w-none drop-shadow-[0_34px_95px_rgba(14,165,233,0.24)]"
            />
            <div className="absolute bottom-2 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-xl sm:left-[12%] sm:right-auto sm:w-[22rem] lg:bottom-6 xl:bottom-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-success/10 text-success">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">No upload required</p>
                  <p className="text-sm text-slate-400">Images are processed on your device.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

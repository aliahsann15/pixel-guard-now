import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is PixelGuard really a no-upload image compressor?',
    answer: 'No, absolutely not. All image processing happens entirely in your browser using Web Workers. Your files are never uploaded to any server. This is the core privacy promise of PixelGuard.',
  },
  {
    question: 'What image formats can I compress?',
    answer: 'PixelGuard accepts JPEG, PNG, WebP, BMP, and TIFF image files up to 50MB. For output, you can keep the default format behavior or choose JPEG, PNG, or WebP from the export settings.',
  },
  {
    question: 'What is the maximum image size?',
    answer: 'The current limit is 50MB per file. This is a browser memory limitation to ensure smooth performance. For most use cases, this is more than sufficient.',
  },
  {
    question: 'Is this image compressor free?',
    answer: 'Yes, PixelGuard is completely free to use. The service is ad-supported to keep it free for everyone while maintaining our privacy-first approach.',
  },
  {
    question: 'How does browser image compression work?',
    answer: 'We use advanced browser APIs and the Pica library to perform high-quality image resizing and compression. The quality slider lets you balance file size against image quality to meet your needs.',
  },
  {
    question: 'Can I compress multiple images at once?',
    answer: 'PixelGuard currently optimizes one image at a time. This keeps the workflow simple, responsive, and reliable for large photos or detailed graphics.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-success/10 blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
            Image Compressor FAQ
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear answers about private compression, resizing, supported formats, and downloads
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.055] px-6 shadow-card backdrop-blur-xl">
                  <AccordionTrigger className="text-left hover:no-underline hover:text-white">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="leading-7 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

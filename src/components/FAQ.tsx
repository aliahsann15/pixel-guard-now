import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Do my images leave my device?',
    answer: 'No, absolutely not. All image processing happens entirely in your browser using Web Workers. Your files are never uploaded to any server. This is the core privacy promise of PixelGuard.',
  },
  {
    question: 'What formats are supported?',
    answer: 'PixelGuard supports JPEG, PNG, WebP, AVIF, BMP, and TIFF formats. You can convert between any of these formats during compression.',
  },
  {
    question: 'How large a file can I compress?',
    answer: 'The current limit is 50MB per file. This is a browser memory limitation to ensure smooth performance. For most use cases, this is more than sufficient.',
  },
  {
    question: 'Is PixelGuard free?',
    answer: 'Yes, PixelGuard is completely free to use. The service is ad-supported to keep it free for everyone while maintaining our privacy-first approach.',
  },
  {
    question: 'How does the compression work?',
    answer: 'We use advanced browser APIs and the Pica library to perform high-quality image resizing and compression. The quality slider lets you balance file size against image quality to meet your needs.',
  },
  {
    question: 'Can I compress multiple images at once?',
    answer: 'Currently, PixelGuard processes one image at a time to ensure optimal quality and performance. Batch processing may be added in future updates.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about PixelGuard
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
                <AccordionItem value={`item-${index}`} className="border border-border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
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

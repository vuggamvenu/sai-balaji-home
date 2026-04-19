import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sai Balaji Co-living PG, Marathahalli" },
      { name: "description", content: "Call, WhatsApp or visit Sai Balaji Co-living PG in Marathahalli, Bangalore. We're available 24/7 to answer your questions." },
      { property: "og:title", content: "Contact Sai Balaji Co-living PG" },
      { property: "og:description", content: "Get in touch — call, WhatsApp or visit us in Marathahalli." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Phone, title: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999", cta: "Call now" },
  { icon: MessageCircle, title: "WhatsApp", value: "Chat instantly", href: "https://wa.me/919999999999", cta: "Open WhatsApp" },
  { icon: Mail, title: "Email", value: "hello@saibalajipg.in", href: "mailto:hello@saibalajipg.in", cta: "Send email" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find you the perfect room."
        subtitle="Reach out anytime — we're happy to answer questions, share availability, or schedule a visit."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground"><c.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-primary group-hover:underline">{c.cta} →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Visit us in person.</h2>
            <p className="mt-4 text-muted-foreground">
              Drop by for a tour — see the rooms, taste the food, meet the team. We're available 24/7 for check-ins and queries.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>XP37+X56, Gulmohar Enclave Rd, Silver Springs Layout, Marathahalli, Bengaluru 560037</span></li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>Open 24/7 — Walk-ins welcome anytime</span></li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=XP37%2BX56%20Gulmohar%20Enclave%20Rd%20Silver%20Springs%20Layout%20Marathahalli%20Bengaluru%20560037&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              className="block h-[380px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { MapPin, ShoppingBag, Hospital, Bus, Train } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBar } from "@/components/cta-bar";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & Nearby — Sai Balaji Co-living PG, Marathahalli" },
      { name: "description", content: "Located in Silver Springs Layout, Marathahalli — minutes from Whitefield. Walk to Trends, Zudio, Westside and Star Bazaar." },
      { property: "og:title", content: "Location — Sai Balaji Co-living PG" },
      { property: "og:description", content: "Prime PG location in Marathahalli, near Whitefield." },
    ],
  }),
  component: LocationPage,
});

const nearby = [
  { icon: ShoppingBag, title: "Shopping", items: ["Trends", "Zudio", "Westside", "Star Bazaar"], note: "All within 100 m" },
  { icon: Hospital, title: "Healthcare", items: ["Yashomati Hospital", "Sankara Eye Hospital"], note: "Nearby clinics & pharmacies" },
  { icon: Bus, title: "Transport", items: ["BMTC bus stops", "Auto stand", "Cab pickup points"], note: "Easy commute to Whitefield" },
  { icon: Train, title: "Tech Parks", items: ["EPIP Zone", "ITPL Whitefield", "Brookefield"], note: "Quick access via main road" },
];

function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Location"
        title="Right where you want to be — Marathahalli, Bangalore."
        subtitle="A prime residential pocket in Silver Springs Layout, with shopping, healthcare and tech parks all within easy reach."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-3xl border border-border lg:col-span-3">
            <iframe
              title="Sai Balaji Co-living PG location map"
              src="https://www.google.com/maps?q=XP37%2BX56%20Gulmohar%20Enclave%20Rd%20Silver%20Springs%20Layout%20Marathahalli%20Bengaluru%20560037&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[420px] w-full sm:h-[480px]"
            />
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><MapPin className="h-5 w-5" /></div>
              <h2 className="mt-4 font-display text-2xl font-semibold">Our Address</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Sai Balaji Co-living PG<br />
                XP37+X56, Gulmohar Enclave Rd,<br />
                Silver Springs Layout, Marathahalli,<br />
                Bengaluru, Karnataka 560037
              </p>
              <a
                href="https://maps.google.com/?q=XP37%2BX56+Gulmohar+Enclave+Rd+Silver+Springs+Layout+Marathahalli+Bengaluru+560037"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Nearby Places</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Everything close by.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((n) => (
              <article key={n.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/20 text-accent-foreground"><n.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-semibold">{n.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                  {n.items.map((i) => <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {i}</li>)}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">{n.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBar />
    </>
  );
}

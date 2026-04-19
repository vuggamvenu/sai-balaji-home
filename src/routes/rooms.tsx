import { createFileRoute } from "@tanstack/react-router";
import { Bed, Wind, Bath, Briefcase, Trees, WashingMachine, Building2, Car, ShieldCheck, KeyRound } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBar } from "@/components/cta-bar";
import room1 from "@/assets/room-1.jpg";
import balcony from "@/assets/balcony.jpg";
import heroRoom from "@/assets/hero-room.jpg";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Facilities — Sai Balaji Co-living PG, Marathahalli" },
      { name: "description", content: "Bright, well-ventilated PG rooms with private bathroom, work desk, balcony and modern facilities in Marathahalli, Bangalore." },
      { property: "og:title", content: "Rooms & Facilities — Sai Balaji Co-living PG" },
      { property: "og:description", content: "Modern PG rooms with private bath, work desk and balcony in Marathahalli." },
    ],
  }),
  component: RoomsPage,
});

const features = [
  { icon: Bed, title: "Comfortable Bed", desc: "Quality mattress and fresh linens for restful sleep." },
  { icon: Bath, title: "Private Bathroom", desc: "Each room features its own clean, attached bathroom." },
  { icon: Briefcase, title: "Work Desk", desc: "Dedicated desk and chair — perfect for WFH or studies." },
  { icon: Trees, title: "Balcony / Terrace", desc: "Fresh air and natural light from a private balcony." },
  { icon: Wind, title: "Great Ventilation", desc: "Cross-ventilated rooms designed for Bangalore weather." },
  { icon: WashingMachine, title: "Washing Machine", desc: "Shared laundry facilities available on-site." },
  { icon: Building2, title: "Lift Facility", desc: "Easy access to all floors via the elevator." },
  { icon: Car, title: "Spacious Parking", desc: "Plenty of room for two-wheelers and cars." },
  { icon: ShieldCheck, title: "24/7 Security", desc: "Round-the-clock security and CCTV monitoring." },
  { icon: KeyRound, title: "Contactless Check-in", desc: "Smooth, no-fuss move-in and check-out process." },
];

function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & Facilities"
        title="Modern, clean rooms designed for everyday comfort."
        subtitle="Every room is thoughtfully equipped to make you feel at home from day one — private bathrooms, balcony access, and great ventilation included."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2">
            <img src={heroRoom} alt="Spacious clean PG room with desk and balcony" width={1920} height={1280} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={room1} alt="Cozy single PG room with private bathroom" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img src={balcony} alt="Bright balcony with plants and natural light" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">In Every Room</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Built around your daily comfort.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBar />
    </>
  );
}

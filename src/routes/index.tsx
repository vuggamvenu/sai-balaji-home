import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Utensils,
  Wifi,
  Sparkles,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle2,
  Phone,
  Bed,
  Wind,
  Car,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBar } from "@/components/cta-bar";
import heroRoom from "@/assets/hero-room.jpg";
import food from "@/assets/food.jpg";
import balcony from "@/assets/balcony.jpg";
import building from "@/assets/building.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sai Balaji Co-living PG — Comfortable & Affordable PG in Bangalore" },
      { name: "description", content: "Premium co-living PG in Marathahalli, Bangalore. Clean rooms, hygienic home-cooked meals, 24/7 security and easy access to Whitefield." },
      { property: "og:title", content: "Sai Balaji Co-living PG — Marathahalli, Bangalore" },
      { property: "og:description", content: "Comfortable & affordable co-living PG in Bangalore. Book your stay today." },
    ],
  }),
  component: HomePage,
});

const amenities = [
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Utensils, label: "Home-cooked Meals" },
  { icon: Bed, label: "Private Bathroom" },
  { icon: Wind, label: "Great Ventilation" },
  { icon: Wifi, label: "Wi-Fi Ready" },
  { icon: Sparkles, label: "Daily Cleaning" },
  { icon: Car, label: "Spacious Parking" },
  { icon: Building2, label: "Lift Facility" },
];

const testimonials = [
  { name: "Priya R.", text: "The food is delicious, and the place is super clean and hygienic. Truly home away from home." },
  { name: "Arjun M.", text: "The rooms are clean and well maintained. Loved the balcony and the natural light." },
  { name: "Karthik S.", text: "Parking area is good and budget-friendly. Great value for the location." },
  { name: "Sneha P.", text: "Staff are friendly and the place feels safe. Highly recommend for working professionals." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Star className="h-3.5 w-3.5 fill-primary" /> 4.7 / 5 on Google · 200+ happy residents
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Comfortable & Affordable Co-Living in <span className="text-primary">Bangalore</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sai Balaji Co-living PG offers clean, hygienic and budget-friendly stays for working professionals and students in Marathahalli — minutes from Whitefield.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <a href="tel:+919999999999"><Phone className="h-4 w-4" /> Book Your Stay Now</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/rooms">Explore Rooms <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                { v: "4.7★", l: "Google Rating" },
                { v: "24/7", l: "Security" },
                { v: "100m", l: "To Shopping" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-warm blur-2xl opacity-70" style={{ background: "var(--gradient-warm)" }} />
            <div className="overflow-hidden rounded-3xl shadow-elegant" style={{ boxShadow: "var(--shadow-elegant)" }}>
              <img src={heroRoom} alt="Clean modern PG room with balcony in Marathahalli, Bangalore" width={1920} height={1280} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-soft sm:block" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20"><CheckCircle2 className="h-5 w-5 text-accent-foreground" /></div>
                <div>
                  <p className="text-sm font-semibold">Move-in Ready</p>
                  <p className="text-xs text-muted-foreground">Contactless check-in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About Us</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">A clean, friendly home in the heart of Marathahalli.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-3">
            <p>
              We've designed Sai Balaji Co-living PG around the things that matter most — hygiene, safety, good food and a sense of community. Whether you're a working professional from a nearby tech park or a student new to the city, you'll find a comfortable, well-maintained space to call home.
            </p>
            <p>
              Our prime location in Silver Springs Layout puts you within walking distance of Trends, Zudio, Westside and Star Bazaar, with great public transport access to Whitefield and beyond.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Clean, well-ventilated rooms",
                "Hygienic home-cooked meals",
                "Friendly, professional staff",
                "Safe & secure environment",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Amenities</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">Everything you need, thoughtfully included.</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {amenities.map((a) => (
            <div key={a.label} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft" style={{ ["--tw-shadow" as never]: "var(--shadow-soft)" }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <a.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground">{a.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="bg-secondary/30">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-3xl">
            <img src={balcony} alt="Bright PG room balcony with plants" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Rooms & Facilities</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Bright rooms with everything you need to settle in.</h2>
            <p className="mt-4 text-muted-foreground">
              Each room comes with a private bathroom, work desk, and a balcony or terrace access. Excellent ventilation and natural light keep your space fresh year-round.
            </p>
            <Button asChild className="mt-6 gap-2"><Link to="/rooms">See all rooms <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Food & Dining</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Hygienic, delicious meals — just like home.</h2>
          <p className="mt-4 text-muted-foreground">
            Enjoy fresh North Indian and South Indian meals prepared in our hygienic kitchen, served on our open rooftop dining area.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3"><span className="font-display text-primary">Breakfast</span><span className="text-muted-foreground">Idly, Dosa, Poori, Chapathi</span></li>
            <li className="flex gap-3"><span className="font-display text-primary">Lunch</span><span className="text-muted-foreground">Rice, Dal, Curry, Buttermilk</span></li>
            <li className="flex gap-3"><span className="font-display text-primary">Dinner</span><span className="text-muted-foreground">Balanced, healthy & wholesome</span></li>
          </ul>
          <Button asChild variant="outline" className="mt-6 gap-2"><Link to="/food">View full menu <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="order-1 overflow-hidden rounded-3xl lg:order-2">
          <img src={food} alt="Hygienic North and South Indian thali meal" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Reviews</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Loved by our residents.</h2>
            <div className="mt-4 inline-flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
              <span className="ml-2 text-sm font-semibold text-foreground">4.7 on Google</span>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION TEASER */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Location</p>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Right where you want to be.</h2>
          <p className="mt-4 text-muted-foreground">
            Silver Springs Layout, Marathahalli — a prime residential pocket with quick access to Whitefield tech parks, shopping and healthcare.
          </p>
          <div className="mt-6 grid gap-3 text-sm">
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>Trends, Zudio, Westside, Star Bazaar — within 100 m</span></div>
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>Yashomati Hospital & Sankara Eye Hospital nearby</span></div>
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>Excellent public transport to Whitefield</span></div>
          </div>
          <Button asChild className="mt-6 gap-2"><Link to="/location">View on map <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img src={building} alt="Sai Balaji Co-living PG building exterior" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <CtaBar />
    </>
  );
}

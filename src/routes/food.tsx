import { createFileRoute } from "@tanstack/react-router";
import { Sun, UtensilsCrossed, Moon, Leaf, Sparkles, HandPlatter } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBar } from "@/components/cta-bar";
import food from "@/assets/food.jpg";
import dining from "@/assets/dining.jpg";

export const Route = createFileRoute("/food")({
  head: () => ({
    meta: [
      { title: "Food & Dining — Sai Balaji Co-living PG" },
      { name: "description", content: "Delicious, hygienic North Indian and South Indian meals served fresh daily at our rooftop dining area in Marathahalli, Bangalore." },
      { property: "og:title", content: "Food & Dining — Sai Balaji Co-living PG" },
      { property: "og:description", content: "Hygienic home-cooked North & South Indian meals served on our rooftop dining." },
    ],
  }),
  component: FoodPage,
});

const meals = [
  { icon: Sun, title: "Breakfast", items: ["Idly", "Dosa", "Poori", "Chapathi"], time: "7:30 — 9:30 AM" },
  { icon: UtensilsCrossed, title: "Lunch", items: ["Rice", "Dal", "Curry (e.g., Ladies Finger)", "Buttermilk"], time: "12:30 — 2:30 PM" },
  { icon: Moon, title: "Dinner", items: ["Chapathi & Curry", "Rice & Dal", "Seasonal Sabzi", "Salad"], time: "8:00 — 10:00 PM" },
];

const promises = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily — vegetables, dairy and spices selected for quality." },
  { icon: Sparkles, title: "Hygienic Kitchen", desc: "Strict cleanliness standards in every step of preparation." },
  { icon: HandPlatter, title: "Home-style Taste", desc: "Comforting meals that taste like they were cooked at home." },
];

function FoodPage() {
  return (
    <>
      <PageHero
        eyebrow="Food & Dining"
        title="Wholesome meals, prepared with care."
        subtitle="Three balanced meals a day — North & South Indian dishes served fresh in our open rooftop dining area."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-3xl">
          <img src={food} alt="North and South Indian thali" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img src={dining} alt="Rooftop dining area" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Daily Menu</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">A taste of home, three times a day.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {meals.map((m) => (
              <article key={m.title} className="rounded-3xl border border-border bg-card p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground"><m.icon className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{m.title}</h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{m.time}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {m.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> {i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {promises.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-foreground"><p.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBar />
    </>
  );
}

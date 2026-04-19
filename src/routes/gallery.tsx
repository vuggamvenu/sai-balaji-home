import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CtaBar } from "@/components/cta-bar";
import heroRoom from "@/assets/hero-room.jpg";
import room1 from "@/assets/room-1.jpg";
import balcony from "@/assets/balcony.jpg";
import food from "@/assets/food.jpg";
import dining from "@/assets/dining.jpg";
import building from "@/assets/building.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sai Balaji Co-living PG, Marathahalli" },
      { name: "description", content: "Photos of clean PG rooms, balcony, dining area, parking and exterior of Sai Balaji Co-living PG in Marathahalli, Bangalore." },
      { property: "og:title", content: "Gallery — Sai Balaji Co-living PG" },
      { property: "og:description", content: "A look inside our rooms, dining and facilities." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: heroRoom, alt: "Spacious bright PG room with desk and balcony", w: 1920, h: 1280 },
  { src: room1, alt: "Cozy single PG room with bathroom door", w: 1280, h: 960 },
  { src: balcony, alt: "Private balcony with plants", w: 1280, h: 960 },
  { src: dining, alt: "Rooftop dining area", w: 1280, h: 960 },
  { src: food, alt: "Hygienic Indian thali meal", w: 1280, h: 960 },
  { src: building, alt: "Building exterior with parking area", w: 1280, h: 960 },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Take a look around our PG."
        subtitle="Clean rooms, fresh meals, friendly spaces — explore what life at Sai Balaji looks like."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {images.map((img) => (
            <figure key={img.alt} className="break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card">
              <img src={img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy" className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105" />
            </figure>
          ))}
        </div>
      </section>
      <CtaBar />
    </>
  );
}

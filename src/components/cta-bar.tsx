import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBar() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div>
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">Book Your Stay Today</h3>
          <p className="mt-2 max-w-xl text-sm text-primary-foreground/85">
            Move-in ready rooms with home-style meals, 24/7 security and unbeatable Marathahalli location.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href="tel:+919999999999"><Phone className="h-4 w-4" /> Call Now</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href="https://wa.me/919999999999"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href="https://maps.google.com/?q=Sai+Balaji+Co-living+PG+Marathahalli+Bangalore"><MapPin className="h-4 w-4" /> Visit Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

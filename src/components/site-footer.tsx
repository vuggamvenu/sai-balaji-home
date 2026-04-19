import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-display text-lg font-bold">S</div>
            <div>
              <div className="font-display text-base font-semibold">Sai Balaji Co-living PG</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Marathahalli, Bengaluru</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Clean, safe and budget-friendly co-living for working professionals and students near Whitefield. Home-cooked meals, modern rooms, and a friendly community.
          </p>
          <div className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>XP37+X56, Gulmohar Enclave Rd, Silver Springs Layout, Marathahalli, Bengaluru, Karnataka 560037</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/rooms" className="hover:text-primary">Rooms & Facilities</Link></li>
            <li><Link to="/food" className="hover:text-primary">Food & Dining</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/location" className="hover:text-primary">Location</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="tel:+919999999999" className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" /> +91 99999 99999</a></li>
            <li><a href="https://wa.me/919999999999" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4" /> WhatsApp Us</a></li>
            <li><a href="mailto:hello@saibalajipg.in" className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> hello@saibalajipg.in</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Sai Balaji Co-living PG. All rights reserved.</p>
          <p>PG in Marathahalli · PG near Whitefield · Budget PG Bangalore</p>
        </div>
      </div>
    </footer>
  );
}

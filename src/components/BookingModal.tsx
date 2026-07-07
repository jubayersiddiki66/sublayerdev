import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { X } from "lucide-react";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const BookingCtx = createContext<Ctx>({ open: () => {}, close: () => {}, isOpen: false });
export const useBooking = () => useContext(BookingCtx);

const CAL_LINK = "sublayer-dev-studios-my6zpa/30min";

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Load Cal.com script once
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <BookingCtx.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4 animate-fade-in" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-background/85 backdrop-blur-md" onClick={close} />
          <div className="relative w-full max-w-4xl h-[92vh] overflow-hidden rounded-2xl border border-border card-corner-glow bg-gradient-card">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <button onClick={close} aria-label="Close" className="absolute top-3 right-3 z-20 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full bg-background/60 hover:bg-white/10">
              <X className="w-4 h-4" />
            </button>
            <div className="relative p-4 md:p-6 h-full flex flex-col">
              <div className="mb-3 pr-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-destructive">Free AI Audit</span>
                <h3 className="text-lg md:text-xl text-foreground font-light mt-1">Book your free 30-minute call</h3>
                <p className="text-xs text-muted-foreground mt-1">Pick a time. We'll map your biggest time-waster and show you what to automate first. No pitch, no obligation.</p>
              </div>
              <iframe
                src="https://cal.com/sublayer-dev-studios-my6zpa/30min?embed=true"
                title="Book a free AI audit with Sublayer Dev Studios"
                className="flex-1 w-full rounded-xl border border-border/50"
                style={{ minHeight: 500 }}
              />
            </div>
          </div>
        </div>
      )}
    </BookingCtx.Provider>
  );
};

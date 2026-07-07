import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <SEOHead
        title="Page Not Found | Sublayer Dev Studios"
        description="The page you're looking for doesn't exist. Return to Sublayer Dev Studios homepage."
      />
      <div className="text-center">
        <h1 className="mb-4 text-display text-foreground">404</h1>
        <p className="mb-6 text-body-lg text-muted-foreground">Page not found</p>
        <Link to="/" className="text-xs tracking-[0.15em] uppercase text-accent hover:text-accent/80 transition-colors">
          ← Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

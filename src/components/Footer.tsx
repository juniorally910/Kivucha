import { Link, useLocation } from 'react-router';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function FooterContactLink() {
  const location = useLocation();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Link to="/#contact" onClick={handleClick} className="hover:text-[#C9A227] transition-colors">
      Contact Us
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kivucha Investment & Consulting</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering African businesses through strategic insights, innovative solutions, and deep local market expertise.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Twitter,  label: 'Twitter',  href: '#' },
                { icon: Linkedin, label: 'LinkedIn',  href: '#' },
                { icon: Instagram,label: 'Instagram', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C9A227] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <Link to="/expertise" className="block text-sm font-semibold uppercase tracking-widest text-white/40 hover:text-[#C9A227] transition-colors mb-4">
              Services ↗
            </Link>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { label: 'Corporate Transaction', href: '/expertise/corporate-transaction' },
                { label: 'Corporate Finance',     href: '/expertise/corporate-finance' },
                { label: 'Private Equity',        href: '/expertise/private-equity' },
                { label: 'Valuation Services',    href: '/expertise/valuation' },
                { label: 'Risk Advisory',         href: '/expertise/risk-advisory' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link to={href} className="hover:text-[#C9A227] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <Link to="/industries" className="block text-sm font-semibold uppercase tracking-widest text-white/40 hover:text-[#C9A227] transition-colors mb-4">
              Industries ↗
            </Link>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { label: 'Retail',             href: '/industries/retail' },
                { label: 'Financial Services', href: '/industries/financial-services' },
                { label: 'Real Estate',        href: '/industries/real-estate' },
                { label: 'Aviation',           href: '/industries/aviation' },
                { label: 'Transportation',     href: '/industries/transportation' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link to={href} className="hover:text-[#C9A227] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Company</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/about"          className="hover:text-[#C9A227] transition-colors">About Us</Link></li>
              <li><Link to="/people"         className="hover:text-[#C9A227] transition-colors">Our People</Link></li>
              <li><Link to="/careers"        className="hover:text-[#C9A227] transition-colors">Careers</Link></li>
              <li><Link to="/insights/media" className="hover:text-[#C9A227] transition-colors">Media</Link></li>
              <li><FooterContactLink /></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Kivucha Investment and Consulting Company. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="hover:text-white/70 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
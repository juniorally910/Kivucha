import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { ChevronDown, Search, X, Menu, ChevronRight } from 'lucide-react';
import logoDark from '../assets/logotr.png';   
import logoLight from '../assets/logo.png';         

const expertiseItems = [
  { label: 'Corporate Transaction',     href: '/expertise/corporate-transaction' },
  { label: 'Corporate Performance',     href: '/expertise/corporate-performance' },
  { label: 'Corporate Finance',         href: '/expertise/corporate-finance' },
  { label: 'Private Equity Services',   href: '/expertise/private-equity' },
  { label: 'Taxes',                     href: '/expertise/taxes' },
  { label: 'Global Valuation Services', href: '/expertise/valuation' },
  { label: 'Risk and Advisory',         href: '/expertise/risk-advisory' },
  { label: 'Crypto Advisory',           href: '/expertise/crypto-advisory' },
];

const aboutItems = [
  { label: 'Contact Us',        href: '/#contact' },
];

const industriesItems = [
  { label: 'Retail',                       href: '/industries/retail' },
  { label: 'Consumer Products',            href: '/industries/consumer-products' },
  { label: 'Aviation',                     href: '/industries/aviation' },
  { label: 'Financial Services',           href: '/industries/financial-services' },
  { label: 'Life Insurance',               href: '/industries/life-insurance' },
  { label: 'Real Estate',                  href: '/industries/real-estate' },
  { label: 'Transportation and Logistics', href: '/industries/transportation' },
];

const insightsItems = [
  { label: 'Media', href: '/insights/media' },
];

type DropdownKey = 'about' | 'expertise' | 'industries' | 'insights' | null;
type MobileExpandKey = 'about' | 'expertise' | 'industries' | 'insights' | null;

export function Navbar() {
  const [scrolled, setScrolled]               = useState(false);
  const [activeDropdown, setActiveDropdown]   = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [mobileExpand, setMobileExpand]       = useState<MobileExpandKey>(null);
  const [searchOpen, setSearchOpen]           = useState(false);
  const searchRef                             = useRef<HTMLInputElement>(null);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Focus search input when opened ── */
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const col1 = expertiseItems.slice(0, 4);
  const col2 = expertiseItems.slice(4);

  const handleEnter = (key: DropdownKey) => setActiveDropdown(key);
  const handleLeave = () => setActiveDropdown(null);

  const toggleMobileSection = (key: MobileExpandKey) =>
    setMobileExpand(prev => (prev === key ? null : key));

  /* ── Dynamic styles based on scroll state ── */
  const navBg        = scrolled ? 'bg-white shadow-lg'         : 'bg-transparent';
  const textColor    = scrolled ? 'text-[#0B3C5D]'             : 'text-white';
  const hoverColor   = scrolled ? 'hover:text-[#C9A227]'       : 'hover:text-[#C9A227]';
  const iconColor    = scrolled ? 'text-[#0B3C5D]'             : 'text-white';
  const dropdownBg   = 'bg-[#0B3C5D]';
  const borderAccent = 'border-[#C9A227]';

  return (
    <>
      {/* ════════════════════════════════════════════
          HEADER
      ════════════════════════════════════════════ */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${navBg}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={scrolled ? logoLight : logoDark}
                alt="Kivucha"
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
              />
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center flex-1 ml-8 xl:ml-12">
              <div className="flex items-center gap-5 xl:gap-7">

              {/* About */}
              <NavDropdown
                label="About Kivucha"
                href="/about"
                dropdownKey="about"
                active={activeDropdown === 'about'}
                onEnter={() => handleEnter('about')}
                onLeave={handleLeave}
                textColor={textColor}
                hoverColor={hoverColor}
                dropdownBg={dropdownBg}
                borderAccent={borderAccent}
                width="w-52"
              >
                <SimpleDropdownItems items={aboutItems} hoverColor={hoverColor} />
              </NavDropdown>

              {/* Expertise */}
              <NavDropdown
                label="Expertise"
                href="/expertise"
                dropdownKey="expertise"
                active={activeDropdown === 'expertise'}
                onEnter={() => handleEnter('expertise')}
                onLeave={handleLeave}
                textColor={textColor}
                hoverColor={hoverColor}
                dropdownBg={dropdownBg}
                borderAccent={borderAccent}
                width="w-[560px]"
              >
                <div className="grid grid-cols-2 gap-8 p-8">
                  <div className="space-y-3">
                    {col1.map(item => (
                      <Link key={item.href} to={item.href}
                        className={`block text-sm text-white ${hoverColor} transition-colors`}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {col2.map(item => (
                      <Link key={item.href} to={item.href}
                        className={`block text-sm text-white ${hoverColor} transition-colors`}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </NavDropdown>

              {/* Industries */}
              <NavDropdown
                label="Industries"
                href="/industries"
                dropdownKey="industries"
                active={activeDropdown === 'industries'}
                onEnter={() => handleEnter('industries')}
                onLeave={handleLeave}
                textColor={textColor}
                hoverColor={hoverColor}
                dropdownBg={dropdownBg}
                borderAccent={borderAccent}
                width="w-64"
              >
                <SimpleDropdownItems items={industriesItems} hoverColor={hoverColor} />
              </NavDropdown>

              {/* Insights */}
              <NavDropdown
                label="Insights"
                href="/insights"
                dropdownKey="insights"
                active={activeDropdown === 'insights'}
                onEnter={() => handleEnter('insights')}
                onLeave={handleLeave}
                textColor={textColor}
                hoverColor={hoverColor}
                dropdownBg={dropdownBg}
                borderAccent={borderAccent}
                width="w-40"
              >
                <SimpleDropdownItems items={insightsItems} hoverColor={hoverColor} />
              </NavDropdown>

              {/* Simple links */}
              <Link to="/people"        className={`text-sm ${textColor} ${hoverColor} transition-colors uppercase tracking-wide whitespace-nowrap`}>Our People</Link>
              <Link to="/careers"       className={`text-sm ${textColor} ${hoverColor} transition-colors uppercase tracking-wide`}>Careers</Link>
              </div>{/* end nav items group */}

              {/* Search — pushed to far right */}
              <div className="relative ml-auto">
                <button
                  aria-label="search"
                  onClick={() => setSearchOpen(o => !o)}
                  className={`${iconColor} ${hoverColor} transition-colors`}
                >
                  {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                </button>

                {/* Inline search bar */}
                <div className={`
                  absolute right-0 top-full mt-3 overflow-hidden transition-all duration-300
                  ${searchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'}
                `}>
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search…"
                    className={`w-full border px-4 py-2 text-sm rounded-sm outline-none focus:border-[#C9A227] ${scrolled ? 'bg-white border-gray-300 text-[#0B3C5D] placeholder-gray-400' : 'bg-white/10 backdrop-blur border-white/30 text-white placeholder-white/60'}`}
                  />
                </div>
              </div>
            </nav>

            {/* ── Mobile: Search + Hamburger ── */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                aria-label="search"
                onClick={() => setSearchOpen(o => !o)}
                className={`${iconColor} ${hoverColor} transition-colors`}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen(o => !o)}
                className={`${iconColor} ${hoverColor} transition-colors`}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* ── Mobile Search Bar ── */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${searchOpen ? 'max-h-16 pb-3' : 'max-h-0'}`}>
            <input
              type="text"
              placeholder="Search…"
              className={`w-full border px-4 py-2 text-sm rounded-sm outline-none focus:border-[#C9A227] ${scrolled ? 'bg-white border-gray-300 text-[#0B3C5D] placeholder-gray-400' : 'bg-white/10 backdrop-blur border-white/30 text-white placeholder-white/60'}`}
            />
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer */}
      <aside className={`
        fixed top-0 right-0 h-full w-[85vw] max-w-sm z-50 lg:hidden
        bg-[#0B3C5D] flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        overflow-y-auto
      `}>
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src={logoLight} alt="Kivucha" className="h-9 w-auto object-contain" />
          </Link>
          <button aria-label='menu' onClick={() => setMobileOpen(false)} className="text-white hover:text-[#C9A227] transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 px-5 py-6 space-y-1">

          {/* About */}
          <MobileAccordion
            label="About Kivucha"
            href="/about"
            isOpen={mobileExpand === 'about'}
            onToggle={() => toggleMobileSection('about')}
            onNavigate={() => setMobileOpen(false)}
          >
            {aboutItems.map(item => (
              <Link key={item.href} to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-white/80 hover:text-[#C9A227] py-2 pl-4 border-l border-white/10 transition-colors">
                {item.label}
              </Link>
            ))}
          </MobileAccordion>

          {/* Expertise */}
          <MobileAccordion
            label="Expertise"
            href="/expertise"
            isOpen={mobileExpand === 'expertise'}
            onToggle={() => toggleMobileSection('expertise')}
            onNavigate={() => setMobileOpen(false)}
          >
            {expertiseItems.map(item => (
              <Link key={item.href} to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-white/80 hover:text-[#C9A227] py-2 pl-4 border-l border-white/10 transition-colors">
                {item.label}
              </Link>
            ))}
          </MobileAccordion>

          {/* Industries */}
          <MobileAccordion
            label="Industries"
            href="/industries"
            isOpen={mobileExpand === 'industries'}
            onToggle={() => toggleMobileSection('industries')}
            onNavigate={() => setMobileOpen(false)}
          >
            {industriesItems.map(item => (
              <Link key={item.href} to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-white/80 hover:text-[#C9A227] py-2 pl-4 border-l border-white/10 transition-colors">
                {item.label}
              </Link>
            ))}
          </MobileAccordion>

          {/* Insights */}
          <MobileAccordion
            label="Insights"
            href="/insights"
            isOpen={mobileExpand === 'insights'}
            onToggle={() => toggleMobileSection('insights')}
            onNavigate={() => setMobileOpen(false)}
          >
            {insightsItems.map(item => (
              <Link key={item.href} to={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-white/80 hover:text-[#C9A227] py-2 pl-4 border-l border-white/10 transition-colors">
                {item.label}
              </Link>
            ))}
          </MobileAccordion>

          {/* Simple links */}
          <div className="pt-2 space-y-1">
            {[
              { label: 'Our People',     href: '/people' },
              { label: 'Careers',        href: '/careers' },
            ].map(item => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between w-full text-sm text-white hover:text-[#C9A227] py-3 uppercase tracking-wide transition-colors border-b border-white/10"
              >
                {item.label}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-white/10 text-xs text-white/40 text-center">
          © {new Date().getFullYear()} Kivucha Advisory
        </div>
      </aside>
    </>
  );
}

/* ════════════════════════════════════════════
   DESKTOP: Reusable Nav Dropdown Wrapper
════════════════════════════════════════════ */
interface NavDropdownProps {
  label: string;
  href: string;
  dropdownKey: DropdownKey;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
  textColor: string;
  hoverColor: string;
  dropdownBg: string;
  borderAccent: string;
  width: string;
  children: React.ReactNode;
}

function NavDropdown({
  label, href, active, onEnter, onLeave,
  textColor, hoverColor, dropdownBg, borderAccent, width, children
}: NavDropdownProps) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <Link
        to={href}
        className={`flex items-center gap-1 text-sm ${textColor} ${hoverColor} transition-colors uppercase tracking-wide whitespace-nowrap`}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${active ? 'rotate-180' : ''}`} />
      </Link>

      {/* Dropdown panel */}
      <div className={`
        absolute top-full left-1/2 -translate-x-1/2 mt-0 ${width}
        ${dropdownBg} shadow-xl z-50 border-t-2 ${borderAccent}
        transition-all duration-200 ease-in-out origin-top
        ${active ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}
      `}>
        {children}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────── */
function SimpleDropdownItems({ items, hoverColor }: { items: { label: string; href: string }[]; hoverColor: string }) {
  return (
    <div className="py-4 px-5 space-y-3">
      {items.map(item => (
        <Link key={item.href} to={item.href}
          className={`block text-sm text-white ${hoverColor} transition-colors`}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════
   MOBILE: Accordion Section
   - Label is a real <Link> so tapping it navigates to the section index page
   - Chevron button independently toggles the sub-items list
════════════════════════════════════════════ */
function MobileAccordion({
  label, href, isOpen, onToggle, onNavigate, children
}: {
  label: string;
  href: string;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/10">
      <div className="flex items-center justify-between">
        {/* Tappable label — navigates to the section index page */}
        <Link
          to={href}
          onClick={onNavigate}
          className="flex-1 py-3 text-sm text-white hover:text-[#C9A227] uppercase tracking-wide transition-colors"
        >
          {label}
        </Link>
        {/* Chevron — only toggles the sub-list, does NOT navigate */}
        <button
          onClick={onToggle}
          aria-label={`Toggle ${label} submenu`}
          className="p-3 text-white hover:text-[#C9A227] transition-colors"
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-2' : 'max-h-0'}`}>
        <div className="space-y-0.5">
          {children}
        </div>
      </div>
    </div>
  );
}
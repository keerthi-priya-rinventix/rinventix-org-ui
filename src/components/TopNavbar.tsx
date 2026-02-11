import { Link, useNavigate } from 'react-router-dom';
import rinventixLogo from '../assets/rinventix-logo.svg';
import { Button } from './Button';

function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

const navLinksWithDropdown = [
  { to: '/solutions', label: 'Solutions', hasDropdown: true },
  { to: '/case-studies', label: 'Case Studies', hasDropdown: true },
  { to: '/resources', label: 'Resources', hasDropdown: true },
];

const navLinksSimple = [
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export function TopNavbar() {
  const navigate = useNavigate();

  return (
    <div className="z-50 bg-white border-b border-gray-100 h-[80px] flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Brand */}
          <Link
            to="/home"
            className="flex items-center gap-2 shrink-0"
            aria-label="Rinventix home"
          >
            <img src={rinventixLogo} alt="" className="h-7 w-auto shrink-0" aria-hidden />
            <span className="text-lg font-medium text-gray-900">Rinventix</span>
          </Link>

          {/* Center: Navigation links */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8">
            {navLinksWithDropdown.map(({ to, label, hasDropdown }) => (
              <Link
                key={to}
                to={to}
                className="flex items-center gap-1 font-satoshi font-medium text-[16px] leading-[100%] tracking-[0] text-[#133447] hover:text-[#1A61FF]"
              >
                {label}
                {hasDropdown && <ChevronDown />}
              </Link>
            ))}
            {navLinksSimple.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-[15px]"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="shrink-0">
            <Button text="Book a Strategy Call" onClick={() => navigate('/contact')} />
          </div>
        </div>
      </div>
    </div>  );
}

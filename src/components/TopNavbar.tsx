import { Link } from 'react-router-dom';

export function TopNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/home" className="text-lg font-semibold text-gray-900 hover:text-gray-600">
            Rinventix
          </Link>
          <div className="flex gap-6">
            <Link
              to="/home"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/solutions"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Solutions
            </Link>
            <Link
              to="/case-studies"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Case Studies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

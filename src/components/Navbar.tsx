import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, User, Globe } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'fr' ? 'wo' : 'fr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600">TerangaField</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/fields" className="text-gray-700 hover:text-indigo-600">
              {t('nav.fields')}
            </Link>
            <Link to="/bookings" className="text-gray-700 hover:text-indigo-600">
              {t('nav.bookings')}
            </Link>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-indigo-600"
            >
              <Globe className="w-5 h-5 mr-1" />
              {i18n.language.toUpperCase()}
            </button>

            {user ? (
              <div className="relative">
                <Link to="/profile" className="flex items-center text-gray-700 hover:text-indigo-600">
                  <User className="w-5 h-5 mr-1" />
                  {user.name}
                </Link>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/fields"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              {t('nav.fields')}
            </Link>
            <Link
              to="/bookings"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              {t('nav.bookings')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              <Globe className="w-5 h-5 inline mr-1" />
              {i18n.language.toUpperCase()}
            </button>
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                >
                  {t('nav.profile')}
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-indigo-600 hover:text-indigo-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
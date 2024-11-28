import { Facebook, Instagram, Twitter, Github, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TerangaField</h3>
            <p className="text-gray-400">
              La meilleure plateforme de réservation de terrains de football à Dakar
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@teranga-field.sn</li>
              <li>Tel: +221 77 123 45 67</li>
              <li>Dakar, Senegal</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://mbayedione.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center"
            >
              <Globe className="w-4 h-4 mr-1" />
              Portfolio
            </a>
            <span>•</span>
            <a
              href="https://github.com/mbayedione10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center"
            >
              <Github className="w-4 h-4 mr-1" />
              GitHub
            </a>
          </div>
          <p className="mt-4">&copy; {new Date().getFullYear()} TerangaField. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function SearchBar() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un terrain..."
          className="w-full px-6 py-4 text-lg rounded-full border-2 border-white/20 bg-black/30 text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:border-white/40 transition-colors"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
      
      {/* Quick filters */}
      <div className="flex gap-3 mt-4">
        {['Sicap', 'HLM', 'Parcelles', 'Yoff'].map((location) => (
          <button
            key={location}
            type="button"
            onClick={() => setQuery(location)}
            className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            {location}
          </button>
        ))}
      </div>
    </form>
  );
}
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './i18n';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Fields from '../pages/Fields';
import FieldDetails from '../pages/FieldDetails';
import ProtectedRoute from './ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/fields" element={<Fields />} />
      <Route path="/fields/:id" element={<FieldDetails />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <div>Profile Page (TODO)</div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookings"
        element={
          <ProtectedRoute>
            <div>Bookings Page (TODO)</div>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
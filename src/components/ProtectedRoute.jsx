import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
    const { currentUser, loading } = useAuth(); // Assuming loading state is available in context

    if (loading) {
        // Or a spinner component
        return <div className="min-h-screen flex items-center justify-center bg-navy text-gold">Loading...</div>;
    }

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return children;
}

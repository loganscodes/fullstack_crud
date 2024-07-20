import  { useContext } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    element: JSX.Element;
}

const PrivateRoute  = ({ element }: PrivateRouteProps) => {
    
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('AuthContext must be used within an AuthProvider');
    }


    if (!authState.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return element;
};

export default PrivateRoute;

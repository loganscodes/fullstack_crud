import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Define la interfaz para el usuario
interface User {
    id: number;
    name: string;
    email: string;
}

// Define la interfaz para el estado de autenticación
interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

// Define la interfaz para el contexto de autenticación
interface AuthContextType {
    authState: AuthState;
    login: (user: User, token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [authState, setAuthState] = useState<AuthState>({
        isAuthenticated: false,
        user: null,
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Aquí podrías hacer una verificación del token o una solicitud para obtener los datos del usuario.
            setAuthState({ isAuthenticated: true, user: { id: 1, name: 'User', email: 'user@example.com' } }); // Ejemplo de usuario
        }
    }, []);

    const login = (user: User, token: string) => {
        localStorage.setItem('token', token);
        setAuthState({ isAuthenticated: true, user });
        navigate('/dashboard');
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuthState({ isAuthenticated: false, user: null });
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definujeme presný tvar dát, ktoré budeme o užívateľovi držať
interface UserType {
  id: string;
  email: string;
  name: string;
  photoUrl?: string;
}

// 2. Definujeme, čo všetko náš AuthContext poskytuje ostatným súborom
interface AuthContextType {
  user: UserType | null;
  isLoggedIn: boolean;
  signIn: (userData: UserType) => void;
  signOut: () => void;
}

// 3. Vytvorenie samotného kontextu
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4. Provider - toto obalí celú našu aplikáciu
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  const signIn = (userData: UserType) => {
    setUser(userData);
    console.log("Užívateľ prihlásený:", userData.name);
  };

  const signOut = () => {
    setUser(null);
    console.log("Užívateľ odhlásený");
  };

  const isLoggedIn = !!user; // Ak user existuje, vráti true

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// 5. Custom hook - aby sme v iných súboroch nemuseli písať zložité importy
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth musí byť použitý vo vnútri AuthProvidera');
  }
  return context;
}

import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const { signOut, user } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 to-violet-900 px-4 py-6 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">
              Olá, {userName || user?.user_metadata?.full_name || 'Usuário'}!
            </h1>
            <p className="text-purple-200 text-sm">Pronto para treinar?</p>
          </div>
        </div>
        <Button
          onClick={handleSignOut}
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

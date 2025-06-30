
import React from 'react';
import { Bell, User } from 'lucide-react';

interface HeaderProps {
  userName?: string;
  showNotifications?: boolean;
}

const Header = ({ userName = "Usuário", showNotifications = true }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-white/10 px-4 py-4">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-fitness-gradient rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">Olá, {userName}!</h2>
            <p className="text-xs text-muted-foreground">Vamos treinar hoje?</p>
          </div>
        </div>
        
        {showNotifications && (
          <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-fitness-danger rounded-full"></span>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

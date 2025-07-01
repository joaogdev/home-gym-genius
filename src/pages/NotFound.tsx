
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Dumbbell } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-fitness-gradient rounded-2xl flex items-center justify-center">
            <Dumbbell className="w-10 h-10 text-white" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8">
          Parece que esta página não existe ou foi movida para outro lugar.
        </p>
        
        <Link to="/">
          <Button className="btn-fitness flex items-center gap-2">
            <Home className="w-4 h-4" />
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

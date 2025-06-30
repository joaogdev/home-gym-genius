
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Apple, TrendingUp, Settings, LogOut, User, Plus } from 'lucide-react';
import MotivationalQuote from '@/components/MotivationalQuote';
import { toast } from 'sonner';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const handleFeatureClick = (feature: string) => {
    toast.info(`Funcionalidade "${feature}" em desenvolvimento!`);
  };

  const getUserDisplayName = () => {
    return user.user_metadata?.full_name || user.email?.split('@')[0] || 'Usuário';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg mr-3">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Zeni
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600 hidden sm:inline">
                  Olá, {getUserDisplayName()}
                </span>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut} className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MotivationalQuote />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Treinos Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => handleFeatureClick('Treinos')}>
            <CardHeader>
              <CardTitle className="flex items-center group-hover:text-purple-600 transition-colors">
                <Dumbbell className="h-5 w-5 mr-2 text-purple-600" />
                Meus Treinos
              </CardTitle>
              <CardDescription>
                Planos de treino personalizados por IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Acesse seus treinos personalizados e acompanhe seu progresso
              </p>
              <div className="flex items-center text-sm text-purple-600 font-medium">
                <Plus className="h-4 w-4 mr-1" />
                Criar novo treino
              </div>
            </CardContent>
          </Card>

          {/* Dietas Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => handleFeatureClick('Dietas')}>
            <CardHeader>
              <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                <Apple className="h-5 w-5 mr-2 text-green-600" />
                Minhas Dietas
              </CardTitle>
              <CardDescription>
                Planos alimentares inteligentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Cardápios balanceados baseados nos seus objetivos
              </p>
              <div className="flex items-center text-sm text-green-600 font-medium">
                <Plus className="h-4 w-4 mr-1" />
                Criar nova dieta
              </div>
            </CardContent>
          </Card>

          {/* Progresso Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => handleFeatureClick('Progresso')}>
            <CardHeader>
              <CardTitle className="flex items-center group-hover:text-blue-600 transition-colors">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Meu Progresso
              </CardTitle>
              <CardDescription>
                Acompanhe sua evolução
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Veja gráficos e estatísticas do seu desenvolvimento
              </p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                <TrendingUp className="h-4 w-4 mr-1" />
                Ver estatísticas
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Ações Rápidas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full justify-start hover:bg-gray-50" 
                variant="ghost"
                onClick={() => navigate('/profile')}
              >
                <Settings className="h-4 w-4 mr-2" />
                Completar Perfil
              </Button>
              <Button 
                className="w-full justify-start hover:bg-purple-50 hover:text-purple-700" 
                variant="ghost"
                onClick={() => handleFeatureClick('Novo Treino')}
              >
                <Dumbbell className="h-4 w-4 mr-2" />
                Gerar Novo Treino
              </Button>
              <Button 
                className="w-full justify-start hover:bg-green-50 hover:text-green-700" 
                variant="ghost"
                onClick={() => handleFeatureClick('Nova Dieta')}
              >
                <Apple className="h-4 w-4 mr-2" />
                Gerar Nova Dieta
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Resumo da Semana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Treinos realizados</span>
                  <span className="font-semibold text-lg">0/0</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-0"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Dieta seguida</span>
                  <span className="font-semibold text-lg">0/7 dias</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-0"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Meta semanal</span>
                  <span className="font-semibold text-orange-600">Começando</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

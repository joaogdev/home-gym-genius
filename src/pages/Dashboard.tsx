
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Apple, TrendingUp, Settings, LogOut } from 'lucide-react';
import MotivationalQuote from '@/components/MotivationalQuote';

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-purple-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">Zeni</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Olá, {user.user_metadata?.full_name || user.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MotivationalQuote />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Treinos Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/workouts')}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Dumbbell className="h-5 w-5 mr-2 text-purple-600" />
                Meus Treinos
              </CardTitle>
              <CardDescription>
                Planos de treino personalizados por IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Acesse seus treinos personalizados e acompanhe seu progresso
              </p>
            </CardContent>
          </Card>

          {/* Dietas Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/diets')}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Apple className="h-5 w-5 mr-2 text-green-600" />
                Minhas Dietas
              </CardTitle>
              <CardDescription>
                Planos alimentares inteligentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Cardápios balanceados baseados nos seus objetivos
              </p>
            </CardContent>
          </Card>

          {/* Progresso Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/progress')}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                Meu Progresso
              </CardTitle>
              <CardDescription>
                Acompanhe sua evolução
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Veja gráficos e estatísticas do seu desenvolvimento
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" onClick={() => navigate('/profile')}>
                <Settings className="h-4 w-4 mr-2" />
                Completar Perfil
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Dumbbell className="h-4 w-4 mr-2" />
                Gerar Novo Treino
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Apple className="h-4 w-4 mr-2" />
                Gerar Nova Dieta
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resumo da Semana</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Treinos realizados</span>
                  <span className="font-semibold">0/0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Dieta seguida</span>
                  <span className="font-semibold">0/7 dias</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Progresso registrado</span>
                  <span className="font-semibold">Não</span>
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

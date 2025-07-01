
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import MotivationalQuote from '@/components/MotivationalQuote';
import QuickActions from '@/components/QuickActions';
import StatsCard from '@/components/StatsCard';
import WorkoutCard from '@/components/WorkoutCard';
import { Activity, Clock, Target, TrendingUp, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Erro",
        description: "Erro ao fazer logout. Tente novamente.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Logout realizado",
        description: "Até logo!",
      });
      navigate('/auth');
    }
  };

  const handleStartWorkout = () => {
    console.log('Iniciando treino...');
    toast({
      title: "Treino iniciado!",
      description: "Boa sorte no seu treino!",
    });
  };

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Usuário';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Header userName={userName} />
      
      <main className="pb-20">
        <MotivationalQuote />
        
        <QuickActions />
        
        {/* Stats Section */}
        <section className="px-4 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Suas Estatísticas</h2>
          <div className="grid grid-cols-2 gap-4">
            <StatsCard
              title="Treinos na Semana"
              value="3"
              subtitle="+1 da semana passada"
              icon={Activity}
              trend="up"
            />
            <StatsCard
              title="Tempo Total"
              value="5h 30m"
              subtitle="Esta semana"
              icon={Clock}
              gradient="bg-card-gradient"
            />
            <StatsCard
              title="Meta Mensal"
              value="75%"
              subtitle="12/16 treinos"
              icon={Target}
              gradient="bg-success-gradient"
              trend="up"
            />
            <StatsCard
              title="Progresso"
              value="+2.5kg"
              subtitle="Último mês"
              icon={TrendingUp}
              gradient="bg-fitness-gradient"
              trend="up"
            />
          </div>
        </section>

        {/* Workout Plans Section */}
        <section className="px-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Treinos Recomendados</h2>
          </div>
          <div className="space-y-4">
            <WorkoutCard
              title="Treino de Peito e Tríceps"
              duration="45 min"
              exercises={8}
              difficulty="Médio"
              category="Força"
              onStart={handleStartWorkout}
            />
            <WorkoutCard
              title="Cardio Intervalado"
              duration="30 min"
              exercises={6}
              difficulty="Difícil"
              category="Cardio"
              onStart={handleStartWorkout}
            />
            <WorkoutCard
              title="Yoga Relaxante"
              duration="25 min"
              exercises={10}
              difficulty="Fácil"
              category="Flexibilidade"
              onStart={handleStartWorkout}
            />
          </div>
        </section>

        {/* Logout Button */}
        <section className="px-4 mb-8">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center gap-2 text-muted-foreground hover:text-white border-border hover:bg-card/50"
          >
            <LogOut className="w-4 h-4" />
            Sair da Conta
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Index;

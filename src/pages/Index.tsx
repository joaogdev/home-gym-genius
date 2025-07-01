
import React from 'react';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import WorkoutCard from '@/components/WorkoutCard';
import ProgressChart from '@/components/ProgressChart';
import QuickActions from '@/components/QuickActions';
import MotivationalQuote from '@/components/MotivationalQuote';
import { Calendar, Heart, Clock, User } from 'lucide-react';

const Index = () => {
  // Dados simulados
  const progressData = [
    { date: '01/12', weight: 75 },
    { date: '08/12', weight: 74.5 },
    { date: '15/12', weight: 74 },
    { date: '22/12', weight: 73.5 },
    { date: '29/12', weight: 73 },
  ];

  const handleStartWorkout = () => {
    console.log('Iniciando treino...');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Maria" />
      
      <div className="max-w-md mx-auto pb-safe-bottom">
        {/* Quote motivacional */}
        <div className="pt-6">
          <MotivationalQuote />
        </div>

        {/* Ações rápidas */}
        <QuickActions />

        {/* Stats principais */}
        <div className="px-4 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Seu Progresso</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <StatsCard
              title="Peso Atual"
              value="73kg"
              subtitle="-2kg este mês"
              icon={User}
              trend="up"
            />
            <StatsCard
              title="Treinos"
              value="12"
              subtitle="Este mês"
              icon={Calendar}
              gradient="bg-card-gradient"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <StatsCard
              title="Calorias"
              value="2.1k"
              subtitle="Queimadas hoje"
              icon={Heart}
              gradient="bg-success-gradient"
            />
            <StatsCard
              title="Tempo"
              value="45min"
              subtitle="Média por treino"
              icon={Clock}
              gradient="bg-gradient-to-r from-purple-600 to-pink-600"
            />
          </div>
        </div>

        {/* Gráfico de progresso */}
        <div className="px-4 mb-8">
          <ProgressChart 
            data={progressData} 
            title="Evolução do Peso" 
          />
        </div>

        {/* Treinos recomendados */}
        <div className="px-4 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Treinos para Hoje</h2>
          <div className="space-y-4">
            <WorkoutCard
              title="Treino HIIT Iniciante"
              duration="20 min"
              exercises={8}
              difficulty="Fácil"
              category="Queima de Gordura"
              onStart={handleStartWorkout}
            />
            <WorkoutCard
              title="Força para Membros Superiores"
              duration="35 min"
              exercises={12}
              difficulty="Médio"
              category="Ganho de Massa"
              onStart={handleStartWorkout}
            />
            <WorkoutCard
              title="Treino de Resistência"
              duration="40 min"
              exercises={15}
              difficulty="Difícil"
              category="Condicionamento"
              onStart={handleStartWorkout}
            />
          </div>
        </div>

        {/* Footer space para navegação mobile */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default Index;

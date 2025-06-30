
import React from 'react';
import { Calendar, Heart, Settings, Plus } from 'lucide-react';

interface QuickAction {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  onClick: () => void;
}

const QuickActions = () => {
  const actions: QuickAction[] = [
    {
      id: 'workout',
      title: 'Novo Treino',
      icon: Plus,
      color: 'bg-fitness-gradient',
      onClick: () => console.log('Novo treino')
    },
    {
      id: 'schedule',
      title: 'Agenda',
      icon: Calendar,
      color: 'bg-card-gradient',
      onClick: () => console.log('Agenda')
    },
    {
      id: 'health',
      title: 'Saúde',
      icon: Heart,
      color: 'bg-success-gradient',
      onClick: () => console.log('Saúde')
    },
    {
      id: 'settings',
      title: 'Config',
      icon: Settings,
      color: 'bg-gradient-to-r from-slate-600 to-slate-800',
      onClick: () => console.log('Configurações')
    }
  ];

  return (
    <div className="px-4 mb-8">
      <h2 className="text-xl font-bold text-white mb-4">Ações Rápidas</h2>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.onClick}
            className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 glass-effect hover:bg-white/10"
          >
            <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-2 shadow-lg`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-medium text-white text-center">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;

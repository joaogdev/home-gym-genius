
import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface WorkoutCardProps {
  title: string;
  duration: string;
  exercises: number;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  category: string;
  onStart: () => void;
}

const WorkoutCard = ({ 
  title, 
  duration, 
  exercises, 
  difficulty, 
  category,
  onStart 
}: WorkoutCardProps) => {
  const difficultyColors = {
    'Fácil': 'bg-fitness-success',
    'Médio': 'bg-fitness-warning',
    'Difícil': 'bg-fitness-danger'
  };

  return (
    <div className="fitness-card group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{category}</p>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{exercises} exercícios</span>
            </div>
          </div>
        </div>
        
        <span className={`${difficultyColors[difficulty]} text-white text-xs px-2 py-1 rounded-full font-medium`}>
          {difficulty}
        </span>
      </div>
      
      <button 
        onClick={onStart}
        className="w-full btn-fitness text-center"
      >
        Iniciar Treino
      </button>
    </div>
  );
};

export default WorkoutCard;

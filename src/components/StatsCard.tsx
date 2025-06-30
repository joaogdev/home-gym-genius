
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  gradient?: string;
  trend?: 'up' | 'down' | 'neutral';
}

const StatsCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  gradient = 'bg-fitness-gradient',
  trend = 'neutral'
}: StatsCardProps) => {
  const trendColors = {
    up: 'text-fitness-success',
    down: 'text-fitness-danger',
    neutral: 'text-muted-foreground'
  };

  return (
    <div className="fitness-card group hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{value}</div>
          {subtitle && (
            <div className={`text-sm ${trendColors[trend]}`}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
        {title}
      </h3>
    </div>
  );
};

export default StatsCard;

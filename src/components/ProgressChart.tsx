
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface ProgressChartProps {
  data: Array<{
    date: string;
    weight: number;
  }>;
  title: string;
}

const ProgressChart = ({ data, title }: ProgressChartProps) => {
  return (
    <div className="fitness-card">
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9CA3AF' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="weight" 
              stroke="#84CC16"
              strokeWidth={3}
              dot={{ fill: '#84CC16', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#0EA5E9' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;

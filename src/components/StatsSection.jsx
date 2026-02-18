import React, { useEffect, useState } from 'react';
import './StatsSection.css';

const statsData = [
  { id: 1, label: 'Years of Experience', value: 5,suffix: '+' },
  { id: 2, label: 'Events Covered', value: 1.7, suffix: 'k+' },
  { id: 3, label: 'Satisfied Customers', value: 1.5, suffix: 'k+' },
  { id: 4, label: 'Customer Rating', value: 4, suffix: '/5' },
];

function StatsSection() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
  const interval = setInterval(() => {
    setCounts((prev) =>
      prev.map((count, i) => {
        const target = statsData[i].value;
        const isDecimal = target % 1 !== 0;
        const increment = isDecimal ? 0.04 : target > 10 ? 1 : 0.1;
        const next = +(count + increment).toFixed(2);
        return next >= target ? target : next;
      })
    );
  }, 50); 

  return () => clearInterval(interval);
}, []);

  return (
    <div className="stats-section">
      {statsData.map((stat, index) => (
        <div key={stat.id} className="stat-item">
          <div className="stat-number">
            {counts[index]}
            {stat.suffix || '+'}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;

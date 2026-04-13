import React from 'react';

export const IndustrialBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <img
        src="/safety-argument2/Images/backg.svg"
        alt="Industrial Background"
        className="w-full h-full object-cover rotate-90 dark:invert transition-all duration-300 opacity-[0.03]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

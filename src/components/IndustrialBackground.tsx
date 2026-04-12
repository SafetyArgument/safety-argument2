import React from 'react';

export const IndustrialBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <img
        src="https://raw.githubusercontent.com/SafetyArgument/safety-argument1/519931ea76d98b07aa4bb3c182e0bbc0210d0c49/Images/backg.svg"
        alt="Industrial Background"
        className="w-full h-full object-cover rotate-90 dark:invert transition-all duration-300 opacity-[0.03]"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

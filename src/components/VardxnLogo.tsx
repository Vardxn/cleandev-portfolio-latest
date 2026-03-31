const VardxnLogo = () => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="vardxn-logo">
      <defs>
        <style>{`
          .vardxn-logo {
            width: 40px;
            height: 40px;
          }
          
          .logo-circle {
            fill: none;
            stroke: #c481ff;
            stroke-width: 2;
            stroke-dasharray: 180;
            stroke-dashoffset: 180;
            animation: drawCircle 2s ease-in-out infinite;
            transform-origin: 100px 100px;
          }
          
          .logo-text {
            font-family: 'Geist', sans-serif;
            font-size: 32px;
            font-weight: 700;
            fill: #c481ff;
            text-anchor: middle;
            letter-spacing: 2px;
            opacity: 0;
            animation: fadeInText 1.5s ease-out 0.3s forwards;
          }
          
          .logo-dot {
            fill: #c481ff;
            opacity: 0;
            animation: pulseDot 1.5s ease-out 0.8s forwards;
          }
          
          @keyframes drawCircle {
            0% {
              stroke-dashoffset: 180;
              opacity: 1;
            }
            50% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -180;
              opacity: 0.5;
            }
          }
          
          @keyframes fadeInText {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes pulseDot {
            0% {
              opacity: 0;
              r: 2;
            }
            50% {
              opacity: 1;
              r: 4;
            }
            100% {
              opacity: 0.6;
              r: 3;
            }
          }
        `}</style>
      </defs>
      
      {/* Background circle with animation */}
      <circle cx="100" cy="100" r="95" className="logo-circle" />
      
      {/* Letter V in purple */}
      <text className="logo-text" x="95" y="115">
        V
      </text>
      
      {/* Pulse dots for accent */}
      <circle cx="140" cy="80" r="3" className="logo-dot" />
      <circle cx="150" cy="100" r="3" className="logo-dot" />
      <circle cx="140" cy="120" r="3" className="logo-dot" />
    </svg>
  );
};

export default VardxnLogo;

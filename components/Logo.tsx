import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "icon-only";
}

export default function Logo({ className = "", showText = true, size = "md", variant = "default" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base",
    lg: "text-base sm:text-lg",
  };

  const logoSizes = {
    sm: { width: 32, height: 32, strokeWidth: 1.5 },
    md: { width: 40, height: 40, strokeWidth: 2 },
    lg: { width: 64, height: 64, strokeWidth: 2.5 },
  };

  const currentSize = logoSizes[size];

  // Hexagon path points
  const hexagonPath = (size: number) => {
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.4;
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    return points.join(' ') + ' Z';
  };

  // Infinity symbol path - cleaner implementation
  const infinityPath = (size: number) => {
    const centerX = size / 2;
    const centerY = size / 2;
    const radiusX = size * 0.18;
    const radiusY = size * 0.12;
    const offset = size * 0.22;
    
    // Create a proper infinity symbol (lemniscate) using two overlapping circles
    return `
      M ${centerX - offset} ${centerY}
      A ${radiusX} ${radiusY} 0 1 1 ${centerX - offset} ${centerY - radiusY * 1.5}
      A ${radiusX} ${radiusY} 0 0 1 ${centerX} ${centerY}
      A ${radiusX} ${radiusY} 0 0 1 ${centerX + offset} ${centerY - radiusY * 1.5}
      A ${radiusX} ${radiusY} 0 1 1 ${centerX + offset} ${centerY}
      A ${radiusX} ${radiusY} 0 1 1 ${centerX + offset} ${centerY + radiusY * 1.5}
      A ${radiusX} ${radiusY} 0 0 1 ${centerX} ${centerY}
      A ${radiusX} ${radiusY} 0 0 1 ${centerX - offset} ${centerY + radiusY * 1.5}
      A ${radiusX} ${radiusY} 0 1 1 ${centerX - offset} ${centerY}
      Z
    `;
  };

  const LogoIcon = () => {
    const viewBoxSize = 100;
    return (
      <div className="relative">
        {/* Glow effect - reduced opacity for better visibility */}
        <div className="absolute inset-0 blur-lg opacity-20">
          <svg width={currentSize.width} height={currentSize.height} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} className="w-full h-full">
            <path
              d={hexagonPath(viewBoxSize)}
              fill="white"
              opacity="0.3"
            />
          </svg>
        </div>
        
        {/* Main logo - increased contrast */}
        <svg
          width={currentSize.width}
          height={currentSize.height}
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className="relative"
        >
          {/* Hexagon outline - stronger stroke for visibility */}
          <path
            d={hexagonPath(viewBoxSize)}
            fill="none"
            stroke="white"
            strokeWidth={currentSize.strokeWidth * 2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]"
            opacity="0.95"
          />
          
          {/* WV Text - centered */}
          <text
            x={viewBoxSize / 2}
            y={viewBoxSize / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
            className="drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
            fontSize={viewBoxSize * 0.35}
            fontWeight="700"
            fontFamily="var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif"
            letterSpacing="-0.05em"
            opacity="0.95"
          >
            WV
          </text>
        </svg>
      </div>
    );
  };

  if (variant === "icon-only") {
    return (
      <Link href="/" className={`inline-block group ${className}`}>
        <LogoIcon />
      </Link>
    );
  }

  return (
    <Link href="/" className={`flex flex-col items-center group ${className}`}>
      {/* Logo Icon */}
      <div className="mb-2">
        <LogoIcon />
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="text-center">
          <span className={`font-bold ${sizeClasses[size]} tracking-wider text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]`}>
            WISE VENTURE
          </span>
        </div>
      )}
    </Link>
  );
}


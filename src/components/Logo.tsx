import citiusLogo from '../data/cititus-logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'minimal' | 'badge' | 'featured';
  animated?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', variant = 'minimal', animated = false, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
  };

  const variantClasses = {
    minimal: 'object-contain',
    badge: 'object-contain bg-white rounded-lg p-1.5 shadow-md',
    featured: 'object-contain bg-white rounded-full p-2.5 shadow-xl',
  };

  const animationClass = animated ? 'animate-logo-float' : '';

  return (
    <img
      src={citiusLogo}
      alt="CITIUS - NIT Kurukshetra Athletics Meet"
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${animationClass} ${className}`}
    />
  );
}

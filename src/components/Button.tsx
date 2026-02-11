export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const baseClasses =
  'inline-flex items-center justify-center w-[200px] h-[44px] px-6 py-4 gap-2 rounded-[16px] bg-[linear-gradient(167.15deg,_#1A60FF_4.43%,_#00F1E1_128.21%)] opacity-100 text-white font-medium transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A60FF] disabled:opacity-50 disabled:cursor-not-allowed';

export function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={className ? `${baseClasses} ${className}` : baseClasses}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

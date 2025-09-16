interface Props {
  errors: number;
  className?: string;  // Recebe a classe externa
}

export default function HangmanSVG({ errors, className }: Props) {
  return (
    <svg
      width="200"
      height="250"
      className={`${className ?? ''} mb-6 stroke-gray-800 drop-shadow-md`}
    >
      <line x1="20" y1="230" x2="180" y2="230" strokeWidth="4" />
      <line x1="60" y1="230" x2="60" y2="20" strokeWidth="4" />
      <line x1="60" y1="20" x2="140" y2="20" strokeWidth="4" />
      <line x1="140" y1="20" x2="140" y2="50" strokeWidth="4" />
      {errors > 0 && <circle cx="140" cy="70" r="20" strokeWidth="4" fill="#facc15" />}
      {errors > 1 && <line x1="140" y1="90" x2="140" y2="150" strokeWidth="4" stroke="#f87171" />}
      {errors > 2 && <line x1="140" y1="110" x2="120" y2="130" strokeWidth="4" stroke="#f87171" />}
      {errors > 3 && <line x1="140" y1="110" x2="160" y2="130" strokeWidth="4" stroke="#f87171" />}
      {errors > 4 && <line x1="140" y1="150" x2="120" y2="180" strokeWidth="4" stroke="#f87171" />}
      {errors > 5 && <line x1="140" y1="150" x2="160" y2="180" strokeWidth="4" stroke="#f87171" />}
    </svg>
  );
}



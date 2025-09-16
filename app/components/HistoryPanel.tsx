interface Props {
  correct: string[];
  wrong: string[];
  attemptsLeft: number;
  className?: string;
  correctClassName?: string;
  wrongClassName?: string;
}

export default function HistoryPanel({
  correct,
  wrong,
  attemptsLeft,
  className,
  correctClassName,
  wrongClassName,
}: Props) {
  return (
    <div className={className}>
      <p>Tentativas restantes: <strong>{attemptsLeft}</strong></p>
      <p>
        ✔️ Corretas:{' '}
        {correct.length > 0
          ? correct.map(c => (
              <span key={c} className={correctClassName}>
                {c}
              </span>
            ))
          : '—'}
      </p>
      <p>
        ❌ Erradas:{' '}
        {wrong.length > 0
          ? wrong.map(c => (
              <span key={c} className={wrongClassName}>
                {c}
              </span>
            ))
          : '—'}
      </p>
    </div>
  );
}




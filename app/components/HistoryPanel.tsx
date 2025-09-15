interface Props {
  correct: string[];
  wrong: string[];
  attemptsLeft: number;
}

export default function HistoryPanel({ correct, wrong, attemptsLeft }: Props) {
  return (
    <div className="mt-4 text-center space-y-2">
      <p>Tentativas restantes: <strong>{attemptsLeft}</strong></p>
      <p>
        ✔️ Corretas:{' '}
        {correct.length > 0
          ? correct.map(c => <span key={c} className="bg-green-300 px-2 py-1 rounded-full mx-0.5">{c}</span>)
          : '—'}
      </p>
      <p>
        ❌ Erradas:{' '}
        {wrong.length > 0
          ? wrong.map(c => <span key={c} className="bg-red-300 px-2 py-1 rounded-full mx-0.5">{c}</span>)
          : '—'}
      </p>
    </div>
  );
}


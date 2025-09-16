interface Props {
  word: string;
  guessed: string[];
  className?: string;
  letterClassName?: string;
  hiddenLetterClassName?: string;
}

export default function WordReveal({
  word,
  guessed,
  className,
  letterClassName,
  hiddenLetterClassName,
}: Props) {
  return (
    <div className={className}>
      {word.split('').map((letter, i) => (
        <span
          key={i}
          className={`${letterClassName ?? ''} ${guessed.includes(letter) ? '' : hiddenLetterClassName ?? ''}`}
        >
          {guessed.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}


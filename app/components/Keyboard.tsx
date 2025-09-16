interface Props {
  alphabet: string[];
  guessed: string[];
  wrong: string[];
  onGuess: (letter: string) => void;
  disabled: boolean;
  className?: string;
  buttonClassName?: string;
  guessedClassName?: string;
  wrongClassName?: string;
}

export default function Keyboard({
  alphabet,
  guessed,
  wrong,
  onGuess,
  disabled,
  className,
  buttonClassName,
  guessedClassName,
  wrongClassName,
}: Props) {
  return (
    <div className={className}>
      {alphabet.map(letter => {
        const tried = guessed.includes(letter) || wrong.includes(letter);
        let buttonClasses = buttonClassName ?? '';

        if (guessed.includes(letter)) buttonClasses += ` ${guessedClassName ?? ''}`;
        if (wrong.includes(letter)) buttonClasses += ` ${wrongClassName ?? ''}`;
        if (!tried) buttonClasses += ' hover:bg-gray-200 transition-colors';

        return (
          <button
            key={letter}
            onClick={() => onGuess(letter)}
            disabled={disabled || tried}
            className={buttonClasses.trim()}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}



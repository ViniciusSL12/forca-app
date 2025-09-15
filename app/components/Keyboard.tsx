interface Props {
  alphabet: string[];
  guessed: string[];
  wrong: string[];
  onGuess: (letter: string) => void;
  disabled: boolean;
}

export default function Keyboard({ alphabet, guessed, wrong, onGuess, disabled }: Props) {
  return (
    <div className="flex flex-wrap justify-center max-w-md mt-4">
      {alphabet.map(letter => {
        const tried = guessed.includes(letter) || wrong.includes(letter);
        return (
          <button
            key={letter}
            onClick={() => onGuess(letter)}
            disabled={disabled || tried}
            className={`m-1 w-10 h-10 rounded-lg font-bold shadow-md
              ${guessed.includes(letter) ? 'bg-green-400 text-white' : ''}
              ${wrong.includes(letter) ? 'bg-red-400 text-white' : ''}
              ${!tried ? 'bg-white hover:bg-gray-200' : ''} transition-colors`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}

interface Props {
  word: string;
  guessed: string[];
}

export default function WordReveal({ word, guessed }: Props) {
  return (
    <div className="flex justify-center space-x-3 mb-6 text-3xl font-mono">
      {word.split('').map((letter, i) => (
        <span
          key={i}
          className="border-b-4 border-blue-700 w-8 text-center transition-all duration-300"
        >
          {guessed.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}


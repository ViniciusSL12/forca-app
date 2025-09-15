'use client';
import { useState, useEffect } from 'react';
import HangmanSVG from './components/HangmanSVG';
import Keyboard from './components/Keyboard';
import WordReveal from './components/WordReveal';
import HistoryPanel from './components/HistoryPanel';
import { getRandomWord, alphabet, maxErrors } from '../utils/gameConfig';

export default function Home() {
  const [secretWord, setSecretWord] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState<number>(maxErrors);
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  useEffect(() => {
    startNewGame();
  }, []);

  function startNewGame() {
    setSecretWord(getRandomWord());
    setGuessedLetters([]);
    setWrongLetters([]);
    setAttemptsLeft(maxErrors);
    setStatus('playing');
  }

  function handleGuess(letter: string) {
    if (status !== 'playing') return;
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter)) return;

    if (secretWord.includes(letter)) {
      const newGuessed = [...guessedLetters, letter];
      setGuessedLetters(newGuessed);
      if (secretWord.split('').every(l => newGuessed.includes(l))) setStatus('won');
    } else {
      setWrongLetters(prev => [...prev, letter]);
      setAttemptsLeft(prev => {
        const next = prev - 1;
        if (next <= 0) setStatus('lost');
        return next;
      });
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">Jogo da Forca</h1>

      <HangmanSVG errors={maxErrors - attemptsLeft} />

      <WordReveal word={secretWord} guessed={guessedLetters} />

      <Keyboard
        alphabet={alphabet}
        guessed={guessedLetters}
        wrong={wrongLetters}
        onGuess={handleGuess}
        disabled={status !== 'playing'}
      />

      <HistoryPanel correct={guessedLetters} wrong={wrongLetters} attemptsLeft={attemptsLeft} />

      {status !== 'playing' && (
        <div className="mt-6 text-center animate-fadeIn">
          {status === 'won' && <p className="text-green-600 text-2xl font-bold mb-2">Parabéns! Você venceu!</p>}
          {status === 'lost' && <p className="text-red-600 text-2xl font-bold mb-2">Você perdeu. A palavra era <strong>{secretWord}</strong>.</p>}
          <button
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            onClick={startNewGame}
          >
            Reiniciar
          </button>
        </div>
      )}
    </main>
  );
}



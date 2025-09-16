'use client';

import { useState, useEffect } from 'react';
import HangmanSVG from './components/HangmanSVG';
import WordReveal from './components/WordReveal';
import Keyboard from './components/Keyboard';
import HistoryPanel from './components/HistoryPanel';

import styles from './Hangman.module.css';

import { getRandomWord, alphabet, maxErrors } from '../utils/gameConfig';

export default function Page() {
  // States que faltavam
  const [secretWord, setSecretWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [attemptsLeft, setAttemptsLeft] = useState(maxErrors);
  const [status, setStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  useEffect(() => {
    startNewGame();
  }, []);

  function startNewGame() {
    const word = getRandomWord();
    setSecretWord(word);
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
      if (secretWord.split('').every(l => newGuessed.includes(l))) {
        setStatus('won');
      }
    } else {
      setWrongLetters([...wrongLetters, letter]);
      const newAttemptsLeft = attemptsLeft - 1;
      setAttemptsLeft(newAttemptsLeft);
      if (newAttemptsLeft <= 0) {
        setStatus('lost');
      }
    }
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Jogo da Forca</h1>

      <HangmanSVG errors={maxErrors - attemptsLeft} className={styles.hangmanSVG} />

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
        <div className={styles.statusContainer}>
          {status === 'won' && <p className={styles.winMessage}>Parabéns! Você venceu!</p>}
          {status === 'lost' && (
            <p className={styles.loseMessage}>
              Você perdeu. A palavra era <strong>{secretWord}</strong>.
            </p>
          )}
          <button className={styles.restartButton} onClick={startNewGame}>
            Reiniciar
          </button>
        </div>
      )}
    </main>
  );
}







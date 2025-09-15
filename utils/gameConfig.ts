export const words: string[] = [
  'REACT','NEXT','JAVASCRIPT','PYTHON','CSS','HTML','NODE',
  'PROGRAMAR','COMPILADOR','FRAMEWORK','FRONTEND','BACKEND',
  'ALGORITMO','CODIGO','FUNCAO','VARIAVEL','COMPONENTE',
  'GITHUB','DESENVOLVER','SERVIDOR','CLIENTE','PROGRAMA',
  'INTERNET','COMPUTADOR','LINGUAGEM','OBJETO','ARRAY',
  'PROMISE','ASYNC','AWAIT','HOOKS','STATE','EFFECT'
];

export const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const maxErrors = 6;

export function getRandomWord(): string {
  return words[Math.floor(Math.random() * words.length)];
}


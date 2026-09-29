// src/funcoes.ts
export {};
// --- Funções básicas ---
function somar(a: number, b: number): number {
  return a + b;
}

function saudacao(nome: string = "Visitante"): string {
  return `Olá, ${nome}!`;
}

// --- Arrow functions ---
const dobrar = (x: number): number => x * 2;

const ehPar = (n: number): boolean => n % 2 === 0;

// --- Callbacks tipados ---
function processar<T>(lista: T[], callback: (item: T) => void): void {
  for (const item of lista) {
    callback(item);
  }
}

const frutas: string[] = ["Maçã", "Banana", "Laranja"];
processar(frutas, (fruta) => console.log(`Fruta: ${fruta}`));

// --- Closure: contador ---
function criarContador(): () => number {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}

const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3

// --- Closure: cache ---
function criarCache<T>(fn: (key: string) => T): (key: string) => T {
  const cache = new Map<string, T>();
  return (key: string) => {
    if (cache.has(key)) return cache.get(key)!;
    const resultado = fn(key);
    cache.set(key, resultado);
    return resultado;
  };
}

const buscaComCache = criarCache((key: string) => `Dados de ${key}`);
console.log(buscaComCache("usuarios")); // busca
console.log(buscaComCache("usuarios")); // cache hit

// --- Async/await ---
function buscarDado(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Dado #${id}`), 500);
  });
}

async function executar(): Promise<void> {
  const dado1 = await buscarDado(1);
  const dado2 = await buscarDado(2);
  console.log(`${dado1}, ${dado2}`);
}

executar();
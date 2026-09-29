// src/funcoes-genericas.ts
export {};

// --- Função genérica básica ---
function primeiro<T>(arr: T[]): T {
  return arr[0];
}

console.log(primeiro(["Ana", "João"])); // "Ana"
console.log(primeiro([10, 20, 30]));    // 10

// --- Com constraint ---
function buscarPorId<T extends { id: number }>(lista: T[], id: number): T | undefined {
  return lista.find(item => item.id === id);
}

type Usuario = { id: number; nome: string };
type Produto = { id: number; nome: string; preco: number };

const usuarios: Usuario[] = [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bob" }];
const produtos: Produto[] = [{ id: 1, nome: "Notebook", preco: 3500 }];

console.log(buscarPorId(usuarios, 1)?.nome); // "Ana"
console.log(buscarPorId(produtos, 2)?.nome); // undefined

// --- Função genérica de filtro ---
function filtrarPor<T, K extends keyof T>(lista: T[], prop: K, valor: T[K]): T[] {
  return lista.filter(item => item[prop] === valor);
}

const todosProdutos: Produto[] = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 89 },
  { id: 3, nome: "Teclado", preco: 199 }
];

const baratos = filtrarPor(todosProdutos, "preco", 89);
console.log(baratos.map(p => p.nome)); // ["Mouse"]

// --- Resultado genérico ---
type Resultado<T> =
  | { ok: true; dados: T }
  | { ok: false; erro: string };

function processarDados<T>(dados: T): Resultado<T> {
  if (!dados) {
    return { ok: false, erro: "Dados inválidos" };
  }
  return { ok: true, dados };
}

const r1 = processarDados({ nome: "Ana" });
const r2 = processarDados(null);

if (r1.ok) {
  console.log(r1.dados.nome); // "Ana"
}

if (!r2.ok) {
  console.log(r2.erro); // "Dados inválidos"
}
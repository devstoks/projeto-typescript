"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// --- Função genérica ---
function pegarPrimeiro(arr) {
    return arr[0];
}
const primeiroNome = pegarPrimeiro(["Ana", "João"]);
const primeiroNum = pegarPrimeiro([10, 20, 30]);
console.log(primeiroNome.toUpperCase()); // "ANA"
console.log(primeiroNum * 2); // 20
// --- Restrição com extends ---
function logComprimento(item) {
    console.log(`Comprimento: ${item.length}`);
}
logComprimento("Hello");
logComprimento([1, 2, 3]);
const resposta = {
    dados: [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bob" }],
    status: 200,
    mensagem: "Sucesso"
};
console.log(`${resposta.dados.length} usuários encontrados`);
// --- Classe genérica ---
class Repository {
    constructor() {
        this.items = [];
    }
    adicionar(item) {
        this.items.push(item);
    }
    listar() {
        return [...this.items];
    }
    filtrar(predicate) {
        return this.items.filter(predicate);
    }
}
const repo = new Repository();
repo.adicionar({ id: 1, nome: "Notebook", preco: 3500 });
repo.adicionar({ id: 2, nome: "Mouse", preco: 89 });
const baratos = repo.filtrar(p => p.preco < 200);
console.log("Baratos:", baratos.map(p => p.nome));

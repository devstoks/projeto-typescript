export {};

type Produto = {
    id: number;
    nome: string;
    preco: number;
    categoria: string;
    emEstoque: boolean;
};

type Usuario = {
    id: number;
    nome: string;
    email: string;
};


// Classe genérica
class Catalogo<T> {
    private items: T[] = [];

    adicionar(item: T): void {
        this.items.push(item);
    }

    listar(): T[] {
        return [...this.items];
    }

    filtrar(predicate: (item: T) => boolean): T[] {
        return this.items.filter(predicate);
    }

    buscarPorIndice(index: number): T | undefined {
        return this.items[index];
    }
}


// =========================
// CATÁLOGO DE PRODUTOS
// =========================

const produtos = new Catalogo<Produto>();

produtos.adicionar({
    id: 1,
    nome: "Notebook",
    preco: 3500,
    categoria: "TI",
    emEstoque: true
});

produtos.adicionar({
    id: 2,
    nome: "Mouse",
    preco: 89,
    categoria: "TI",
    emEstoque: true
});

produtos.adicionar({
    id: 3,
    nome: "Cadeira",
    preco: 450,
    categoria: "Móveis",
    emEstoque: false
});

produtos.adicionar({
    id: 4,
    nome: "Teclado",
    preco: 199,
    categoria: "TI",
    emEstoque: true
});

produtos.adicionar({
    id: 5,
    nome: "Mesa",
    preco: 800,
    categoria: "Móveis",
    emEstoque: true
});

produtos.adicionar({
    id: 6,
    nome: "Monitor",
    preco: 1200,
    categoria: "TI",
    emEstoque: true
});


// Listar todos os produtos

console.log("Todos os produtos:");
console.log(produtos.listar());


// Filtrar por categoria

const produtosTI = produtos.filtrar(
    produto => produto.categoria === "TI"
);

console.log("Produtos da categoria TI:");
console.log(produtosTI);


// Filtrar produtos em estoque

const produtosEmEstoque = produtos.filtrar(
    produto => produto.emEstoque
);

console.log("Produtos em estoque:");
console.log(produtosEmEstoque);


// Buscar produto por índice

const produtoEncontrado = produtos.buscarPorIndice(2);

console.log("Produto no índice 2:");
console.log(produtoEncontrado);


// Ordenar por preço

const produtosPorPreco = [...produtos.listar()].sort(
    (a, b) => a.preco - b.preco
);

console.log("Produtos ordenados por preço:");
console.log(produtosPorPreco);


// Calcular total dos produtos disponíveis

const total = produtos
    .filtrar(produto => produto.emEstoque)
    .reduce(
        (soma, produto) => soma + produto.preco,
        0
    );

console.log(`Total dos produtos em estoque: R$ ${total.toFixed(2)}`);


// =========================
// CATÁLOGO DE USUÁRIOS
// =========================

const usuarios = new Catalogo<Usuario>();

usuarios.adicionar({
    id: 1,
    nome: "Ana",
    email: "ana@email.com"
});

usuarios.adicionar({
    id: 2,
    nome: "Bob",
    email: "bob@email.com"
});

usuarios.adicionar({
    id: 3,
    nome: "Carlos",
    email: "carlos@email.com"
});


// Listar usuários

console.log("Todos os usuários:");
console.log(usuarios.listar());


// Buscar usuário por índice

const usuarioEncontrado = usuarios.buscarPorIndice(1);

console.log("Usuário no índice 1:");
console.log(usuarioEncontrado);
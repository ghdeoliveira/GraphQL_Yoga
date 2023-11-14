const clientes = [
    {id: '1', nome: 'Marta Pereira', email: 'marta@pereira.com', cep: '84532102', uf: 'SC'},
    {id: '2', nome: 'Luis Barbosa', email: 'luis@barbosa.com', cep: '84895102', uf: 'SC'},
    {id: '3', nome: 'Carla Ribas', email: 'carla@ribas.com', cep: '84002441', uf: 'SC'},
    {id: '4', nome: 'Marcio Gomes', email: 'marcio@gomes.com', cep: '81313000', uf: 'SC'},
    {id: '5', nome: 'Beatriz Nunes', email: 'beatriz@nunes.com', cep: '84015402', uf: 'SC'}
]

const fornecedores  = [
    {id: '1', nome: 'Bebidas Ltda', email: 'bebidas@bebidas.com', cep: '89985001', uf: 'SC'},
    {id: '2', nome: 'Carnes Ltda', email: 'carnes@carnes.com', cep: '82022013', uf: 'RS'},
    {id: '3', nome: 'Queijos Ltda', email: 'queijos@queijos.com', cep: '81185401', uf: 'MG'},
    {id: '4', nome: 'Paes Ltda', email: 'paes@paes.com', cep: '84525441', uf: 'RJ'},
    {id: '5', nome: 'Doces Ltda', email: 'doces@doces.com', cep: '87781231', uf: 'CE'}
]

const produtos = [
    {id: '1', descricao: 'Agua 500ml', precocusto: 0.25, precovenda: 1.39, quantidade: 36},
    {id: '2', descricao: 'Cerveja lata', precocusto: 0.99, precovenda: 3.29, quantidade: 36},
    {id: '3', descricao: 'Refrigerante lata', precocusto: 0.59, precovenda: 3.50, quantidade: 36},
    {id: '4', descricao: 'Maminha 1kg', precocusto: 10.00, precovenda: 49.99, quantidade: 20},
    {id: '5', descricao: 'Picanha 1kg', precocusto: 13.00, precovenda: 69.99, quantidade: 20},
    {id: '6', descricao: 'Queijo coalho', precocusto: 5.50, precovenda: 13.69, quantidade: 6},
    {id: '7', descricao: 'Queijo canastra', precocusto: 9.50, precovenda: 31.69, quantidade: 6},
    {id: '8', descricao: 'Pao fatiado', precocusto: 1.01, precovenda: 3.89, quantidade: 20},
    {id: '9', descricao: 'Pao hamburguer', precocusto: .52, precovenda: 4.89, quantidade: 10},
    {id: '10', descricao: 'Pe de moleque 300g', precocusto: 1.20, precovenda: 3.81, quantidade: 6}
]

module.exports = {
    Query: {
        allClientes: () => clientes,
        Cliente: () => clientes[0],

        allFornecedores: () => fornecedores,
        Fornecedor: () => fornecedores[0],

        allProdutos: () => produtos,
        Produto: () => produtos[0],   
    },
    Mutation: {
        createCliente: () => clientes[0],
        createFornecedor: () => fornecedores[0],
        createProduto: () => produtos[0],
    },
};
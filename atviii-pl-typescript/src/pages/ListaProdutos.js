export default function ListaProdutos() {
    return (
        <div className="container">
            <h1 className="pb-4">Listagem de Produtos e Serviços</h1>
            <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ração para cães</td>
                        <td>Produto</td>
                        <td>R$ 50,00</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ração para gatos</td>
                        <td>Produto</td>
                        <td>R$ 45,00</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Banho e tosa</td>
                        <td>Serviço</td>
                        <td>R$ 30,00</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Consulta veterinária</td>
                        <td>Serviço</td>
                        <td>R$ 80,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
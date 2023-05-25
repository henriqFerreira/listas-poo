export default function ListaClientes () {
    return (
        <div className="container">
            <h1 className="pb-4">Listagem de Clientes</h1>
            <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Nome Social</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">CPF</th>
                        <th scope="col">RG</th>
                        <th scope="col">Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Gustavo Marques</td>
                        <td>Gugu guloso</td>
                        <td>gustavinho@gmail.com</td>
                        <td>111.111.111-11</td>
                        <td>22.222.222-2</td>
                        <td>12 91234-5678</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Camila Redondo</td>
                        <td>Caca cabulosa</td>
                        <td>camilera@gmail.com</td>
                        <td>111.111.111-11</td>
                        <td>22.222.222-2</td>
                        <td>12 91234-5678</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Henrique Neto</td>
                        <td>Cerveja Henriken</td>
                        <td>henrique@gmail.com</td>
                        <td>111.111.111-11</td>
                        <td>22.222.222-2</td>
                        <td>12 91234-5678</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
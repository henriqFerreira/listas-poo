export default function ListaPets() {
    return (
        <div className="container">
            <h1 className="pb-4">Listagem de Pets</h1>
            <table className="table table-hover">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Raça</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Gênero</th>
                        <th scope="col">Dono</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Jorge Henrique</td>
                        <td>Yorkshire</td>
                        <td>Cachorro</td>
                        <td>Macho</td>
                        <td>Gugu guloso</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ollie</td>
                        <td>Bulldog</td>
                        <td>Cachorro</td>
                        <td>Fêmea</td>
                        <td>Camila quadrada</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Flocky</td>
                        <td>Laranja</td>
                        <td>Gato</td>
                        <td>Macho</td>
                        <td>Henriken</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
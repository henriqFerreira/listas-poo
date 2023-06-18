import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF\n` + `Número: ` + cliente.getCpf.getValor + `     Data de emissão: ` + cliente.getCpf.getDataEmissao);
            this.listarRgs(cliente.getRgs);
            this.listarTelefones(cliente.getTelefones);
            this.listarPets(cliente.getPets);
            console.log(`Data de cadastro: ` + cliente.getDataCadastro)
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    private listarTelefones(telefones : Array<Telefone>) {
        if (telefones){
            console.log(`Telefones: `)
            telefones.forEach(telefone => {
                if(telefone){
                    console.log(telefone.getDdd + ' ' + telefone.getNumero)
                }
            });
        }
    }

    private listarPets(pets : Array<Pet>) {
        if(pets) {
            console.log(`Pets: `)
            pets.forEach(pet => {
                if(pet){
                    console.log(`Nome: ` + pet.getNome + '  Tipo: ' + pet.getTipo + `  Genero: ` + pet.getGenero + '  Raça: ' + pet.getRaca)
                }
            });
        }
    }

    private listarRgs(rgs : Array<RG>) {
        if(rgs) {
            console.log(`RGs: `)
            rgs.forEach(rg => {
                if(rg){
                    console.log(`Número: ` + rg.getValor + '  Data emissão: ' + rg.getDataEmissao)
                }
            });
        }
    }
    
    public listarMaioresConsumidoresDeProdutosOuServicos(): void {
        console.log(`\nLista dos 10 clientes que mais consumiram Produtos ou Serviços:`);

        let maioresConsumidoresProdutosOuServicos = this.clientes.sort((a, b) => {
            return (
                a.getProdutosConsumidos.length > a.getServicosConsumidos.length ? a.getProdutosConsumidos.length : a.getServicosConsumidos.length 
                - 
                b.getProdutosConsumidos.length > b.getServicosConsumidos.length ? b.getProdutosConsumidos.length : b.getServicosConsumidos.length
            ) * -1
        });


        for (let i = 0; i < 10 ; i++) {
            let consumidores = maioresConsumidoresProdutosOuServicos[i]
            if (consumidores !== undefined){
                console.log(consumidores.nome)
            }else{
                break
            }
        }
    }

    public listarProdutosOuServicosMaisConsumidos(): void{
        console.log(`\nListagem geral dos serviços ou produtos mais consumidos`);
        
        let dicProdutosEServicos = new Map()
        this.clientes.forEach(cliente =>{
            cliente.getProdutosConsumidos.forEach(produto =>{
                if (!(dicProdutosEServicos.has(produto.nome))){
                    dicProdutosEServicos.set(produto.nome, 1)
                }else{
                    dicProdutosEServicos.set(produto.nome, (dicProdutosEServicos.get(produto.nome) + 1))
                }
                
            })
        })

        this.clientes.forEach(cliente =>{
            cliente.getServicosConsumidos.forEach(servico =>{
                if (!(dicProdutosEServicos.has(servico.nome))){
                    dicProdutosEServicos.set(servico.nome, 1)
                }else{
                    dicProdutosEServicos.set(servico.nome, (dicProdutosEServicos.get(servico.nome) + 1))
                }
                
            })
        })

        const dicProdutosEServicosSort = new Map([...dicProdutosEServicos.entries()].sort((a, b) => b[1] - a[1]));

        dicProdutosEServicosSort.forEach((value, key) =>{
            console.log(`${key}: ${value}`)
        })
        console.log("-----------------------")
    }

    public listarClientesQueMaisConsumiramEmValor(): void{
        console.log(`\nListagem dos 5 clientes que mais consumiram em valor`);
        
        let dicClientes = new Map()
        this.clientes.forEach(cliente =>{
            let valorTotalProdutos = 0
            let valorTotalServicos = 0
            cliente.getProdutosConsumidos.forEach(produto =>{
                valorTotalProdutos += produto.valor
            })
            cliente.getServicosConsumidos.forEach(servico =>{
                valorTotalServicos += servico.valor
            })
            let valorTotal = valorTotalProdutos + valorTotalServicos
            dicClientes.set(cliente.nome, valorTotal)
        })

        const dicClientesSort = new Map([...dicClientes.entries()].sort((a, b) => b[1] - a[1]));

        let contador = 0
        dicClientesSort.forEach((value, key) =>{
            if (contador < 5){
                console.log(`${key}: ${value}`)
                contador += 1
            }
        })
        console.log("-----------------------")
    }

    public listarProdutosMaisConsumidosPorTipoPets(): void{
        console.log(`\nListagem dos produtos mais consumidos por tipo de pet`);

        let listaDeProdutosConsumidos : any = [];
        this.clientes.forEach((cliente) =>{
            cliente.getProdutosConsumidos.forEach(produto => {
                listaDeProdutosConsumidos.push(produto);
            });
        });

        // Removendo os produtos duplicados
        let listaSemRepeticaoDeProdutosConsumidos  = new Set(listaDeProdutosConsumidos);
        listaDeProdutosConsumidos = Array.from(listaSemRepeticaoDeProdutosConsumidos);

        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeProdutosAgrupadosPorTipo = this.agruparProdutoPorAtributo(listaDeProdutosConsumidos, 'tipo')

        // Apresentando os produtos agrupados por tipo de Pet
        listDeProdutosAgrupadosPorTipo.forEach((produto) => {
            console.log(`${produto.at(0)?.tipo}: ${this.listarProdutos(produto)}`)
        })
        
        console.log(`\n`);
    }

    public listarServicosMaisConsumidosPorTipoPets(): void{
        console.log(`\nListagem dos serviços mais consumidos por tipo de pet`);

        // let nome01 = "Camila"
        // let nomeSocial01 = "Camila Redondo"
        // let nome02 = "Pedro"
        // let nomeSocial02 = "Pedro Redondo"
        // let cpf01 = new CPF("01", new Date(2023, 5, 2))
        // let cpf02 = new CPF("02", new Date(2023, 5, 2))
        // let rg01 = new RG("00000", new Date(2023, 5, 1));
        // let rgs : RG [] = []
        // rgs.push(rg01)
        // let dataCadastro = new Date()
        // let telefones : Telefone [] = []
        // telefones.push(new Telefone("12", "98190-9172"))
        // let pets01 : Pet[] = []
        // let pets02 : Pet[] = []
        // pets01.push(new Pet("Ollie", "Bulldog", "F", "cachorro"), new Pet("Ollie", "kkkk", "F", "gato"))
        // pets02.push(new Pet("Ollie", "kkk", "F", "gato"), new Pet("Ollie", "Bulldog", "F", "cachorro"))
        
        // let cliente01 = new Cliente(nome01, nomeSocial01, cpf01, rgs, dataCadastro, telefones, pets01);
        // let cliente02 = new Cliente(nome02, nomeSocial02, cpf02, rgs, dataCadastro, telefones, pets02);

        // let produto01 = new Produto("Racao", 100, "gato")
        // let produto02 = new Produto("Petisco", 30, "cachorro")
        // let produto03 = new Produto("Bolinha", 50, "cachorro")
        // let produto04 = new Produto("Fralda", 500, "cachorro")
        // let produto05 = new Produto("Ursinho", 501, "cachorro")
        // let produto06 = new Produto("Pijama", 511, "cachorro")

        // cliente01.setServicosConsumidos = produto01
        // cliente01.setServicosConsumidos = produto02
        // cliente01.setServicosConsumidos = produto03

        // cliente02.setServicosConsumidos = produto04
        // cliente02.setServicosConsumidos = produto05
        // cliente02.setServicosConsumidos = produto06
        // cliente02.setServicosConsumidos = produto06
        // cliente02.setServicosConsumidos = produto03

        // this.clientes.push(cliente01, cliente02)

        // Coletando todos os produtos consumidos pelos clientes
        let listaDeServicosConsumidos : any = [];
        this.clientes.forEach((cliente) =>{
            cliente.getServicosConsumidos.forEach(servico => {
                listaDeServicosConsumidos.push(servico);
            });
        });

        // Removendo os produtos duplicados
        let listaSemRepeticaoDeServicosConsumidos  = new Set(listaDeServicosConsumidos);
        listaDeServicosConsumidos = Array.from(listaSemRepeticaoDeServicosConsumidos);
 
        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeServicosAgrupadosPorTipo = this.agruparServicoPorAtributo(listaDeServicosConsumidos, 'tipo')

        // Apresentando os produtos agrupados por tipo de Pet
        listDeServicosAgrupadosPorTipo.forEach((servico) => {
            console.log(`${servico.at(0)?.tipo}: ${this.listarServicos(servico)}`)
        })
        
        console.log(`\n`);
    }

    public listarProdutosMaisConsumidosPorRacaPets(): void{
        // let nome01 = "Camila"
        // let nomeSocial01 = "Camila Redondo"
        // let nome02 = "Pedro"
        // let nomeSocial02 = "Pedro Redondo"
        // let cpf01 = new CPF("01", new Date(2023, 5, 2))
        // let cpf02 = new CPF("02", new Date(2023, 5, 2))
        // let rg01 = new RG("00000", new Date(2023, 5, 1));
        // let rgs : RG [] = []
        // rgs.push(rg01)
        // let dataCadastro = new Date()
        // let telefones : Telefone [] = []
        // telefones.push(new Telefone("12", "98190-9172"))
        // let pets01 : Pet[] = []
        // let pets02 : Pet[] = []
        // pets01.push(new Pet("Ollie", "Bulldog", "F", "cachorro"), new Pet("Flocky", "Siames", "M", "gato"))
        // pets02.push(new Pet("Holly", "Bulldog", "F", "cachorro"), new Pet("Tico", "Arara", "M", "passarinho"))
        
        // let cliente01 = new Cliente(nome01, nomeSocial01, cpf01, rgs, dataCadastro, telefones, pets01);
        // let cliente02 = new Cliente(nome02, nomeSocial02, cpf02, rgs, dataCadastro, telefones, pets02);

        // let produto01 = new Produto("Racao", 100, "gato", "Siames")
        // let produto02 = new Produto("Petisco", 30, "cachorro", "Arara")
        // let produto03 = new Produto("Bolinha", 50, "cachorro", "Geral")
        // let produto04 = new Produto("Fralda", 500, "cachorro", "Geral")
        // let produto05 = new Produto("Ursinho", 501, "cachorro", "Geral")
        // let produto06 = new Produto("Pijama", 511, "cachorro", "Bulldog")

        // cliente01.setProdutosConsumidos = produto01
        // cliente01.setProdutosConsumidos = produto02
        // cliente01.setProdutosConsumidos = produto03

        // cliente02.setProdutosConsumidos = produto04
        // cliente02.setProdutosConsumidos = produto05
        // cliente02.setProdutosConsumidos = produto06
        // cliente02.setProdutosConsumidos = produto06
        // cliente02.setProdutosConsumidos = produto03

        // this.clientes.push(cliente01, cliente02)

        let listaDeProdutosConsumidos : any = [];
        this.clientes.forEach((cliente) =>{
            cliente.getProdutosConsumidos.forEach(produto => {
                listaDeProdutosConsumidos.push(produto);
            });
        });

        // Removendo os produtos duplicados
        let listaSemRepeticaoDeProdutosConsumidos  = new Set(listaDeProdutosConsumidos);
        listaDeProdutosConsumidos = Array.from(listaSemRepeticaoDeProdutosConsumidos);

        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeProdutosAgrupadosPorTipo = this.agruparProdutoPorAtributo(listaDeProdutosConsumidos, 'raca')

        // Apresentando os produtos agrupados por tipo de Pet
        listDeProdutosAgrupadosPorTipo.forEach((produto) => {
            console.log(`${produto.at(0)?.raca}: ${this.listarProdutos(produto)}`)
        })

        console.log(`\n`);
    }

    public listarServicosMaisConsumidosPorRacaPets(): void{
        console.log(`\nListagem dos serviços mais consumidos por raça de pet`);

        // let nome01 = "Camila"
        // let nomeSocial01 = "Camila Redondo"
        // let nome02 = "Pedro"
        // let nomeSocial02 = "Pedro Redondo"
        // let cpf01 = new CPF("01", new Date(2023, 5, 2))
        // let cpf02 = new CPF("02", new Date(2023, 5, 2))
        // let rg01 = new RG("00000", new Date(2023, 5, 1));
        // let rgs : RG [] = []
        // rgs.push(rg01)
        // let dataCadastro = new Date()
        // let telefones : Telefone [] = []
        // telefones.push(new Telefone("12", "98190-9172"))
        // let pets01 : Pet[] = []
        // let pets02 : Pet[] = []
        // pets01.push(new Pet("Ollie", "Bulldog", "F", "cachorro"), new Pet("Ollie", "kkkk", "F", "gato"))
        // pets02.push(new Pet("Ollie", "kkk", "F", "gato"), new Pet("Ollie", "Bulldog", "F", "cachorro"))
        
        // let cliente01 = new Cliente(nome01, nomeSocial01, cpf01, rgs, dataCadastro, telefones, pets01);
        // let cliente02 = new Cliente(nome02, nomeSocial02, cpf02, rgs, dataCadastro, telefones, pets02);

        // let produto01 = new Produto("Racao", 100, "gato")
        // let produto02 = new Produto("Petisco", 30, "cachorro")
        // let produto03 = new Produto("Bolinha", 50, "cachorro")
        // let produto04 = new Produto("Fralda", 500, "cachorro")
        // let produto05 = new Produto("Ursinho", 501, "cachorro")
        // let produto06 = new Produto("Pijama", 511, "cachorro")

        // cliente01.setServicosConsumidos = produto01
        // cliente01.setServicosConsumidos = produto02
        // cliente01.setServicosConsumidos = produto03

        // cliente02.setServicosConsumidos = produto04
        // cliente02.setServicosConsumidos = produto05
        // cliente02.setServicosConsumidos = produto06
        // cliente02.setServicosConsumidos = produto06
        // cliente02.setServicosConsumidos = produto03

        // this.clientes.push(cliente01, cliente02)

        // Coletando todos os produtos consumidos pelos clientes
        let listaDeServicosConsumidos : any = [];
        this.clientes.forEach((cliente) =>{
            cliente.getServicosConsumidos.forEach(servico => {
                listaDeServicosConsumidos.push(servico);
            });
        });

        // Removendo os produtos duplicados
        let listaSemRepeticaoDeServicosConsumidos  = new Set(listaDeServicosConsumidos);
        listaDeServicosConsumidos = Array.from(listaSemRepeticaoDeServicosConsumidos);
 
        // Agrupando os produtos por tipo do Pet (Atributo da classe cliente)
        let listDeServicosAgrupadosPorTipo = this.agruparServicoPorAtributo(listaDeServicosConsumidos, 'raca')

        // Apresentando os produtos agrupados por tipo de Pet
        listDeServicosAgrupadosPorTipo.forEach((servico) => {
            console.log(`${servico.at(0)?.tipo}: ${this.listarServicos(servico)}`)
        })
        
        console.log(`\n`);
    }

    private listarProdutos(listaDeProdutosConsumidos : any) {
        let resultList: any[] = []
        listaDeProdutosConsumidos.forEach((element: { nome: any; }) => {
            resultList.push(element.nome)
        });
        return resultList
    }

    private listarServicos(listaDeServicosConsumidos : any) {
        let resultList: any[] = []
        listaDeServicosConsumidos.forEach((element: { nome: any; }) => {
            resultList.push(element.nome)
        });
        return resultList
    }

    private agruparProdutoPorAtributo(listaDeProdutos : any[], atributo : any) {
        let val, index
        let values = []
        let result = []
        for (let i = 0; i < listaDeProdutos.length; i++) {
            val = listaDeProdutos[i][atributo]
            index = values.indexOf(val)
            
            if(index > -1) {
                result[index].push(listaDeProdutos[i])
            } else {
                values.push(val)
                result.push([listaDeProdutos[i]])
            }
        }

        return result;
    }

    private agruparServicoPorAtributo(listaDeServicos : any[], atributo : any) {
        let val, index
        let values = []
        let result = []
        for (let i = 0; i < listaDeServicos.length; i++) {
            val = listaDeServicos[i][atributo]
            index = values.indexOf(val)
            
            if(index > -1) {
                result[index].push(listaDeServicos[i])
            } else {
                values.push(val)
                result.push([listaDeServicos[i]])
            }
        }

        return result;
    }
}
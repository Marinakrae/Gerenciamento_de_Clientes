export default class Cliente {
    private id: string
    private nome: string
    private idade: number

    constructor(nome: string, idade: number, id:string){
        this.nome = nome
        this.idade = idade
        this.id = id
    }

    
}
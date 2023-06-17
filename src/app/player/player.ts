export class Player{
    id?: number;
    pseudo: string;
    name: string;
    constructor(pseudo: string, name: string, id: number){
        this.id = id;
        this.pseudo = pseudo;
        this.name = name;
    }
    
}
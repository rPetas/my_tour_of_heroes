export class Hero {
    name:string;
    id:number;
    life:number;
    strength:number;
    
    constructor(name: string,life:number,strength:number){
        this.name = name;
        this.life = life;
        this.strength = strength;
    };
}
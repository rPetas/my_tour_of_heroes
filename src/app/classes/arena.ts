export interface Arena {
    id: number;
    name:string;
    spectactors:number;
}

export class ArenaImpl implements Arena{
    name: string;
    spectactors: number;
    id:number;
    constructor(name: string,spectactors:number){
        this.name = name;
        this.spectactors = spectactors;
    };
}
import {Hero} from "./hero";
import {Arena} from "./arena";
import {Weapon} from "./weapon";

export interface Fight{
    fighter1:Hero;
    fighter2:Hero;
    winner:Hero;
    arena: Arena;
    weapon1:Weapon;
    weapon2:Weapon;
}
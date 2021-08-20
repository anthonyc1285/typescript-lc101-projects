import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    // properties and methods
    name: string; 
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(name: string, totalCapacity: number) {
        this.totalCapacityKg = totalCapacity;
        this.name = name;
     }

    sumMass(items: Payload[]): number {
        let sum: number = 0;
        for(let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        let cargoSum: number = this.sumMass(this.cargoItems);
        let astroSum: number = this.sumMass(this.astronauts);
        return cargoSum + astroSum;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
            return true;
    }

    addCargo(cargo: Cargo): boolean {
        let addition: boolean = this.canAdd(cargo);
        if(this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean { 
        let newAstro: boolean = this.canAdd(astronaut);
        if(this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }

 }
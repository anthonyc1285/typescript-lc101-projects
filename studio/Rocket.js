"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacity) {
        this.totalCapacityKg = totalCapacity;
        this.name = name;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var cargoSum = this.sumMass(this.cargoItems);
        var astroSum = this.sumMass(this.astronauts);
        return cargoSum + astroSum;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
            return true;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var addition = this.canAdd(cargo);
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var newAstro = this.canAdd(astronaut);
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;

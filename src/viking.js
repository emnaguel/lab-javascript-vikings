// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength

    }

    receiveDamage(damage) {
        this.health -= damage

    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(name, health, strength);
        this.name = name; 
        this.health = health;
        this.strength = strength
      }

      receiveDamage(damage) {
        this.health -= damage
        if(this.health <= 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
        
      }

      battleCry() {
        return `Odin Owns You All!`
      }


}
const viking1 = new Viking('Yan', 150, 300)
const viking2 = new Viking('Toto', 150, 200)
console.log(viking1)
// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength
      }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
     
        super.receiveDamage(damage)
        if(this.health == 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage` 
           
        }

    }
}
const saxon1 = new Saxon(150, 300)
const saxon2 = new Saxon(150, 200)
// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        //new Viking('Harald', 300, 150)
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){

        this.saxonArmy.filter((deadSaxon) => deadSaxon.health === 0)
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        return randomSaxon.receiveDamage(randomViking.strength)
    }
    saxonAttack(){

    }
    showStatus(){

    }
}
const viking3 = new Viking('Titi', 150, 200)
const war = new War([{ health: 150, strength: 300, name: 'Yan' }])
console.log(war.vikingAttack())
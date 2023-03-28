import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  public name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    name:string,
  ) {
    this.name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race():Race {
    return this._race;
  }

  get archetype():Archetype {
    return this._archetype;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  get strength():number {
    return this._strength;
  }

  get defense():number {
    return this._defense;
  }

  get dexterity():number {
    return this._dexterity;
  }

  get energy():Energy {
    return this._energy;
  }

  receiveDamage(attackPoints:number):number {
    const damage = this._defense - attackPoints;
    if (damage > 0) {
      return this._lifePoints - damage;
    } 
    if (damage <= 0) {
      this._lifePoints = -1;
    } else {
      return this._maxLifePoints;
    }
  }

  attack(enemy: Fighter):void {
    enemy.receiveDamage(this._strength);
  }

  levelUp():void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    /* O atributo maxLifePoints do Character nunca poderá ser maior que 
    o maxLifePoints de sua raça (race). ) */
    const maxLPRace = this._race.maxLifePoints;
    const maxLPCharac = this._maxLifePoints;
    
    if (maxLPCharac > maxLPRace) { this._maxLifePoints = maxLPRace; }
    // o atributo lifePoints também deve ser atualizado, recebendo o novo valor de maxLifePoints
    this._lifePoints = this._maxLifePoints;
  }

  special?(enemy: Fighter):void;
}
import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  private static _instances = 0;
  readonly _energyType = 'mana';
  constructor(name:string) {
    super(name);
    Necromancer._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this._instances; 
  }
}
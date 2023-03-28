import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  private static _instances = 0;
  readonly _energyType = this.energyType;
  constructor(name:string) {
    super(name);
    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this._instances; 
  }
}
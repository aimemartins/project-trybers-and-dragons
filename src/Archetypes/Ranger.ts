import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Ranger extends Archetype {
  private static _instances = 0;
  readonly _energyType = 'stamina';
  constructor(name:string) {
    super(name);
    Ranger._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this._instances;
  }
}
import Race from './Race';

export default class Halfling extends Race {
  private static _instances = 0;
  readonly _maxLifePoints = 60;
  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    Halfling._instances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances():number {
    return this._instances;
  }
}
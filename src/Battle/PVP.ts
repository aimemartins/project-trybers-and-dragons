// import Character from '../Character';
// import Battle from './Battle';
// // import Fighter from '../Fighter';

// export default class PVP extends Battle {
//   public play01: Character;
//   public play02: Character;
//   constructor(player01: Character, player02: Character) {
//     super(player01);
//     this.play01 = player01;
//     this.play02 = player02;
//   }

//   fight(): number {
//     while (this.play01.lifePoints > 0 || this.play02.lifePoints > 0) {
//       this.play01.attack(this.play02);
//       this.play02.attack(this.play01);
//     }
//     return this.player.lifePoints === -1 ? -1 : 1;
//   }
// }
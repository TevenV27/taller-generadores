export class JSG {
    constructor(canDatos) {
      this.canDatos = canDatos;
    }
  
    generateRandoms() {
      
      let periodicy = this.canDatos;
      const listOfRandoms = [];
      var i = 0;
      while (i < this.canDatos) {
        var randomNum = Math.random();
        listOfRandoms.push(randomNum);
        i++;
      }
  
      return { listOfRandoms, periodicy };
    }
  }
  
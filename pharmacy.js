export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

 /*
    - HERBAL TEA : increases in benefit and increases twice after the expiration.
    - MAGIC PILL : never expires nor decreases in benefit.
    - FERVEX : increases in benefit (x2 when <= 10 days, x3 when <= 5 days then drops to 0 after expiration).
    - OTHERS DRUGS : benefit degrades twice after expiration
    - DAFALGAN : degrades in benefit twice as fast as normal drugs.

    !!!  The benefit of an item is never > 50 or < 0  !!!
 */

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          this.drugs[i].benefit += 1;
          if (this.drugs[i].expiresIn <= 0){
            this.drugs[i].benefit +=1;
          }
          break;
        case "Magic Pill":
          this.drugs[i].expiresIn += 1;
          break;
        case "Fervex":
          if (this.drugs[i].expiresIn > 10) {
            this.drugs[i].benefit += 1;
          } else if (this.drugs[i].expiresIn > 5) {
            this.drugs[i].benefit +=2;
          } else if (this.drugs[i].expiresIn > 0) {
                this.drugs[i].benefit += 3;
          } else {
              this.drugs[i].benefit = 0;
          }
          break;
        case "Dafalgan":
            this.drugs[i].benefit -= 2;
          if (this.drugs[i].expiresIn <= 0){
            this.drugs[i].benefit -= 2;
          }
          break;
        default:
          this.drugs[i].benefit -= 1;
          if (this.drugs[i].expiresIn <= 0) {
            this.drugs[i].benefit -= 1;
          }
      }
    this.drugs[i].expiresIn -= 1;
    if (this.drugs[i].benefit > 50) {
      this.drugs[i].benefit = 50;
    } else if (this.drugs[i].benefit < 0) {
      this.drugs[i].benefit = 0;
    } else {
      break;
    }
    }
    return this.drugs;
  }
}

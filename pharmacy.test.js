import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {

// ************************    HERBAL TEA TESTS    ************************

it("Herbal Tea should increase the benefit and increase twice after expiration", () => {
  expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", 1, 4)]
  );
  expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", -1, 5)]
  );
  expect(new Pharmacy([new Drug("Herbal Tea", -15, 49)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", -16, 50)]
  );
  expect(new Pharmacy([new Drug("Herbal Tea", -5, 50)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", -6, 50)]
  );
});

// // ************************    MAGIC PILL TESTS    ************************

it("Magic Pill should never expire nor decrease in Benefit", () => {
  expect(new Pharmacy([new Drug("Magic Pill", 1, 3)]).updateBenefitValue()).toEqual(
    [new Drug("Magic Pill", 1, 3)]
  );
  expect(new Pharmacy([new Drug("Magic Pill", 0, 1)]).updateBenefitValue()).toEqual(
    [new Drug("Magic Pill", 0, 1)]
  );
  expect(new Pharmacy([new Drug("Magic Pill", 0, 0)]).updateBenefitValue()).toEqual(
    [new Drug("Magic Pill", 0, 0)]
  );
  expect(new Pharmacy([new Drug("Magic Pill", -3, 0)]).updateBenefitValue()).toEqual(
    [new Drug("Magic Pill", -3, 0)]
  );
  expect(new Pharmacy([new Drug("Magic Pill", 3, 0)]).updateBenefitValue()).toEqual(
    [new Drug("Magic Pill", 3, 0)]
  );
});

// // ************************      FERVEX TESTS      ************************

it("Fervex should increase benefit when expiration date approaches (x2 if <=10 days, x3 if <= 5 days) drops to 0 after the expiration", () => {
  expect(new Pharmacy([new Drug("Fervex", 15, 12)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 14, 13)]
  );
  expect(new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 9, 5)]
  );
  expect(new Pharmacy([new Drug("Fervex", 7, 6)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 6, 8)]
  );
  expect(new Pharmacy([new Drug("Fervex", 5, 2)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 4, 5)]
  );
  expect(new Pharmacy([new Drug("Fervex", 1, 5)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 0, 8)]
  );
  expect(new Pharmacy([new Drug("Fervex", 0, 15)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", -1, 0)]
  );
  expect(new Pharmacy([new Drug("Fervex", 5, 50)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 4, 50)]
  );
  expect(new Pharmacy([new Drug("Fervex", -6, 0)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", -7, 0)]
  );
});

// ************************     DAFALGAN TESTS     ************************

it("Dafalgan should degrade in Benefit twice ", () => {
  expect(new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", 1, 1)]
  );
  expect(new Pharmacy([new Drug("Dafalgan", 12, 50)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", 11, 48)]
  );
  expect(new Pharmacy([new Drug("Dafalgan", 0, 1)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", -1, 0)]
  );
  expect(new Pharmacy([new Drug("Dafalgan", 0, 18)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", -1, 14)]
  );
  expect(new Pharmacy([new Drug("Dafalgan", 0, 0)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", -1, 0)]
  );
  expect(new Pharmacy([new Drug("Dafalgan", 10, 0)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", 9, 0)]
  );
  expect(new Pharmacy([new Drug("Dafalgan", -2, 15)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", -3, 11)]
  );
  expect(new Pharmacy([new Drug("Dafalgan", -5, 0)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", -6, 0)]
  );
});


// ************************   OTHERS DRUGS TESTS   ************************

  it("normal drugs should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
    expect(new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 0)]
    );
    expect(new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 1)]
    );
    expect(new Pharmacy([new Drug("test", -2, 6)]).updateBenefitValue()).toEqual(
      [new Drug("test", -3, 4)]
    );
  });
});
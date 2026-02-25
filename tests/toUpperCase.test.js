const { toUpperCase } = require("../server");

describe("toUpperCase", () => {
  test("convertit un texte en majuscules", () => {
    expect(toUpperCase("hello")).toBe("HELLO");
  });

  test("texte déjà en majuscules reste identique", () => {
    expect(toUpperCase("WORLD")).toBe("WORLD");
  });

  test("texte mixte est converti", () => {
    expect(toUpperCase("Bonjour")).toBe("BONJOUR");
  });

  test("chaîne vide retourne une chaîne vide", () => {
    expect(toUpperCase("")).toBe("");
  });

  test("texte avec chiffres et caractères spéciaux", () => {
    expect(toUpperCase("kebab123!")).toBe("KEBAB123!");
  });
});

import fs from "fs/promises";

describe("Callbacks & Higher Order Functions tests cases", () => {
  test("exercise 1: For Each Function Callback", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return newEmployeeSalaries`;

    const func = new Function(code);
    const newEmployeeSalaries = func();

    expect(newEmployeeSalaries).toStrictEqual([
      25005, 45000, 37000, 19500, 349000,
    ]);
  });

  test("exercise 2: At Least Five Function", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return {scoreRoom1Result, scoreRoom2Result, scoreRoom3Result}`;

    const func = new Function(code);
    const { scoreRoom1Result, scoreRoom2Result, scoreRoom3Result } = func();

    expect(scoreRoom1Result).toBe(true);
    expect(scoreRoom2Result).toBe(false);
    expect(scoreRoom3Result).toBe(false);
  });
});

import fs from "fs/promises";

describe("exercise 1: Callbacks & Higher Order Functions tests cases", () => {
  test("ฟังก์ชั่น forEach ต้องเพิ่มเงินเดือนให้กับพนักงานทุกคน 5000 บาท", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return newEmployeeSalaries`;

    const func = new Function(code);
    const newEmployeeSalaries = func();

    expect(newEmployeeSalaries).toStrictEqual([
      25005, 45000, 37000, 19500, 349000,
    ]);
  });
});


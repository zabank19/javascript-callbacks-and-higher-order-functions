import fs from "fs/promises";
import { jest } from "@jest/globals";

describe("Callback and Higher order function tests cases", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  describe("exercise 1: Callbacks & Higher Order Functions tests cases", () => {
    test("ฟังก์ชั่น forEach ต้องเพิ่มเงินเดือนให้กับพนักงานทุกคน 5000 บาท", async () => {
      const data = await fs.readFile("./ex-1.js");
      const code = `${data} \n return newEmployeeSalaries`;

      const func = new Function(code);
      const newEmployeeSalaries = func();

      expect(console.log).toHaveBeenCalledWith([
        25005, 45000, 37000, 19500, 349000,
      ]);
      expect(newEmployeeSalaries).toEqual([25005, 45000, 37000, 19500, 349000]);
    });
  });
});
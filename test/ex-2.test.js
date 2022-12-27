import fs from "fs/promises";

describe("exercise 2:Callbacks & Higher Order Functions tests cases", () => {
  test("ฟังก์ชั่น atLeastFive จะตรวจสอบนักเรียนในแต่ละห้องโดยต้องมีอย่างน้อย 5 คนที่ได้คะแนนเกิน 70 คะแนน ", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return {scoreRoom1Result, scoreRoom2Result, scoreRoom3Result}`;

    const func = new Function(code);
    const { scoreRoom1Result, scoreRoom2Result, scoreRoom3Result } = func();

    expect(scoreRoom1Result).toBe(true);
    expect(scoreRoom2Result).toBe(false);
    expect(scoreRoom3Result).toBe(false);
  });
});

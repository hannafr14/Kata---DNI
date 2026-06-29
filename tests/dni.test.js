import { describe, it, expect } from "vitest";
import { calculateDniLetter } from "../src/dni.js";

describe("calculateDniLetter", () => {
    it("returns T when the number is 0", () => {
        expect(calculateDniLetter("0")).toBe("T");
    });

    it("returns R when the number is 1", () => {
        expect(calculateDniLetter("1")).toBe("R");
    });

    it("returns null when the number is lower than 0", () => {
        expect(calculateDniLetter("-1")).toBe(null);
    });

    it("returns null when the number is greater than 99999999", () => {
        expect(calculateDniLetter("100000000")).toBe(null);
    });

    it("returns null when the value is not a number", () => {
        expect(calculateDniLetter("abc")).toBe(null);
    });
});
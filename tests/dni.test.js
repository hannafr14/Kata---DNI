import { describe, it, expect } from "vitest";
import { calculateDniLetter } from "../src/dni.js";

describe("calculateDniLetter", () => {
    it("returns T when the number is 0", () => {
        expect(calculateDniLetter("0")).toBe("T");
    });
});
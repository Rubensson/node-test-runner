// se puede utilizar describe para crear grupos de test
import { describe, it } from "node:test";
import assert from "node:assert/strict";

describe("test collection", () => {
  describe("test collection 1", () => {
    it("case one", () => {
      assert.equal(1, 1);
    });
    it("case two", () => {});
  });
  describe("test collection 2", () => {
    it("case one", () => {});
    it("case two", () => {});
  });
});

// Import test module
// Note: use "node:" to import test in new Node version
import { sum, a } from "./index.js";
import test from "node:test";
import assert from "node:assert/strict";

// testing assertions
test("example test", () => {
  assert.equal(1, 1, "1 is equal to 1");
});
test("example test", () => {
  assert.notEqual(1, 0, "1 is not equal to 1");
});
test("example object test", () => {
  assert.deepEqual({ a: 1 }, { a: 1 }, "Objects are equal");
});

test("value of a", () => {
  assert.equal(a, 1);
});
test("la funcion sum() suma correctamente", () => {
  assert.equal(sum(3, 5), 8);
});
test("el resultado es verdadero", () => {
  assert.ok(true);
});

//asynchronous testing
test("Async test example", async () => {
  const number = await Promise.resolve(3);
  assert.equal(number, 3, "number is not equal to 3");
});

test("fetch", async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const json = await response.json();
  assert.equal(json.name, "ditto");
});

test("fetch", async () => {
  const tryFetch = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const json = await response.json();
    } catch {
      throw new SyntaxError("whatever");
    }
  };

  assert.rejects(tryFetch, /^SyntaxError: whatever$/);
  // rejects for async
  // throw for  sync
});

// testing Array methods
test("try Array.findLast", () => {
  const numbers = [2, 4, 6, 8];
  const lastEven = numbers.findLast((n) => n % 2 == 0); //8
  assert.equal(lastEven, 8);
});

test("try Array.findLastIndex", () => {
  const numbers = [2, 4, 6, 8];
  const lastEvenIndex = numbers.findLastIndex((n) => n % 2 == 0); //3
  assert.equal(lastEvenIndex, 3);
});

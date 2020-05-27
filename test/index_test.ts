import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";

Deno.test("isStrictlyEqual", function (): void {
  const a = {};
  const b = a;
  assertStrictEq(a, b);
});

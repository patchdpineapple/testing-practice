import capitalize from "../code/capitalize";

test("string wassup should become Wassup", () => {
  expect(capitalize("wassup")).toBe("Wassup");
});

import reverse from "../code/reverse";

test("string hello should become olleh", () => {
  expect(reverse("hello")).toBe("olleh");
});

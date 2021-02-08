function capitalize(str) {
  let x = str
    .split("")
    .map((ltr, i) => (i === 0 ? ltr.toUpperCase() : ltr))
    .join("");
  return x;
}

export default capitalize;

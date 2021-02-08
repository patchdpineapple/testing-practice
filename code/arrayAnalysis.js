function analyze(arr) {
  const arr2 = [1, 8, 3, 4, 2, 6];

  function getAverage() {
    let x = arr.reduce((average, num, i) => {
      i === arr.length - 1
        ? (average = (average + num) / arr.length)
        : (average = average + num);
      return average;
    }, 0);
    return Number(x.toFixed(2));
  }

  function getMin() {
    let x = arr.sort((a, b) => a - b);
    return x[0];
  }

  function getMax() {
    let x = arr.sort((a, b) => b - a);
    return x[0];
  }

  function getLength() {
    return arr.length;
  }

  return {
    average: getAverage(),
    min: getMin(),
    max: getMax(),
    length: getLength(),
  };
}

export default analyze;

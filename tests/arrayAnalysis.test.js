import analyze from "../code/arrayAnalysis";

test('proper object should be created',()=>{
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
      });
});

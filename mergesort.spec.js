describe('Split Array function', function() {
  it('is able to split an array into two halves', function () {
    expect(split([3,4,6,1,2,5,7]).toEqual([3,4,6,1],[2,5,7]);
  });
});

describe('Merge Sort', function () {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([3,4,6,1],[2,5,7])).toEqual([1,2,3,4,5,6,7]);
  });
});

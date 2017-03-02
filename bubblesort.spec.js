describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array', function(){
    expect( bubbleSort([5,4,3,1,2])).toEqual([1,2,3,4,5]);
  })
});

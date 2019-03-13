describe('lets-me-group-tests-together', function(){

    test('the sum of 2 and 3 should be 5', function(){
    expect(2 + 3).toEqual(5)

    })

    test('the product of 2 and 3 should be 6', function(){
        expect(2 * 3).toEqual(6)
    })

    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
      });

})

describe('string operations', function(){

    test('expect myString to be `hello world`', () => {
    const myString = `hello world`
    expect(myString).toBe ('hello world')
    })

})
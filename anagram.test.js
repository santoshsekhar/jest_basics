const isAnagram = require('./anangram')

// to check if function exists
test('is Anagram function exists',()=>{
    expect(typeof isAnagram).toEqual('function')
})

// to check if truthy
test('cinema is an anagram of iceman',()=>{
    expect(isAnagram('cinema','iceman')).toBeTruthy()
})

// to check if truthy
test('dormitory is an anagram of dirty room###',()=>{
    expect(isAnagram('dormitory','dirty room##')).toBeTruthy()
})

// to check if truthy
test('Hello is not an anagram of dirty aloha',()=>{
    expect(isAnagram('hello','aloha')).toBeFalsy()
})
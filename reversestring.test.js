const reverseString = require('./reversestring')

//function exists or no
test('reverse String function Exists',()=>{

    expect(reverseString).toBeDefined()
})
// reverse
test('String reverses',() =>{
    expect(reverseString('hello')).toEqual('olleh')
})
// String reverse with uppercase
test('String reverses',() =>{
    expect(reverseString('heLLo')).toEqual('olleh')
})
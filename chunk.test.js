const chunkArray = require('./chunk')

//function exists or no
test('chunk Array function Exists',()=>{

    expect(chunkArray).toBeDefined()
})

test('Chunk an array of 10 values with lenght 2',()=>{
    const numbers =[1,2,3,4,5,6,7,8,9,10]
    const len =2
    const chunkedArr = chunkArray(numbers,len)
    expect(chunkedArr).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]])
})
test('Chunk an array of 3 values with lenght 1',()=>{
    const numbers =[1,2,3]
    const len =1
    const chunkedArr = chunkArray(numbers,len)
    expect(chunkedArr).toEqual([[1],[2],[3]])
})
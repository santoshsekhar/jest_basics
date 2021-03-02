const functions = require('./functions')

// beforeEach(()=> initDatabase())
// afterEach(()=> closeDatabase())

// beforeAll(()=> initDatabase())
// afterAll(()=> closeDatabase())
// const initDatabase =() => console.log('Data base Initialized...')
// const closeDatabase =() => console.log('Database closed....')


const nameCheck =() => console.log('Checking name...')
describe('Checking Names',()=>{
    beforeEach(()=> nameCheck())

    test('user is Santosh',()=>{
        const user = 'Santosh'
        expect(user).toBe('Santosh')
    })

    test('user is Sekhar',()=>{
        const user = 'Sekhar'
        expect(user).toBe('Sekhar')
    })
})

// toBe
test('Adds 2+2 to equal 4',()=>{
    expect(functions.add(2,2)).toBe(4)
})
// not toBe
test('Adds 2+2 not equal 5',()=>{
    expect(functions.add(2,2)).not.toBe(5)
})
// to be Null
test('should be null',()=>{
    expect(functions.isNull()).toBeNull()
})
// to be Falsy
test('should be falsy',()=>{
    expect(functions.checkValue(undefined)).toBeFalsy()
})
// to Equal
test('User should be Brad Traversy Object',()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    })
})
// Less than, greater than

test('Should be under 1500',()=>{
    const load1 = 800
    const load2 = 600
    expect(load1+load2).toBeLessThanOrEqual(1500)
})

// Regular Expression to Match
test('There is no I in team',() =>{
    expect('teamI').toMatch(/I/)
})
// Arrays
test('Admin should be usernames',()=>{
    usernames = ['Santosh','Sekhar','admin']
    expect(usernames).toContain('admin')
})

// working with async data

//Promise
test('User fetched name should be Leanne Graham',()=>{
    expect.assertions(1)
    return functions.fetchUser()
    .then(data =>{
        expect(data.name).toEqual('Leanne Graham')
    })
})

//Async Await 
test('User fetched name should be Leanne Graham',async ()=>{
    expect.assertions(1)
    const data= await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
    
})
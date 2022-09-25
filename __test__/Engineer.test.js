const Engineer = require('../lib/Engineer')

test('get github of engineer', () => {
    const engineer = new Engineer('name', 'id', 'email', 'rodriguez531')
    expect(engineer.github).toBe('rodriguez531')
} )
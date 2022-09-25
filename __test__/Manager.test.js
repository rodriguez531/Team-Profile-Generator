const Manager = require('../lib/Manger')

test('get github of office number', () => {
    const manager = new Manger('name', 'id', 'email', '123')
    expect(manager.getofficeNumber()).toBe('123')
})
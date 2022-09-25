const Intern = require('../lib/Intern')

test('get github of engineer', () => {
    const intern = new Intern('name', 'id', 'email', 'UNC')
    expect(intern.getschool()).toEqual('UNC')
})
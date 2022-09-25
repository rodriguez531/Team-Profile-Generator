// const { default: test } = require('node:test');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
const Employee = require('../lib/Employee');

// test('create Employee Object', () => {
// });

test("gets Employees name", () => {
    const employee = new Employee('name')
     expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));

});

test("get Employee id", () => {
    const employee = new Employee('id', '1234', 'j@j.com')
    //               new Employee(name, id, eamil)           
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));

})


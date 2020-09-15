const countDown = require('./index');

beforeEach(() => {
    jest.spyOn(console, 'log');
});

afterEach(() => {
    console.log.mockRestore();
});

test('countDown is a function', () => {
    expect(typeof countDown).toEqual('function');
});

test('countDown called with n = 1', () => {
    countDown(1);
    expect(console.log.mock.calls[0][0]).toEqual(1);
    expect(console.log.mock.calls[1][0]).toEqual(0);
    expect(console.log.mock.calls.length).toEqual(2);
});

test('countDown called with n = 2', () => {
    countDown(2);
    expect(console.log.mock.calls[0][0]).toEqual(2);
    expect(console.log.mock.calls[1][0]).toEqual(1);
    expect(console.log.mock.calls[2][0]).toEqual(0);
    expect(console.log.mock.calls.length).toEqual(3);
});

test('countDown called with n = 3', () => {
    countDown(3);
    expect(console.log.mock.calls[0][0]).toEqual(3);
    expect(console.log.mock.calls[1][0]).toEqual(2);
    expect(console.log.mock.calls[2][0]).toEqual(1);
    expect(console.log.mock.calls[3][0]).toEqual(0);
    expect(console.log.mock.calls.length).toEqual(4);
});

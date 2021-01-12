const sum = (a, b) => a + b;
const generateGreeting = (name = 'Anonimus') => `Hello ${name}!`;

test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});

test('Greet Diego', () => {
    const greet = generateGreeting('Diego')
    expect(greet).toBe('Hello Diego!');
});

test('Greet Anonimus', () => {
    const greet = generateGreeting()
    expect(greet).toBe('Hello Anonimus!');
});



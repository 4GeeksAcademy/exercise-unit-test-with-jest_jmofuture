const { sum ,fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);
    expect(total).toBe(23);

});


test('Convierte 100 dólares a yenes', () => {
    expect(fromDollarToYen(100)).toBe(14626.17); 
});

test('Convierte 100 euros a dólares', () => {
    expect(fromEuroToDollar(100)).toBeCloseTo(107); 
});

test('Convierte 1000 yenes a libras', () => {
    expect(fromYenToPound(1000)).toBe(5.56); 
});
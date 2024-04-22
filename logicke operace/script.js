const A = new Set([1, 2, 3, 4, 5]);
const B = new Set([4, 5, 6, 7, 8]);
const C = new Set([3, 4, 5]);

const intersection = new Set([...A].filter(x => C.has(x)));
document.getElementById('intersection').innerText = `Průnik A ∩ C: {${[...intersection].join(', ')}}`;

const union = new Set([...A, ...B]);
document.getElementById('union').innerText = `Sjednocení A ∪ B: {${[...union].join(', ')}}`;

const complement = new Set([...B].filter(x => !A.has(x)));
document.getElementById('complement').innerText = `Doplněk A vzhledem k B: {${[...complement].join(', ')}}`;
    
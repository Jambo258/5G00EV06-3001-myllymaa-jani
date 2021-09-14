function repeat(a, b = 1) {
  let c = a;

  for (let i = 1; i < b; i++) {
    c += a;
  }

  return c;
}

console.log(repeat("moi")); // outputs "moi"
console.log(repeat("moi", 4)); // outputs "moimoimoimoi"

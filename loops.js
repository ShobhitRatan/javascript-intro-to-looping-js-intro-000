function forLoop(array) {
  for (let i = 0; i < 25; i+= 1) {
    array.push(i === 1 ? 'I am 1 strange loop.' : `I am ${i} strange loops.`);
  }
  return array;
}

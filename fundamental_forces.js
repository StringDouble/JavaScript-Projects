//The program randomly picks a card until it picks 'Water'
let forces = ['Water', 'Air', 'Earth', 'Fire'];
let currentForce = 'Water'
while (currentForce != 'Water') {
  console.log(currentForce)
  currentForce = forces[Math.floor(Math.random() * 4)];
}
console.log('Found Water')
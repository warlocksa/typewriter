const sentence = "hello there from lighthouse labs";
let num = 0;

for (const char of sentence) {
  setTimeout(() => {
    console.log(char);
    // process.stdout.write(char);
  }, num)
  num += 50
}

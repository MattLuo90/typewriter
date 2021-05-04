const sentence = "hello there from lighthouse labs";

// print the char here
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time) 
  time += 100;
  }

  setTimeout(() => {
  process.stdout.write("\n");
}, sentence.length * 100)

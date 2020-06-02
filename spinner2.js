const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n']

let time = 100;

for (const char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r ${char}`);
  }, time += 200);
};
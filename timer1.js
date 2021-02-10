const inputArgs = process.argv
  .slice(2)
  .filter(time => !isNaN(time))
  .filter(time => time >= 0);

inputArgs.forEach(time => {
  setTimeout(() => {
    //process.stdout.write('\x07');
    process.stdout.write("\r.   ");
  }, time * 1000);
});

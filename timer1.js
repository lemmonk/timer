const args = process.argv.splice(2,process.argv.length);

const timer = (args) => {

  if (args.length === 0) {
    return;
  }

  for (let i = 0; i < args.length; i++) {
  
    let delay = args[i] * 1000;
    
    if (delay > 0 || NaN) {
    
      setTimeout(() => {
        console.log(`BEEP => ${delay}`);
      }, delay);
    
    }
  }
};


timer(args);
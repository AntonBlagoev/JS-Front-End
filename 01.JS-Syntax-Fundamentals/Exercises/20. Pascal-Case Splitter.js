function solve(text) {
    const regex = /(?=[A-Z])/gm;
    console.log(text.split(regex).join(", "));
  }
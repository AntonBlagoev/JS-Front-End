function printDNASequence(rows) {
    // const pattern = [
    //   ["A", "T"],
    //   ["C", "G"],
    //   ["T", "T"],
    //   ["A", "G"],
    //   ["G", "G"],
    // ];
  
    // for (let index = 0; index < rows; index++) {
    //   const [x, y] = pattern[index % pattern.length];
  
    //   if (index % 4 === 0) {
    //     console.log(`**${x}${y}**`);
    //   } else if (index % 2 === 1) {
    //     console.log(`*${x}--${y}*`);
    //   } else if (index % 2 === 0) {
    //     console.log(`${x}----${y}`);
    //   }
    // }

    const array = [
        '**AT**', '*C--G*', 'T----T', '*A--G*', 
        '**GG**', '*A--T*', 'C----G', '*T--T*', 
        '**AG**', '*G--G*', 'A----T', '*C--G*', 
        '**TT**', '*A--G*', 'G----G', '*A--T*', 
        '**CG**', '*T--T*', 'A----G', '*G--G*'
    ];

    for (let i = 0; i < rows; i++) {
        
        console.log(array[i % (array.length + 1)]);      
    }

  }
  
  printDNASequence(20);
function pairElement(str) {
    const dnaArr = str.split('')
    for (let i = 0; i < dnaArr.length; i++){
    if (dnaArr[i] === 'G'){
      dnaArr[i] = ['G', 'C']
      console.log(dnaArr)
  
    }
    if (dnaArr[i] === 'C') {
      dnaArr[i] = ['C', 'G']
  
    }
    if (dnaArr[i] === 'A') {
      dnaArr[i] = ['A', 'T']
      
    }
    if (dnaArr[i] === 'T') {
      dnaArr[i] = ['T', 'A']
      
    }
    }
    return dnaArr
  }
  
  pairElement("GCG");

  /*


The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

  */
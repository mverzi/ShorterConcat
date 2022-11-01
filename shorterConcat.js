/**
 * This function takes two strings and returns a string in the form shorter+reverse(longer)+shorter
 * @param {*} a A string
 * @param {*} b A string
 * @returns A concat of string a and b in the form shorter+reverse(longer)+shorter
 */
function shorter_reverse_longer(a,b){
    return a.length < b.length ? a + b.split('').reverse().join('') + a : b + a.split('').reverse().join('') + b
  }
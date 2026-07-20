//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,number) => {
  const lastNumber = number%100
  const oneLastNumber = number%10
  if (11 <= lastNumber && lastNumber <= 13) {
    return `${name}, you are the ${number}th customer we serve today. Thank you!`
  } else {
    switch(oneLastNumber) {
        case 1:
          return `${name}, you are the ${number}st customer we serve today. Thank you!`
        case 2:
          return `${name}, you are the ${number}nd customer we serve today. Thank you!`
        case 3:
          return `${name}, you are the ${number}rd customer we serve today. Thank you!`
        default:
          return `${name}, you are the ${number}th customer we serve today. Thank you!`
    }
  }

};

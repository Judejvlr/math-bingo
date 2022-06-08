import { multiplicationsResults } from "../consts/Results";


/**
 * @returns An array of 24 numbers and the string "Libre"
 */
export function getBingoCardNumbers() {
  let numbers = new Set<number | string>()
  do {
    if (numbers.size === 12) {
      numbers.add("Libre")
    } else {
      let number;
      do {
        number = getNewNumber()
      } while (numbers.has(number))
      numbers.add(number)
    }
  } while (numbers.size < 25)
  return Array.from(numbers)
}

/**
 * It returns a random number from the array of numbers called multiplicationsResults.
 * @returns a random number from the array.
 */
function getNewNumber() {
  let index = Math.floor(Math.random() * ((multiplicationsResults.length)))
  let number = multiplicationsResults[index];
  return number;
}
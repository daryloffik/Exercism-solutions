// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const newDeck = deck.map((value) => value*2)
  return newDeck
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  let newDeck = []
  const indexes = deck.map((n, i) => n === 3 ? i : -1).filter(index => index !== -1);   
  indexes.forEach((index) => {
    if (index === indexes[0]) {
    deck.splice(index,0,3,3,)
    } else {
    deck.splice(index+2,0,3,3,)
      
    }
  })
return deck
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middle = deck.splice(4,2)
  return middle
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  let bottom = deck[deck.length-1]
  let top = deck[0]
  let bottomUndTop = [bottom,top]
  deck.splice(0,1)
  deck.splice(deck.length-1,1)
  deck.splice(deck.length/2,0,...bottomUndTop)

  return deck
  
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  const twoOnlyArray = deck.filter((n, i) => n === 2 )
  return twoOnlyArray
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((first, second) => {
    if(first < second) {
      return -1
    }
     else if(first > second) {
      return 1
    }
    return 0
  })
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse()
}

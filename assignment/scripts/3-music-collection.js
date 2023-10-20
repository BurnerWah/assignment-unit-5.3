console.log("***** Music Collection *****")
// Safe Zone -- Write code below this line

/**
 * @typedef {Object} Album
 * @property {string} title
 * @property {string} artist
 * @property {number} yearPublished
 */

/** @type {Album[]} */
const myCollection = []

/**
 * Adds an album to a collection
 * @param {Album[]} collection The collection to add the album to
 * @param {string} title The album totle
 * @param {string} artist The album artist
 * @param {number} yearPublished The year the album was published
 * @returns {Album} The album that was added
 */
function addToCollection(collection, title, artist, yearPublished) {
  /** @type {Album} */
  const album = { title: title, artist: artist, yearPublished: yearPublished }
  collection.push(album)
  return album
}
console.log(addToCollection(myCollection, "HALCYONDAZE", "KITCALIBER", 2020))
console.log(addToCollection(myCollection, "_SNDWRK/gh", "greenhouse", 2022))
console.log(addToCollection(myCollection, "Alchemist 2", "Savant", 2022))
console.log(
  addToCollection(
    myCollection,
    "FINAL FANTASY VII REMAKE (Original Soundtrack)",
    "Nobuo Uematsu",
    2020
  )
)
console.log(
  addToCollection(myCollection, "Super Ghostbusters", "Vinesauce Joel", 2018)
)
console.log(
  addToCollection(
    myCollection,
    "Disasters for Piano",
    "Disasterpeace & David Peacock",
    2017
  )
)
console.table(myCollection)

/**
 * Prints the contents of a collection
 * @param {Album[]} collection the collection to print the contents of
 */
function showCollection(collection) {
  // how i prefer to write this
  // collection.forEach(({ title, artist, yearPublished }) =>
  //   console.log(`${title} by ${artist}, published in ${yearPublished}`)
  // )
  // How I will actually write this for this class
  for (const { title, artist, yearPublished } of collection) {
    console.log(`${title} by ${artist}, published in ${yearPublished}`)
  }
}

showCollection(myCollection)

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  }
} catch (e) {
  // Do nothing
}

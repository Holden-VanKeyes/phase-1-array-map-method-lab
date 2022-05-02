// titleCased(): returns an array with title case tutorial names.
// Note that this function takes no arguments and should use the
// global tutorials variable as data.
// NOTE: This lab is challenging! You will need to iterate
// through the tutorials array,
// modifying the name of each tutorial.
// To do this, you will also need to access and modify each individual word.

// Some questions to consider:

// How can we "iterate" through individual words in a string?
// Can we execute an iteration inside an iteration? How?
// How can we capitalize just the first letter in a word?
// A couple of hints:

// Break the task into smaller chunks: using the console or a REPL,
// start by figuring out how to modify one individual element in the tutorials array.
// Once you've got that working, then figure out how to update the array itself.
// Use Google!!

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?',
]

const titleCased = () => {
  return tutorials.map((element) => element.toUpperCase())
}

// const titleCased = () => {
//   let newArr = [tutorials]
//   return newArr.forEach((element) => element.toUpperCase())
// }

// const titleReturn = () => {
//   return tutorials.forEach((element) => console.log(element.toUpperCase()))
// }
// titleReturn()

// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Constructor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   ]
// const titleReturn = (caps) => {
//   for(i=0; i<tutorials.length; i++)
//     console.log(`${caps}`.toUpperCase())
// }
// titleReturn(tutorials)

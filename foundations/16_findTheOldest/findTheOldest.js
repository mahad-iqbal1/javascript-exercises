const findTheOldest = function(objArr) {
  // First calculate the ages of each person object in the array
  let modifiedArr = objArr.map(person => ({
    name: person.name,
    age: person.yearOfDeath != null
      ? person.yearOfDeath - person.yearOfBirth
      : new Date().getFullYear() - person.yearOfBirth,
  }))
  // Find the oldest age
  const oldestPerson = modifiedArr.reduce((oldest, current) => {
    return current.age > oldest.age ? current : oldest;
  });

  return oldestPerson;


  /*Personal feedback for this solution:
    1) Don't throw away data (keep the original data) 
    2) Try and conserve memory (no unnecessary looping) 
    3) Use additional functions for different tasks. 
       One function should perform only one thing. 
       In your solution you calculate the ages and then find the oldest both in the same function.
       In the official solution, they create a separate function for getting the age. 
       That's much more scalable and reusable. 
    4) Do not give up. Keep going at it relentlessly.
  */
};

// Do not edit below this line
module.exports = findTheOldest;

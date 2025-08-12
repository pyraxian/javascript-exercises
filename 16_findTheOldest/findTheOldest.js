const getAge = function (birthDate, deathDate) {
    if (!deathDate) {
        deathDate = new Date().getFullYear();
    }

    return deathDate - birthDate;
}

const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
          currentPerson.yearOfBirth, 
          currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;

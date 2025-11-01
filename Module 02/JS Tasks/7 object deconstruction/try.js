const person = { 
	firstName: 'The Script',
    middleName: 'JS',
	lastName: 'Test'
};

const { firstName: fName = "New script", lastName: lName = "Default" , middleName: mName = "DefaultMiddle"} = person;
console.log(fName);
console.log(lName);
console.log(mName);

// Explanation:
// In the above code, we have an object 'person' with properties 'firstName' and 'lastName'.
// We use object destructuring to extract these properties into new variables 'fName' and 'lName', renaming them in the process.
// We also provide default values "New script" and "Default" for 'fName' and 'lName' respectively.
// However, since 'person' already has 'firstName' and 'lastName', the default values are not used.
// but we have not used middleName property so if we try to destructure it then default value will be used
// so mName will be "DefaultMiddle"

// Output will be:
// The Script
// Test
// DefaultMiddle

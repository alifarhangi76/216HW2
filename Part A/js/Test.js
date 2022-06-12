import OpenAddressHashTable from "./OpenAddressHashTable.js";
import { Person, Employee, Student, Undergraduate } from "./People.js";

const NUM_BINS = 5;
const KEY_LENGTH = 8;

function printHashTable(header, hashTable) {
    let text = hashTable.toString();
    text = header + "\n" + text;
    console.log(text);
    let outputDisplay = document.getElementById("output-display");
    text = text.replaceAll(/(?:\r\n|\r|\n)/g, '<br>');
    text = text.replaceAll(" ", '&nbsp;');
    outputDisplay.innerHTML += text;
}

function addPersonToHashTable(person, hashTable) {
    hashTable.putValue(person.key, person);
    printHashTable("Current Hash Table:", hashTable);
}

let hashTable = new OpenAddressHashTable(NUM_BINS, KEY_LENGTH);

// DEMONSTRATE ADDING VALUES TO THE HASH TABLE, WHICH INCLUDES THE NEED TO MAKE THE HASH TABLE BIGGER
addPersonToHashTable(new Student(hashTable.generateKey(), "George", "Harrison", 4.0), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Paul", "McCartney", 80000), hashTable);
addPersonToHashTable(new Employee(hashTable.generateKey(), "Ringo", "Starr", 40000), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Chuck", "Berry"), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "Mick", "Jagger", 3.5), hashTable);
addPersonToHashTable(new Student(hashTable.generateKey(), "Jimi", "Hendrix", 3.6), hashTable);
addPersonToHashTable(new Person(hashTable.generateKey(), "Roger", "Waters"), hashTable);

// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE HASH TABLE    
let jlKey = hashTable.generateKey();
hashTable.putValue(jlKey, new Student(jlKey, "John", "Lennon", 3.8));
let cwKey = hashTable.generateKey();
hashTable.putValue(cwKey, new Student(cwKey, "Charlie", "Watts", 3.1));
let dgKey = hashTable.generateKey();
hashTable.putValue(dgKey, new Employee(dgKey, "David", "Gilmour", 120000));
printHashTable("\nAfter Changing 3 Items", hashTable);

// DEMONSTRATE GETTING VALUES FROM THE HASH TABLE
let p = hashTable.getValue(jlKey);
console.log("\nget " + jlKey + ": " + p.toString() + "\n");
p = hashTable.getValue(cwKey);
console.log("\nget " + cwKey + ": " + p.toString() + "\n");
p = hashTable.getValue(dgKey);
console.log("\nget " + dgKey + ": " + p.toString() + "\n"); 

// NOW LET'S TRY REPLACING THE DATA IN THE ABOVE THREE
hashTable.putValue(jlKey, new Student(jlKey, "Otis", "Redding", 3.5));
hashTable.putValue(cwKey, new Student(cwKey, "Keith", "Richards", 3.1));
hashTable.putValue(dgKey, new Student(dgKey, "Bill", "Withers", 3.4));
printHashTable("\nAfter Changing 3 Items", hashTable);

// AND DEMONSTRATE REMOVING ITEMS FROM THE BST
hashTable.removeValue(jlKey);
printHashTable("\nAfter Removing Otis Redding", hashTable);

hashTable.removeValue(cwKey);
printHashTable("\nAfter Removing Keith Richards", hashTable);

hashTable.removeValue(dgKey);
printHashTable("\nAfter Removing Bill Withers", hashTable);

// TESTING UNDERGRADUATE CLASS + MORE TESTS
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Steve", "Jobs", 4.0, "U4"), hashTable);
addPersonToHashTable(new Undergraduate(hashTable.generateKey(), "Bill", "Gates", 3.9, "U3"), hashTable);
printHashTable("\nAfter Adding 2 Undergraduates", hashTable);

// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE HASH TABLE  
let emKey = hashTable.generateKey();
hashTable.putValue(emKey, new Undergraduate(emKey, "Elon", "Musk", 3.8, "U2"));
let mzKey = hashTable.generateKey();
hashTable.putValue(mzKey, new Undergraduate(mzKey, "Mark", "Zuckerberg", 3.7, "U1"));
printHashTable("\nAfter Adding 2 more Undergraduates", hashTable);

// DEMONSTRATE GETTING VALUES FROM THE HASH TABLE
let u = hashTable.getValue(emKey);
console.log("\nget " + emKey + ": " + u.toString() + "\n");
u = hashTable.getValue(mzKey);
console.log("\nget " + mzKey + ": " + u.toString() + "\n");

// NOW LET'S TRY REPLACING THE DATA IN THE ABOVE TWO
hashTable.putValue(emKey, new Undergraduate(emKey, "Jeff", "Bezos", 3.6, "U3"));
hashTable.putValue(mzKey, new Undergraduate(mzKey, "Jack", "Ma", 3.5, "U4"));
printHashTable("\nAfter Changing 2 Items", hashTable);

// AND DEMONSTRATE REMOVING ITEMS FROM THE HASH TABLE
hashTable.removeValue(emKey);
hashTable.removeValue(mzKey);
printHashTable("\nAfter Removing 2 Items", hashTable);

// NOW LET'S USE HARD-CODED KEYS
let hardCodedKey = "ABC123DE";
let hardCKey = "09ZXY231";

// DEMONSTRATE GETTING VALUES FROM THE HASH TABLE
let h = hashTable.getValue(hardCodedKey);
if (h !== null)
    console.log("\nget " + hardCodedKey + ": " + h.toString() + "\n");
else    
    console.log("\nThere is not any items with this key: " + hardCodedKey + "\n");

h = hashTable.getValue(hardCKey);
if (h !== null)
    console.log("\nget " + hardCKey + ": " + h.toString() + "\n");
else    
    console.log("\nThere is not any items with this key: " + hardCKey + "\n");

// REMOVING THE ITEMS THAT ARE NOT IN THE HASH TABLE YET
hashTable.removeValue(hardCodedKey);
hashTable.removeValue(hardCKey);
printHashTable("\nAfter trying to remove 2 Items which have not been put into the hash table yet", hashTable);

// NOW LET'S TRY TO ADD VALUES TO THE HASH TABLE BY USING HARD-CODED KEYS
hashTable.putValue(hardCodedKey, new Undergraduate(hardCodedKey, "Alex", "Brown", 3.78, "U3"));
hashTable.putValue(hardCKey, new Undergraduate(hardCKey, "David", "Lewis", 3.88, "U4"));
printHashTable("\nAfter Adding 2 Items by using hard-coded keys", hashTable);

// DEMONSTRATE GETTING VALUES FROM THE HASH TABLE BY USING HARD-CODED KEYS
let k = hashTable.getValue(hardCodedKey);
console.log("\nget " + hardCodedKey + ": " + k.toString() + "\n");
k = hashTable.getValue(hardCKey);
console.log("\nget " + hardCKey + ": " + k.toString() + "\n");

// DEMONSTRATE REMOVING ITEMS FROM THE HASH TABLE BY USING HARD-CODED KEYS
hashTable.removeValue(hardCodedKey);
hashTable.removeValue(hardCKey);
printHashTable("\nAfter Removing 2 Items by using hardcoded keys", hashTable);
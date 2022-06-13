import BinarySearchTree from "./BinarySearchTree.js";
import { Person, Employee, Student } from "./People.js";

const NUM_BINS = 5;
const KEY_LENGTH = 8;

function printBST(header, tree) {
    let text = tree.toString() + "\n";
    console.log(header + "\n" + text);
    let outputDisplay = document.getElementById("output-display");
    text = text.replaceAll(/(?:\r\n|\r|\n)/g, '<br>');
    text = text.replaceAll(" ", '&nbsp;');
    outputDisplay.innerHTML += text;
}

function addPersonToBST(person, tree) {
    tree.putValue(person.key, person);
    printBST("Current Binary Search Tree:", tree);
}

let tree = new BinarySearchTree(KEY_LENGTH);

// DEMONSTRATE ADDING VALUES TO THE BST, WHICH INCLUDES THE NEED TO MAKE THE BST BIGGER
addPersonToBST(new Student(tree.generateKey(), "George", "Harrison", 4.0), tree);
addPersonToBST(new Employee(tree.generateKey(), "Paul", "McCartney", 80000), tree);
addPersonToBST(new Employee(tree.generateKey(), "Ringo", "Starr", 40000), tree);
addPersonToBST(new Person(tree.generateKey(), "Chuck", "Berry"), tree);
addPersonToBST(new Student(tree.generateKey(), "Mick", "Jagger", 3.5), tree);
addPersonToBST(new Student(tree.generateKey(), "Jimi", "Hendrix", 3.6), tree);
addPersonToBST(new Person(tree.generateKey(), "Roger", "Waters"), tree);

// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE BST    
let jlKey = tree.generateKey();
tree.putValue(jlKey, new Student(jlKey, "John", "Lennon", 3.8));
let cwKey = tree.generateKey();
tree.putValue(cwKey, new Student(cwKey, "Charlie", "Watts", 3.1));
let dgKey = tree.generateKey();
tree.putValue(dgKey, new Employee(dgKey, "David", "Gilmour", 120000));
printBST("\nAfter Changing 3 Items", tree);

// DEMONSTRATE GETTING VALUES FROM THE BST
let p = tree.getValue(jlKey);
console.log("\nget " + jlKey + ": " + p.toString() + "\n");
p = tree.getValue(cwKey);
console.log("\nget " + cwKey + ": " + p.toString() + "\n");
p = tree.getValue(dgKey);
console.log("\nget " + dgKey + ": " + p.toString() + "\n");

// NOW LET'S TRY REPLACING THE DATA IN THE ABOVE THREE
tree.putValue(jlKey, new Student(jlKey, "Otis", "Redding", 3.5));
tree.putValue(cwKey, new Student(cwKey, "Keith", "Richards", 3.1));
tree.putValue(dgKey, new Student(dgKey, "Bill", "Withers", 3.4));
printBST("\nAfter Changing 3 Items", tree);

// AND DEMONSTRATE REMOVING ITEMS FROM THE BST
tree.removeValue(jlKey);
printBST("\nAfter Removing Otis Redding", tree);

tree.removeValue(cwKey);
printBST("\nAfter Removing Keith Richards", tree);

tree.removeValue(dgKey);
printBST("\nAfter Removing Bill Withers", tree);

// MORE TESTS
// DEMONSTRATE MAKING KEYS AND ADDING VALUES TO THE BST    
let emKey = tree.generateKey();
tree.putValue(emKey, new Student(emKey, "Elon", "Musk", 3.8));
let mzKey = tree.generateKey();
tree.putValue(mzKey, new Student(mzKey, "Mark", "Zuckerberg", 3.7));
printBST("\nAfter Adding 2 more Students", tree);

// DEMONSTRATE GETTING VALUES FROM THE BST
let u = tree.getValue(emKey);
console.log("\nget " + emKey + ": " + u.toString() + "\n");
u = tree.getValue(mzKey);
console.log("\nget " + mzKey + ": " + u.toString() + "\n");

// NOW LET'S TRY REPLACING THE DATA IN THE ABOVE TWO
tree.putValue(emKey, new Student(emKey, "Jeff", "Bezos", 3.6));
tree.putValue(mzKey, new Student(mzKey, "Jack", "Ma", 3.5));
printBST("\nAfter Changing 2 Items", tree);

// AND DEMONSTRATE REMOVING ITEMS FROM THE BST
tree.removeValue(emKey);
printBST("\nAfter Removing Jeff Bezos", tree);
tree.removeValue(mzKey);
printBST("\nAfter Removing Jack Ma", tree);

// NOW LET'S USE HARD-CODED KEYS
let hardCodedKey = "ABC123DE";
let hardCKey = "09ZXY231";

// DEMONSTRATE GETTING VALUES FROM THE BST
let h = tree.getValue(hardCodedKey);
if (h !== null)
    console.log("\nget " + hardCodedKey + ": " + h.toString() + "\n");
else    
    console.log("\nThere is not any items with this key: " + hardCodedKey + "\n");

h = tree.getValue(hardCKey);
if (h !== null)
    console.log("\nget " + hardCKey + ": " + h.toString() + "\n");
else    
    console.log("\nThere is not any items with this key: " + hardCKey + "\n");

// REMOVING THE ITEMS THAT ARE NOT IN THE BST YET
tree.removeValue(hardCodedKey);
tree.removeValue(hardCKey);
printBST("\nAfter trying to remove 2 Items that are not in the BST yet", tree);

// NOW LET'S TRY TO ADD VALUES TO THE BST BY USING HARD-CODED KEYS
tree.putValue(hardCodedKey, new Student(hardCodedKey, "Alex", "Brown", 3.78));
tree.putValue(hardCKey, new Student(hardCKey, "David", "Lewis", 3.88));
printBST("\nAfter Adding 2 Items by using hard-coded keys", tree);


// DEMONSTRATE GETTING VALUES FROM THE BST BY USING HARD-CODED KEYS
let k = tree.getValue(hardCodedKey);
console.log("\nget " + hardCodedKey + ": " + k.toString() + "\n");
k = tree.getValue(hardCKey);
console.log("\nget " + hardCKey + ": " + k.toString() + "\n");

// DEMONSTRATE REMOVING ITEMS FROM THE BST BY USING HARD-CODED KEYS
tree.removeValue(hardCodedKey);
printBST("\nAfter Removing Alex Brown", tree);
tree.removeValue(hardCKey);
printBST("\nAfter Removing David Lewis", tree);
printBST("\nAfter Removing 2 Items by using hard-coded keys", tree);

// DEMONSTRATE REMOVING ITEMS FROM THE BST WHEN ROOT IS NULL AND BST IS EMPTY
tree.root = null;
tree.removeValue("ABCDEFGH");
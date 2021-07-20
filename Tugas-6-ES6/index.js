// soal 1
const luas_keliling = (a,b) => {
    let c  = 2;
    luas = a * b;
    keliling = c * (a + b);
    console.log("luas = ",luas);
    console.log("keliling = ",keliling);
}
luas_keliling(10,12);

// soal 2
const newFunction = (firstName, lastName) => {
    return {
      firstName,
      lastName,
      fullName(){
        console.log(firstName + " " + lastName)
      }
    }
  }
  //Driver Code 
  newFunction("William", "Imoh").fullName() 
  
// soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}
const{firstName, lastName, address, hobby} = newObject
// Driver code
console.log(firstName, lastName, address, hobby)

// soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]
//Driver Code
console.log(combined)

// soal 5
const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet 
var after = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}`
console.log(before)
console.log(after)
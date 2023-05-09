//  console.log("Antes")
//  setTimeout(() => {
//     console.log("Durante")
// }, 2000)

//  console.log("Depois")


const timoutwithpromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Meio")
        },2000)
    })
}


console.log ("Antes")
timoutwithpromise() . then ((value) => {
    console.log(value)
})
console.log ("Depois")

let arr = [10, 24, 56, 72, -10, -88, 100, 564]
//  map, filter, reduce, 
let sum = 0
let i = 0
let oddCounter = 0
arr.map(item=>{
    if(i%2!=0){
        sum = sum + item
        oddCounter += 1
    }
    i++
})
let avg = sum/oddCounter
console.log(avg)

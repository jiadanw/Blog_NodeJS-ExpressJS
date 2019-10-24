



let descendingOrder = function (obj){
  let array = Object.keys(obj).map(function(key){
      return [key, obj[key]]
  })
  let b = array.reverse()
console.log(b)

  
}

// descendingOrder(postDatabase);

let a = function(arr){
  for(let i = 0 ; i < arr.length; i ++){
    console.log(arr[i][0])
  }
}


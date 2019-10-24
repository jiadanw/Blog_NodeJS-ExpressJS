
module.exports = ()=> {
  let descendingOrder = function (obj){
    let array = Object.keys(obj).map(function(key){
        return [key, obj[key]]
    })
    return b = array.reverse();
  };
  return descendingOrder;
}
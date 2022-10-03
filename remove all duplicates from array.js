///remove all duplicates from array completly 


var remove = function(matches)  {
    
    
    
    var res = new Set()
    let arr = matches.slice()
    for(let i = 0; i < arr.length; i++){
      if(arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])){
         continue;
      };
      res.add(arr[i]);
   };
   var z = Array.from(res)
   return z
}

alert(remove(matches=["is","what","is","there"])) /// [ 'what', 'there' ]
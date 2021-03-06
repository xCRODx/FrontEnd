/*
  Manage all data returns from tableCall.
  
*/

  var tableCall = [{dddOrigin: "011",dddDestination:"016", value:1.90},
    {dddOrigin: "011", dddDestination:"017", value:1.70},
    {dddOrigin: "011",dddDestination:"018", value:0.90},
    {dddOrigin: "016", dddDestination:"011", value:2.90},
     {dddOrigin: "017",dddDestination:"011", value: 2.70},
    {dddOrigin: "018", dddDestination:"011", value:1.90}]
    
    var findTable = (table) => {
      return table.origin === this.origin
    }
    
  //this function return the call value per minute of the promo DDD Origin and DDD Destination
  let returnCallValues = (origin,destination) => {
   var finalValue = tableCall.find(function(table,index){
     if(table.dddOrigin == origin && table.dddDestination == destination){
       return true
     }
   })
   return finalValue.value;
  }
  
  //this function returns all available destinations promo ddd of a pre determined origin
  let returnDDDavailable = (origin) => {
    var available = []
    tableCall.forEach(function(value,key){
     if( value.dddOrigin == origin ){
        available[key] = value;
     }
    })
    return available
  }
  
  
  export { returnCallValues, returnDDDavailable }
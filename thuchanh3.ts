const inventory = [

    {type:   "machine", value: 5000},


    {type:   "machine", value:  650},


    {type:      "duck", value:   10},


    {type: "furniture", value: 1200},


    {type:   "machine", value:   77}


]

const fillterValue = inventory.filter((item) =>{
    if ( item.type === "machine")
        return item.value
})
console.log(fillterValue)
const mapValue = fillterValue.map(item=>item.value)
let totalMachineValue = mapValue.reduce((total,currentValue)=>
{
    return total + currentValue;
})
console.log(totalMachineValue)

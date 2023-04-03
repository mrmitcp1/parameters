function detectCollision(objects, point){
   const foundObject = objects.find(({x,y,width,height})=>{
       return point.x >= x && point.x <= x + width &&


           point.y >= y && point.y <= y + height
   })
    return foundObject
}
const myObjects = [


    {x:  10, y: 20, width: 30, height: 30},


    {x: -40, y: 20, width: 30, height: 30},


    {x:   0, y:  0, width: 10, height:  5}


]
console.log(detectCollision(myObjects,{x :10, y : 20}))

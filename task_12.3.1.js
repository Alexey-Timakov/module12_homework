function getPropObject(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key + " - " + obj[key]);
        }
    }
}

let protoObject = {
    School : "SkillFactory",
    Course : "FJS",
}

let testObject = Object.create(protoObject)

testObject.Name = "Alexey";
testObject.Group = 12;

getPropObject(testObject)
// Функция проверки наличия свойства в объекте с прототипом.

// В задании не стояло условие проверять наличие именно собственных свойств, поэтому можно остановиться на первом решении :) ниже показала, как можно оформить его ещё более коротко
function checkObjectWithPrototype(obj, string){
    return string in obj; // Если добавить проверку на obj.hasOwnProperty(string), то можно исключить ключи прототипа из результата
}

// Функция проверки наличия свойства в объекте без прототипа. По сути то же самое решение, но более громоздкое.
function checkObjectOnly(obj, string){
    let result
    for (let key in obj){
        if (string === key && obj.hasOwnProperty(key)){
            result = true;
            break;
        } else{
            result = false;
        }
    }
    return result
}

let protoObject = {
    School : "SkillFactory",
    Course : "FJS",
}

let testObject = Object.create(protoObject)

testObject.Group = 12;
testObject.Name = "Alexey";

console.log(checkObjectWithPrototype(testObject,"School"))
console.log(checkObjectWithPrototype(testObject,"Name"))
console.log(checkObjectWithPrototype(testObject,"Surname"))

console.log(checkObjectOnly(testObject,"School"))
console.log(checkObjectOnly(testObject,"Name"))
console.log(checkObjectOnly(testObject,"Surname"))
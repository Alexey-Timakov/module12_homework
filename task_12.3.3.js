function CreateEmptyObject(){
    let emptyObject = Object.create(null);
    return emptyObject
}

let newEmptyObject = new CreateEmptyObject();

console.log(newEmptyObject);
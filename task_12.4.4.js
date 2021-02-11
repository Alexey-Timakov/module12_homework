let powerConsumption = 0;

function ElectroDevices (){
    this.voltage = 220,
    this.location = "home"
}
ElectroDevices.prototype.turnOnAndOff = function(control){
    if (control === "on"){
        this.work = 1;
        powerConsumption += this.powerCons;
        console.log(`${this.name} is ON`)
    } else {
        this.work = 0;
        powerConsumption -=this.powerCons;
        console.log(`${this.name} is OFF`)
    }
}

function AudioDevices (name, transfer, power){
    this.name = name,
    this.powerCons = power,
    this.work = 0,
    this.dataTransfer = transfer,
    this.playMusic = function(){
        if (this.work == 1){
            console.log("Dance! Dance!")
        } else {
            console.log ("Turn me ON!")
        }
    }
}

function CookingDevices (name, power){
    this.type = "heating",
    this.name = name,
    this.powerCons = power,
    this.work = 0,
    this.taskComplete = function(meal){
        if (this.work == 1){
            console.log(`Your ${meal} has been cooked!`)    
        } else {
            console.log ("Turn me ON!")
        }
    }
}

AudioDevices.prototype = new ElectroDevices()
CookingDevices.prototype = new ElectroDevices()

const loudSpeakers = new AudioDevices("loudSpeakers", "bluetooth", 50)
loudSpeakers.playMusic()
loudSpeakers.turnOnAndOff("on")
loudSpeakers.playMusic()
console.log(loudSpeakers);

const coffeeMachine = new CookingDevices("cofffeMachine", 30)
coffeeMachine.taskComplete("latte")
coffeeMachine.turnOnAndOff("on")
coffeeMachine.taskComplete("latte")
console.log(coffeeMachine);

console.log(`Total power consumption - ${powerConsumption}`)

coffeeMachine.turnOnAndOff("off")

console.log(`Total power consumption - ${powerConsumption}`)
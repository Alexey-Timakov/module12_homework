let powerConsumption = 0;

class ElectroDevices{
    constructor(control) {
        this.voltage = 220;
        this.location = "home";
    }
    turnOnAndOff(control){
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
}

class AudioDevices extends ElectroDevices{
    constructor(name, transfer, power, control){
        super(control);
        this.name = name;
        this.powerCons = power;
        this.work = 0;
        this.dataTransfer = transfer;
    }    
    playMusic(){
        if (this.work == 1){
            console.log("Dance! Dance!")
        } else {
            console.log ("Turn me ON!")
        }
    }
}

class CookingDevices extends ElectroDevices {
    constructor(name, power, control){
        super(control);
        this.type = "heating";
        this.name = name;
        this.powerCons = power;
        this.work = 0;
    }
    taskComplete(meal){
        if (this.work == 1){
            console.log(`Your ${meal} has been cooked!`)    
        } else {
            console.log ("Turn me ON!")
        }
    }
}

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
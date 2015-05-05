/*Make a Dice constructor that takes a numberOfSides. 
Add a method called roll that randomly returns a number from 1 
up to the numberOfSides.
Modify your roll method to record the returned side 
in a lastRoll property.*/


function Dice(numberOfSides) {
   
   this.numberSides = numberOfSides;

}

Dice.prototype.roll= function () {

    this.lastRoll =  Math.floor(Math.random() *this.numberSides +1);

    return this.lastRoll; 
    
    
}

var randomNumber = new Dice(7);
randomNumber.roll();


/*********************************************/

function Starship(model,ownerName) {
    this.model = model;
    this.owner = ownerName;
}

Starship.prototype.setTopSpeed= function(speed) {
  this.topSpeed = speed;
}

Starship.prototype.getTopSpeed= function() {

    return this.topSpeed;
}

Starship.prototype.accelerateTo= function(cSpeed) {
    if (cSpeed < this.topSpeed) {
        this.currentSpeed = cSpeed
    }
}

var ship = new Starship("moonLander","tejaswi"); 

/**********************************************/

function Radio(ownerName, signalType) {
    this.owner = ownerName;
    this.signal = signalType;
}

Radio.prototype.setStation= function(stationType,stationNumber){ 
  
  if ( stationType === "AM"){
      if (stationNumber > 532 && stationNumber < 1705) {
          this.stationNum = stationNumber;
      }
   } else {
       if(stationNumber > 88 && stationNumber < 108) {
              this.stationNum = stationNumber;
        } 
   }
}
 

Radio.prototype.listen = function(type) {
    if (type === "AM") {
        this.stationT ="distorted";
    } else {
        this.stationT = "clear music"
    }

}

var a = new Radio("mary","FM")
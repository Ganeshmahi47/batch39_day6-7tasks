    
 class Uber {

   constructor(distance,waitingPeriod,rate){
                this.distance= distance;
                this.waitingPeriod=waitingPeriod;
                this.rate=rate;
            }
   
    getRideDetails(){
                return(`The distance of the ride is ${this.distance} with waiting period of 
                ${this.waitingPeriod} and rate of ${this.rate}`)
            }
    getRate(){
                let totalRate = (this.distance * this.rate)+ (this.waitingPeriod * 5)
                return totalRate;
            }
            
            }
        
    let customer1= new Uber (100,10,15)
    console.log(customer1.getRate());
   console.log(customer1.getRideDetails());
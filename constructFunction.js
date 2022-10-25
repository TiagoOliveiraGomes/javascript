function car (maxVelocity = 200, delta = 5) {
    // private
    let currentVelocity = 0

    // public
    this.aceleration = () => {
        if(currentVelocity + delta <= maxVelocity){
            currentVelocity += delta
        }else {
            currentVelocity = maxVelocity
        }
    }

    this.getCurrentVelocity = function(){
        return currentVelocity
    }
    
}

const uno = new car
uno.aceleration()
console.log(uno.getCurrentVelocity())

const ferrari = new car(350, 20)
ferrari.aceleration()
ferrari.aceleration()
ferrari.aceleration()
console.log(ferrari.getCurrentVelocity())

console.log(typeof car)
console.log(typeof ferrari)
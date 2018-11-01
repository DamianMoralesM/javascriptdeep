/*class Vehicle {
    constructor(price){
        this.price = price;
    }
   
    back(){
        return "backkk"
    }


}
*/


class Car {
    constructor(wheels,engine,color){
        this.wheels = wheels;
        this.engine= engine;
        this.color = color;
    }

    run(){
        return "running";
    }

    ruedasSuficientes(){
        return this.wheels >= 4;
    }

}

const superCar = new Car(4,'V8','blue');
const superCar2 = new Car(3,'V8','red');


console.log(superCar, superCar2,superCar2.ruedasSuficientes() );
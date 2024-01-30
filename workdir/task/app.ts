const passenger = (passengers:number, shuffle:number)=>{
    type Passengers = {
        name: string;
        location: string
    }
    //declare variables
    let boarded: Passengers[] = [];
    let reservation: Passengers[] = [];
    let count: number = 0;
    let locations = ["Abuja", "Benue", "Lagos", "Katsina", "Sambisa"]
    let allPassengers: Passengers[] = []
    //generate Passengers
    for (let index = 0; index < passengers; index++) {
        let passengersObject: Passengers = {
            name: `passenger${index + 1}`,
            location: `${locations[index % locations.length]}`
        }
        allPassengers.push(passengersObject)
    }
    //push extras to reservation
    if (allPassengers.length % locations.length !== 0) {
        reservation = allPassengers.splice(-[allPassengers.length % 5])
    }
    //manage passengers (boarding cannot be more than 50 people)
    do{
        if (allPassengers.length > 50) {
            boarded = allPassengers.splice(0, 50)
        }else{
            boarded = allPassengers.splice(0)
        }
        if (shuffle === 0 && allPassengers.length !== 0) {
            reservation = allPassengers.splice(0)
        }
        count++
        shuffle--
    }while (allPassengers.length > 0)
    //complete your work here

    
    return {
        boarded,
        reservation,
        count
    }
}
passenger(5, 3)
export default passenger;
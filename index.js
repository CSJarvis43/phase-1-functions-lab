function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42)
}

distanceFromHqInBlocks();

function distanceFromHqInFeet(feet) {
    let distanceTravelledInFeet = distanceFromHqInBlocks(feet);
    return distanceTravelledInFeet * 264;

}

distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    let dist = Math.abs(start - destination) * 264
    if(dist < 400){
        return 0
    } else if(dist >= 400 && dist <=2000){
        let price = (dist * .02 - 8).toFixed(2)
        return parseFloat(price)
    } else if(dist > 2000 && dist <= 2500){
        return 25
    } else return 'cannot travel that far'
}
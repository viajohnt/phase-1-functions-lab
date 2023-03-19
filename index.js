// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(pickupLocation) {
    const feetInBlocks = 264;
    return distanceFromHqInBlocks(pickupLocation) * feetInBlocks;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}
function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination);
    if (distance > 2500);
    return `cannot travel that far`;
} function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      fare = "cannot travel that far";
    }
    return fare;
  }
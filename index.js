// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  }
  console.log(returnFirstTwoDrivers(drivers));

//part 2
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  console.log(returnLastTwoDrivers(drivers));

  //part 3
  const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
  console.log(selectingDrivers[0](drivers));
  console.log(selectingDrivers[1](drivers));

  //part 4
  const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
  }
  
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  // const createFareMultiplier = function (fareMultiplier) {
  //  let show = function (value) {
  //      return fareMultiplier * value;}
  //  return show(5);
  // }
  // console.log (createFareMultiplier(5));
  // const fareDoubler = createFareMultiplier(2);
  // console.log(fareDoubler);
 //  const fareTripler = createFareMultiplier(3);
// console.log(fareTripler);

//part5
const selectDifferentDrivers = function (drivers, func){
    return func(drivers)
}
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

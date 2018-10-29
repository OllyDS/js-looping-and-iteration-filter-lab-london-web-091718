// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (driverInitial) {
    return driverInitial[0] === name[0]
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (driverObject) {
    return driverObject.name === name
  })
}

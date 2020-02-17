// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
const array = drivers.slice()

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {
    const newDrivers = drivers.slice()
    newDrivers.push(name)
    return newDrivers
}

function prependDriver(name) {
    const newDrivers = drivers.slice()
    newDrivers.unshift(name)
    return newDrivers
}

function removeLastDriver(name) {
    const newDrivers = drivers.slice()
    newDrivers.pop()
    return newDrivers
}

function removeFirstDriver(name) {
    const newDrivers = drivers.slice()
    newDrivers.shift()
    return newDrivers
}
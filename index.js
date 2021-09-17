// Your code here

const allEmployeeRecords = []

function createEmployeeRecord([string1, string2, string3, number]) {
    const employeeRecord = {
        firstName: string1,
        familyName: string2,
        title: string3,
        payPerHour: number,
        timeInEvents: [],
        timeOutEvents: []
    }
    allEmployeeRecords.push(employeeRecord)
    return employeeRecord
}

function createEmployeeRecords (arrays) {
    //console.log(arrays)
    const arrOfObjects = []
    arrays.forEach((array) => {
        const newObj = createEmployeeRecord(array)
        console.log(newObj)
        arrOfObjects.push(newObj)
        //allEmployeeRecords.push(newObj)
    })
    //return array of objects
    return arrOfObjects
}

function createTimeInEvent (empObj, dateStamp) {
    const hour = dateStamp.split(' ')[1]
    // const hourStamp = `${hour[0]}`+`${hour[1]}`
    const date = dateStamp.split(' ')[0]
    const timeInObj = {
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    }
    //return employee record
    const timeInEvents = empObj.timeInEvents
    timeInEvents.push(timeInObj)
    return empObj
}

function createTimeOutEvent (empObj, dateStamp) {
    const hour = dateStamp.split(' ')[1]
    // const hourStamp = `${hour[0]}`+`${hour[1]}`
    const date = dateStamp.split(' ')[0]
    const timeOutObj = {
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date: date
    }
    //return employee record
    const timeOutEvents = empObj.timeOutEvents
    timeOutEvents.push(timeOutObj)
    return empObj
}

function hoursWorkedOnDate (empObj, dateStamp) {
    const timeIn = empObj.timeInEvents[0].hour
    const timeOut = empObj.timeOutEvents[0].hour
    const hoursWorked = (timeOut - timeIn)/100
    //return hours worked as integer
    return hoursWorked
}

function wagesEarnedOnDate (empObj, dateStamp) {
    const hoursWorked = hoursWorkedOnDate(empObj, dateStamp)
    const wagesEarned = hoursWorked * empObj.payPerHour
    return wagesEarned
}

function allWagesFor (empObj) {
    allEmployeeRecords.forEach(emp => {
        if (empObj.firstName === emp.firstName) {
            console.log ('yes it is true')
        }
        else {
            console.log('not the same')
        }
    })
    //return pay owed for all dates
}

createEmployeeRecords([["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]])

createEmployeeRecord(["alex", "sizlak", "barkeep", 2])

/* Your Code Here */

function createEmployeeRecord(employeeData) {
  return {
    firstName: employeeData[0],
    familyName: employeeData[1],
    title: employeeData[2],
    payPerHour: employeeData[3],
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(employeesData) {
  return employeesData.map(employeeData => createEmployeeRecord(employeeData));
}

function createTimeInEvent(dateTimeString) {
  const [date, hour] = dateTimeString.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    date: date,
    hour: parseInt(hour, 10)
  });
  return this;
}

function createTimeOutEvent(dateTimeString) {
  const [date, hour] = dateTimeString.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    date: date,
    hour: parseInt(hour, 10)
  });
  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date);
  const timeOut = this.timeOutEvents.find(event => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100; 
}

function wagesEarnedOnDate(date) {
  const hoursWorked = hoursWorkedOnDate.call(this,date);
  return hoursWorked * this.payPerHour;
}

function findEmployeeByFirstName(collection, firstNameString) {
  return collection.find(employee => employee.firstName === firstNameString);
}


function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((totalPayroll, employee) => {
    const employeeWages = allWagesFor.call(employee);
    return totalPayroll + employeeWages;
  }, 0);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


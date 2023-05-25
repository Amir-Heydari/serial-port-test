// Import dependencies
const {SerialPort} = require("serialport");

// Defining the serial port
const port = new SerialPort({
    //  path: '/dev/tty-usbserial1',
    path: 'COM4',
    baudRate: 57600,
  })
const person = {
    name:"amir",
    age: 22
}

// Write the data to the serial port
port.write(JSON.stringify(person));
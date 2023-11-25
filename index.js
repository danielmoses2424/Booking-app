const appointment = []; // 

// this func... is ro book an appointment
function bookAppointment() {
const BookingDateTimeIinput = document.getElementById("bookingdatatime").value;

if (BookingDateTimeIinput === '') {
    alert('please select a date and time')
    return;
}
const now = new Date();
const selectedDateTime = new Date(BookingDateTimeIinput);

if (selectedDateTime < now){
alert(' you can not book an appointment in the past') 
};        


const confirmationMessage = document.getElementById('confirmationMessage')
confirmationMessage.innerHTML = `appoinment booked for ${BookingDateTimeIinput}` 

if (selectedDateTime < now) {
    alert(' you can not book an appointment in the past') 
} else {
    const confirmationMessage = document.getElementById('confirmationMessage')
    confirmationMessage.innerHTML = `appoinment booked for ${BookingDateTimeIinput}` ;

     appointment.push(selectedDateTime)
    displayappointment();
}
    
};

function cancelappointment(index) {
    appointment.splice(index, 1);
    displayappointment();
    
}
// this func... is to display all of our appointment list
function displayappointment() {
    const appoinmentList = document.getElementById('appointmentlist');
    appoinmentList.innerHTML = '';

    appointment.forEach((appointment, index)=>{
        const li = document.createElement('li');
        li.innerHTML = `appointment 0n ${appointment.toLocaleString()}`;
         const cancelButton = document.createElement('button');
         cancelButton.innerHTML = 'cancel'
         cancelButton.onclick = () => cancelappointment(index);

         li.appendChild(cancelButton);
         appoinmentList.appendChild(li);
         console.log(appoinmentList)
    });

};




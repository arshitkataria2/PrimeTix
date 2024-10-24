const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const seatContainer = document.querySelector(".row-container");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = 650;  


function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".container .selected");

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.textContent = selectedSeatsCount;
  total.textContent = selectedSeatsCount * ticketPrice;
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
}
function confirmBooking() {

    var modal = document.getElementById('confirmationModal');
    modal.style.display = 'flex';

   
    setTimeout(function () {
        modal.style.display = 'none';
        window.location.href = 'file:///C:/Users/arshit/OneDrive/Desktop/PRIMETIX/PRIMETIX/index.html'; 
    }, 3000); 
}



seatContainer.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
  
});


populateUI();
updateSelectedCount();

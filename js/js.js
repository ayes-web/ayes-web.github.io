var raha = 0;
var Ticket = 0;
var Kogus = 1;

var MPC = 1;
var TicketPower = 0.1;

//Stats value
var BC = 0; /* BC = Button Clicks */
var MT = 0; /* MT = Money Total */
var TP = 0; /* TP = Time Played*/


function ClickDisplay() {
    raha += MPC;
    MT += MPC;
    //raha = Math.floor(raha)
    Stats();
    ButtonColor();
}

function BuyTicket() {


  if (raha >= 10 * Kogus) {
      raha -= 10 * Kogus;
      Ticket += 1 * Kogus;
      MPC += TicketPower * Kogus;
      Stats();

      if (Ticket > 9 && Ticket < 100) {
          TicketPower = 0.2;
      } else if (Ticket > 99 && Ticket < 1000) {
          TicketPower = 0.5;
      } else if (Ticket >= 1000) {
         TicketPower = 1;
      } 
    } else {
      alert("Not enough money");
    }
    ButtonColor()
}

function Stats() {
    document.getElementById("MD").innerHTML = raha;
    document.getElementById("BS").innerHTML = BC;
    document.getElementById("MS").innerHTML = MT;
    document.getElementById("TP").innerHTML = TP;
    document.getElementById("TT").innerHTML = Ticket;
}

function InputCalc() {
    Kogus = document.getElementsByName("Kogus")[0].value;
    document.getElementById("PD").innerHTML = Kogus * 10;
    ButtonColor()
}
function ButtonColor() {
    if (raha < Kogus * 10) {
        document.getElementById("TicketButton").style.backgroundColor = "red";
    } else {
        document.getElementById("TicketButton").style.backgroundColor = "white";
    }
}
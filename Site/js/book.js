// All global variables used to access different headings
var call_times1 = 1
var call_times2 = 1
var call_times3 = 1
var call_times4 = 1
var text1 = 'Three Star Hotel'
var text2 = 'Two Star Hotel'
var text3 = 'One Star Hotel'
var text4 = 'Four Star Hotel'


// Checks what room you've booked
function bookval(value) {
    if (value == 1) {
        book(text1, 1, 1999)
    }
    else if (value == 2) {
        book(text2, 2, 1399)
    }
    else if (value == 3) {
        book(text3, 3, 2199)
    }
    else if (value == 4) {
        book(text4, 4, 4299)
    }
}

//  Text and how many rooms you've booked
function book(text, number, price) {

    // Check if and what the text in the heading is
    var recent = document.getElementById("purchases"+number).innerHTML
    // Check if the heading is empty (includes no text)
    if (document.getElementById("purchases"+number).innerHTML == "") {
        document.getElementById("purchases"+number).innerHTML= text + "(" + call_times(number) + ")"
    }

    // Compare recent text and check if statement is true
    else if (recent == (text + "(" + call_times(number) + ")") || recent == text) {
        add_call_times(number);
        document.getElementById("purchases"+number).innerHTML= text + "(" + call_times(number) + ")";
    }
}

// Return the variable which contains the counter for how many times the specific room has been booked
function call_times(number) {
    if (number == 1) {
        return call_times1
    }
    else if (number == 2) {
        return call_times2
    }
    else if (number == 3) {
        return call_times3
    }
    else if (number == 4) {
        return call_times4
    }
}

// Return the book counter added with one
function add_call_times(number) {
    if (number == 1) {
       call_times1 += 1
    }
    else if (number == 2) {
       call_times2 += 1
    }
    else if (number == 3) {
       call_times3 += 1
    }
    else if (number == 4) {
       call_times4 += 1
    }
}

// Reset all the headings and counters
function reset_order() {
    document.getElementById("purchases1").innerHTML = ""
    document.getElementById("purchases2").innerHTML = ""
    document.getElementById("purchases3").innerHTML = ""
    document.getElementById("purchases4").innerHTML = ""
    call_times1 = 1
    call_times2 = 1
    call_times3 = 1
    call_times4 = 1
}

// Reset the headings and counters as well as confirm the booking
function order_successful() {
    var purchase1 = document.getElementById("purchases1").innerHTML
    var purchase2 = document.getElementById("purchases2").innerHTML
    var purchase3 = document.getElementById("purchases3").innerHTML
    var purchase4 = document.getElementById("purchases4").innerHTML

    // Check if you have booked something at all
    if (purchase1 == "" && purchase2 == "" && purchase3 == "" && purchase4 == "") {
        alert("Please book something before purchase")
    }

    // If you have booked at least one room, confirm that the booking is successful
    else {
        reset_order()
        alert("Booking successful")
    }
}

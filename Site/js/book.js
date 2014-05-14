var call_times1 = 0
var call_times2 = 0
var call_times3 = 0
var call_times4 = 0
var text1 = 'Three Star Hotel'
var text2 = 'Two Star Hotel'
var text3 = 'One Star Hotel'
var text4 = 'Four Star Hotel'

function bookval(value) {
    if (value == 1) {
        book(text1, 1)
    }
    else if (value == 2) {
        book(text2, 2)
    }
    else if (value == 3) {
        book(text3, 3)
    }
    else if (value == 4) {
        book(text4, 4)
    }
}

function book(text, number) {

    var recent = document.getElementById("purchases"+number).innerHTML
    if (document.getElementById("purchases"+number).innerHTML == "") {
        document.getElementById("purchases"+number).innerHTML= text
    }

    else if (recent == (text + "(" + call_times(number) + ")") || recent == text) {
        add_call_times(number);
        document.getElementById("purchases"+number).innerHTML= text + "(" + call_times(number) + ")";
    }

    else {
        var h1 = document.createElement("h1");
        h1.innerHTML = "Hello"
    }
}

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


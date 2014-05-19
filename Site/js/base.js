// Make a google search of the input
function auto_search() {

    // Check the input in the text-field
    var search_input = document.getElementById("search-form").value

    // Replace spaces in the input with '+'
    var res = search_input.replace(" ", "+");

    // Google the input
    window.open("http://lmgtfy.com/?q="+(res));
}


// Check if you've pressed enter while in the text-field
function enters(event) {
    if (event.which == 13 || event.keyCode == 13) {
        auto_search()
        return false;
    }
    return true;
}
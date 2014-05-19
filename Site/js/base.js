function auto_search() {
    var search_input = document.getElementById("search-form").value
    var res = search_input.replace(" ", "+");

    window.open("http://lmgtfy.com/?q="+(res));
}

function enters(event) {
    if (event.which == 13 || event.keyCode == 13) {
        //code to execute here
        auto_search()
        return false;
    }
    return true;
}
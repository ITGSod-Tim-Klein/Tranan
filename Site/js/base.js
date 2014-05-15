function auto_search() {
    var search_input = document.getElementById("search-form").value
    var res = search_input.replace(" ", "+");

    window.open("http://lmgtfy.com/?q="+(res));
}

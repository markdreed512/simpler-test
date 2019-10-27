function getQueryVariable(key) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0].toLowerCase() === key) {
            return pair[1];
        }
    }
    return false;
}


var firstname = getQueryVariable('name');
var email = getQueryVariable('email');
if (firstname) {
    $('#nameInput').val(firstname);
}
if (email) {
    $('#emailInput').val(email);
}
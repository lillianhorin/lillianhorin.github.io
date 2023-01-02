// Append year to copyright
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

// Append current date to updated section
date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("update").appendChild(document.createTextNode( month + "/" + day + "/" + year ));
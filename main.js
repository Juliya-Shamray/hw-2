 var names = prompt("Please, enter names separated by commas:");
 var listNames = names.split(",");

for(var index in listNames){
    console.log("<li>" + ( +index + 1 ) +" "+ listNames[index] + "</li>");
}
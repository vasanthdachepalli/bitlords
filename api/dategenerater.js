
let date = new Date();
var options = {
    weekday : "long",
    day : "numeric",
    month : "long"
};
var day = date.toLocaleDateString("en-us",options);
console.log(day);
module.exports = function(){
    return date.getDate()+ "/"+ date.getMonth()+ "/" + date.getFullYear();
}

const date = new Date();
module.exports = function(){
    return date.getDate() + "/"+ date.getMonth() + "/" + date.getFullYear();
}
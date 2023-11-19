

const given = document.getElementsByClassName("given");
const taken = document.getElementsByClassName("taken");
const button1 = document.getElementsByClassName("action");
const button2 = document.getElementsByClassName("action1");
const button3 = document.getElementsByClassName("equal");

for (let i = 0; i < given.length; i++) {
    let a = parseInt(given[i].innerHTML);
    let b = parseInt(taken[i].innerHTML);

    if (a < b) {
        button2[i].style.display = "none"; // Hide action1 button
        button3[i].style.display = "none";

    } else if (a > b) {
        button1[i].style.display = "none"; // Hide action1 button
        button3[i].style.display = "none";
    } else {
        button2[i].style.display = "none";
        button1[i].style.display = "none";
    }
}
function remove(){
    document.getElementsByClassName("SButton")[0].style.display = "none";
}
function triggerFunction() {
    fetch('/membersDataFecher/?name='+ document.getElementById('inputText').value+'&groupname='+document.getElementsByClassName('Gname')[0].innerHTML)
   
    .then(response => response.json())
    .then(values =>{
        console.log(values)
        if(values.count == '1')
        document.getElementsByClassName("SButton")[0].style.display = "inline-block";
        else{
        alert("user may already in group or doesnot exist")
        document.getElementsByClassName("SButton")[0].style.display = "none";
        }
    }) 
}
function splitter() {
    let amount = parseFloat(document.getElementsByClassName("totalAmount")[0].value);
    let members = document.getElementsByClassName("money");
    let splitAmount = amount/members.length;
    for(let i = 0;i < members.length;i++){
        members[i].value = splitAmount;
    }
    checker();
}
function checker() {
    let amount = parseFloat(document.getElementsByClassName("totalAmount")[0].value);
    let members = document.getElementsByClassName("money");
    let check = 0;
    for(let i = 0;i < members.length; i++){
        check += parseFloat(members[i].value);
    }
    if(check === amount){
        document.getElementsByClassName("SButton")[1].style.display = "inline-block";
    }
    else{
        document.getElementsByClassName("SButton")[1].style.display = "none";
    }
}
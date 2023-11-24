fetch('/archives/data/data1')
.then(response => response.json())
.then(data =>{

const given = document.getElementsByClassName("given");
const taken = document.getElementsByClassName("taken");
const button1 = document.getElementsByClassName("action");
const button2 = document.getElementsByClassName("action1");
const button3 = document.getElementsByClassName("equal");
const button4 = document.getElementsByClassName('action2')

for (let i = 0; i < given.length; i++) {
    let a = parseInt(given[i].innerHTML);
    let b = parseInt(taken[i].innerHTML);

    if (a < b) {
        button2[i].style.display = "none"; // Hide action1 button
        button3[i].style.display = "none";
       // button4[i].style.display ="none";
        if((b - a) > data[i].balance){
          button1[i].style.display ="none";
        }else
        button4[i].style.display ="none";

    } else if (a > b) {
        button1[i].style.display = "none"; // Hide action1 button
        button3[i].style.display = "none";

        
            button4[i].style.display ="none";
        

    } else {
        button2[i].style.display = "none";
        button1[i].style.display = "none";
        button4[i].style.display ="none";
    }
}

})

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
    fetch('/archives/data/data1')
    .then(response => response.json())
.then(data =>{
    console.log(data[0].balance);
    let amount = parseInt(document.getElementsByClassName("totalAmount")[0].value);

    if(amount < 0)
    document.getElementsByClassName("totalAmount")[0].value = 0;

    if( amount > parseInt(data[0].balance)){
        document.getElementsByClassName("totalAmount")[0].value = 0;
    }
    
    if(amount > (data[0].balance - data[0].saving)){
        alert('if you proced with this transtion you will not acheive monthly savings account ')
    }

    let members = document.getElementsByClassName("money");
    let check = 0;
    for(let i = 0;i < members.length; i++){
        if(members[i].value < 0)
        members[i].value = 0;
    }

    for(let i = 0;i < members.length; i++){
        check += parseFloat(members[i].value);
    }
    if(check === amount){
        document.getElementsByClassName("SButton")[1].style.display = "inline-block";
    }
    else{
        document.getElementsByClassName("SButton")[1].style.display = "none";
    }
})
}
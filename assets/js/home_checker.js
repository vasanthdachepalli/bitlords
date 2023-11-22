function checker1(){
    let a = parseInt(document.getElementById('check2').value,10);
    let b = parseInt(document.getElementById('check1').innerHTML,10);
    let c = parseInt(document.getElementById('check3').innerHTML,10)
    console.log(a,b,c);
    if(b < a){
    document.getElementById('check2').value = 0;
    alert("insuffient balance seting amount")
    }
    else if((b-c)<a)
    alert("you cannot reach your monthly savings target if you do this transtion ");

    if( a < 0){
        document.getElementById('check2').value = 0;
        alert("if you want to cerbit the amount ,go for cerbits form ")
    }
    
}
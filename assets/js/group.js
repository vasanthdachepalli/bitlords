async function change(){
    let doc = await fetch('/membersDataFecher/groupcheck?groupname='+document.getElementById('groupName').value);

    let values = await doc.json();
    console.log(values)
    if(values.count != 0){
    document.getElementById('button12').style.display="none";
    document.getElementById('button11').style.display="inline-block";
    }else
    alert("group name existed in database choose other")
  }
 function def(){
  document.getElementById('button11').style.display="none";
    document.getElementById('button12').style.display="inline-block";
 }
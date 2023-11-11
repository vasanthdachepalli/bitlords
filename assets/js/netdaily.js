async function getdaily(date){
    const data = await fetch('visualizer/api/daily/?date='+date);
    const data1 = await data.json();
    return data1.values;
}



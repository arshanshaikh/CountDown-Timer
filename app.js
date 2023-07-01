const endDate="26 December 2023 9:09 PM"

document.getElementById("end-date").innerText=endDate;
const inputs =document.querySelectorAll("input")

//const clock =() => {

//}

function clock(){
    const end = new Date(endDate)// it is for the end date.
    const now = new Date()// it is for the date you have given .
    const diff = (end-now) / 1000;// We are getting the difference in millisecond so by dividing by 1000  we will get it in second.
    // console.log(diff);
    //console.log(Math.floor(diff/3600/24));//Math.floor will give exact number not the decimal one.
    
     if (diff<0)return;// It will stop when the clock hit its final time so it prevent it from minus values.
    
    inputs[0].value = Math.floor(diff/3600/24);//For Days//value kyu inner tag kyu nahi kyuki wo ek input hai.
    inputs[1].value = Math.floor(diff/3600)%24;//Hours
    inputs[2].value = Math.floor(diff/60)%60;// Minutes
    inputs[3].value = Math.floor(diff)%60;// second



}

// initial call.
clock()



// 1 day =24 hrs
// 1 hrs =60 min
// 60 min =3600 sec

//it will change on every second
setInterval(
    () => {
        clock()
    },
    1000
)
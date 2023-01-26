btn.onclick = () => {

    var person = document.getElementById("person").value;

    var service = document.getElementById("service").value;
    var bill = document.getElementById("bill").value;
    var tip = bill * service / (100 * person);
    document.getElementById('show').innerHTML = tip;
    if (person == '' || service == '' || bill == '') {
        return alert("Invalid input");
    }
    else if (person > 1) {
        document.getElementById("each").style.display ="block";


    }
    else {
         document.getElementById("each").style.display="none";
    }

}
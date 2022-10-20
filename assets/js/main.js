let cabin;
let cp;
const priceonkm = 0.21;
function confirm (){
    var element = document.getElementById("ticket");
     element.classList.remove("d-none");
    console.log(document.getElementById('ticket').className.remove = "d-none")
    let age = parseInt(document.getElementById('ageRange').value);
    let distance = parseFloat(document.getElementById('distance').value);
    let price = distance * priceonkm.toFixed(2);
    if(age===1){
        price = (price -((price / 100)*20)).toFixed(2);
    }
    else if(age===3)
    {
        price = (price -((price / 100)*40)).toFixed(2);
    }

    let customerName;
    customerName = document.getElementById('customerName').value;
    console.log(customerName);
    document.getElementById('name').innerHTML = customerName;
    document.getElementById('cabin').innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById('cpCode').innerHTML = Math.floor(Math.random() * 9999) + 1;
    document.getElementById('finalPrice').innerHTML = price;
}
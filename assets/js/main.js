const priceonkm = 0.21;
function check (){
    let age = parseInt(document.getElementById('age').value);
    let distance = parseFloat(document.getElementById('distance').value);
    let price = distance * priceonkm.toFixed(2);
    if(age===1){
        price = (price -((price / 100)*20)).toFixed(2);
    }
    else if(age===3)
    {
        price = (price -((price / 100)*40)).toFixed(2);
    }
    document.getElementById('finalprice').innerHTML =`Your price is ${price}. Enjoy your trip!`;
}
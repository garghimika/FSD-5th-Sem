function simpleInterest(){

    let p = document.getElementById("p").value;
    let r = document.getElementById("r").value;
    let t = document.getElementById("t").value;

    let si = (p * r * t) / 100;

    document.getElementById("result").innerHTML =
    "Simple Interest = " + si;
}

function compoundInterest(){

    let p = document.getElementById("p").value;
    let r = document.getElementById("r").value;
    let t = document.getElementById("t").value;

    let amount = p * Math.pow((1 + r/100), t);
    let ci = amount - p;

    document.getElementById("result").innerHTML =
    "Compound Interest = " + ci.toFixed(2);
}

// Event Listener
document.getElementById("btn").addEventListener("click", showMad)

// Event Function
function showMad () {

// IN
    let mad1 = document.getElementById("mad-1").value;
    let mad2 = document.getElementById("mad-2").value;
    let mad3 = document.getElementById("mad-3").value;
    let mad4 = document.getElementById("mad-4").value;
    let mad5 = document.getElementById("mad-5").value;
    let mad6 = document.getElementById("mad-6").value;

// PRO
    let madLib = `On good days, my ${mad1.toLowerCase()} enjoys ${mad2.toLowerCase()} and ${mad3.toLowerCase()} while listening to ${mad4} on repeat. Personally knowing him, I know his ${mad5.toLowerCase()} can't get any better because he loves ${mad6}.`;

// OUT
    document.getElementById("target").innerHTML = madLib;

}
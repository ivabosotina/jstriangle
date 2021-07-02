/*triangle*/

function results() {
    var a = 5;
    var b = 6;
    var c = 7;

    var s = (a + b + c) / 2;

    console.log(s);

    var A = Math.sqrt(s * (s - a) * (s - b) * (s - c))

    document.getElementById("answer").innerText = A;


}

/* s =  a+b+c / 2

herons formula A = sqrt( s(s-a)(s-b)(s-c) ) */



/* LETTER GAME */
var str = "w3resourcebruce";
function getLetterGameAnswer() {


    var b = str[str.length - 1];
    console.log(b)

    var c = str.substring(0, str.length - 1);
    console.log(c)

    str = b + c;
    document.getElementById("idLetterGameAnswer").innerText = str;


}
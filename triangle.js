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
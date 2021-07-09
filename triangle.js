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

    str = document.getElementById("inputLetters").value;
    console.log(str);


    var b = str[str.length - 1];
    console.log(b)

    var c = str.substring(0, str.length - 1);
    console.log(c)

    document.getElementById("inputLetters").value = b + c;
    document.getElementById("idLetterGameAnswer").innerText = str;

}



/* LEAP YEAR */

function getleapyear() {
    var day = 1;
    var year = document.getElementById("inputyears").value;
    console.log(year);

    var dateValue = dateFromDay(year, 1);

    dateValue.isLeapYear();

    var LeapYear = dateValue.isLeapYear();
    console.log(LeapYear);
    if (LeapYear) {
        document.getElementById("idleapyear").innerText = "is leap year";

    } else {
        document.getElementById("idleapyear").innerText = "is not leap year";
    }

}

function dateFromDay(year, day) {
    var date = new Date(year, 0); // initialize a date in `year-01-01`
    return new Date(date.setDate(day)); // add the number of days
}

Date.prototype.isLeapYear = function () {
    var y = this.getFullYear();
    return !(y % 4) && (y % 100) || !(y % 400);
};

/*Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.*/

function getFirstSunday() {

    var Sunday = [];

    for (let year = 2014; year < 2050; year++) {
        var dateValue = dateFromDay(year, 1); /*date value je uvek 1.Januar*/
        /* console.log(dateValue);*/


        const day1 = dateValue.getDay();
        console.log(day1)

        if (day1 == 0) {
            //display
            Sunday.push(dateValue);

        }






        /*array - const fruits = ["Banana", "Orange", "Apple", "Mango"];
        fruits.push("Kiwi"); */


        /* const birthday = new Date('August 19, 1975 23:15:30');
         const day1 = birthday.getDay();
         // Sunday - Saturday : 0 - 6
 
         console.log(day1);
         // expected output: 2*/

    }
    console.log(Sunday);

    document.getElementById("idfirstSundayInJanuary").innerHTML = Sunday.join(" <br> ");




}


/* nuber of yers -  2014- 2050
date 01.01.
button with loop*/


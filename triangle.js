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


// Write a JavaScript program to calculate days left until next Christmas.
function getNextChristmas() {
    var today = new Date();
    var Christmas = new Date(today.getFullYear(), 11, 25);
    console.log(Christmas);
    //var thisYearCristmas = dateFromDay()

    var one_day = 1000 * 60 * 60 * 24;

    if (today < Christmas) {
        var output = Christmas.getTime() - today.getTime();
        console.log((output / one_day))
    } else {
        var ChristmasNextYear = new Date(today.getFullYear() + 1, 11, 25)
        var output = ChristmasNextYear.getTime() - today.getTime();
        console.log((output / one_day))

    }
    document.getElementById("idNextChristmas").innerHTML = (output / one_day) + " days left to Christmas";
}

/*10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user). */

function getMultipleResult() {
    var number1 = document.getElementById("inputnumber1").value;  //collectiinh number value from input
    var number2 = document.getElementById("inputnumber2").value;
    console.log(number2, number1);
    var multiplyResult = number1 * number2;

    document.getElementById("idresult").innerHTML = (multiplyResult);
}

function getDividedResult() {
    var number1 = document.getElementById("inputnumber1").value;  //collectiinh number value from input
    var number2 = document.getElementById("inputnumber2").value;
    console.log(number2, number1);
    var divideResult = number1 / number2;

    document.getElementById("idresult").innerHTML = (divideResult);
}
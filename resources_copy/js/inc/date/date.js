var f1 = this.getField("LeaseExpiration");
var g1 = this.getField("LeaseStart");


var end = f1.value
var begin = g1.value
var e = new Date(end);
var b = new Date(begin);
var bMonth = b.getMonth();
var bYear = b.getFullYear();
var eYear = e.getFullYear();
var eMonth = e.getMonth();
var bDay = b.getDate();
var eDay = e.getDate() + 1;

if ((eMonth == 0)||(eMonth == 2)||(eMonth == 4)|| (eMonth == 6) || (eMonth == 7) ||(eMonth == 9)||(eMonth == 11))

{
var eDays =  31;
}

if ((eMonth == 3)||(eMonth == 5)||(eMonth == 8)|| (eMonth == 10))

{
var eDays = 30;
}

if (eMonth == 1&&((eYear % 4 == 0) && (eYear % 100 != 0)) || (eYear % 400 == 0))
{
var eDays = 29;
}

if (eMonth == 1&&((eYear % 4 != 0) || (eYear % 100 == 0)))
{
var eDays = 28;
}


if ((bMonth == 0)||(bMonth == 2)||(bMonth == 4)|| (bMonth == 6) || (bMonth == 7) ||(bMonth == 9)||(bMonth == 11))

{
var bDays =  31;
}

if ((bMonth == 3)||(bMonth == 5)||(bMonth == 8)|| (bMonth == 10))

{
var bDays = 30;
}

if (bMonth == 1&&((bYear % 4 == 0) && (bYear % 100 != 0)) || (bYear % 400 == 0))
{
var bDays = 29;
}

if (bMonth == 1&&((bYear % 4 != 0) || (bYear % 100 == 0)))
{
var bDays = 28;
}


var FirstMonthDiff = bDays - bDay + 1;


if (eDay - bDay < 0)
{

eMonth = eMonth - 1;
eDay = eDay + eDays;

}

var daysDiff = eDay - bDay;

if(eMonth - bMonth < 0)
{
eYear = eYear - 1;
eMonth = eMonth + 12;
}

var monthDiff = eMonth - bMonth;

var yearDiff = eYear - bYear;

if (daysDiff == eDays)
{
daysDiff = 0;
monthDiff = monthDiff + 1;

if (monthDiff == 12)
{
monthDiff = 0;
yearDiff = yearDiff + 1;
}

}

if ((FirstMonthDiff != bDays)&&(eDay - 1 == eDays))

{
daysDiff = FirstMonthDiff;

}
event.value = yearDiff + " Year(s)" + " " + monthDiff + " month(s) " + daysDiff + " days(s)"
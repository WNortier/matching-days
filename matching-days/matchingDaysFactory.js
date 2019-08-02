


function matchingDaysFactory() {
    var monthTesterResult;
    var yearTesterResult;
    var formatterResult;

    function dateAndDayMatcher(firstDayPrefix, secondDayPrefix) {
        console.log(firstDayPrefix)
        var globalObjectForTemplate = [
            { day: 'Mon', style: "rgb(23, 64, 77)" },                                                                                //, style: ''
            { day: 'Tue', style: "rgb(23, 64, 77)" },
            { day: 'Wed', style: "rgb(23, 64, 77)" },
            { day: 'Thu', style: "rgb(23, 64, 77)" },
            { day: 'Fri', style: "rgb(23, 64, 77)" },
            { day: 'Sat', style: "rgb(23, 64, 77)" },
            { day: 'Sun', style: "rgb(23, 64, 77)" },
        ];


        

        for (var i in globalObjectForTemplate) {

            if (firstDayPrefix == secondDayPrefix && globalObjectForTemplate[i].day == firstDayPrefix) {
                globalObjectForTemplate[i].style = "green";

            }
            else if (globalObjectForTemplate[i].day == firstDayPrefix) {
                globalObjectForTemplate[i].style = "blue"

            }

        }

        for (var i in globalObjectForTemplate) {

            if (firstDayPrefix != secondDayPrefix && globalObjectForTemplate[i].day == secondDayPrefix) {
                globalObjectForTemplate[i].style = "red";

            }

        }



        //   for (var i in globalObjectForTemplate) {

        //     if (globalObjectForTemplate[i].day == secondDayPrefix) {
        //         globalObjectForTemplate[i].style = "red";  
        //     }

        //   }


        console.log(globalObjectForTemplate)



        // for (var i in globalObjectForTemplate) {
        //     if (globalObjectForTemplate[i].day == firstDayPrefix) {
        //         globalObjectForTemplate[i].style = "green"; {}
        //        break;
        //     }
        //   }


        return globalObjectForTemplate
    }

    // var finalColors = 
    // {
    // "styleMonday" : 'green',
    // "styleTuesday" : 'green',
    // "styleWednesday" : 'green',
    // "styleThursday" : 'red',
    // "styleFriday" : 'green',
    // "styleSaturday" : 'green',
    // "styleSunday" : 'blue'
    // }





    function prefixFetcher(date) {
        var dateProcessing = new Date(date)
        var capturedDate = dateProcessing.toDateString()
        var extractedPrefix = capturedDate.substring(0, 3)
        return extractedPrefix
    }

    function inputFormatter(date) {
        var splittedDateOne = date.split(' ').join('')
        var isolatedDay = splittedDateOne.substring(0, 2);
        //isolatedMonth = splittedDateOne.substr(2).slice(0, -4);
        //isolatedYear = splittedDateOne.slice(-4);
        var numberRegPatt = new RegExp('^[0-9]*$')
        var dayTester = numberRegPatt.test(isolatedDay); // must be true to pass
        //console.log(dayTester)
        if (dayTester == false) {
            var newIsolatedDay = '0' + isolatedDay.substring(0, 1);
            var newIsolatedMonth = splittedDateOne.substr(1).slice(0, -4);
            var newIsolatedMonthUpper = newIsolatedMonth.charAt(0).toUpperCase() + splittedDateOne.substr(2).slice(0, -4);
            console.log(newIsolatedMonthUpper)
            var newIsolatedYear = splittedDateOne.slice(-4);

            var monthRegPatt = new RegExp('[0-9]')
            var monthTester = monthRegPatt.test(newIsolatedMonthUpper);
            if (newIsolatedMonthUpper == "January" || newIsolatedMonthUpper == "February" || newIsolatedMonthUpper == "March" || newIsolatedMonthUpper == "April" || newIsolatedMonthUpper == "May" || newIsolatedMonthUpper == "June" || newIsolatedMonthUpper == "July" || newIsolatedMonthUpper == "August" || newIsolatedMonthUpper == "September" || newIsolatedMonthUpper == "October" || newIsolatedMonthUpper == "November" || newIsolatedMonthUpper == "December" && monthTester == false) {
                monthTesterResult = "monthPasses"
            }
            else {
                monthTesterResult = 'monthFails'
            }
            //console.log(monthTester)
            var newIsolatedYear = splittedDateOne.slice(-4);
            var yearTester = numberRegPatt.test(newIsolatedYear); // must be true to pass
            if (yearTester == true && newIsolatedYear.length == 4) {
                yearTesterResult = "yearPasses"
            }
            else {
                yearTesterResult = "yearFails"
            }

            if (monthTesterResult == "monthPasses" && yearTesterResult == "yearPasses") {
                formatterResult = "correctFormat"
            }
            else {
                formatterResult = "incorrectFormat"
            }
        }
        else {
            var splittedDateOne = date.split(' ').join('')
            var isolatedMonth = splittedDateOne.substr(2).slice(0, -4);
            var isolatedMonthUpper = isolatedMonth.charAt(0).toUpperCase() + splittedDateOne.substr(3).slice(0, -4);
            var isolatedYear = splittedDateOne.slice(-4);
            //console.log(isolatedMonthUpper)

            var monthRegPatt = new RegExp('[0-9]')
            var monthTester = monthRegPatt.test(isolatedMonthUpper);
            if (isolatedMonthUpper == "January" || isolatedMonthUpper == "February" || isolatedMonthUpper == "March" || isolatedMonthUpper == "April" || isolatedMonthUpper == "May" || isolatedMonthUpper == "June" || isolatedMonthUpper == "July" || isolatedMonthUpper == "August" || isolatedMonthUpper == "September" || isolatedMonthUpper == "October" || isolatedMonthUpper == "November" || isolatedMonthUpper == "December" && monthTester == false) {
                monthTesterResult = "monthPasses"
            }
            else {
                monthTesterResult = 'monthFails'
            }
            //console.log(monthTester)


            var isolatedYear = splittedDateOne.slice(-4);
            var yearTester = numberRegPatt.test(isolatedYear); // must be true
            if (yearTester == true && isolatedYear.length == 4) {
                yearTesterResult = "yearPasses"
            }
            else {
                yearTesterResult = "yearFails"
            }

            if (monthTesterResult == "monthPasses" && yearTesterResult == "yearPasses") {
                formatterResult = "correctFormat"
            }
            else {
                formatterResult = "incorrectFormat"
            }
        }
        return formatterResult
    }

    return {
        inputFormatter,
        prefixFetcher,
        dateAndDayMatcher
    }
}
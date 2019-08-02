{
  //FIELDS
  var firstDate = document.querySelector("#firstDate");
  var secondDate = document.querySelector("#secondDate");
  //BUTTONS
  var infoButton = document.querySelector("#infoButton");
  var appInfoDiv = document.querySelector("#appInfo");
  // var f = document.querySelector("#")
  //UTILITY
  //var deleteMe = document.querySelector(".mock");
  //window.onload = aFunction()
  var loadindPeriod;
  //INNERHTML
  var errorRow = document.querySelector(".errorRow")
  // var j = document.querySelector("#")
  // var k = document.querySelector("#")

  //GLOBAL VARIABLES
  var overall;
  var firstDayPrefix
  var secondDayPrefix
  var processedGlobalObject;
  //var localStorageExtraction = JSON.parse(localStorage.getItem("regsPassed")) || [];;
  //DOM FUNCTIONS
}
//FACTORY VARIABLES
var projectFactory = matchingDaysFactory();
var projectFactoryInstanceTwo = matchingDaysFactory();
var projectScript = factoryTemplater();
projectScript.weekDayPlaceHolderFunction();

function clearError() {
  setTimeout(function () {
    errorRow.innerHTML = ""
  }, 8000);
}

function showError() {
  setTimeout(function () {
    errorRow.innerHTML = "Enter Dates In Both Fields - Format 🠞 DD Month YYYY"
  }, 5000);
}


function getDates() {


  var inputVal = document.getElementById("firstDate");
  var inputValTwo = document.getElementById("secondDate");
  inputVal.style.backgroundColor = "rgb(0, 70, 70)";
  inputValTwo.style.backgroundColor = "rgb(0, 70, 70)";
  errorRow.innerHTML = ""
  //▉▉▉▉▉▉FORMATVALIDATOR DATE ONE▉▉▉▉▉▉ 
  projectScript.weekDayPlaceHolderFunction();
  var formatValidatorFirstDate = projectFactory.inputFormatter(firstDate.value)
  console.log(formatValidatorFirstDate)
  //▉▉▉▉▉▉FORMATVALIDATOR DATE TWO▉▉▉▉▉▉ 
  var formatValidatorSecondDate = projectFactoryInstanceTwo.inputFormatter(secondDate.value)
  console.log(formatValidatorSecondDate)

  //if (formatValidatorFirstDate != "correctFormat" || formatValidatorSecondDate != "correctFormat")
  // if (formatValidatorFirstDate == "incorrectFormat") {
  // var inputVal = document.getElementById("firstDate");
  // var inputValTwo = document.getElementById("secondDate");
  // inputVal.style.backgroundColor = "lightcyan;";
  // inputValTwo.style.backgroundColor = "lightcyan";
  // errorRow.innerHTML = ""
  // }
  // else if (formatValidatorSecondDate == "incorrectFormat"){
  //   var inputVal = document.getElementById("firstDate");
  //   var inputValTwo = document.getElementById("secondDate");
  //   inputVal.style.backgroundColor = "lightcyan;";
  //   inputValTwo.style.backgroundColor = "lightcyan";
  //   errorRow.innerHTML = ""
  // }
  

  if (formatValidatorFirstDate == "correctFormat" && formatValidatorSecondDate == "correctFormat") {
    overall = "pass"} else {
      overall = "fail"
    }

    if (overall == "pass"){
    errorRow.innerHTML = ""

    //▉▉▉▉▉▉PREFIXFETCHER DATE ONE▉▉▉▉▉▉ Extracts the prefix of the date
    var firstDayPrefix = projectFactory.prefixFetcher(firstDate.value);

    //▉▉▉▉▉▉PREFIXFETCHER DATE TWO▉▉▉▉▉▉ Extracts the prefix of the date
    var secondDayPrefix = projectFactory.prefixFetcher(secondDate.value);

    //▉▉▉▉▉▉DAYANDCOLORMATCHER▉▉▉▉▉▉ Processes date inputs to match with weekdays
    console.log(firstDayPrefix)
    console.log(secondDayPrefix)

    //▉▉▉▉▉▉DATEANDDAYMATCHER/TEMPLATE OBJECT▉▉▉▉▉▉ Processes date inputs to match with weekdays
    processedGlobalObject = projectFactory.dateAndDayMatcher(firstDayPrefix, secondDayPrefix)
    // var parent = document.querySelector(".mock")
    // var child = document.querySelector(".mockChild")
    // parent.removeChild(child)

    projectScript.testTemplater(processedGlobalObject) //processedGlobalObject

     if (overall == "pass" && firstDayPrefix == secondDayPrefix) {

      var inputVal = document.getElementById("firstDate");
      var inputValTwo = document.getElementById("secondDate");
      inputVal.style.backgroundColor = "green";
      inputValTwo.style.backgroundColor = "green";
      errorRow.innerHTML = "Match! Date One: " + firstDayPrefix + ", Date Two: " + secondDayPrefix


    } else if (overall == "pass" && firstDayPrefix != secondDayPrefix){
      var inputVal = document.getElementById("firstDate");
      var inputValTwo = document.getElementById("secondDate");
      inputVal.style.backgroundColor = "blue";
      inputValTwo.style.backgroundColor = "red";
      errorRow.innerHTML = "Date One: " + firstDayPrefix + ", Date Two: " + secondDayPrefix

    }
  }

}

// function resetInputColors(){
  

// }

//UTILITY FUNCTIONS
{
  function waitingPeriod() {
    if (infoButton.innerHTML == "Get Info") {
      loadindPeriod = setTimeout(infoButtonToggle, 3000);
    } else {
      loadindPeriod = setTimeout(infoButtonToggle, 10);
    }

    function infoButtonToggle() {

      if (appInfoDiv.style.display == 'none') {
        appInfoDiv.style.display = 'block';
        infoButton.innerHTML = "Hide Info"
      } else {
        appInfoDiv.style.display = 'none';
        infoButton.innerHTML = "Get Info"
      }
    }
  }

  function loader() {

    if (infoButton.innerHTML == "Get Info") {

      var myProgress = document.createElement("div");
      var loader = document.createElement("div");
      myProgress.setAttribute("id", "myProgress");
      myProgress.setAttribute("class", "center")
      loader.setAttribute("id", "loader");
      document.getElementById('loaderInsertPoint').appendChild(myProgress);
      document.getElementById('myProgress').appendChild(loader);
      var id = setInterval(frame, 30);
      var width = 1;

      function frame() {
        infoButton.innerHTML = "Loading..."
        var loadingBar = document.querySelector("#loader");
        if (width >= 100) {
          clearInterval(id);
          myProgress.remove();
          infoButton.removeAttribute("disabled")
        } else {
          infoButton.setAttribute("disabled", "true")
          width++;
          loadingBar.style.width = width + '%';
        }
      }
    }
  }

}
//EVENT LISTENERS
{
  infoButton.addEventListener('click', loader)
  infoButton.addEventListener('click', waitingPeriod)
  // secondDate.addEventListener('keyup', resetInputColors);
  firstDate.addEventListener('keyup', getDates);
  secondDate.addEventListener('keyup', getDates);
}




// else if (formatValidatorFirstDate == "incorrectFormat" || formatValidatorSecondDate == "incorrectFormat") {
//   var inputVal = document.getElementById("firstDate");
//   var inputValTwo = document.getElementById("secondDate");
//   inputVal.style.backgroundColor = "lightcyan;";
//   inputValTwo.style.backgroundColor = "lightcyan";
//   errorRow.innerHTML = ""
// }



// if (processedFirstDayPrefix == "Mon") {
//   var mondayFirstDate = document.getElementById("mondayBlock")
//   mondayFirstDate.style.backgroundColor = "blue"
// }


// switch
// (processedFirstDayPrefix) {

//   case
//     "Mon":
//     var mondayFirstDate = document.getElementById("mondayBlock")
//     mondayFirstDate.style.backgroundColor = "green"
//     default:
//         mondayFirstDate.style.backgroundColor = "orange"
//     break;
//   case
//     "Tue":
//     var tuesdayFirstDate = document.getElementById("#tuesdayBlock")
//     break;
//   case
//     "Wed":
//     var wednesdayFirstDate = document.getElementById("#wednesdayBlock")
//     break;
//   case
//     "Thu":
//     var thursdayFirstDate = document.getElementById("#thursdayBlock")
//     break;
//   case
//     "Fri":
//     var fridayFirstDate = document.getElementById("#fridayBlock")
//     break;
//   case
//     "Sat":
//     var saturdayFirstDate = document.getElementById("#saturdayBlock")
//     break;
//   case
//     "Sun":
//     var SundayFirstDate = document.getElementById("#sundayBlock")
//     break;

// }




// var mondayFirstDate = document.getElementById("mondayBlock")
// mondayFirstDate.style.backgroundColor = "rgb(23, 64, 77)"

// var mondayFirstDate = document.getElementById("tuesdayBlock")
// mondayFirstDate.style.backgroundColor = "rgb(23, 64, 77)"

// var mondayFirstDate = document.getElementById("wednesdayBlock")
// mondayFirstDate.style.backgroundColor = "rgb(23, 64, 77)"

// var mondayFirstDate = document.getElementById("thursdayBlock")
// mondayFirstDate.style.backgroundColor = "rgb(23, 64, 77)"

// var mondayFirstDate = document.getElementById("fridayBlock")
// mondayFirstDate.style.backgroundColor = "rgb(23, 64, 77)"

// var mondayFirstDate = document.getElementById("saturdayBlock")
// mondayFirstDate.style.backgroundColor = "rgb(23, 64, 77)"

// var mondayFirstDate = document.getElementById("sundayBlock")
// mondayFirstDate.style.backgroundColor = "rgb(23, 64, 77)"
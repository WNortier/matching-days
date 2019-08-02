function factoryTemplater(){

    function testTemplater(processedGlobalObject) {
        //TEMPLATE SOURCE
        var templateSource = document.querySelector(".weekdayTemplate").innerHTML;
     
        //COMPILER
        var userTemplate = Handlebars.compile(templateSource);
      
        //QUERYSELECTORS
    
    var insertPoint = document.querySelector(".weekdayTemplateInsertPoint")
  

    
    //var insertPointTwo = document.querySelector(".")
        
        var userDataHTML = userTemplate(processedGlobalObject);
        
        console.log(userDataHTML)
        //ALLOCATE TEMPLATE

        insertPoint.innerHTML = userDataHTML;

    }

    function weekDayPlaceHolderFunction(){
        var templateSourceMock = document.querySelector(".weekdayTemplateMock").innerHTML;
        var mockTemplate = Handlebars.compile(templateSourceMock);
        var insertPointTwo = document.querySelector(".weekdayTemplateMockInsertPoint")
        var userDataHTMLTwo = mockTemplate()
        insertPointTwo.innerHTML = userDataHTMLTwo;
    }
    
return {
    testTemplater,
    weekDayPlaceHolderFunction 
}
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // document.addEventListener('DOMContentLoaded', function(){
    // //TEMPLATE SOURCE
    // var templateSource = document.querySelector(".userTemplate").innerHTML;
    // //COMPILER
    // var userTemplate = Handlebars.compile(templateSource);
    // //INSERT LOCATION
    // var userDataElem = document.querySelector(".userData");
    // //INSERT DATA
    // var userData = { users: [
    //     {username: "Warwick", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
    //     {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
    //     {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
    //   ]};
    
    
    // //COMPILE THE TEMPLATE
    // var userDataHTML = userTemplate(userData);
    // //ALLOCATE TEMPLATE
    // userDataElem.innerHTML = userDataHTML;
    
    
    // });
    
    
    
    
    
    
    
    
    // var textCallTotal = document.querySelector(".callTotalOne")
    // var textSmsTotal = document.querySelector(".smsTotalOne")
    // var textTotal = document.querySelector(".totalOne")
    
    // var radioCallTotal = document.querySelector(".callTotalTwo")
    // var radioSmsTotal = document.querySelector(".smsTotalTwo")
    // var radioTotal = document.querySelector(".totalTwo")




        //DATA

    // var userData = 
    //     [
    //     {'styleMonday': 'green'},
    //     {'styleTuesday': 'green'},
    //     {'styleWednesday': 'green'},
    //     {'styleThursday': 'red'},
    //     {'styleFriday': 'green'},
    //     {'styleSaturday': 'green'},
    //     {'styleSunday': 'blue'}]

        // var userData = 
        // {
        // "styleMonday" : 'green',
        // "styleTuesday" : 'green',
        // "styleWednesday" : 'green',
        // "styleThursday" : 'red',
        // "styleFriday" : 'green',
        // "styleSaturday" : 'green',
        // "styleSunday" : 'blue'
        // }
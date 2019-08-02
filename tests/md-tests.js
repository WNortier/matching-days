describe("inputFormatter function - attempts to correct the date format retrieved from the input fields for further processesing", function () {
    it("should return 'incorrectFormat' if the date input contains letters in the days part of an entered date", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("incorrectFormat", matchingDaysTester.inputFormatter("k1 September 2003"))
    });
    it("should return 'incorrectFormat' if the date input contains numbers in the month part of an entered date", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("incorrectFormat", matchingDaysTester.inputFormatter("27 Jun3 2012"))
    });
    it("should return 'incorrectFormat' if the date input contains letters in the year part of an entered date", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("incorrectFormat", matchingDaysTester.inputFormatter("19 March 2gg1"))
    });
    it("should return 'correctFormat' if the date input contains letters in the year part of an entered date", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("correctFormat", matchingDaysTester.inputFormatter("27 June 2013"))
    });
});

describe("prefixFetcher function - extracts the prefix of the weekday for the date entered in DD Month YYYY format", function () {
    it("should return 'Mon' if the date entered falls on a Monday", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("Mon", matchingDaysTester.prefixFetcher("29 July 2019"))
    });
    it("should return 'Tue' if the date entered falls on a Tuesday", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("Tue", matchingDaysTester.prefixFetcher("30 July 2019"))
    });
    it("should return 'Wed' if the date entered falls on a Wednesday", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("Wed", matchingDaysTester.prefixFetcher("31 July 2019"))
    });
    it("should return 'Thu' if the date entered falls on a Thursday", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("Thu", matchingDaysTester.prefixFetcher("01 August 2019"))
    });
    it("should return 'Fri' if the date entered falls on a Friday", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("Fri", matchingDaysTester.prefixFetcher("02 August 2019"))
    });
    it("should return 'Sat' if the date entered falls on a Saturday", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("Sat", matchingDaysTester.prefixFetcher("03 August 2019"))
    });
    it("should return 'Sun' if the date entered falls on a Sunday", function () {
        let matchingDaysTester = matchingDaysFactory()
        
        assert.equal("Sun", matchingDaysTester.prefixFetcher("04 August 2019"))
    });
});

describe("dateAndDayMatcher function - modifies object values based on the functions input", function () {
    it("should return an 'object' with two keys - one for day and one for style - if the weekday parameters are the same the corresponding style should be set to green", function () {
        let matchingDaysTester = matchingDaysFactory()
        var dateOne = matchingDaysTester.prefixFetcher("04 August 2019")
        var dateTwo = matchingDaysTester.prefixFetcher("04 August 2019")
        assert.deepEqual([
            { day: 'Mon', style: "rgb(23, 64, 77)" },                                                                                //, style: ''
            { day: 'Tue', style: "rgb(23, 64, 77)" },
            { day: 'Wed', style: "rgb(23, 64, 77)" },
            { day: 'Thu', style: "rgb(23, 64, 77)" },
            { day: 'Fri', style: "rgb(23, 64, 77)"},
            { day: 'Sat', style: "rgb(23, 64, 77)" },
            { day: 'Sun', style: "green" },
        ], matchingDaysTester.dateAndDayMatcher(dateOne,dateTwo))
    });
    it("should return an 'object' with two keys - one for day and one for style - if the weekday parameters are on different days the corresponding styles should be set to blue and red respectively", function () {
        let matchingDaysTester = matchingDaysFactory()
        var dateOne =  matchingDaysTester.prefixFetcher("01 June 2018")
        var dateTwo = matchingDaysTester.prefixFetcher("05 September 2019")
        assert.deepEqual([
            { day: 'Mon', style: "rgb(23, 64, 77)" },                                                                                //, style: ''
            { day: 'Tue', style: "rgb(23, 64, 77)" },
            { day: 'Wed', style: "rgb(23, 64, 77)" },
            { day: 'Thu', style: "red" },
            { day: 'Fri', style: "blue"},
            { day: 'Sat', style: "rgb(23, 64, 77)" },
            { day: 'Sun', style: "rgb(23, 64, 77)" },
        ], matchingDaysTester.dateAndDayMatcher(dateOne,dateTwo))
    });
    
});
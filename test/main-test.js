describe('intergation test',function () {
    var allLcdDigits;
    var input;

    beforeEach(function () {
        allLcdDigits = loadLcdDigit();
        input = 1314;
    });

    it('should print correct LCD',function () {
        spyOn(console, 'log');

        printLcdDigit(input);

        var expectLcdDigit = input+'的LCD数字'+'\n'+'... '+'._. '+'... '+'...'+'\n'
                                                   +'..| '+'._| '+'..| '+'|_|'+'\n'
                                                   +'..| '+'._| '+'..| '+'..|';
        expect(console.log).toHaveBeenCalledWith(expectLcdDigit);
    });
});

describe('unit test',function () {
    var allLcdDigits;
    var input;

    beforeEach(function () {
        allLcdDigits = loadLcdDigit();
        input = 1314;
    });

    describe('buildDigitArray',function () {
       it('print correct digitArray',function () {
           var digitArray = buildDigitArray(input);

           var expectDigitArray = ['1','3','1','4'];

           expect(digitArray).toEqual(expectDigitArray);
        });
    });

    describe('buildDigitObject',function () {
        it('print correct digitObject',function () {
            var digitObject = buildDigitObject(buildDigitArray(input));

            var expectDigitObject = {
                1:['...','..|','..|'],
                3:['._.','._|','._|'],
                4:['...','|_|','..|']
            };

            expect(digitObject).toEqual(expectDigitObject);
        });
    });
})

//object.keys(object);可以得到对象中的属性名称！！
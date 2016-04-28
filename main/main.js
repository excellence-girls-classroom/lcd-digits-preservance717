function printLcdDigit(input){
    var digitArray = buildDigitArray(input);
    var digitObject = buildDigitObject(digitArray);
    print(input, digitObject);
}

function print(input, digitObject) {
    var expectLcdDigit = input+'的LCD数字';
    var inputArray = Object.keys(digitObject);

    for(var i = 0; i < inputArray.length; i++){
        for(var j = 0; j < digitObject[inputArray[i]].length; j++){
            expectLcdDigit += '\n'+digitObject[inputArray[i]][j]+' '+digitObject[inputArray[i+1]][j]+' '
                +digitObject[inputArray[i]][j]+' '+digitObject[inputArray[i+2]][j];
        }
        break;
    }

    console.log(expectLcdDigit);
}

function buildDigitObject(digitArray) {
    var lcdDigitObject = loadLcdDigit();
    var lcdDigitArray = Object.keys(lcdDigitObject);
    var digitObject = {};

    digitArray.forEach(function (digitElement) {
        for(var i = 0; i < lcdDigitArray.length; i++){
            if(digitElement === lcdDigitArray[i]){
                digitObject[digitElement] = lcdDigitObject[lcdDigitArray[i]];
            }
        }
    });

    return digitObject;
}

function buildDigitArray(input) {

    return input.toString().split('');
}

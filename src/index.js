module.exports = function toReadable (number) {
    const
    oneToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];    
    twentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];    
    elevenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
let numberStr = number.toString();
let result = '';

if(number<=9) return oneToNine[number];
else if(number <= 99)
{    
    if(number <= 19) result = elevenToNineteen[number%10];
    else 
    {
        result = twentyToNinety[parseInt(numberStr[0])-2];
        if (numberStr[1]!='0') 
        result = result+' ' +oneToNine[parseInt(numberStr[1])];
    }
}
else if(number <=999)
{
    result = oneToNine[parseInt(numberStr[0])]+" hundred";
    if ((numberStr[1]!='0') || (numberStr[2]!='0'))
    {
    if (numberStr[1]=='0')
    {
        result = result + ' ' + oneToNine[parseInt(numberStr[2])];
    } 
    else
    {
        if(numberStr[1] == '1') result = result + ' ' + elevenToNineteen[parseInt(numberStr[2])];
        else 
        {
        result = result + ' ' + twentyToNinety[parseInt(numberStr[1])-2];
        if (numberStr[2]!='0') 
        result = result +' ' +oneToNine[parseInt(numberStr[2])];
        }
    }
}
    
}

result[0] = result[0].toLowerCase();
return result;
}

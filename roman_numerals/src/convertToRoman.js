const numbers = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};

function convertToRoman(number) {
    if(number === 0) {
        return '';
    }

    let closestNumber = getClosestSmallerNumber(number, numbers);
    return numbers[closestNumber] + convertToRoman(number - closestNumber);
}

function getClosestSmallerNumber(number, numbers) {
    let smallerNumbers = Object.keys(numbers).filter(n => n <= number);
    return Math.max.apply(null, smallerNumbers);
}

export default convertToRoman;
// ENGLISH 
let numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten"
};
let tensObject = {
    2: "twenty",
    3: "thirty",
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
};

let otherNumbers = {
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen"
}

// FRENCH
let unites = {
    1: "un",
    2: "deux",
    3: "trois",
    4: "quatre",
    5: "cinq",
    6: "six",
    7: "sept",
    8: "huit",
    9: "neuf",
    10: "dix"
};
let dizaines = {
    2: "vingt",
    3: "trente",
    4: "quarante",
    5: "cinquante",
    6: "soixante",
    7: "septante",
    8: "quatre-vingt",
    9: "nonante"
};

let autresNb = {
    1: "onze",
    2: "douze",
    3: "treize",
    4: "quatorze",
    5: "quinze",
    6: "seize",
    7: "dix-sept",
    8: "dix-huit",
    9: "dix-neuf"
}

function convert(number) {
    let str = "";
    let units = number % 10;
    let tens = (number % 100) - units;
    let hundreds = number - tens - units;
    tens = tens / 10;
    hundreds = hundreds / 100;
    if (numbers[hundreds] != undefined) str += numbers[hundreds] + " hundred and ";
    if (tensObject[tens] != undefined || tens == 1 || units != 0){
        if (tens != 0)
        tens == 1 ? str += otherNumbers[units] : str += tensObject[tens] + " " + numbers[units];
        else 
            str += numbers[units];
    }
    return str;
}

function convertFrench(number) {
    let str = "";
    let units = number % 10;
    let tens = (number % 100) - units;
    let hundreds = number - tens - units;
    tens = tens / 10;
    hundreds = hundreds / 100;
    if (unites[hundreds] != undefined) {
        hundreds == 1 ? str += "cent " : str += unites[hundreds] + " cents "; // CENTAINES
    }
    if (dizaines[tens] != undefined || tens == 1 || tens == 0) {
        if (tens == 1)
            str += autresNb[units]; // Si c'est entre 10 et 20
        else if (tens == 7)
            str += dizaines[6] + " " + autresNb[units]; // Si c'est 70
        else if (tens == 9)
            str += dizaines[8] + " " + autresNb[units]; // Si c'est 90
        else if (tens == 0) {
            if (units != 0)
                str += unites[units];
        }
        else
            str += dizaines[tens] + "-" + unites[units];
    }
    return str;
}

let number = 0;
let languageChoice = prompt("Tapez 1 pour l'anglais ou 2 pour le français");
switch (languageChoice) {
    case "1":
        while (number != -1) {
            number = prompt("Type a number to convert (-1 to exit)");
            if (number != -1)
                alert(convert(number));
        }
        break;
    case "2":
        while (number != -1) {
            number = prompt("Entrez un nombre à convertir (-1 pour quitter)");
            if (number != -1)
                alert(convertFrench(number));
        }
        break;
    default:
        alert("Veuillez entrer 1 ou 2");
}



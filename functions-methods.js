// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomain(emailAddress,domainName) {
}

const emailAdress1 = "n.eeken@novi-education.nl"
const domainName1 = emailAdress1.split('@').pop()
console.log(domainName1);
const emailAdress2 = "t.mellink@novi.nl"
const domainName2 = emailAdress2.split('@').pop()
console.log(domainName2);
const emailAdress3 = "a.wiersma@outlook.com"
const domainName3 = emailAdress3.split('@').pop()
console.log(domainName3);

/*function getEmailDomain(email) {
    const domain = email;
}
console.log(domain);

const findIndex = domain.substring(domain.indexOf("@") + 1);
return findIndex

const final = getEmailDomain("a.wiersma@outlook.com");
console.log(final);*/


/*const result1 = getEmailDomain("n.eeken@novi-education.nl", "novi-education");
getEmailDomain.split("@")[1]*/

/*email.Substring(0, email.IndexOf("@"));
email.substring()
console.log(getEmailDomain);*/


/*function getEmailDomain(emailAddress,domainName) {
    return domainName;
}
const result1 = getEmailDomain("n.eeken@novi-education.nl", "novi-education");
console.log(result1);
const result2 = getEmailDomain ("t.mellink@novi.nl", "novi.nl");
console.log(result2)
const result3 = getEmailDomain ("a.wiersma@outlook.com", "outlook.com");
console.log(result3);*/



/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emailAddress, profession) {
}

const emailaddress1 = "n.eeken@novi-education.nl";
const profession1 = "Student"
emailaddress1.replace(emailaddress1, profession1);
console.log(profession1);

const emailaddress2 = "t.mellink@novi.nl";
const profession2 = "Medewerker"
emailaddress2.replace(emailaddress2, profession2);
console.log(profession2);

const emailaddress3 = "novi.nlaapjesk@outlook.com";
const profession3 = "Extern"
emailaddress3.replace(emailaddress3, profession3);
console.log(profession3);

const emailaddress4 = "a.wiersma@outlook.com";
const profession4 = "Extern"
emailaddress4.replace(emailaddress4, profession4);
console.log(profession4);

/// Andere manier ///
/*function typeOfEmail(email, myFunction) {
}*/
const email1 = "n.eeken@novi-education.nl";
/*if (email1 === "n.eeken@novi-education.nl") {
}*/
const myFunction1 = email1.replace(email1, "Student");
console.log(myFunction1);

const email = "t.mellink@novi.nl";
/*if (email === "t.mellink@novi.nl") {
}*/
const myFunction = email.replace(email, "Medewerker");
console.log(myFunction);


/// Andere manier ///
const str1 = "n.eeken@novi-education.nl";
const newstr1 = str1.replace("n.eeken@novi-education.nl", "Student");
console.log(newstr1);

const str2 = "t.mellink@novi.nl";
const newstr2 = str2.replace("t.mellink@novi.nl", "Medewerker");
console.log(newstr2);

const str3 = "novi.nlaapjesk@outlook.com";
const newstr3 = str3.replace("novi.nlaapjesk@outlook.com", "Extern");
console.log(newstr3);

const str4 = "a.wiersma@outlook.com";
const newstr4 = str4.replace("a.wiersma@outlook.com", "Extern");
console.log(newstr4);





/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
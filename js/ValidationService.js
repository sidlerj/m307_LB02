// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("gender", userObj.gender);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkFirstName("firstname", userObj.firstname);
    if (result.isNotValid) { return result; }

    //check phonenumber pattern
    result = validateLib.checkNumber("phonenumber", userObj.phonenumber);
    if (result.isNotValid) { return result; }

    //check E-Mail
    result = validateLib.checkEmail("email",userObj.email, 3, 15);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("message", userObj.message, 1, 250);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}

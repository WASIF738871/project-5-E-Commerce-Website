

//request body validation (required: true)
const isValidRequestBody = function (reqbody) {
    if (!Object.keys(reqbody).length) {
        return false;
    }
    return true;
};

// string validation (required: true)
const isValid = function (value) {
    if (typeof value === "undefined" || typeof value === null) return false;
    if (typeof value === "string" && value.trim().length == 0) return false;
    if (typeof value === "string") return true;
};

// email validation
const isValidEmail = function (email) {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email); // returns a boolean
};
const isvalidPincode = (value) => ({}.toString.call(value) == '[object Number]') ? true : false //{}.toString.call(value) == '[object Number]'
const isValidPassword = function (password) {
    if (password.length >= 8 && password.length <= 15) {
        return true;
    }
    return false;
};
const isValidPhone = function (phone) {
    const pattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    return pattern.test(phone); // returns a boolean
};
const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId); // returns a boolean
};
const isValidstring = function (value) {
    const pattern = /^[a-zA-Z,'.\-\s]*$/;
    return pattern.test(value);
};
module.exports = {isValidRequestBody,isValidEmail,isValid,isvalidPincode,isValidPassword,isValidPhone,isValidObjectId,isValidstring}

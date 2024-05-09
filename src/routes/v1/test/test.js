const responseWrapper = require("../../../../utilities/errorModule");
const test = (req, res) => {
  try {
    let response = "app alive"; 
    return responseWrapper.sendOk(res, response);
  } catch (error) {
    console.log("error in test function", error);
    return responseWrapper.sendInternalServerError(res);
  }
};

module.exports = test;

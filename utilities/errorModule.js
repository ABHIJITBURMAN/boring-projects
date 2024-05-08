const sendOk = (res, data = {}, message = "") => {
  message = message || "records fetched successfully";
  const response = {
    data,
    status: "success",
  };
  return res.json(response);
};

const sendNotFound = (res, message = "Not found") => {
  const response = {
    status: "error",
    message,
    code: 404,
  };
  return res.status(404).json(response);
};

const sendInternalServerError = (res, message = "Internal Server Error") => {
  const response = {
    status: "error",
    message,
    code: 500,
  };
  return res.status(500).json(response);
};

module.exports = {
  sendOk,
  sendNotFound,
  sendInternalServerError,
};

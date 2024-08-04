// Function to format success responses
const success = (statusCode, data) => {
  return {
    status: 'ok',
    statusCode,
    result: data
  };
};

// Function to format error responses
const error = (statusCode, message) => {
  return {
    status: 'error',
    statusCode,
    error: {
      message
    }
  };
};

module.exports = { success, error };

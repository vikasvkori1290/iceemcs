/**
 * Standardized API Response helper
 */
class ApiResponse {
  static success(res, data = {}, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      timestamp: new Date().toISOString()
    });
  }

  static error(res, message = 'Internal Server Error', statusCode = 500, errors = null) {
    const payload = {
      success: false,
      message,
      timestamp: new Date().toISOString()
    };

    if (errors) {
      payload.errors = errors;
    }

    return res.status(statusCode).json(payload);
  }
}

module.exports = ApiResponse;

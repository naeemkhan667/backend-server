export interface SuccessResponse <T> {
  success: string;
  message: string;
  data: T;
}

export interface ErrorResponse {
    success: 'false';            // Better than using a boolean, especially if you're also returning 'success' status in other responses
    message: string;            // Main error message
    details?: any;              // Additional details about the error (e.g., stack trace, validation errors)
    errorCode?: number;         // Optional custom error code (not HTTP status code)
  }
  

// res.status(200).json({
//     success: true,
//     message,
//     data,
//     errorCode,
//   });
// export interface SuccessResponse <T> {
//   success: string;
//   message: string;
//   data: T;
// }

// export interface ErrorResponse {
//     success: 'false';            // Better than using a boolean, especially if you're also returning 'success' status in other responses
//     message: string;            // Main error message
//     details?: any;              // Additional details about the error (e.g., stack trace, validation errors)
//     errorCode?: number;         // Optional custom error code (not HTTP status code)
//   }
  

/**
 * Interface for a standardized successful API response.
 */
export interface SuccessResponse<T = any> {
    status: 'success'; // Indicates a successful operation
    message: string; // A human-readable message
    data: T; // The payload data
  }
  
  /**
   * Interface for a standardized error API response.
   */
  export interface ErrorResponse<D = any> {
    status: 'error'; // Indicates a failed operation
    message: string; // A human-readable error message
    details?: D; // Optional: More specific details about the error (e.g., validation errors, stack trace)
    errorCode?: string | number; // Optional: A custom application-specific error code
  }
  
  /**
   * Interface for a standardized validation error detail within the 'details' field.
   */
  export interface ValidationErrorDetail {
    field: string; // The field that failed validation
    message: string; // The validation error message for the field
    type?: string; // Optional: The type of validation error (e.g., 'string.empty', 'number.min')
  }
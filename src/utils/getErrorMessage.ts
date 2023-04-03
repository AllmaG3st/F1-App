/**
 * @desc get access to error.message without TS complaining
 * @param error - error object or plain text
 * @return error text
 */

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

import { Exception } from "@/exceptions/constants";

export const ApiError = class ApiError extends Error {
  constructor(public readonly message: string = Exception.ServerError) {
    super(message);
  }

  static Forbidden(message = Exception.Forbidden) {
    return new ApiError(message);
  }
};

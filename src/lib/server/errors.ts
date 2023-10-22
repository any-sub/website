export abstract class ApiError extends Error {}

export class ApiNetworkError extends ApiError {}

export class ApiNotFoundError extends ApiError {}

export class ApiUnauthorizedError extends ApiError {}

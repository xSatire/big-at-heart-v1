/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = ["/login", "/register", "/auth-error"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API auth
 * @type {string[]}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * An array of routes that are only accessible by the admins
 * @type {string[]}
 */

export const adminPrefix = "/dashboard";

/**
 * The default redirect path after login
 * @type {string[]}
 */

export const DEFAULT_LOGIN_REDIRECT = "/";

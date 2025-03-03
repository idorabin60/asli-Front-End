// src/api/authApi.js

import axiosClient from "./axiosClient";

/**
 * SIGNUP
 *
 * @param {string} username
 * @param {string} password
 * @param {string} email
 * @returns Promise
 */
export function signup(username, password, email) {
  return axiosClient.post("/signup", {
    username,
    password,
    email,
  });
}

/**
 * LOGIN
 *
 * @param {string} username
 * @param {string} password
 * @returns Promise
 */
export function login(username, password) {
  return axiosClient.post("/login", {
    username,
    password,
  });
}

/**
 * GET USER HOMEWORKS
 *
 * The interceptor in axiosClient.js will attach the token automatically
 * (if it exists in localStorage).
 *
 * @returns Promise
 */
export function getUserHomeworks() {
  return axiosClient.get("/user_homeworks");
}

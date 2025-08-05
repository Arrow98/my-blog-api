import BASE_URL from "../config";

// Services/auth.js
export async function loginUser(email, password) {
  const signinUrl = `${BASE_URL}/auth/login`;

  const signinMethod = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(signinUrl, signinMethod);
  const responseBody = await response.json();

  if (response.ok) {
    return;
  } else {
    throw new Error(responseBody.message);
  }
}

export async function signinUser(firstname, lastname, email, password) {
  const signupUrl = `${BASE_URL}/auth/signup`;
  const signupMethod = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      password,
    }),
  };

  const response = await fetch(signupUrl, signupMethod);
  const responseBody = await response.json();

  if (response.ok) {
    return;
  } else {
    const errorMessage =
      responseBody.errors?.[0]?.msg || "Failed to sign up user";
    throw new Error(errorMessage);
  }
}

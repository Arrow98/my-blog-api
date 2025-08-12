import BASE_URL from "../config";

// Services/auth.js
export async function loginUser({ signinEmail, signinPassword }) {
  const signinUrl = `${BASE_URL}/auth/login`;

  const signinMethod = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ signinEmail, signinPassword }),
  };

  const response = await fetch(signinUrl, signinMethod);
  const responseBody = await response.json();

  if (response.ok) {
    return responseBody;
  } else {
    throw new Error(responseBody.message);
  }
}

export async function signinUser({ firstName, lastName, email, password }) {
  const signupUrl = `${BASE_URL}/auth/signup`;
  const signupMethod = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  };

  const response = await fetch(signupUrl, signupMethod);
  const responseBody = await response.json();

  if (response.ok) {
    return responseBody;
  } else {
    const errorMessage =
      responseBody.errors?.[0]?.msg || "Failed to sign up user";
    throw new Error(errorMessage);
  }
}

import BASE_URL from "../config";

// Services/auth.js
export async function loginUser(email, password) {
  const signinUrl = `${BASE_URL}/auth/login`;

  const signMethod = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(signinUrl, signMethod);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Failed to login user");
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

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Failed to create user");
  }
}

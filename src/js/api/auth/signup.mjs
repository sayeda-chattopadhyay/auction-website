import { registerURL } from "../constants.mjs";

const url = registerURL;

console.log(url);

const method = "post";

export async function register(profile) {
  try {
    const userToRegister = {
      headers: {
        "content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    };

    const response = await fetch(url, userToRegister);

    const result = await response.json();
    confirm("You are now registered.Please Log In");
    window.location.replace("/login.html");

    return result;
  } catch (error) {
    console.log(error);
    // displayError("errorMessage", error);
  }
}

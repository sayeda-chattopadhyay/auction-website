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
    const confirmMessage = document.getElementById("confirm-message");
    confirmMessage.textContent = "You are now registered.Please Log In";
    // confirm("You are now registered.Please Log In");
    // Redirect to login page after a delay
    setTimeout(() => {
      window.location.replace("/login.html");
    }, 3000);

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

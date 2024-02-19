import { login } from "../api/auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log(profile);

      try {
        // send it to Api
        await login(profile);
        // Clear form fields after successful login
        form.reset();
      } catch (error) {
        console.log("error:", error);
      }
    });
  }
}

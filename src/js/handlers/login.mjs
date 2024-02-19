import { login } from "../api/auth/login.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const submittedForm = event.target;
      const formData = new FormData(submittedForm);
      const profile = Object.fromEntries(formData.entries());
      console.log(profile);

      try {
        // send it to Api
        await login(profile);
        // Clear form fields after successful login
        submittedForm.reset();
      } catch (error) {
        console.log("error:", error);
      }
    });
  }
}



export function displayError(containerId, error) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("error");
  const errorMessage = document.createTextNode(error);
  div.appendChild(errorMessage);
  container.appendChild(div);
}

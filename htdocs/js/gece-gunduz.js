const BUTTON = document.querySelector("button");
const SYNC = document.querySelector("#sync")

const TOGGLE = () => {
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
 
    document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
  BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};

BUTTON.addEventListener("click", TOGGLE);
SYNC.addEventListener("click", () => {
  localStorage.setItem("dark-mode", document.body.getAttribute("data-dark-mode"));
});

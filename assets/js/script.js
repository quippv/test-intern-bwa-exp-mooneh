const ulElementStarter = document.querySelector(".card-starter ul");
const ulElementPlatinum = document.querySelector(".card-platinum ul");

const starterLists = [
  "2 Bank Account",
  "Priority 24/7 Support",
  "APIs Payment Gateway",
  "$0 Fee Withdrawl",
];

const platinumLists = ["Multiple Card", "$0 Fee Withdrawl", "Multiple Card"];

let contentStarter = "";
let contentPlatinum = "";

starterLists.map((list) => {
  contentStarter += `<li><svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="9.5" cy="10" rx="9.5" ry="10" fill="#112340" />
                  <path
                    d="M5 9.66667L8.2 13L14.5 7"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> ${list}</li>`;
});

platinumLists.map((list) => {
  contentPlatinum += `<li><svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="9.5" cy="10" rx="9.5" ry="10" fill="#112340" />
                  <path
                    d="M5 9.66667L8.2 13L14.5 7"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> ${list}</li>`;
});

ulElementStarter.innerHTML = contentStarter;
ulElementPlatinum.innerHTML = contentStarter + contentPlatinum;

const faBars = document.querySelector(".fa-bars");

faBars.addEventListener("click", () => {
  const navigation = document.querySelector("nav");

  navigation.classList.toggle("active");
});

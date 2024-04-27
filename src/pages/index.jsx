import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Banner } from "../components/Banner/Banner";
import { Menu } from "../components/Menu/Menu";
import { Header } from "../components/Header/Header";
import { Gallery } from "../components/Gallery/Gallery";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

const response = await fetch("http://localhost:4000/api/drinks");
const data = await response.json();
const drinkList = data.data;
console.log(drinkList);

const toggleMenu = () => {
  document.querySelector(".rollout-nav").classList.toggle("nav-closed");
};

const handleOrderButton = async (event) => {
  event.preventDefault();
  const id = event.target.dataset.id;

  const resp = await fetch(`http://localhost:4000/api/drinks/${id}`)
  const data = await resp.json();
  const isOrdered = data.data.ordered;

  const response = await fetch(`http://localhost:4000/api/drinks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{
      op: "replace",
      path: "/ordered",
      value: !isOrdered,
    }]),
  });
  window.location.reload();
  console.log(response)
};

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header showMenu={true} />
    <main>
      <Banner />
      <Menu drinks={drinkList} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

document.querySelector(".nav-btn").addEventListener("click", toggleMenu);

document.querySelector(".rollout-nav").addEventListener("click", toggleMenu);

document.querySelectorAll(".drink__controls").forEach((orderBtn) => {
  orderBtn.addEventListener("submit", handleOrderButton);
});

const links = document.querySelectorAll(".navLink");
links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(link);
    links.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// const text = document.querySelectorAll(".light span");
// text[0].textContent = "TODAY IN CASSIS";
// text[1].textContent = "27°";
// text[2].textContent = "sunny . light breeze";

// const category = [
//     { src:"/assets/icon-key.svg", name:"ARRIVALS", title:"Check-in from 15:00", date:"sat,25 April", note:"Ring the brass bell by the blue door. if we're at the market, the key is in the terracotta pot by the olive tree"},
//      { src:"/assets/icon-wifi.svg", name:"WIFI", title:"Le Soleil.Guest", note:"Password below",},
//       { src:"/assets/icon-breakfast.svg", name:"BREAKFAST", title:"check-in from 15:00", date:"sat,25 April", note:"Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before"}
// ]

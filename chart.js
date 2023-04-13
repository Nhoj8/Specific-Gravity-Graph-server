import { Chart } from "chart.js/auto";

// const data = [
//   { x: 0, y: 0 },
//   { x: 100, y: 5 },
//   { x: 150, y: 15 },
// ];

const chart = new Chart(document.querySelector("canvas"), {
    type: "line",
    data: {
        labels: [], // data.map((row) => row.x),
        datasets: [
            {
                label: "Specific Gravity",
                data: [], //data.map((row) => row.x),
                borderColor: "#ff4000",
            },
        ],
    },
    options: {
        responsive: true,
        //maintainAspectRatio: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Plato (°P)",
                },
            },
            x: {
                title: {
                    display: true,
                    text: "Time (s)",
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: "tst", //title
            },
        },
    },
});

let previous = 10
const d = new Date();
const str = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
console.log(str);
let i = 0
setInterval(() => {
  const [x, y] = [i++, previous,
  ];
  let change = Math.round(Math.random() * 2000 - 1000) / 100;
  if (change != 0) {
    let evalue = Math.pow(Math.E, 1 / 5*(-previous + change + 10))
    previous = Math.round((previous + (evalue - 1 / evalue) / (2*(evalue + 1 / evalue)))*100)/100
  }

    //previous = Math.round((previous + Math.pow(-previous+change +10, 3)/200)*100)/100
        //Math.round(
          //  (previous +
            //    ((change / Math.abs(change)) * 5) / (change * change + 1)) *
              //  100
        //) / 100;
  console.log(change)
  console.log(previous);
const d = new Date();
const str = `${d.getHours().toString().padStart(2, "0")}:${d
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`;
  chart.data.labels.push(str);
  chart.data.datasets[0].data.push(y);
  console.log(chart.data.datasets[0]);
  chart.update();
  generateNewDivJeu(str, y);
}, 1000);


async function generateNewDivJeu(x,y) {
    //mets les jeu sur l'ecran

    let Jeu = document.createElement("div"); //le div pour le jeu
    //Jeu.style.width = "150px";
    //Jeu.style.height = "25px";
    //Jeu.style.position = "absolute"; //les parametre
    //Jeu.style.transform = `translate(${(window.innerWidth - 100) / 2}px,${
     //   50 + nombre * 25 + 1000
    //}px)`; //l<emplacement du div
  //Jeu.style.inset = "0";
    let xtext = document.createElement("div");
    //je met tous le text
    xtext.textContent = x;
  Jeu.append(xtext);
  let ytext = document.createElement("div");
  //je met tous le text
  ytext.textContent = y;
  Jeu.append(ytext);
    var divDesJeu = document.getElementById("divDesJeu");
var table = document.getElementById("table");
  divDesJeu.append(Jeu); //puis sur l'ecran
  console.log(table.scrollTop);
  console.log(table.offsetHeight);
    console.log(table.scrollHeight);
  if (table.scrollHeight - table.scrollTop -32 <= table.offsetHeight)
      Jeu.scrollIntoView();
}
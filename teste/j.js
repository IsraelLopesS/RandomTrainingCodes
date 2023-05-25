/* const sharp = require("sharp");

let pas = process.argv[2];
let windth = Number(process.argv[3]);

function resize(pas, windth) {
  sharp(pas)
    .resize({ width: windth })
    .toFile("./recize.jpg", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
}

function compress(passin, put)

resize(pas, windth); */

/* const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('<h1>Hello World</h1>');
}).listen(3000, (err)=>{
  if(err) {console.log(err)}
  else {console.log("success")}
}) */

/* const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  res.send("Hello World");
})

const Port = 3000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
}) */

/* function solucao(altitude) {
  if (altitude <= 20) {
    return "Troposfera";
  } else if (altitude <= 50) {
    return "Estratosfera";
  } else if (altitude <= 80) {
    return "Mesosfera";
  } else if (altitude <= 450) {
    return "Termosfera";
  } else {
    return "Exosfera";
  }
}
console.log(solucao(80));
 */

/* function solucao(olhosNasLaterais) {
  if(olhosNasLaterais == false){
      return 'PREDADOR'
  }else if(olhosNasLaterais == true){
      return 'PRESA'
  }else{return "Digite um valor valido!"}

}
console.log(solucao(false)) */

/* function solucao(peso1, peso2) {
  if(peso1 && peso2 < 55){
      return 'PODEM LUTAR'
  }  else if (peso1 >= 55 && peso1 < 65 && peso2 >= 55 && peso2 < 65){
      return 'PODEM LUTAR'
  }else if (peso1 >= 65 && peso1 < 75 && peso2 >= 65 && peso2 < 75){
      return 'PODEM LUTAR'
  }else if (peso1 >= 75 && peso1 < 85 && peso2 >= 75 && peso2 < 85){
      return 'PODEM LUTAR'
  }else if (peso1 >= 85 && peso2 >= 85){
      return 'PODEM LUTAR'
  }
  else{
      return "NAO PODEM LUTAR"
  }

}

console.log(solucao(55, 65)); */

function solucao(pesos) {
  let res = pesos[0] - pesos[1];
  console.log(res);
  if(res <= 5){
      return "PODEM LUTAR"
  }else{return "NAO PODEM LUTAR"}
console.log(res);
}
let per = [55, 65];
console.log(solucao(per));
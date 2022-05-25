import { Router } from 'express'
import {
    somar,
    dobro,
    media,
    tabuada,
    corprimaria,
    ingressocinema,
    maiornumero,
    frequencia
} from "./services.js";



const server = Router();

server.get("/ping", (req, resp) => {
    resp.send("pong");
  });
  
  server.get("/dobro/:numero", (req, resp) => {
    const numero = Number(req.params.numero);
    const d = dobro(numero);
    resp.send({ dobro: d });
  });
  
  server.get("/somar", (req, resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const x = somar(a, b);
    resp.send({ soma: x });
  });
  
  server.post("/somar", (req, resp) => {
    const a = req.body.a;
    const b = req.body.b;
  
    const x = somar(a, b);
  
    resp.send({ soma: x });
  });
  
  server.post("/media", (req, resp) => {
    try {
      const {
        valores: { a, b, c },
      } = req.body;
  
      const m = media(a, b, c);
  
      resp.send({ result: m });
    } catch (err) {
      resp.status(404).send({
        erro: err.message,
      });
    }
  });
  
  server.get("/tabuada", (req, resp) => {
    const { a } = req.query.a;
    const t = tabuada(a);
    resp.send({ result: t });
  });
  
  server.get("/dia2/corprimaria/:cor", (req, resp) => {
    const { cor } = req.params.cor;
    const c = corprimaria(cor);
    resp.send({ cor: c });
  });
  
  server.post("/dia2/ingressocinema", (req, resp) => {
    const { qtd1, qtd2, dia, tipo } = req.body;
    const x = ingressocinema(qtd1, qtd2, dia, tipo);
    resp.send({ preco: x });
  });
  
  server.post("/dia2/maiornumero", (req, resp) => {
    let { array } = req.body;
    const m = maiornumero(array);
    resp.send({ inicio: m });
  });
  
  server.get("/dia2/freqcaracter/:texto/:caracter", (req, resp) => {
    let texto = req.params.texto;
    let caracter = req.params.caracter;
    let x = frequencia(texto, caracter);
    resp.send({ qtd: x });
  });

  export default server;
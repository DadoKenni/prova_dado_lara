import 'dotenv/config'


import express from 'express'
import cors from 'cors'

const server= express();
server.use(cors());
server.use(express.json());

server.get('/ping', (req,resp) =>{
    resp.send('pong');
})

server.get ('/dobro/:numero', (req,resp) => {
    const numero = Number(req.params.numero);
    const dobro =numero*2;
    resp.send({dobro: dobro});
})

server.get('/somar', (req, resp) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const x = a + b;
    resp.send({soma: x})
})

server.post('/somar', (req,resp) =>{
    const a=req.body.a;
    const b=req.body.b;

    const x =a+b;

    resp.send({soma: x})
})

server.post('/media' , (req, resp) => {
    try{
        const { valores:{a: aaa , b: bbb, c: ccc}} = req.body;

    const media = (aaa + bbb + ccc) /3;

    resp.send({result:media})}
    
    catch(err){
        resp.status(404).send({
            erro:err.message
        })
    }
}
)

server.get('/tabuada' , (req, resp) => {
    const { a } = req.query.a;
    let array = [9];
    for(let i = 0; i < 10 ; i++){
        array[i] = a * i;
    }
    resp.send({result: array});
})

server.get('/dia2/corprimaria/:cor', (req,resp) =>{
    const { cor }= req.params.cor;
    let array 
})

server.listen(process.env.PORT,
             () => console.log (`API online na porta ${process.env.PORT}`));


             
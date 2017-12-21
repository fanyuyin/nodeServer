import * as express from 'express';

const app = express();

export class Hometask {
    constructor(
        public id:number,
        public title:string,
        public age:number
    ) {}
}
const hometasks:Hometask[] = [
    new Hometask(1,"范小余",18 ),
    new Hometask(2,"石大牛",18 ),
    new Hometask(3,"宝玉",18 )
];

app.get('/',(req,res) => {
    res.send("hello express");
});
app.get('/hometasks',(req,res) => {
    res.json( hometasks );
    console.log(JSON.stringify(hometasks))
});

const server = app.listen(8000,"localhost",() => {
    console.log("服务已经启动，地址是:http://localhost:8000");
});
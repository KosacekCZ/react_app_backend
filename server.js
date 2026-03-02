import express from "express" // npm i express
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let data = [
    {
        name:"Bob",
        age:20
    }
];

let listings = [
    {
        ID:1,
        Name:"Stará pračka",
        ImageLink:"https://www.bazos.cz/img/1/193/214058193.jpg",
        Description:"Nefunguje",
        Price:2499,
        Email:"adam.novak@yandex.ru"
    },
    {
        ID:2,
        Name:"Nová pračka",
        ImageLink:"https://www.bazos.cz/img/1/413/214038413.jpg?t=1769344028",
        Description:"Nefunguje (jen trochu)",
        Price:2899,
        Email:"adam.novak@yandex.ru"
    }
]

// Origin: http://localhost:3002
// Endpoint: http://localhost:3002/api/users

// request -> GET (na endpoint) = prázdný get request
app.get("/api/users", (request, response) => {
    response.json(data);
    // response (odpověď na dotaz) -> pošle JSON pole data
});

app.get("/api/listings", (request, response) => {
    response.json(listings);
});

// request -> na endpoint /api/users posílame
app.post("/api/users", (req, res) => {
    if (req.body.name === "Samuel Kodytek") {
        res.status(403).json("https://samjenegr.eu/");
    } else {
        data.push(req.body);
        res.status(201).json("Uživatel vytvořen");
    }

});

app.delete("/api/users/:name", (request, response) => {

})

app.listen("3002")
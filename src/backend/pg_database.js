import pg from "pg";
const {Client} = pg;

const client = new Client({
   user:"postgres",
   password: "123", // enter your pg password
   host:"localhost",
   database: "eternal_realms",
   port: 5432,
});

client.connect()
.then(() => {console.log("Connected to the database")})
.catch((err) => {console.log("Error connecting to the database", err)});

export default client;

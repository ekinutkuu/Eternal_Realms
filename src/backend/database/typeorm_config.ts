import { DataSource } from "typeorm";
import { PG_CONFIG } from "../pg_config";
import { Realm } from "./entity/Realm";
import { Character } from "./entity/Character";
import { Location } from "./entity/Location";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
   type: "postgres",
   host: PG_CONFIG.host,
   database: PG_CONFIG.database,
   username: PG_CONFIG.username,
   password: PG_CONFIG.password,
   port: PG_CONFIG.port,
   synchronize: true,
   logging: false,
   entities: [Realm, Character, Location, User],
   migrations: [],
   subscribers: [],
});

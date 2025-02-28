import { Client } from "pg";
import { PG_CONFIG } from "../pg_config";

export async function ensureDatabaseExists() {
   const client = new Client({
      host: PG_CONFIG.host,
      port: PG_CONFIG.port,
      user: PG_CONFIG.username,
      password: PG_CONFIG.password,
      database: "template1",
   });

   try {
      await client.connect();

      const query = `SELECT 1 FROM pg_database WHERE datname = $1`;
      const res = await client.query(query, [PG_CONFIG.database]);

      if (res.rowCount === 0) {
         console.log(`Database "${PG_CONFIG.database}" not found.\nCreating...`);
         await client.query(`CREATE DATABASE "${PG_CONFIG.database}"`);
         console.log(`Database "${PG_CONFIG.database}" has been successfully created.`);
      } else {
         console.log(`Database "${PG_CONFIG.database}" has been successfully found.`);
      }
   } catch (error) {
      console.error("Error while ensuring database exists:", error);
   } finally {
      await client.end();
   }
}

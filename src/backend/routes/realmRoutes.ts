import { Router } from "express";
import { AppDataSource } from "../database/typeorm_config";
import { Realm } from "../database/entity/Realm";

const router = Router();

router.get("/realms", async (req, res) => {
   try {
      const realmRepository = AppDataSource.getRepository(Realm);
      const realms = await realmRepository.find();
      res.json(realms);
   } catch (error) {
      console.error("Error fetching realms:", error);
      res.status(500).json({ message: "Error fetching realms!" });
   }
});

export default router;

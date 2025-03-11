import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RealmCard from "../components/RealmCard";
import { fetchRealms } from "../services/realmService";

const RealmsList = () => {
   const navigate = useNavigate();
   const [realms, setRealms] = useState([]);

   useEffect(() => {
      getRealms();
   }, []);

   useEffect(() => {
      const realmNames = realms.map(realm => realm.name);
      console.log("Realm Names:", realmNames);
   }, [realms]);

   const handleRealmSelect = (name) => {
      const formattedName = name.toLowerCase().replace(/ /g, "_").replace(/[^a-z0-9_]/g, "");
      navigate(`/realms/${formattedName}`);
   };

   const getRealms = async () => {
      const realmsData = await fetchRealms();
      setRealms(realmsData);
   };

   return (
      <div className="bg-dark-pattern min-h-screen flex flex-col items-center justify-center">
         <label className="text-5xl text-light px-10 py-6 mb-8 rounded-xl bg-gradient-to-br from-[#c4c4c4]/25 via-[#242323]/10 to-[#c4c4c4]/25">
            Realms
         </label>
         <div className="grid grid-cols-4 gap-10 p-8">
            {realms.map((realm, index) => (
               <RealmCard
                  key={index}
                  name={realm.name}
                  onClick={() => handleRealmSelect(realm.name)}
               />
            ))}
         </div>
      </div>
   );
};

export default RealmsList;

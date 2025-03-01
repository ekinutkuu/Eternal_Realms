import React from "react";
import { useNavigate } from "react-router-dom";
import RealmCard from "../components/RealmCard";

const RealmsList = () => {
   const navigate = useNavigate();

   const handleRealmSelect = () => {
      navigate("/realms/name");
   };

   const realmCards = Array(4).fill(null).map((_, index) => (
      <RealmCard key={index} onClick={handleRealmSelect} />
   ));

   return (
      <div className="bg-dark-pattern min-h-screen flex flex-col items-center justify-center">
         <label className="text-5xl text-light px-10 py-6 mb-8 rounded-xl bg-gradient-to-br from-[#c4c4c4]/25 via-[#242323]/10 to-[#c4c4c4]/25">
            Realms
         </label>
         <div className="grid grid-cols-4 gap-10 p-8">
            {realmCards}
         </div>
      </div>
   );
};

export default RealmsList;

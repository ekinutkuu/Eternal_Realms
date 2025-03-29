import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRealms } from "../redux/slices/realmSlice";
import RealmCard from "../components/RealmCard";
import LoadingAnimation from "../components/LoadingAnimation";

const RealmsList = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const realms = useSelector((state) => state.realms.realms);
   const fetchStatus = useSelector((state) => state.realms.status);

   useEffect(() => {
      if (fetchStatus === "idle") {
         dispatch(fetchRealms());
      }
      console.log("Realms:", realms);
   }, [fetchStatus, dispatch]);

   const handleRealmSelect = (name) => {
      const formattedName = name.toLowerCase().replace(/ /g, "_").replace(/[^a-z0-9_]/g, "");
      navigate(`/realms/${formattedName}`);
   };

   if (fetchStatus === "loading") {
      return (
         <div className="bg-dark-pattern min-h-screen flex items-center justify-center">
            <LoadingAnimation />
         </div>
      );
   }

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

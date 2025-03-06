import React, { useState, useEffect } from "react";
import PostFilterSlider from "../components/PostFilterSlider";

const Realm = () => {
   const [realmContents, setRealmContents] = useState([]);

   useEffect(() => {
      const testContents = [
         "All",
         "Characters",
         "Races",
         "Locations",
         "Poems",
         "Characters",
         "Races",
         "Locations",
         "Poems",
         "Characters",
         "Races",
         "Locations",
         "Poems",
         "Characters",
         "Races",
         "Locations",
         "Poems",
      ];
      setRealmContents(testContents);
   }, []);

   return (
      <div className="bg-dark-pattern w-screen h-screen flex justify-center">
         <div className="w-1/7 h-full border-r border-[#1a1a1a]">
            <div className="w-full px-3">
               <div className="w-full h-12 p-2 my-3 flex items-center justify-center rounded-lg bg-[#141414] text-light cursor-pointer hover:bg-[#292929]">Home</div>
               <div className="text-light p-2 border-b border-[#1a1a1a]">Current Realm</div>
               <div className="w-full h-12 p-2 my-3 flex items-center justify-center rounded-lg bg-[#141414] text-light cursor-pointer hover:bg-[#292929]">Characters</div>
               <div className="w-full h-12 p-2 my-3 flex items-center justify-center rounded-lg bg-[#141414] text-light cursor-pointer hover:bg-[#292929]">Races</div>
               <div className="w-full h-12 p-2 my-3 flex items-center justify-center rounded-lg bg-[#141414] text-light cursor-pointer hover:bg-[#292929]">Locations</div>
               <div className="w-full h-12 p-2 my-3 flex items-center justify-center rounded-lg bg-[#141414] text-light cursor-pointer hover:bg-[#292929]">Poems</div>
               <div className="text-light p-2 border-b border-[#1a1a1a]">Other Realms</div>
               <div className="w-full h-12 p-2 my-3 flex items-center justify-center rounded-lg bg-[#141414] text-light cursor-pointer hover:bg-[#292929]">Middle Earth</div>
               <div className="w-full h-12 p-2 my-3 flex items-center justify-center rounded-lg bg-[#141414] text-light cursor-pointer hover:bg-[#292929]">Ranger's Apprentice</div>
               <div className="w-full h-12 p-2 my-3 flex items-center justify-center rounded-lg bg-[#141414] text-light cursor-pointer hover:bg-[#292929]">NieR</div>
            </div>
         </div>
         <div className="w-6/7 flex flex-col items-center">
            <div className="w-4/5 h-full px-3 flex flex-col items-center">
               <PostFilterSlider realmContents={realmContents} />
               <div className="w-full h-full my-5 bg-[#141414] rounded-lg">
               </div>
            </div>
         </div>
      </div>
   );
};

export default Realm;

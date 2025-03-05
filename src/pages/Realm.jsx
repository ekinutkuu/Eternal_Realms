import React, { useState, useRef, useEffect } from "react";
import RealmContent from "../components/RealmContent";

const Realm = () => {
   const scrollContainer = useRef(null);
   const [showLeftButton, setShowLeftButton] = useState(false);
   const [showRightButton, setShowRightButton] = useState(true);

   useEffect(() => {
      const updateButtonVisibility = () => {
         const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
         setShowLeftButton(scrollLeft > 0);
         setShowRightButton(scrollLeft + clientWidth < scrollWidth);
      };

      updateButtonVisibility();
      scrollContainer.current.addEventListener("scroll", updateButtonVisibility);
   }, []);

   const scrollLeft = () => {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
   };

   const scrollRight = () => {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
   };

   const realmContent = Array(20).fill(null).map((_, index) => (
      <RealmContent key={index} />
   ));

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
               <div className="relative max-w-full h-17 mt-5 flex justify-center items-center rounded-lg bg-[#141414]">
                  {showLeftButton && (
                     <div onClick={scrollLeft} className="text-light bg-gradient-to-r from-[#181717] via-[#181717] to-transparent absolute flex h-full w-24 z-10 left-0 justify-start pl-4 items-center rounded-lg cursor-pointer">
                        <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                           <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                        </svg>
                     </div>
                  )}
                  <div className="flex overflow-x-auto h-full items-center no-scrollbar" ref={scrollContainer}>
                     {realmContent}
                  </div>
                  {showRightButton && (
                     <div onClick={scrollRight} className="text-light bg-gradient-to-l from-[#181717] via-[#181717] to-transparent absolute flex h-full w-24 z-10 right-0 justify-end pr-4 items-center rounded-lg cursor-pointer">
                        <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                           <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                        </svg>
                     </div>
                  )}
               </div>
               <div className="w-full h-full my-5 bg-[#141414] rounded-lg">
               </div>
            </div>
         </div>
      </div>
   );
};

export default Realm;

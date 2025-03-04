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
      <div className="bg-dark-pattern min-h-screen flex justify-center">
         <div className="relative max-w-2/3 h-19 my-8 flex justify-center items-center rounded-lg bg-[#141414]">
            {showLeftButton && (
               <div onClick={scrollLeft} className="text-light bg-gradient-to-r from-[#181717] via-[#181717] to-transparent absolute flex h-full w-24 z-10 left-0 justify-start pl-4 items-center rounded-lg cursor-pointer">
                  <svg className="fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                     <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
                  </svg>
               </div>
            )}
            <div className="flex overflow-x-auto h-full items-center no-scrollbar" ref={scrollContainer}>
               {realmContent}
            </div>
            {showRightButton && (
               <div onClick={scrollRight} className="text-light bg-gradient-to-l from-[#181717] via-[#181717] to-transparent absolute flex h-full w-24 z-10 right-0 justify-end pr-4 items-center rounded-lg cursor-pointer">
                  <svg className="fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                     <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                  </svg>
               </div>
            )}
         </div>
      </div>
   );
};

export default Realm;

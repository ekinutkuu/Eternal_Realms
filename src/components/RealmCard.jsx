import React, { Component } from "react";
import Nier from "../assets/nier.png";

export default class RealmCard extends Component {
   render() {
      return (
         <div className="max-w-48 rounded-lg overflow-hidden bg-[#242323] border border-transparent hover:border-[#999999] hover:scale-103 hover:cursor-pointer duration-130 ease-in-out">
            <div className="text-2xl text-center text-light px-6 py-4">
               NieR
            </div>
            <img className="w-full p-8" src={Nier} />
         </div>
      );
   }
}

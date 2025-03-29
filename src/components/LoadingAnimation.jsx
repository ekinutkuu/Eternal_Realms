const LoadingAnimation = ({ text = "LOADING" }) => {
   const reversedText = text.toUpperCase().split("").reverse();

   return (
      <div id="load" className="relative w-[600px] h-9 mx-auto select-none cursor-default">
         {reversedText.map((letter, index) => (
            <div
               key={index}
               className="absolute w-5 h-9 opacity-0 text-xl font-bold text-light animate-move"
               style={{ animationDelay: `${index * 0.2}s` }}
            >
               {letter}
            </div>
         ))}
      </div>
   );
};

export default LoadingAnimation;

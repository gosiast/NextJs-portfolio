import React from "react";

//promps in parethesis: what happens when the button is active, 
//has to select the tab, children is what is selected in the button
//we need active because styling is different when it's active
const TabButton = ( {active, selectTab, children} ) => {
    // so depending if it's active, there is a condition
    // to what will happen with the button
    const buttonClasses = active ? 'text-white border-b border-pink-300' : 'text-[#ADB7BE]'
  return (
    //onClick what happens when we click the button
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
           {children}  
        </p>
     
    </button>
  );
};

export default TabButton;

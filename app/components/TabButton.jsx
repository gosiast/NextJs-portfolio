import React from "react";

//promps in parethesis: what happens when the button is active, 
//has to select the tab, children is what is selected in the button
//we need active because styling is different when it's active
const TabButton = ( active, selectTab, children) => {
  return (
    <button className="mr-3 font-semibold hover:text-white text-[#ADB7BE border-b border-pink-400">
      {children}
    </button>
  );
};

export default TabButton;

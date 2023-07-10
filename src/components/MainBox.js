import React,{ useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [selected, setSelected] = useState('')
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */

function handleSelected(selected){
setSelected(selected)
}
console.log(selected)

function component(){
  if(selected === "Profile"){
   return <Profile/>
  } else if(selected === "Photos"){
return <Photos/>
  } else if(selected === "Cocktails"){
   return  <Cocktails/>
  } else if(selected === "Pokemon"){
   return <Pokemon/>
  }
}

  return (
    <div>
      <MenuBar 
      selected={selected} 
      handleSelected={handleSelected} 
      />
      {component}
    </div>
  );
}

export default MainBox;

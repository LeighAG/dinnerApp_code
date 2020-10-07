import React, {useState} from "react";

//when toggle show button is clicked, the show function is initiated

export default function ToggleContent({ toggle, content }) {
    const [isShown, setIsShown] = useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);
  /* this is shown when isShown is true(open button clicked) and then hide variable can be shown. */
  /* this is the first thing shown bc isShown is not true. */
//   {toggle(show)} - these are props that return content, called render props
//they take in a function, in which hide & show are props that are taken in and used in the function 
//for the on click
// https://wecodetheweb.com/2019/03/02/easy-modals-with-react-hooks/

return(
    <>
    {toggle(show)}
    {isShown && content(hide)}
    </>
)

};




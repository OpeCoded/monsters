import React from "react";

import "./search-box.styles.css";

//functional components does not have access to states or internal states, life cycle methods, because they dont have access to the constructor()
//functional components just gets some props and then return some html
//functional component for our search box with dynamic props, then export it so that you can use it elsewhere
export const SearchBox = ({ placeholder, handleChange }) => (
  /* search field input */
  <input
    //class name for css styling
    className="search"
    type="search"
    placeholder={placeholder}
    //this syntheticEvent (syntheticEvent is a fake event that pretends an event is a DOM event,when there is a change in the DOM, React intercept is and say something change let me go tell my app something just happened),it is used to get the value of what is type in the searchfield...e is the event received
    onChange={handleChange}
  />
);

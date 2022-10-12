import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkTags = links.map(x => (<a key={x} href={`#${x}`}>{x}</a>));
  return <nav>{linkTags}</nav>;
}

export default NavBar;

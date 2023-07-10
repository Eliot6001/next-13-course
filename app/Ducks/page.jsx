import React from "react";
import Link from "next/link";
export const metadata = {
    title: 'Next app attempt',
    description: 'Just a mockup project to get my hands dirty with nextJs',
    keywords: "Ducks, Waterfowl, Birdwatching, Wildlife, Feathered Friends, Duck Species, Duck Behavior, Duck Conservation, Pond Life, Wetlands, Duck Migration, Duck Anatomy, Next.js Development, Front-end Framework, React, Server-side Rendering, JavaScript, Web Development, Component-based Architecture, Scalability"
  }/*Keywords generated using chatGPT */
const Ducks = () => {
    
  return (
    <div className="flex flex-col space-y-5 text-base ">
      {" "}
      <p>
        Once upon a time, there were these amazing creatures called ducks! They
        were super cute and fluffy, just like your favorite stuffed animal.
        Ducks loved to swim and play in the water all day long. They had special
        webbed feet that helped them paddle through the water, leaving trails of
        ripples behind them. Quack, quack! That's the sound ducks make. They
        have feathers of different colors and shiny beaks. Ducks can fly high in
        the sky and come down with a whoosh. Sometimes, they gather in a line
        and waddle across the grass like they're having a parade. Ducks are
        wonderful creatures that love to swim, quack, fly, and waddle around.
        They're always happy to meet new friends like you!
      </p>
      <Link  href="/Ducks/Quack" className="text-blue-500">Make your new friend quack</Link>

    </div>
  );
}

export default Ducks;

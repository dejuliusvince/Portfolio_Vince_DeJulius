import React from 'react';
import Project from '../Project';
import Designs from '../Designs';

export default function Home() {
  return (
    <div className="m-2">
      <h1 className="m-2 text-center">Portfolio</h1>
      <h2 className="m-2 text-center">WebDev Projects</h2>
      <Project />
      <h2 className="m-2 text-center">Graphic Design</h2>
      <p className="m-2 text-center">Below are some recent examples of my graphic design work</p>
      <p className="m-2 text-center">Projects are described on my resume</p>
      <Designs />
    </div>
  );
}

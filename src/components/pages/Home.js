import React from 'react';
import Project from '../Project';
import Designs from '../Designs';

export default function Home() {
  return (
    <div className="m-2">
      <h1 className="m-2">Portfolio</h1>
      <h2 className="m-2">WebDev Projects</h2>
      <Project />
      <h2 className="m-2">Graphic Design</h2>
      <Designs />
    </div>
  );
}

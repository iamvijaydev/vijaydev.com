import { useRef } from "react";
import Two from "two.js";
import { useIsomorphicLayoutEffect } from "main";

// @todo: 
// create a client version with the full interaction
// and a server version with a snapshot/svg svg of a perfect moment or one that conveys the idea of the game
// use the hydrationSafe to switch between the two versions
// the static svg can also become the thumbnail for the game on the listing pages
// @future: the static svg can have a simple animation to show the game in action or multiple snapshots that switch on hover


export const LinkListGame = () => {
  const ref = useRef<HTMLDivElement>(null);
  const two = useRef<Two>();

  useIsomorphicLayoutEffect(() => {
    if (ref.current === null) {
      return;
    }

    if (!two.current) {
      two.current = new Two({ fullscreen: false }).appendTo(ref.current);
    }

    // Two.js has convenient methods to make shapes and insert them into the scene.
    var radius = 50;
    var x = two.current.width * 0.5;
    var cy = two.current.height * 0.5 - radius * 1.25;
    var circle = two.current.makeCircle(x, cy, radius);

    var ry = two.current.height * 0.5 + radius * 1.25;
    var width = 100;
    var height = 100;
    var rect = two.current.makeRectangle(x, ry, width, height);

    const resize = () => {
      if (!two.current) {
        return;
      }

      two.current.clear();
      x = two.current.width * 0.5;
      cy = two.current.height * 0.5 - radius * 1.25;
      circle.translation.set(x, cy);

      ry = two.current.height * 0.5 + radius * 1.25;
      rect.translation.set(x, ry);
    }

    // The object returned has many stylable properties:
    circle.fill = "#FF8000";
    // And accepts all valid CSS color:
    circle.stroke = "orangered";
    circle.linewidth = 5;

    rect.fill = "rgb(0, 200, 255)";
    rect.opacity = 0.75;
    rect.noStroke();

    // Don’t forget to tell two to draw everything to the screen
    two.current.update();

    two.current.bind('resize', resize);

    return () => {
      two.current?.unbind('resize');
      two.current?.clear();
    }
  }, [ref.current]);

  return <div ref={ref} style={{ height: "500px" }}></div>;
};

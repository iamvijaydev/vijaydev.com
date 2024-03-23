import { H1, Description, useIsomorphicLayoutEffect } from "main";
import { Breadcrumb } from "components/breadcrumb/Breadcrumb";
import type { Node } from "components/breadcrumb/Breadcrumb";
// import Two from "two.js";
import { useRef } from "react";

export interface Props {
  className?: string;
  title: string;
  description: string;
  nodes?: Node[];
}

export const Masthead = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // @todo for future use
  // useIsomorphicLayoutEffect(() => {
  //   if (!ref || !ref.current) {
  //     return;
  //   }

  //   const dimensions = 25;
  //   const two = new Two({
  //     type: Two.Types.canvas,
  //     width: dimensions,
  //     height: dimensions,
  //   });

  //   const r = dimensions / 5;
  //   const center = dimensions / 2;

  //   const a = two.makeLine(center - r, center, center + r, center);
  //   const b = two.makeLine(center, center - r, center, center + r);

  //   a.stroke = b.stroke = "#000";
  //   a.linewidth = b.linewidth = 0.25;

  //   two.update();

  //   ref.current.style.backgroundImage = `url(${two.renderer.domElement.toDataURL()})`;
  //   ref.current.style.backgroundRepeat = "repeat";
  //   ref.current.style.backgroundSize = `${dimensions}px`;

  //   two.clear();
  // }, [ref.current]);

  return (
    <header ref={ref} className={props.className || "col-12"}>
      {props.nodes ? (
        <Breadcrumb nodes={props.nodes} />
      ) : null}
      <H1 className="pb-2xs pt-l xl:pt-xl">{props.title}</H1>
      <Description className="pb-xl">{props.description}</Description>
    </header>
  );
};

import { useEffect, useRef, useState } from 'react';
import { hexToRgb, CONST } from 'main';

import { vectorFlowField } from './vectorFlowFieldv2';

interface FlowFieldPropsBase<Type> {
  className?: string;
}
interface PropsWithColor<Type> extends FlowFieldPropsBase<Type> {
  color: string;
}
interface PropsWithColorVar<Type> extends FlowFieldPropsBase<Type> {
  colorVar: string;
}
type Props<Type> = PropsWithColor<Type> | PropsWithColorVar<Type>;

const getColor = (el: HTMLElement, props: Partial<Props<any>>) => {
  if ('color' in props && props.color) {
    return `rgba(${hexToRgb(props.color).join(',')},0.15)`;
  }

  if ('colorVar' in props && props.colorVar) {
    const hex = getComputedStyle(el)
      .getPropertyValue(props.colorVar);

    return `rgba(${hexToRgb(hex).join(',')},0.15)`;
  }

  return 'rgba(0,0,0,0.15)';
}

export const FlowField = <Type extends HTMLDivElement,>(props: Props<Type>) => {
  const field = useRef(vectorFlowField());

  const [ready, setReady] = useState(false);
  const parent = useRef<HTMLElement>();
  const self = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const MAX = 5;
    let tries = 0;

    let timeout: NodeJS.Timeout;

    const checkAgain = () => {
      clearTimeout(timeout);
      if (tries < MAX) {
        timeout = setTimeout(checkReady, 300);
      } else {
        console.warn('max tries', props);
      }
    }

    const checkReady = () => {
      tries++;
      if (self.current && self.current.parentElement) {
        parent.current = self.current.parentElement;
        setReady(true);
      } else {
        checkAgain();
      }
    }

    checkReady();

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    if (!ready) { return }

    const resize = () => {
      field.current.updateContainerSize(
        parent.current!.clientWidth,
        parent.current!.clientHeight
      );
    }
    const setColor = () => {
      field.current.updateDrawColor(
        getColor(parent.current!, props)
      );
    }

    const controller = new AbortController();

    window.addEventListener("resize", resize, {
      signal: controller.signal
    });
    window.addEventListener(CONST.onThemeChange, setColor, {
      signal: controller.signal
    });

    field.current.drawVectorField(
      self.current,
      parent.current!.clientWidth,
      parent.current!.clientHeight,
      getColor(parent.current!, props)
    );

    return () => {
      controller.abort();
    }
  }, [ready]);

  return (
    <canvas className="absolute position-fill z-level-1" ref={self} />
  )
}
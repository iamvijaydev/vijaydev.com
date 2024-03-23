import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';
import { CONST } from 'main';

export const useScrollPresentHeaderAnimation = (node: RefObject<HTMLDivElement>) => {
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    const height = 64;
    const double = height + 1;

    let isSlideIn = false;
    let animation: Animation | undefined;

    const finishAnimation = () => {
      if (!animation) { return };

      if (animation.playState === 'running') {
        animation.finish();
      }
    }
    const commitAnimation = async () => {
      if (!animation) { return };

      await animation.finished;

      if (animation.playState === 'finished') {
        animation.commitStyles();
        animation.cancel();
      }
    }

    const slideIn = async () => {
      if (isSlideIn) { return };

      finishAnimation();

      node.current?.parentElement?.classList.add('present');
      isSlideIn = true;

      animation = node.current?.animate(
        [
          { transform: `translate3D(0, ${-height}px, 0)` },
          { transform: `translate3D(0, 0, 0)` },
        ],
        {
          duration: CONST.uxShortAnimationDuration,
        }
      );

      commitAnimation();
    }
    const slideOut = async () => {
      if (!isSlideIn) { return };

      finishAnimation();

      animation = node.current?.animate(
        [
          { transform: `translate3D(0, ${-height}px, 0)` },
          { transform: `translate3D(0, 0, 0)` },
        ],
        {
          duration: CONST.uxShortAnimationDuration,
        }
      );

      await commitAnimation();

      node.current?.parentElement?.classList.remove('present');
      isSlideIn = false;
    };

    const onScroll = () => {
      const scrollTopPosition =
      window.scrollY || document.documentElement.scrollTop;

      if (scrollTopPosition > lastScrollTop.current) {
        node.current?.parentElement?.setAttribute('style', `transform: translate3D(0, 0, 0)`);
      }
      if (scrollTopPosition < lastScrollTop.current) {
        node.current?.parentElement?.setAttribute('style', `transform: translate3D(0, ${scrollTopPosition}px, 0)`);
      }
      if (scrollTopPosition === lastScrollTop.current) {
        console.log('didnt expect that');
      }

      lastScrollTop.current = scrollTopPosition <= 0 ? 0 : scrollTopPosition;

      if (lastScrollTop.current > 0) {
        node.current?.parentElement?.classList.add('present');
      } else {
        node.current?.parentElement?.classList.remove('present');
      }
    }

    const controller = new AbortController();

    window.addEventListener('scroll', onScroll, {
      signal: controller.signal
    });

    return () => {
      controller.abort();
    }
  }, []);
}
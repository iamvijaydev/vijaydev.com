import type { PageChangeEventData } from 'types';
import { CONST } from 'main';
import { useEffect } from 'react';

export const usePageLoadAnimation = () => {
  useEffect(() => {
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

    const onPageChange = async (e: CustomEvent<PageChangeEventData>) => {
      const root = document.querySelector<HTMLDivElement>('#root');

      if (root) {
        let from = 1;
        let to = 0.5;
        let duration = CONST.uxExitDuration;

        if (
          e.detail.type === CONST.onFetchingEnd
          || e.detail.type === CONST.onFetchingFailed
        ) {
          from = 0.5;
          to = 1;
          duration = CONST.uxEnterDuration;
        }

        finishAnimation();

        animation = root.animate(
          [
            { opacity: from },
            { opacity: to },
          ],
          {
            duration,
            easing: CONST.uxEasing,
            fill: 'forwards',
          }
        );

        commitAnimation();
      }
    }
    const controller = new AbortController();

    window.addEventListener(CONST.onFetchingStart, (onPageChange as any), {
      signal: controller.signal
    });
    window.addEventListener(CONST.onFetchingEnd, (onPageChange as any), {
      signal: controller.signal
    });
    window.addEventListener(CONST.onFetchingFailed, (onPageChange as any), {
      signal: controller.signal
    });

    return () => {
      controller.abort();
    }
  }, []);
}
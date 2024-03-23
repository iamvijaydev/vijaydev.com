import type {
  MetaProps,
  HistoryChangeEventData,
  PageChangeEventData,
  MetaPropsAndTocEventData,
  ThemeChangeEventData,
  ThemeType,
  PageMaskEventData,
} from "types";
import { CONST } from "consts";
import { TocEntry } from "@stefanprobst/rehype-extract-toc";

export const dispatchHistoryChange = (
  pathname: string,
  search: string = ""
) => {
  window.dispatchEvent(
    new CustomEvent<HistoryChangeEventData>(CONST.onHistoryChanged, {
      detail: {
        from: {
          pathname,
          search,
        },
        to: {
          pathname: window.location.pathname,
          search: window.location.search,
        },
      },
    })
  );
};

export const dispatchFetchingStart = () => {
  window.dispatchEvent(
    new CustomEvent<PageChangeEventData>(CONST.onFetchingStart, {
      detail: {
        type: CONST.onFetchingStart,
      },
    })
  );
};

export const dispatchFetchingEnd = () => {
  window.dispatchEvent(
    new CustomEvent<PageChangeEventData>(CONST.onFetchingEnd, {
      detail: {
        type: CONST.onFetchingEnd,
      },
    })
  );
};

export const dispatchFetchingFailed = () => {
  window.dispatchEvent(
    new CustomEvent<PageChangeEventData>(CONST.onFetchingFailed, {
      detail: {
        type: CONST.onFetchingFailed,
      },
    })
  );
};

export const dispatchMetaPropsChange = (
  metaProps: MetaProps,
  tableOfContents?: TocEntry[]
) => {
  window.dispatchEvent(
    new CustomEvent<MetaPropsAndTocEventData>(CONST.onMetaPropsAndTocChange, {
      detail: {
        metaProps,
        tableOfContents,
      },
    })
  );
};

export const dispatchThemeChange = (current: ThemeType) => {
  window.dispatchEvent(
    new CustomEvent<ThemeChangeEventData>(CONST.onThemeChange, {
      detail: {
        current,
      },
    })
  );
};

export const dispatchShowPageMask = () => {
  window.dispatchEvent(
    new CustomEvent<PageMaskEventData>(CONST.onPageMaskEvent, {
      detail: {
        isVisible: true,
      },
    })
  );
};

export const dispatchHidePageMask = () => {
  window.dispatchEvent(
    new CustomEvent<PageMaskEventData>(CONST.onPageMaskEvent, {
      detail: {
        isVisible: false,
      },
    })
  );
};
import { renderToString } from "react-dom/server";
import { type AppProps, App } from "~App";

export const render = (data: AppProps) => renderToString(<App {...data} />);

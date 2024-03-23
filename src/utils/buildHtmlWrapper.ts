import type { BuildHtmlWrapperProps } from "types";
import { getSandpackCssText } from "@codesandbox/sandpack-react";

export const buildHtmlWrapper = ({
  metaProps,
  header,
  body,
  footer,
  tableOfContents,
}: BuildHtmlWrapperProps) => {
  return [
    "<!DOCTYPE html>",
    '<html lang="en" data-scroll="0">',
    /**/"<head>",
    /****/'<meta charSet="UTF-8">',
    /****/'<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    /****/'<meta name="color-scheme" content="dark light">',

    /****/`<title>${metaProps.title}</title>`,
    /****/`<meta property="og:title" content="${metaProps.title}" >`,

    /****/`<meta name="description" content="${metaProps.description}" >`,
    /****/`<meta property="og:description" content="${metaProps.description}" >`,

    /****/metaProps.image
      ? `<meta property="og:image" content="${metaProps.image}" >`
      : "",
    /****/metaProps.robots
      ? `<meta name="robots" content="${metaProps.robots}" >`
      : "",
    /****/metaProps.canonical
      ? `<link rel="canonical" href="https://vijaydev.com/${metaProps.canonical.permalink}" />`
      : "",

    /****/`<script type="importmap">${process.env.importmap}</script>`,

    /****/'<link rel="preconnect" href="https://fonts.googleapis.com">',
    /****/'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    /****/'<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">',

    /****/`<link rel="stylesheet" href="/assets/css/style.css">`,
    /****/'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css">',
    /****/`<style id="sandpack" key="sandpack-css">${getSandpackCssText()}</style>`,

    /**/"</head>",

    /**/'<body id="top" class="font-sans antialiased md:subpixel-antialiased text-wrap md:text-balance">',
    /****/`<div id="header-island" class="island-container">${header}</div>`,
    /****/`<div id="page-island" class="p-center island-container grad-1">${body}</div>`,
    /****/`<div id="footer-island" class="island-container">${footer}</div>`,
    /****/'<script type="module">',
    /******/'import { hydrateHeaderFooter, loadPageComponent } from "main";',
    /******/`hydrateHeaderFooter({pathname: '${metaProps.pathname}', title: '${metaProps.title}', ${tableOfContents && tableOfContents.length ? "tableOfContents:" + JSON.stringify(tableOfContents) : ""}});`,
    /******/`loadPageComponent('${metaProps.pathname}');`,
    /****/"</script>",
    /**/"</body>",
    "</html>",
  ].join("");
};

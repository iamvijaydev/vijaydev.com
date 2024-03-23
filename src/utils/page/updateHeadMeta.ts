import { MetaProps } from 'types';

export const updateHeadMeta = (metaProps: MetaProps) => {
  document.head.querySelector('title')!.innerHTML = metaProps.title;
  document.head.querySelector('meta[property="og:title"]')?.setAttribute('content', metaProps.title);
  
  document.head.querySelector('meta[name="description"]')?.setAttribute('content', metaProps.description);
  document.head.querySelector('meta[property="og:description"]')?.setAttribute('content', metaProps.description);

  if (metaProps.image) {
    let imageMeta = document.head.querySelector('meta[property="og:image"]');
    
    if (imageMeta) {
      imageMeta.setAttribute('content', metaProps.image);
    } else {
      imageMeta = document.createElement('meta');
      imageMeta.setAttribute('property', 'og:image');
      imageMeta.setAttribute('content', metaProps.image);
      document.head.appendChild(imageMeta);
    }
  } else {
    document.head.querySelector('meta[property="og:image"]')?.remove();
  }

  if (metaProps.robots) {
    let robotsMeta = document.head.querySelector('meta[name="robots"]');
    
    if (robotsMeta) {
      robotsMeta.setAttribute('content', metaProps.robots);
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      robotsMeta.setAttribute('content', metaProps.robots);
      document.head.appendChild(robotsMeta);
    }
  } else {
    document.head.querySelector('meta[name="robots"]')?.remove();
  }
  
  if (metaProps.canonical) {
    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://vijaydev.com/${metaProps.canonical.permalink}`);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', `https://vijaydev.com/${metaProps.canonical.permalink}`);
      document.head.appendChild(canonicalLink);
    }
  } else {
    document.head.querySelector('link[rel="canonical"]')?.remove();
  }
}
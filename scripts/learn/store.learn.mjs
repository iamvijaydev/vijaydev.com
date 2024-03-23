const topics = new Map();
const chapters = new Map();
const featured = [];
const promoted = [];

const store = {
  topics,
  chapters,
  featured,
  promoted,
};

export const addTopic = (slug, title) => {
  if (!store.topics.has(slug)) {
    store.topics.set(slug, {
      slug,
      title,
      chapters: [],
    });
  }
}

export const addTopicDetails = (slug, details) => {
  const item = store.topics.get(slug);

  if (item) {
    store.topics.set(slug, { ...item, ...details });
  }
}

export const addTopicChapter = (topicSlug, slug, details) => {
  const topic = store.topics.get(topicSlug);

  if (topic && details.order !== -1) {
    topic.chapters.push({ slug, title: details.title, description: details.description, image: details.image, order: details.order });
  }

  if (!store.chapters.has(slug)) {
    store.chapters.set(slug, details);
  }

  if (details.featured) {
    store.featured.push({
      slug,
      topic: topicSlug
    })
  }
  if (details.promoted) {
    store.promoted.push({
      slug,
      topic: topicSlug
    })
  }
}

export const getChapters = () => {
  return Array.from(store.chapters.values())
    .map((item) => {
      let canonical = undefined;
      let sourceItem = item;

      if (item.canonical && item.canonical.length) {
        const found = store.chapters.get(item.canonical);

        if (found) {
          sourceItem = found;
          canonical = {
            slug: found.slug,
            title: found.title,
            permalink: `learn/${item.topicSlug}/${found.slug}`
          }
        }
      }

      const topic = store.topics.get(item.topicSlug);

      let prev = undefined;

      if (sourceItem.order > 1) {
        const found = topic.chapters.find((chapter) => chapter.order === sourceItem.order - 1);

        if (found) {
          prev = {
            slug: found.slug,
            title: found.title
          }
        }
      }

      let next = undefined;

      if (sourceItem.order < topic.chapters.length) {
        const found = topic.chapters.find((chapter) => chapter.order === sourceItem.order + 1);

        if (found) {
          next = {
            slug: found.slug,
            title: found.title
          }
        }
      }

      return {
        fullPath: item.fullPath.replace('src/', './'),
        slug: item.slug,
        title: item.title,
        description: item.description,
        image: item.image,
        robots: item.robots,
        year: item.year,
        month: item.month,
        topic: {
          slug: topic.slug,
          title: topic.title
        },
        canonical,
        prev,
        next
      }
    });
}

export const getTopics = () => {
  return Array.from(store.topics.values()).map(item => ({
    ...item,
    chapters: item.chapters.sort(sortByOrder)
  }))
}

const sortByPublished = (a, b) => {
  if (a.year === b.year) {
    return a.month - b.month;
  }

  return a.year - b.year;
}

const sortByOrder = (a, b) => {
  return a.order - b.order;
}

/**
 * 
 * @param {('featured'|'promoted')} type 
 * @returns 
 */
const getSpecialChapters = (type) => () => {
  return store[type].sort(sortByPublished).map((item) => {
    const topic = store.topics.get(item.topic);
    const {
      slug,
      year,
      month,
      title,
      description,
      image
    } = store.chapters.get(item.slug);

    return {
      slug,
      year,
      month,
      title,
      description,
      image,
      topic: {
        slug: topic.slug,
        name: topic.name
      }
    }
  });
}

export const getFeaturedChapters = getSpecialChapters('featured');

export const getPromotedChapters = getSpecialChapters('promoted');

export const getStore = () => {
  return store;
}
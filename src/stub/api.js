export const randomHex = () => {
  let hex = "";
  const hexCharacters = "0123456789abcef";
  for (let i = 0; i < 24; i++) {
    hex += hexCharacters.charAt(
      Math.floor(Math.random() * hexCharacters.length)
    );
  }
  return hex;
};

export const getSavedArticles = (article) => {
  return new Promise((resolve, reject) => {
    resolve({
      id: randomHex(),
      url: article.url,
      title: article.title,
      publishedAt: article.publishedAt,
      source: {
        name: article.source.name,
      },
      urlToImage: article.urlToImage,
      description: article.description,
    });
  });
};

import React from 'react';
import Helmet from 'react-helmet';

const metadata = {
  title: 'Wonton Warrior',
  description:
    'The official website for Wonton Warrior, 135A Burwood Rd Burwood Sydney, a young Chinese restaurant offering handmade wontons, dumplings, and noodles at a reasonable price to suit all taste palettes.',
  author: 'James Lin',
  lang: 'en',
  url: 'https://wontonwarrior.com',
};

const SEO = () => {
  const { title, description, author, lang, url } = metadata;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate="%s"
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `author`,
          content: author,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
};

export default SEO;

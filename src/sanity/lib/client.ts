// import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Correct
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Correct
//   apiVersion: '2021-08-31',
//   useCdn: true,
// });

// const builder = imageUrlBuilder(client);

// export const urlFor = (source: any) => builder.image(source);

// export default client;
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { Image } from '@sanity/types'; // Import Sanity Image type

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Correct
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Correct
  apiVersion: '2021-08-31',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: Image | string) => builder.image(source);

export default client;

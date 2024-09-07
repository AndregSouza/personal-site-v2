import createMDX from '@next/mdx'
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'api.microlink.io', // Microlink Image Preview
      pathname: '**',

    },]
  }
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  defaultLang: "js",
  keepBackground: false,
  theme: {
    dark: "github-dark-high-contrast",
    light: "github-light",
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
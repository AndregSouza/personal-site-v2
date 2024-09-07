import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='mb-2'> {children} </h1>
    ),

    h2: ({ children }) => (
      <h2 className='mt-12 mb-6'> {children} </h2>
    ),

    h3: ({ children }) => (
      <h3 className='mt-6 mb-2'> {children} </h3>
    ),

    ol: ({ children }) => (
      <ol className='list-decimal list-outside pl-7 mb-4 marker:text-muted-foreground'> {children} </ol>
    ),

    ul: ({ children }) => (
      <ul className='list-disc list-outside pl-7 mb-4 marker:text-muted-foreground'> {children} </ul>
    ),

    li: ({ children }) => (
      <li className='my-4 pl-1'> {children} </li>
    ),

    p: ({ children }) => (
      <p className='text-base mb-6 leading-7'> {children} </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className=' border-l-4 pl-4 font-serif text-base mb-6 leading-7'> {children} </blockquote>
    ),

    ...components,
  }
}
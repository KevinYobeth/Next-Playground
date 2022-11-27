import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import { AVAILABLE_PLAYGROUND } from '../../constants';
import { Playground } from '../../types';

const PlaygroundChip = (playground: Playground) => (
  <Link className='bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded-md' key={playground.title} href={playground.url}>
    {playground.title}
  </Link>
);

export default function ChooserLayout({ children }: PropsWithChildren) {
  const { pathname } = useRouter();

  const page = AVAILABLE_PLAYGROUND.find((playground) => playground.url === pathname);

  const title = pathname === '/' ? 'Playground - Kevin Yobeth' : 'Playground - ' + page?.title;
  const description = page?.description;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://playground.kevinyobeth.com' />
        <meta property='og:image' content='https://playground.kevinyobeth.com/og-image.png' />
      </Head>
      <div className='relative flex flex-col justify-between w-screen h-screen border-red-700'>
        {children}
        <div className='p-5 absolute z-50 w-full bottom-0'>
          <div className='bg-teal-400 p-5 rounded-md'>
            <h1 className='text-2xl font-bold'>Available Playgrounds</h1>
            <div className='flex flex-wrap gap-3 mt-2'>
              {AVAILABLE_PLAYGROUND.map((playground) => PlaygroundChip(playground))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

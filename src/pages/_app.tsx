import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import ChooserLayout from '../components/layouts/Chooser';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChooserLayout>
      <Component {...pageProps} />
    </ChooserLayout>
  );
}

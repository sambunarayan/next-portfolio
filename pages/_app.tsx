import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import PageHead from '@/components/PageHead';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <PageHead/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}


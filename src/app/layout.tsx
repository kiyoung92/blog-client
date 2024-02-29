import Header from './components/header/header';
import { Providers } from './providers';
import './styles/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          <main className="wrap">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

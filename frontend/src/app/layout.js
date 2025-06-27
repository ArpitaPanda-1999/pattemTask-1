import './globals.css';
import { ApplicationProvider } from '@/context/ApplicationContext';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Job Board',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ApplicationProvider>
          <Navbar />
          <main className="p-6 max-w-4xl mx-auto">{children}</main>
        </ApplicationProvider>
      </body>
    </html>
  );
}

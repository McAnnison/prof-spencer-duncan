import { createRootRoute, HeadContent, Link, Outlet, Scripts } from '@tanstack/react-router';
import { useEffect } from 'react';
import '../styles.css';

function PreviewHostBridge() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'preview:resize') {
        document.body.style.setProperty('--preview-width', `${event.data.width ?? 1280}px`);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return null;
}

export function AppErrorComponent({ error }: { error: Error }) {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f4f3ee] px-6 text-[#18211f]">
      <div className="max-w-lg border border-[#d9dcd5] bg-white p-8 shadow-xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#71894e]">Error</p>
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-3 text-sm text-[#65706b]">{error.message}</p>
        <Link to="/" className="mt-6 inline-flex rounded-sm bg-[#254b43] px-4 py-3 text-sm font-medium text-white hover:bg-[#183c34]">Return home</Link>
      </div>
    </main>
  );
}

function RootComponent() {
  return (
    <>
      <HeadContent />
      <PreviewHostBridge />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="min-h-screen antialiased">
        <Outlet />
      </div>
      <Scripts />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: AppErrorComponent,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Spencer Duncan — Product Designer & Frontend Engineer' },
      { name: 'description', content: 'Portfolio of Spencer Duncan, a product designer and frontend engineer creating calm, useful digital experiences.' },
      { name: 'theme-color', content: '#f4f3ee' },
    ],
  }),
});

import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router';
import { useEffect } from 'react';

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
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="max-w-lg rounded-2xl border border-rose-500/40 bg-slate-900 p-8 shadow-2xl shadow-rose-500/10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-rose-300">Error</p>
        <h1 className="text-2xl font-semibold">Something broke</h1>
        <p className="mt-3 text-sm text-slate-300">{error.message}</p>
      </div>
    </div>
  );
}

function RootComponent() {
  return (
    <>
      <HeadContent />
      <PreviewHostBridge />
      <div className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <Outlet />
      </div>
      <Scripts />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: AppErrorComponent,
});

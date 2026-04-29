// app/mchd/layout.tsx
// This file intentionally replaces the root layout for all /mchd routes.
// Your site's header/navbar/footer will NOT appear here.

export const metadata = {
  title: 'MCHD — Device Upgrade Schedule',
}

export default function MCHDLayout({ children }: { children: React.ReactNode }) {
  return children
}

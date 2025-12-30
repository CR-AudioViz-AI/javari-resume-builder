import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Resume Builder | Javari AI',
  description: 'Create ATS-optimized resumes with AI. Land more interviews with professionally crafted resumes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

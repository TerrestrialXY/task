import '@/app/globals.css';

export const metadata = {
  title: 'War Games',
  description: 'War Games login',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

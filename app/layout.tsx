import './globals.css'

export const metadata = {
  title: 'Account Abstraction',
  description: 'Social Wallet App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex flex-col items-center'>
        <h1 className="text-2xl font-bold">Account Abstraction</h1>
          {children}
        </div>
      </body>
    </html>
  )
}

import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>

      <body className="flex flex-col items-center bg-stone-50">
        <div className="bg-white max-w-7xl min-h-screen border-x border-solid border-gray-200 p-12 w-full flex flex-col gap-20 items-center text-slate-700">
          <ErrorBoundary fallback={<ErrorComponent />}>
            <div className="bg-white max-w-7xl min-h-screen border-x border-solid border-gray-200 p-12 w-full flex flex-col gap-20 items-center text-slate-700">
              {children}
            </div>
          </ErrorBoundary>
        </div>
      </body>
    </html>
  )
}

function ErrorBoundary({
  children,
  fallback,
}: {
  children: React.ReactNode
  fallback: React.ReactNode
}) {
  try {
    return children
  } catch (error) {
    console.error('Caught an error:', error)
    return fallback
  }
}

function ErrorComponent() {
  return <div>Something went wrong. Please try again later.</div>
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          Social Integration will get this live for you
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-white transition-colors hover:bg-secondary/90"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YscDzGw8B96
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-gray-950">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <LeafIcon className="h-6 w-6 text-green-500" />
          <span className="ml-2 text-lg font-bold text-gray-900 dark:text-gray-50">Eco Fashion: Bling</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            prefetch={false}
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 dark:text-gray-400"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gradient-to-r from-green-500 to-green-700 dark:bg-gradient-to-r dark:from-green-700 dark:to-green-900">
          <div className="container space-y-10 xl:space-y-16">
            <div className="flex flex-col items-center space-y-4 text-center text-gray-50">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Eco Fashion: Bling
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Sustainable clothing made from recycled plastic bottles and cotton. Elevate your style while
                  protecting the planet.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-green-700 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-green-800 dark:text-gray-50 dark:hover:bg-green-900 dark:focus-visible:ring-green-950"
                  prefetch={false}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center">
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Nehru Jacket"
                className="rounded-lg object-cover"
              />
              <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-50">Nehru Jacket</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Made from recycled plastic bottles</p>
              <Button className="mt-4">Buy Now</Button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/placeholder.svg" width={400} height={400} alt="T-Shirt" className="rounded-lg object-cover" />
              <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-50">T-Shirt</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Made from organic cotton</p>
              <Button className="mt-4">Buy Now</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gradient-to-r from-green-500 to-green-700 p-6 md:py-12 w-full text-gray-50 dark:bg-gradient-to-r dark:from-green-700 dark:to-green-900">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Our Story
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Nehru Jacket
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              T-Shirt
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Sustainability
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Refund Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Email
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Phone
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Address
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LeafIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}
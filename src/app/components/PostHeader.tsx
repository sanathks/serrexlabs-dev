import Image from "next/image";

export function PostHeader() {
  return (
    <div className="mt-9 mb-16 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto lg:px-28 px-0 max-w-2xl lg:max-w-5xl">
            <div className="mx-auto">
              <div className="flex gap-4 mx-auto items-stretch">
                <Image src="/logo.svg" width={500} height={500} alt="SERrex Labs" className="w-10 h-10" />
                <h3 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl">SERrex Labs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

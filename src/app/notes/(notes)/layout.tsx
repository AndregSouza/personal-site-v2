import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftCircle } from "lucide-react"

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <div className="w-full pb-24 flex flex-col max-w-3xl p-6 gap-4 md:pt-8 md:px-8 md:pb-24 md:gap-6 lg:gap-8 lg:pt-16 lg:px-16 lg:pb-24 self-center">
            <article>
                {children}
            </article>
        </div>
    )
}

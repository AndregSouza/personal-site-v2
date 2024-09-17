import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftCircle } from "lucide-react"

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return (
        <div className="w-full flex flex-col max-w-3xl p-6 gap-4 md:p-8 md:gap-6 lg:gap-8 lg:p-16 self-center">
            <article>
                {children}
            </article>
        </div>
    )
}

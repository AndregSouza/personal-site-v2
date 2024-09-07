import {
    Dock,
    DockCard,
    DockDivider,
    useDock,
} from "@/components/cultui/dockmac"
import { Twitter } from "lucide-react"


// Example usage of the Dock component with animated cards and dividers

const DockDemo = () => {
    const gradients = [
        "https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg",
        "https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg",
        null,
        "https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut-p-130x130q80.jpeg",
    ]

    const openIcons = [
        <Twitter className="h-8 w-8 fill-black stroke-black rounded-full" />,
        <Twitter className="h-8 w-8 fill-black stroke-black rounded-full" />,
        <Twitter className="h-8 w-8 fill-black stroke-black rounded-full" />,
        <Twitter className="h-8 w-8 fill-black stroke-black rounded-full" />,
        <Twitter className="h-8 w-8 fill-black stroke-black rounded-full" />,
        <Twitter className="h-8 w-8 fill-black stroke-black rounded-full" />,
        <Twitter className="h-8 w-8 fill-black stroke-black rounded-full" />, // skip
        <Twitter className="h-8 w-8 fill-black stroke-black rounded-full" />,
    ]

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Dock>
                {gradients.map((src, index) =>
                    src ? (
                        <DockCard key={src} id={`${index}`}>
                            {openIcons[index]}
                        </DockCard>
                    ) : (
                        <DockDivider key={index} />
                    )
                )}
            </Dock>
        </div>
    )
}

export default DockDemo

import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function Notes() {
	return (
		<div className="w-full flex flex-col max-w-3xl p-6 gap-4 md:p-8 md:gap-6 lg:gap-8 lg:p-16 self-center">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Notes</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<h1> Notes </h1>
			<ul className="flex flex-1 flex-col gap-2">
				<li>
					<Link className="w-full justify-between p-2 -mx-2" href="/notes/redesigning-my-portfolio">
						<Button variant="ghost" size="lg" className="w-[calc(100%+32px)] justify-between px-4 -mx-4">
							<h3>Redesigning my portfolio</h3>
							<Separator className="mx-4 flex grow shrink w-full mix-blend-multiply dark:mix-blend-lighten"></Separator>
							<span className="tabular text-sm font-normal text-muted-foreground self-center">Sep 2024</span>
						</Button>
					</Link>
				</li>
				<li>
					<Link className="w-full justify-between p-2 -mx-2" href="/notes/the-zettelkasten-method">
						<Button variant="ghost" size="lg" className="w-[calc(100%+32px)] justify-between px-4 -mx-4">
							<h3>The Zettelkasten method</h3>
							<Separator className="mx-4 flex grow shrink w-full mix-blend-multiply dark:mix-blend-lighten"></Separator>
							<span className="tabular text-sm font-normal text-muted-foreground self-center">Feb 2023</span>
						</Button>
					</Link>
				</li>
				<li>
					<Link className="w-full justify-between p-2 -mx-2" href="/notes/how-to-study-&-learn">
						<Button variant="ghost" size="lg" className="w-[calc(100%+32px)] justify-between px-4 -mx-4">
							<h3>How to study & learn</h3>
							<Separator className="mx-4 flex grow shrink w-full mix-blend-multiply dark:mix-blend-lighten"></Separator>
							<span className="tabular text-sm font-normal text-muted-foreground self-center">Feb 2023</span>
						</Button>
					</Link>
				</li>
				<li>
					<Link className="w-full justify-between p-2 -mx-2" href="/notes/conversational-interfaces">
						<Button variant="ghost" size="lg" className="w-[calc(100%+32px)] justify-between px-4 -mx-4">
							<h3>Conversational interfaces</h3>
							<Separator className="mx-4 flex grow shrink w-full mix-blend-multiply dark:mix-blend-lighten"></Separator>
							<span className="tabular text-sm font-normal text-muted-foreground self-center">Dec 2018</span>
						</Button>
					</Link>
				</li>
			</ul>
		</div>
	);
}

import { Card, CardVideo, CardImage, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator";
import { LinkPreview } from "@/components/aceternity/link-preview";

export default function Home() {
  return (
    <div className="w-full flex flex-col max-w-3xl p-6 gap-4 md:p-8 md:gap-6 lg:gap-8 lg:p-16 self-center">
      <section className="flex flex-1 flex-col gap-4">
        <Avatar>
          <AvatarImage src="/profilePicture.png" alt="Profile Picture" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-3">
          <div>
            <h1> Andre Souza </h1>
            <h2 className="font-normal text-muted-foreground"> Senior Product Designer</h2>
          </div>
          <span className="text-base leading-relaxed"> Welcome to <em>my space on the internet.</em> I’m a designer who codes and crafts product strategies. Currently working at{" "}
            <LinkPreview
              isStatic={true}
              imageSrc="/stone_preview.png"
              url="https://www.stone.com.br"
              quality={100}>

              <Button variant="link" className="px-0 py-0 h-4 text-base underline underline-offset-4 inline-flex items-center justify-center">
                Stone
              </Button>
            </LinkPreview>
            .
          </span>
        </div>
      </section>

      <Separator></Separator>

      <section className="flex flex-1 flex-col gap-6">
        <div className="flex justify-between place-items-center">
          <h2> Projects </h2>
          <Link href="/projects">
            <Button variant="ghost" size="sm"> View all </Button>
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <Link href="/projects/linkme">
            <Card>
              <CardImage src="/projects/linkme/linkme_home.png" className="p-0 rounded-b-none rounded-t-lg"></CardImage>
              <CardHeader>
                <CardTitle className="text-2xl font-medium">Link.me</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Evolving a payment link app for brick-and-mortar businesses to sell online.</CardDescription>
              </CardContent>
            </Card>
          </Link>
          <Link href="/projects/laureate">
            <Card>
              <CardImage src="/projects/laureate/Laureate-Home-p-1080.png" className="p-0 rounded-b-none rounded-t-lg"></CardImage>
              <CardHeader>
                <CardTitle className="text-2xl font-medium">Laureate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Redesigning the e-commerce experience for students in distance learning.</CardDescription>
              </CardContent>
            </Card>
          </Link>
          <Link href="/projects/lumini">
            <Card>
              <CardImage src="/projects/lumini/home_lumini-p-1080.png" className="p-0 rounded-b-none rounded-t-lg"></CardImage>
              {/*} <CardVideo autoPlay loop muted playsInline src="/mercury.mp4"></CardVideo> {*/}
              <CardHeader>
                <CardTitle className="text-2xl font-medium">Lumini</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Building a career choice experience for students with Lumini App.</CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <Separator></Separator>

      <section className="flex flex-1 flex-col gap-6">
        <div className="flex justify-between place-items-center">
          <h2> Notes </h2>
          <Link href="/notes">
            <Button variant="ghost" size="sm"> View all </Button>
          </Link>
        </div>
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
      </section>
    </div>
  );
}

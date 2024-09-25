import { Card, CardImage, CardDescription, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link"

export default function Home() {

  return (
    <div className="w-full pb-24 flex flex-col max-w-3xl p-6 gap-4 md:pt-8 md:px-8 md:pb-24 md:gap-6 lg:gap-8 lg:pt-16 lg:px-16 lg:pb-24 self-center">
      <h1> Projects </h1>
      <section className="flex flex-1 flex-col gap-4">
        <div className="grid sm:grid-cols-1 gap-4">
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
    </div>
  );
}

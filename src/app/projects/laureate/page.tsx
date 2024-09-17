import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import { AreaChartHero } from "@/components/tremor-components/areachart";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full flex flex-col max-w-3xl p-6 gap-4 md:p-8 md:gap-6 lg:gap-8 lg:p-16 self-center">

      <Button asChild size="default" variant="outline" className="w-fit">
        <Link href="/projects" className="flex flex gap-2">
          <ArrowLeftCircle className="h-4 w-4" aria-label="Back" /> Projects
        </Link>
      </Button>

      <article>

        <h1> Laureate </h1>
        <p> Laureate is a global leader in higher education with more than 70 educational institutions and 1 million students in the Americas, Europe, Asia, Africa, and the Middle East. </p>
        <p> I was responsible for the research, interaction design, and copywriting for Laureate, working with two visual designers to redesign the e-commerce experience. </p>
        <img src="../projects/laureate/Laureate-Home-p-1080.png" alt="" />

        <h2> Conveying Trust of an Education Titan </h2>
        <p> The Laureate company approached us to help them communicate the best of a robust education group and bring out the critical information for people to enroll in online distance learning. </p>
        <p> The project involved redesigning the Laureate e-commerce website and optimizing the enrollment flow of information needed for students in online distance learning. </p>
        <p> With a three-month timeline, we focused on delivering the education experience more effectively and meaningfully. </p>
        <img src="../projects/laureate/Overview_Laureate-p-1080.png" alt="" />
        <h2> Laureate Immersion </h2>
        <p> We started the project by investigating the requirements for online distance learning and the nature of education service provision thoroughly and quickly. As a result, we conducted ethnographic research to understand the three stakeholders’ perspectives in the service with students, institutions managers, and university center owners. </p>
        <h2>How do you choose online courses?</h2>
        <p> We interviewed 6 university center owners, 12 undergrad students, and 4 institutions managers in São Paulo. We aimed to gather insights into how they feel, perceive, and think about online distance learning. </p>
        <div className="flex flex-col gap-8 mb-4">
          <div className="flex flex-row gap-8">
            <img className="w-24 h-24 md:w-40 md:h-40 rounded-full" src="../projects/laureate/icon_mec.svg" alt="" />
            <div className="content-center">
              <h3> “The course needs approval by MEC.” </h3>
              <p> Students felt insecure navigating the old website because they could not determine if institutions and courses had approval by MEC, the Brazilian federal education agency. </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <img className="w-24 h-24 md:w-40 md:h-40 rounded-full" src="../projects/laureate/icon_person.svg" alt="" />
            <div className="content-center">
              <h3> “I want a university center close to my home or work.” </h3>
              <p> According to the Brazilian federal education agency, online distance learning format students must visit a university center for presential tests. </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <img className="w-24 h-24 md:w-40 md:h-40 rounded-full" src="../projects/laureate/icon_certificate.svg" alt="" />
            <div className="content-center">
              <h3> “I want to use my ENEM score to skip the admission exam.” </h3>
              <p> Students could get discounts that would make up to 100% of the monthly fee without even sitting to an admission exam, determined by their scores on ENEM. </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <img className="w-24 h-24 md:w-40 md:h-40 rounded-full" src="../projects/laureate/icon_lamp.svg" alt="" />
            <div className="content-center">
              <h3> “I am doing online graduation to help me get a better job.” </h3>
              <p> Students who opted for online graduation envisioned the courses as an investment to replace their present job for future ones with better quality of life. </p>
            </div>
          </div>
        </div>
        <p> Insights from our discovery work revealed many areas of improvement for content that connects to the user and transfers the education quality and trustworthiness of Laureate to the website. </p>
        <h2> Organizing Content and Workflows </h2>
        <p> Before we started to design, it was essential to have a holistic approach to each institution’s enrollment flow and existing content required for the course. </p>
        <p> After we mapped out the workflows, we came up with a single proposal that could improve user experience and optimize the development and maintenance of the flow during a moment of heavy online traffic. </p>
        <img src="../projects/laureate/workflow-laureate-p-2000.png" alt="" />
        <p> With the new workflow, Laureate can track information at each step by the user if they abandoned the funnel halfway through, enabling them to send more relevant and personalized information. </p>
        <h2> Introducing Laureate </h2>
        <p> We designed the new e-commerce experience to convey trust for students with straightforward navigation and content that showcases the university brands, institutions, and courses approved by MEC. </p>
        <video autoPlay loop muted playsInline src="../projects/laureate/Coursepage-compress-transcode.mp4" />
        <h3> Designed for scale </h3>
        <p> We conceived the visual design as a flexible system that adapts the new application model to all universities’ brand systems, focused on users’ actions in each journey step. </p>
        <video autoPlay loop muted playsInline src="../projects/laureate/desktop-linkme_1-transcode.mp4" />
        <h3> Quick application process </h3>
        <p> With a few steps and questions, students could apply for the courses. We fast-tracked the process using the discounts provided by the ENEM scores - a perfect match of motivation and ease of use. </p>
        <video autoPlay loop muted playsInline src="../projects/laureate/Screens-Motion-1-transcode.mp4" />
        <h3> Easy decision making </h3>
        <p> We designed the new course page to bring all the essential information for students. We tell a story presenting the seal of approval by MEC, a summary of the course, the extent of its content with an online class preview, leading market indicators for the profession, and frequently asked questions about the occupation. </p>
        <h2> Results </h2>
        <p> The redesign of the e-commerce and the enrollment flow of Laureate had a significant impact on acquisition, activation and retention metrics. </p>

        <div className="grid grid-rows mt-4 gap-6 sm:grid-cols-3 lg:grid-cols-3">
          <Card>
            <CardHeader className="py-4">
              <CardDescription> Page views </CardDescription>
              <CardTitle>+70%</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="py-4">
              <CardDescription> Conversion </CardDescription>
              <CardTitle>+200%</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="py-4">
              <CardDescription> Enrollment </CardDescription>
              <CardTitle>+225%</CardTitle>
            </CardHeader>
          </Card>
          {/*}
          <Card>
            <CardHeader>
              <CardDescription> Growth </CardDescription>
              <CardTitle>+50%</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChartHero
                data={[
                  { date: "Jan 22", SolarPanels: 0 },
                  { date: "Feb 22", SolarPanels: 160 },
                  { date: "Mar 22", SolarPanels: 1249 },
                  { date: "Apr 22", SolarPanels: 1365 },
                  { date: "May 22", SolarPanels: 3104 },
                  { date: "Jun 22", SolarPanels: 4345 },
                  { date: "Jul 22", SolarPanels: 5608 },
                  { date: "Aug 22", SolarPanels: 6154 },
                  { date: "Sep 22", SolarPanels: 6686 },
                  { date: "Oct 22", SolarPanels: 7166 },
                  { date: "Nov 22", SolarPanels: 7631 },
                  { date: "Dec 22", SolarPanels: 8066 },
                ]}
                categories={["SolarPanels"]}
                colors={["indigo"]}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription> Activation Rate </CardDescription>
              <CardTitle>+50%</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChartHero
                data={[
                  { date: "Jan 22", SolarPanels: 0 },
                  { date: "Feb 22", SolarPanels: 160 },
                  { date: "Mar 22", SolarPanels: 1249 },
                  { date: "Apr 22", SolarPanels: 1365 },
                  { date: "May 22", SolarPanels: 3104 },
                  { date: "Jun 22", SolarPanels: 4345 },
                  { date: "Jul 22", SolarPanels: 5608 },
                  { date: "Aug 22", SolarPanels: 6154 },
                  { date: "Sep 22", SolarPanels: 6686 },
                  { date: "Oct 22", SolarPanels: 7166 },
                  { date: "Nov 22", SolarPanels: 7631 },
                  { date: "Dec 22", SolarPanels: 8066 },
                ]}
                categories={["SolarPanels"]}
                colors={["indigo"]}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription> Churn Rate </CardDescription>
              <CardTitle>+50%</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChartHero
                data={[
                  { date: "Jan 22", SolarPanels: 0 },
                  { date: "Feb 22", SolarPanels: 160 },
                  { date: "Mar 22", SolarPanels: 1249 },
                  { date: "Apr 22", SolarPanels: 1365 },
                  { date: "May 22", SolarPanels: 3104 },
                  { date: "Jun 22", SolarPanels: 4345 },
                  { date: "Jul 22", SolarPanels: 5608 },
                  { date: "Aug 22", SolarPanels: 6154 },
                  { date: "Sep 22", SolarPanels: 6686 },
                  { date: "Oct 22", SolarPanels: 7166 },
                  { date: "Nov 22", SolarPanels: 7631 },
                  { date: "Dec 22", SolarPanels: 8066 },
                ]}
                categories={["SolarPanels"]}
                colors={["indigo"]}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription> Revenue </CardDescription>
              <CardTitle>+50%</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChartHero
                data={[
                  { date: "Jan 22", SolarPanels: 0 },
                  { date: "Feb 22", SolarPanels: 160 },
                  { date: "Mar 22", SolarPanels: 1249 },
                  { date: "Apr 22", SolarPanels: 1365 },
                  { date: "May 22", SolarPanels: 3104 },
                  { date: "Jun 22", SolarPanels: 4345 },
                  { date: "Jul 22", SolarPanels: 5608 },
                  { date: "Aug 22", SolarPanels: 6154 },
                  { date: "Sep 22", SolarPanels: 6686 },
                  { date: "Oct 22", SolarPanels: 7166 },
                  { date: "Nov 22", SolarPanels: 7631 },
                  { date: "Dec 22", SolarPanels: 8066 },
                ]}
                categories={["SolarPanels"]}
                colors={["indigo"]}
              />
            </CardContent>
          </Card> {*/}
        </div>
      </article>
    </div>
  );
}

import Image from "next/image";

export default function Photos() {
  return (
    <div className="w-full flex flex-col max-w-3xl p-6 gap-4 md:p-8 md:gap-6 lg:gap-8 lg:p-16 self-center">
      <h1> Photos </h1>
      <section className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row justify-between">
          <h2> New York </h2>
          <p className="tabular text-muted-foreground"> 2024 </p>
        </div>

        <div className="relative w-full h-96">
          <Image alt="Mountains" src="/photography/newYork/landscape/DSCF1732.jpg" quality={100} fill sizes="100vw" className="rounded-sm object-cover" />
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 space-y-4">
          <Image priority src="/photography/newYork/portrait/DSCF1582.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image priority src="/photography/newYork/portrait/DSCF1585.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image priority src="/photography/newYork/portrait/DSCF1597.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image priority src="/photography/newYork/portrait/DSCF1603.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image priority src="/photography/newYork/portrait/DSCF1621.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image priority src="/photography/newYork/portrait/DSCF1649.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image priority src="/photography/newYork/portrait/DSCF1667.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1709.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1728.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1816.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1817.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1870.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1439.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1452.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1458.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1465.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1481.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1494.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1536.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1539.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/DSCF1552.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0040.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0062.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0069.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0076.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0084.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0090.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0093.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0097.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0099.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0120.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0161.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/portrait/IMG_0169.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
        </div>
        <div className="columns-1 gap-4 lg:columns-2 space-y-4">
          <Image src="/photography/newYork/landscape/DSCF1433.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1447.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1450.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1471.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1472.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1490.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1502.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1507.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1512.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1517.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1522.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1550.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1558.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1568.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1570.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1593.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1604.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1614.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1617.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1646.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1653.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1659.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1697.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1727.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1774.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/newYork/landscape/DSCF1806.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
        </div>
      </section>
      <section className="flex flex-1 flex-col gap-4">
        <div className="flex flex-1 flex-row justify-between">
          <h2> Toronto </h2>
          <p className="tabular text-muted-foreground"> 2022 </p>
        </div>

        <div className="relative w-full h-96">
          <Image src="/photography/toronto/landscape/DSCF0022.jpg" quality={100} fill sizes="100vw" alt="Image" className="rounded-sm object-cover" />
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 space-y-4">
          <Image src="/photography/toronto/portrait/DSCF0096.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/DSCF0069.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/DSCF0087.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/IMG_3599.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/IMG_3184.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/IMG_3185.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/IMG_3187.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/IMG_3192.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/IMG_3219.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/IMG_3249.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/IMG_3267.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/portrait/IMG_3273.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
        </div>
        <div className="columns-1 gap-4 lg:columns-2 space-y-4">
          <Image src="/photography/toronto/landscape/DSCF0029.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0037.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0041.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0063.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0072.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0074.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0099.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0111.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0113.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0118.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0127.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0130.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0138.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0144.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0147.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0180.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0223.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0224.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0267.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0268.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0271.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0274.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0275.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0307.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0310.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0400.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0414.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0417.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0435.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0437.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0439.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0442.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0447.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0448.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0457.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0460.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0478.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
          <Image src="/photography/toronto/landscape/DSCF0483.jpg" width={700} height={475} sizes="100vw" alt="Image" className="rounded-sm object-cover" />
        </div>
      </section>
    </div>
  )
}
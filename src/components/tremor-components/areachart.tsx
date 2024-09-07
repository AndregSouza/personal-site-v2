"use client";

import * as React from "react";
import { AreaChart } from '@tremor/react';

type ChartData = {
  date: string;
  SolarPanels: number
};

type AreaChartHeroProps = {
  data: ChartData[];
  categories: string[];
  colors: string[];
};

export function AreaChartHero({ data, categories, colors }: AreaChartHeroProps) {
  return (
    <AreaChart
      className="h-56 py-4"
      data={data}
      index="date"
      categories={categories}
      colors={colors}
      showLegend={false}
      onValueChange={(v) => console.log(v)}
      showYAxis={false}
      startEndOnly={true}
      curveType={'natural'}
    />
  );
}

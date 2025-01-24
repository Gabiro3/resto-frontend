"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Legend } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.js"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart.js"

const chartData = [
  { month: "January", drinks: 186, meals: 80 },
  { month: "February", drinks: 305, meals: 200 },
  { month: "March", drinks: 237, meals: 120 },
  { month: "April", drinks: 73, meals: 190 },
  { month: "May", drinks: 209, meals: 130 },
  { month: "June", drinks: 214, meals: 140 },
]

const chartConfig = {
  drinks: {
    label: "Drinks",
    color: "#8B4513", // SaddleBrown
  },
  meals: {
    label: "Meals",
    color: "#000000", // Black
  },
} satisfies ChartConfig

export default function Overview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="drinks" fill="var(--color-drinks)" radius={4} />
            <Bar dataKey="meals" fill="var(--color-meals)" radius={4} />
            {/* Legend Component for Chart Key */}
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{
                paddingTop: "10px",
                fontSize: "14px",
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total sales for the last six months.
        </div>
      </CardFooter>
    </Card>
  )
}


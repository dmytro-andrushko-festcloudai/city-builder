import { PieChart as MUIPieChart } from "@mui/x-charts/PieChart";

type PieChartProps = {
  data: { id: number; value: number; label: string }[];
};

export default function PieChart({ data }: PieChartProps) {
  return (
    <MUIPieChart
      series={[
        {
          data,
          innerRadius: 20,
          outerRadius: 100,
          paddingAngle: 2,
          cornerRadius: 5,
        },
      ]}
      width={400}
      height={200}
    />
  );
}

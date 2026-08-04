import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./PerformanceChart.css";

const data = [
  { day: "Mon", score: 65 },
  { day: "Tue", score: 72 },
  { day: "Wed", score: 78 },
  { day: "Thu", score: 82 },
  { day: "Fri", score: 88 },
  { day: "Sat", score: 91 },
  { day: "Sun", score: 95 },
];

function PerformanceChart() {
  return (
    <section className="performance-card">

      <div className="performance-header">

        <div>

          <h2>Performance Analytics</h2>

          <p>Interview performance over the last 7 days</p>

        </div>

        <div className="chart-tabs">

          <button className="active">Weekly</button>

          <button>Monthly</button>

        </div>

      </div>

      <ResponsiveContainer width="100%" height={350}>

        <AreaChart data={data}>

          <defs>

            <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">

              <stop offset="5%" stopColor="#4F8CFF" stopOpacity={0.45}/>

              <stop offset="95%" stopColor="#4F8CFF" stopOpacity={0}/>

            </linearGradient>

          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,.08)"
          />

          <XAxis
            dataKey="day"
            stroke="#94A3B8"
          />

          <YAxis
            stroke="#94A3B8"
          />

          <Tooltip
            contentStyle={{
              background:"#111827",
              border:"1px solid #2A3655",
              borderRadius:"16px",
              color:"#fff"
            }}
          />

          <Area
            type="monotone"
            dataKey="score"
            stroke="#4F8CFF"
            strokeWidth={4}
            fill="url(#scoreGradient)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </section>
  );
}

export default PerformanceChart;
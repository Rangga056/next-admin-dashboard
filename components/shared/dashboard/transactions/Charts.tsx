"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Monday",
    visit: 4000,
    click: 2400,
    amt: 2400,
  },
  {
    name: "Tuesday",
    visit: 3000,
    click: 1398,
    amt: 2210,
  },
  {
    name: "Wednesday",
    visit: 2000,
    click: 9800,
    amt: 2290,
  },
  {
    name: "Thursday",
    visit: 2780,
    click: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    visit: 1890,
    click: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    visit: 2390,
    click: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    visit: 3490,
    click: 4300,
    amt: 2100,
  },
];

const Charts = () => {
  return (
    <div className="h-[300px] md:h-[400px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#1e293b", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;

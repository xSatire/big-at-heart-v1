"use client";
import React from "react";
import {
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  RadialBar,
} from "recharts";

const AgeGroupGraph = ({ Obj }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={Obj}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          label={{ fill: "#666", position: "insideStart" }}
          background
          dataKey="count"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default AgeGroupGraph;

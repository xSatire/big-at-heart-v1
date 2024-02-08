"use client";
import React from "react";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from "recharts";

const PieChartGender = ({ Obj }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={500} height={400}>
        <Pie
          data={Obj}
          dataKey={"count"}
          nameKey={"name"}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          <Cell fill="#333333" />
          <Cell fill="#8884d8" />
          <Cell fill="#82ca9d" />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartGender;

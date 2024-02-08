"use client";
import React from "react";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const BarChartsAttendance = ({ Obj }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={400} data={Obj}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="signedUp" fill="#8884d8" />
        <Bar dataKey="attended" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartsAttendance;

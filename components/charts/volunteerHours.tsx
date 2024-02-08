"use client";
import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const VolunteeringHours = ({ Obj, dataK }: any) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={400} data={Obj}>
        <Line type="monotone" dataKey={dataK} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default VolunteeringHours;

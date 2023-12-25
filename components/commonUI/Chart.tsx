"use client";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";

type Props = {
  index: number;
  total: number;
  purchasePrice: number | any;
};

const Chart = ({ index, purchasePrice, total }: Props) => {
  return (
    <div
      className={
        index === 2
          ? "mt-20 w-full h-full flex flex-col gap-5 justify-center items-center"
          : "hidden"
      }
    >
      <p className="text-xl font-bold">
        {total > 0 ? `Total Sells:- ₹${total}` : "No sells"}
      </p>
      <div className="w-[360px] md:w-[700px] h-[400px] relative border-2 border-zinc-300 rounded-lg p-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            // width={300}
            // height={400}
            data={purchasePrice}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#3A72ED"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;

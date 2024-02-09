import BarChartsAttendance from "@/components/charts/barCharts";
import PieChartGender from "@/components/charts/pieChart";
import AgeGroupGraph from "@/components/charts/radialBarChart";
import { getUserEventsFromEvent } from "@/data/userEvent";
import React from "react";

const Reports = async ({ params }: any) => {
  const { id: eventId } = params;
  const userEvents = await getUserEventsFromEvent(eventId);
  const attended = {
    name: "attendance",
    signedUp: 0,
    attended: 0,
  };

  const gender = [
    { name: "male", count: 0 },
    { name: "female", count: 0 },
    { name: "unknown", count: 0 },
  ];

  const ageGroup = [
    {
      name: "15-35",
      count: 0,
      fill: "#8884d8",
    },
    {
      name: "36-50",
      count: 0,
      fill: "#83a6ed",
    },
    {
      name: "51-66",
      count: 0,
      fill: "#8dd1e1",
    },
    {
      name: "unknown",
      count: 0,
      fill: "#82ca9d",
    },
  ];

  //   Creating Bar Chart
  userEvents?.map((event) => {
    const { user } = event;
    if (event.attendance) {
      attended.attended += 1;
    }
    attended.signedUp += 1;

    //Creating Pie Chart
    if (user.gender?.toLowerCase() == "male") {
      gender[0].count += 1;
    } else if (user.gender?.toLowerCase() == "female") {
      gender[1].count += 1;
    } else {
      gender[2].count += 1;
    }

    //Creating Age Chart
    if (user.age) {
      try {
        let userAge = parseInt(user.age);
        if (userAge >= 15 && userAge <= 35) {
          ageGroup[0].count += 1;
        } else if (userAge <= 50) {
          ageGroup[1].count += 1;
        } else {
          ageGroup[2].count += 1;
        }
      } catch {
        ageGroup[3].count += 1;
      }
    } else {
      ageGroup[3].count += 1;
    }
  });

  console.log(ageGroup);

  return (
    <div className="flex flex-col gap-y-7">
      <h1 className="text-4xl font-semibold">Analysis</h1>
      <div>
        <h3 className="text-xl orange_gradient">Attendance</h3>
        <div className="w-[40vw] h-[30vh]">
          <BarChartsAttendance Obj={[attended]} />
        </div>
      </div>
      <div>
        <h3 className="text-xl orange_gradient">Gender</h3>
        <div className="w-[40vw] h-[30vh]">
          <PieChartGender Obj={gender} />
        </div>
      </div>
      <div>
        <h3 className="text-xl orange_gradient">Age Group</h3>
        <div className="w-[40vw] h-[30vh]">
          <AgeGroupGraph Obj={ageGroup} />
        </div>
      </div>
    </div>
  );
};

export default Reports;

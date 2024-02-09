import React from "react";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import { getUserById } from "@/data/user";
import Image from "next/image";
import Link from "next/link";
import {
  MdEmail,
  MdPerson,
  MdPerson4,
  MdPhone,
  MdApproval,
} from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getHoursUsers } from "@/data/userEvent";
import { getTimeDifference } from "@/actions/calculateTime";
import VolunteeringHours from "@/components/charts/volunteerHours";

const page = async ({ params }: any) => {
  const { id } = params;
  const user = await getUserById(id);
  const pastEvents = await getHoursUsers(id);
  let hours;
  if (pastEvents) {
    hours = pastEvents.map((events) => {
      const { startTime, EndTime } = events.events;
      console.log(startTime, EndTime);
      const timeDiff = getTimeDifference(startTime, EndTime);
      return timeDiff / (1000 * 60 * 60);
    });
  }
  const hourArray: any = [{ hours: 0 }];
  if (hours) {
    let count = 0;
    hours.map((hour) => {
      count += hour;
      hourArray.push({
        hours: count,
      });
    });
  }

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 space-y-5">
        <div className="rounded-full w-[20vw] aspect-square relative drop-shadow-lg">
          <Image src="/noavatar.png" alt="profile image" fill />
        </div>
        <div className="">
          <p className="font-semibold text-lg border-solid border-b-black border">
            Badges
          </p>
          <div className="flex gap-x-5 mt-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant={"ghost"}>
                  <MdApproval size={40} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-40">
                <div>Successfully set up profile</div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
      <div className="ml-10 lg:ml-16 col-span-2 flex flex-col space-y-5">
        <div className="flex gap-x-7 items-center">
          <MdPerson size={30} />
          <p className="text-2xl font-semibold">{user?.name}</p>
        </div>
        <div className="flex gap-x-7 items-center">
          <MdEmail size={30} />
          <p className="text-2xl font-semibold">{user?.email}</p>
        </div>
        <div className="flex gap-x-7 items-center">
          <MdPhone size={30} />
          <p className="text-2xl font-semibold">{user?.phone}</p>
        </div>
        {user?.age && (
          <div className="flex gap-x-7 items-center">
            <FaBabyCarriage size={30} />
            <p className="text-2xl font-semibold">{user?.age}</p>
          </div>
        )}
        {user?.occupation && (
          <div className="flex gap-x-7 items-center">
            <MdPerson4 size={30} />
            <p className="text-2xl font-semibold">{user?.occupation}</p>
          </div>
        )}
        <div>
          <h2 className="border-solid border-t-black border text-2xl font-semibold pt-5">
            Total Volunteering Hours
          </h2>
          <div className=" mt-4 w-[40vw] h-[40vh]">
            <VolunteeringHours Obj={hourArray} dataK={"hours"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

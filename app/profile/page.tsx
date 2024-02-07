import { auth } from "@/auth";
import UpdateProfile from "@/components/updateProfile";
import { getUserById } from "@/data/user";
import React from "react";

const UserProfile = async () => {
  const session = await auth();
  const userId = session?.user?.id;
  const user = await getUserById(userId);

  return (
    <div className="w-full">
      <h1>Your Profile</h1>
      <div className="">
        {user && (
          <UpdateProfile
            id={user.id}
            user={user.name}
            email={user.email}
            name={user.name}
            password={user.password}
            phone={user.phone}
            age={user.age}
            gender={user.gender}
            occupation={user.occupation}
            expertise={user.expertise}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;

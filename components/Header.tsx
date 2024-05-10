import { UserButton } from "@clerk/nextjs";
import { UserResource } from "@clerk/types";
import { IoLogoNoSmoking } from "react-icons/io";
import Link from "next/link";

interface HeaderProps {
  user: UserResource | null | undefined;
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center py-5 px-5 bg-green-800 text-white shadow-lg h-[100px]">
      <IoLogoNoSmoking size={50} />
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-bold pr-[550px]">Welcome</h1>
        <Link href={"/profile"}>{user?.username}</Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

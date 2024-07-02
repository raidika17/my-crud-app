"use client";

import EditInput from "@/app/components/editInput";
import TitleComponent from "@/app/components/title";
import { useSearchParams } from "next/navigation";

const EditUsers = () => {
  const searchParams = useSearchParams();

  return (
    <>
      <TitleComponent title="Edit User" />
      <EditInput
        getId={searchParams.get("id") as string}
        getEmail={searchParams.get("email") as string}
        getName={searchParams.get("name") as string}
        getPhone={searchParams.get("phone") as string}
      />
    </>
  );
};

export default EditUsers;

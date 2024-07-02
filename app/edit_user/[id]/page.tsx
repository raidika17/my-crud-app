"use client";

import EditInput from "@/app/components/editInput";
import FormInput from "@/app/components/addInput";
import TitleComponent from "@/app/components/title";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditUsers = () => {
  const searchParams = useSearchParams();
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  useEffect(() => {
    const id = searchParams.get("id") as string;
    const email = searchParams.get("email") as string;
    const name = searchParams.get("name") as string;
    const phone = searchParams.get("phone") as string;

    setId(id);
    setName(name);
    setEmail(email);
    setPhone(phone);
  }, [searchParams]);

  return (
    <>
      <TitleComponent title="Edit User" />
      <EditInput
        methodSubmit="PUT"
        id={id}
        emailValue={email}
        nameValue={name}
        phoneValue={phone}
      />
    </>
  );
};

export default EditUsers;

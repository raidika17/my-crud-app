import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";
import SuccessCard from "./successCard";
import { UpdateUser } from "@/lib/actions";

interface EditInputProps {
  getId: string;
  getEmail: string;
  getName: string;
  getPhone: string;
}

const EditInput: React.FC<EditInputProps> = ({
  getId,
  getName,
  getPhone,
  getEmail,
}) => {
  const [name, setName] = useState<string>(getName);
  const [email, setEmail] = useState<string>(getEmail);
  const [phone, setPhone] = useState<string>(getPhone);
  const [errorsName, setErrorsName] = useState<{ name?: string }>({});
  const [errorsEmail, setErrorsEmail] = useState<{ email?: string }>({});
  const [errorsPhone, setErrorsPhone] = useState<{ phone?: string }>({});
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{1,13}$/;
    return phoneRegex.test(phone);
  };

  const validateName = (name: string) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const handleBack = () => {
    route.push(`/`);
  };

  const handleOnSuccess = () => {
    route.push(`/dashboard`);
  };

  const handleOnChangeName = (name: string) => {
    const newErrors: { name?: string } = {};

    if (!validateName(name)) {
      newErrors.name = "Please enter a valid name";
    }
    setName(name);

    setErrorsName(newErrors);
  };

  const handleOnChangePhone = (phone: string) => {
    const newErrors: { phone?: string } = {};

    if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number (up to 13 digits)";
    }

    setPhone(phone);

    setErrorsPhone(newErrors);
  };

  const handleOnChangeEmail = (email: string) => {
    const newErrors: { email?: string } = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setEmail(email);

    setErrorsEmail(newErrors);
  };

  const handleSubmit = () => {
    setIsOpen(true);
    UpdateUser(getId, name, email, phone);
  };

  const validateFormInput = () => {
    if (!name) {
      const newErrors: { name?: string } = {};
      newErrors.name = "Name is required!";
      return setErrorsName(newErrors);
    } else if (!email) {
      const newErrors: { email?: string } = {};
      newErrors.email = "email is required!";
      return setErrorsEmail(newErrors);
    } else if (!phone) {
      const newErrors: { phone?: string } = {};
      newErrors.phone = "phone is required!";
      return setErrorsPhone(newErrors);
    }
    return handleSubmit();
  };

  return (
    <div>
      <div className="container rounded border-spacing-14 border-2 border-green-500 lg:w-1/2 mx-auto shadow-lg p-10">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              value={name}
              onChange={(e) => handleOnChangeName(e.target.value)}
              id="name"
              name="name"
              type="text"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errorsName.name && (
              <p className="text-red-500 text-sm mt-1">{errorsName.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => handleOnChangeEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errorsEmail.email && (
              <p className="text-red-500 text-sm mt-1">{errorsEmail.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Number Phone
            </label>
            <input
              value={phone}
              onChange={(e) => handleOnChangePhone(e.target.value)}
              id="phone"
              name="phone"
              type="text"
              maxLength={13}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errorsPhone.phone && (
              <p className="text-red-500 text-sm mt-1">{errorsPhone.phone}</p>
            )}
          </div>
        </form>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          className="px-3 py-1 text-green-500 rounded bg-white border"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="px-3 py-1 text-white rounded bg-green-500"
          onClick={validateFormInput}
        >
          Save
        </button>
      </div>
      {isOpen && (
        <SuccessCard
          message="Data added successfully!"
          onSuccess={handleOnSuccess}
        />
      )}
    </div>
  );
};

export default EditInput;

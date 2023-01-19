import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

import InputGroup from "../components/InputGroup";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const submitForm = (event) => {
    event.preventDefault();
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Head>
        <title>Miniapp - Register</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="max-w-sm mb-6">
        <div className="flex items-center mb-6 ">
          <ArrowLeftOnRectangleIcon className="sectionIcon" />
          Register
        </div>
        <p className="mb-3 text-sm">
          Fill in the information below to complete the register
        </p>
        <form onSubmit={submitForm}>
          <InputGroup
            placeholder="username"
            type="text"
            value={username}
            setValue={setUsername}
            error={errors.username}
            maxLength={16}
            require={true}
          />
          <InputGroup
            placeholder="email"
            type="email"
            value={email}
            setValue={setEmail}
            error={errors.email}
            maxLength={99}
            require={true}
          />
          <InputGroup
            placeholder="password"
            type="password"
            value={password}
            setValue={setPassword}
            error={errors.password}
            maxLength={255}
            require={true}
          />
          <button className="my-3 roundedButton" type="submit">
            Register now
          </button>
          <Link href="/login" className="mb-3 text-xs italic text-blue-600 ">
            Have an account?
          </Link>
        </form>
      </div>
    </>
  );
}

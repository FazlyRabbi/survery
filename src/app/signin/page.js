"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

export default function Example() {

  const init = {
    email: "",
    password: "",
  };

  const router = useRouter();

  const [loginInfo, setLoginInfo] = useState(init);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push(`/dashboard`);
       console.log(session);
    }
  }, [session, status, router]);



 

  if (status === "authenticated") {
    console.log("login successfull!");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      ...loginInfo,
      // redirect: true,
      // callbackUrl: "/dashboard",
    });
  };

  return (
    <div className=" flex justify-center items-center">
      <Card color="transparent" className=" mt-[10rem]" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to login.
        </Typography>
        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, email: e.target.value })
              }
              value={loginInfo.email}
              size="lg"
              label="Email"
              required
              type="email"
            />
            <Input
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
              value={loginInfo.password}
              type="password"
              size="lg"
              label="Password"
              required
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
          <Button fullWidth className="mt-6">
            <Link href={"/signup"} className="mt-6">
              Sign Up
            </Link>
          </Button>
        </form>
      </Card>
    </div>
  );
}

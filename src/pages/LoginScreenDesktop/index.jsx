import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Input, Text } from "components";
import LoginScreenDesktopStack78c4af118001599 from "components/LoginScreenDesktopStack78c4af118001599";

const LoginScreenDesktopPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pl-[13px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1427px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[47px] justify-start md:mt-0 mt-[18px] w-[31%] md:w-full">
            <div className="flex flex-col gap-14 items-start justify-start md:ml-[0] ml-[81px] w-4/5 md:w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col h-[50px] items-center justify-start mt-3 w-[50px]">
                  <Img
                    className="h-[50px] md:h-auto object-cover rounded-bl-sm rounded-br-sm w-[50px]"
                    src="images/img_image.png"
                    alt="image"
                  />
                </div>
                <div className="border border-green-800_7f border-solid h-5 rounded-[50%] w-5"></div>
              </div>
              <div className="flex flex-col items-start justify-start w-auto">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 w-auto"
                  size="txtInterBold40"
                >
                  Login
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-[41px] items-start justify-between w-full">
              <div className="border border-green-800_7f border-solid h-10 sm:mt-0 mt-[454px] rounded-[50%] w-10"></div>
              <div className="flex flex-col gap-14 items-center justify-start mb-8 w-auto">
                <div className="flex flex-col font-poppins gap-12 items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <div className="flex flex-col gap-6 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Email address
                          </Text>
                          <Input
                            name="emailaddress"
                            placeholder="Enter email address"
                            className="p-0 placeholder:text-gray-600 text-left text-sm w-full"
                            wrapClassName="w-full"
                            type="email"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtPoppinsRegular14"
                          >
                            Password
                          </Text>
                          <Input
                            name="groupthree"
                            placeholder=""
                            className="p-0 w-full"
                            wrapClassName="flex w-full"
                            suffix={
                              <Img
                                className="h-6 ml-[35px] my-auto"
                                src="images/img_eye_closed.svg"
                                alt="Eye closed"
                              />
                            }
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[103px] items-start justify-between w-auto">
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          className="h-6 w-6"
                          src="images/img_checkboxicon.svg"
                          alt="checkboxicon"
                        />
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtPoppinsRegular14"
                        >
                          Remember me
                        </Text>
                      </div>
                      <a
                        href="javascript:"
                        className="text-green-500 text-sm w-auto"
                      >
                        <Text size="txtPoppinsRegular14Green500">
                          Forgot password?
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Button
                      className="capitalize cursor-pointer font-medium leading-[normal] min-w-[360px] text-center text-sm"
                      size="sm"
                    >
                      Sign In
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[360px]"
                      onClick={() => googleSignIn()}
                      leftIcon={
                        <Img
                          className="h-6 mb-px mr-[19px]"
                          src="images/img_google.svg"
                          alt="Google"
                        />
                      }
                      color="blue_gray_900"
                      size="sm"
                      variant="outline"
                    >
                      <div className="capitalize font-medium leading-[normal] text-center text-sm">
                        Sign In With Google
                      </div>
                    </Button>
                  </div>
                </div>
                <Text
                  className="text-blue_gray-900 text-center text-sm w-auto"
                  size="txtNunitoRegular14"
                >
                  <span className="text-blue_gray-900 font-nunito font-normal">
                    Don’t have an account?{" "}
                  </span>
                  <span className="text-green-500 font-nunito font-bold leading-[normal]">
                    Register
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="h-[788px] relative w-[56%] md:w-full">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start my-auto p-[45px] md:px-10 sm:px-5 right-[0] w-[64%]"
              style={{ backgroundImage: "url('images/img_group4.svg')" }}
            >
              <div className="flex flex-col gap-10 items-start justify-start mb-[381px] mt-[19px] w-auto sm:w-full">
                <Text
                  className="leading-[64.00px] max-w-[396px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtInterLight40"
                >
                  Welcome Back to Eduswift LMS Student Portal
                </Text>
                <Text
                  className="max-w-[376px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtNunitoLight24"
                >
                  Please enter your details and login to coninue
                </Text>
              </div>
            </div>
            <LoginScreenDesktopStack78c4af118001599 className="absolute bottom-[0] h-[440px] left-[0] w-[70%] sm:w-full" />
            <div className="absolute border border-green-800_7f border-solid h-[100px] left-[30%] rounded-[50%] top-[23%] w-[100px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreenDesktopPage;

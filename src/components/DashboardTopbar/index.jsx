import React from "react";

import { Img, Text } from "components";

const DashboardTopbar = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
              size="txtInterBold32"
            >
              {props?.studentdashboarOne}
            </Text>
            <div className="flex sm:flex-1 flex-row items-center justify-between w-[23%] sm:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_notificationsicon_green_600.svg"
                alt="notificationsic_One"
              />
              <div className="flex flex-row gap-2.5 items-center justify-center">
                <div className="flex flex-col h-8 items-center justify-start w-8">
                  <Img
                    className="h-8 md:h-auto rounded-[50%] w-8"
                    src="images/img_user1.png"
                    alt="userOne"
                  />
                </div>
                <Text
                  className="text-base text-blue_gray-900"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  {props?.username}
                </Text>
              </div>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardTopbar.defaultProps = {
  studentdashboarOne: "Student Dashboard",
  username: "Otor John Stephen",
};

export default DashboardTopbar;

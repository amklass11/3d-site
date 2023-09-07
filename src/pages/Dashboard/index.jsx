import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, Text } from "components";
import DashboardTopbar from "components/DashboardTopbar";

const DashboardPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 mb-1 w-6"
          src="images/img_dashboardicon.svg"
          alt="dashboardicon"
        />
      ),
      label: "Dashboard",
      href: "/dashboard",
      active: window.location.pathname === "/dashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-1 w-6"
          src="images/img_coursesicon.svg"
          alt="coursesicon"
        />
      ),
      label: "Courses",
    },
    {
      icon: (
        <Img
          className="h-6 mb-2 w-6"
          src="images/img_groupsicon.svg"
          alt="groupsicon"
        />
      ),
      label: "Groups",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[7px] w-6"
          src="images/img_instructoricon.svg"
          alt="instructoricon"
        />
      ),
      label: "Instructor",
    },
    {
      icon: (
        <Img
          className="h-6 mb-1 w-6"
          src="images/img_attendanceicon.svg"
          alt="attendanceicon"
        />
      ),
      label: "Attendance",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_notificationsicon.svg"
          alt="notificationsic"
        />
      ),
      label: "Notifications",
    },
    {
      icon: (
        <Img
          className="h-6 mb-2 w-6"
          src="images/img_supporticon.svg"
          alt="supporticon"
        />
      ),
      label: "Support",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-60 bg-green-500 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
          >
            <div className="flex flex-row gap-2.5 items-center justify-center md:ml-[0] ml-[54px] mr-[58px] mt-[42px] w-[54%]">
              <div className="bg-white-A700 flex flex-col h-[50px] items-center justify-start rounded-[10px] w-[50px]">
                <Img
                  className="h-[50px] md:h-auto object-cover rounded-bl-sm rounded-br-sm rounded-tl-[10px] rounded-tr-[10px] w-[50px]"
                  src="images/img_image.png"
                  alt="image"
                />
              </div>
              <Text className="text-base text-gray-100" size="txtPoppinsBold16">
                ONL LMS
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "10px 10px 10px 14px",
                  gap: "13px",
                  marginTop: "10px",
                  color: "#f2f2f2",
                  fontSize: "16px",
                  [`&:hover, &.ps-active`]: {
                    color: "#3eb957",
                    fontWeight: "400 !important",
                    backgroundImage: "url('images/defaultNoData.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-[746px] mt-[60px] pl-4 sm:pr-5 pr-6 pt-0.5 w-[84%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col font-inter items-center justify-start md:px-5 w-full">
            <DashboardTopbar className="bg-gray-50 flex flex-col items-center justify-start p-[17px] w-full" />
            <div className="flex flex-col font-poppins items-center justify-start w-[97%] md:w-full">
              <div className="bg-white-A700 flex sm:flex-col flex-row md:gap-10 items-center justify-between p-5 rounded-[10px] w-full">
                <div className="flex sm:flex-1 flex-row gap-5 items-start justify-between w-1/4 sm:w-full">
                  <div className="flex flex-col h-[60px] items-center justify-start w-[60px]">
                    <Img
                      className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                      src="images/img_user1_60x60.png"
                      alt="userOne_One"
                    />
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start mt-1">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtPoppinsRegular16Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-poppins text-left text-sm font-normal">
                        Hello,
                      </span>
                      <span className="text-blue_gray-900 font-poppins text-left font-normal">
                        {" "}
                      </span>
                      <span className="text-blue_gray-900 font-poppins text-left text-sm font-bold">
                        Otor John
                      </span>
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl"
                      size="txtPoppinsBold20"
                    >
                      You’ve got 85 points!
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-blue_gray-900 text-sm"
                  size="txtPoppinsRegular14"
                >
                  <span className="text-blue_gray-900 font-poppins text-left font-normal">
                    Your last login was on{" "}
                  </span>
                  <span className="text-blue_gray-900 font-poppins text-left font-bold leading-[normal]">
                    August 3rd, 2022
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
                <List
                  className="flex flex-col gap-5 items-start w-auto"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-[10px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start my-2.5 w-[86%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center my-1 w-[50px]"
                          shape="circle"
                          color="blue_A400_33"
                        >
                          <Img
                            className="h-10"
                            src="images/img_coursesicon_blue_a400.svg"
                            alt="coursesicon"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                            size="txtPoppinsBold32"
                          >
                            32
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-blue_gray-900"
                            size="txtPoppinsRegular16Bluegray900"
                          >
                            Registered Courses
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-[10px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start my-2.5 w-[87%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center my-1 w-[50px]"
                          shape="circle"
                          color="orange_A200_33"
                        >
                          <Img
                            className="h-10"
                            src="images/img_coursesicon_orange_a200.svg"
                            alt="coursesicon"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="h-[38px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                            size="txtPoppinsBold32"
                          >
                            10
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-blue_gray-900"
                            size="txtPoppinsRegular16Bluegray900"
                          >
                            Courses in Progress
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-[10px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start my-2.5 w-[86%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center my-1 w-[50px]"
                          shape="circle"
                          color="green_600_33"
                        >
                          <Img
                            className="h-10"
                            src="images/img_coursesicon_green_500.svg"
                            alt="coursesicon"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                            size="txtPoppinsBold32"
                          >
                            12
                          </Text>
                          <Text
                            className="mt-[3px] text-base text-blue_gray-900"
                            size="txtPoppinsRegular16Bluegray900"
                          >
                            Courses Completed
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-[10px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start my-2.5 w-[49%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center my-1 w-[50px]"
                          shape="circle"
                          color="purple_400_33"
                        >
                          <Img
                            className="h-10"
                            src="images/img_groupsicon_purple_400.svg"
                            alt="groupsicon"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                            size="txtPoppinsBold32"
                          >
                            32
                          </Text>
                          <Text
                            className="mt-0.5 text-base text-blue_gray-900"
                            size="txtPoppinsRegular16Bluegray900"
                          >
                            Groups
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start my-0 w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-[10px] w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start my-2 w-[66%] md:w-full">
                        <Button
                          className="flex h-[50px] items-center justify-center my-1.5 w-[50px]"
                          shape="circle"
                          color="purple_400_33"
                        >
                          <Img
                            className="h-10"
                            src="images/img_groupsicon_purple_400.svg"
                            alt="groupsicon"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                            size="txtPoppinsBold32"
                          >
                            54%
                          </Text>
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtPoppinsRegular16Bluegray900"
                          >
                            Attendance
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-3/4 md:w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                        <div className="flex flex-col gap-[41px] items-start justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                            <Text
                              className="text-blue_gray-900 text-xl"
                              size="txtPoppinsBold20"
                            >
                              Courses In Progress (4)
                            </Text>
                            <Button
                              className="capitalize cursor-pointer font-medium leading-[normal] min-w-[140px] text-center text-sm"
                              size="sm"
                            >
                              view all courses
                            </Button>
                          </div>
                          <div className="flex sm:flex-col flex-row font-nunito gap-[18px] items-start justify-between w-full">
                            <List
                              className="flex flex-col gap-[19px]"
                              orientation="vertical"
                            >
                              <div className="flex sm:flex-col flex-row gap-[39px] items-center justify-between w-full">
                                <div className="flex sm:flex-1 flex-row gap-2.5 items-end justify-between w-[69%] sm:w-full">
                                  <Img
                                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                    src="images/img_ellipse2.png"
                                    alt="ellipseTwo"
                                  />
                                  <div className="flex flex-col items-start justify-start mt-[5px]">
                                    <Text
                                      className="text-base text-blue_gray-900"
                                      size="txtNunitoBold16"
                                    >
                                      ENG 121: Structure of Modern English
                                    </Text>
                                    <Text
                                      className="mt-0.5 text-blue_gray-900 text-sm"
                                      size="txtNunitoRegular14"
                                    >
                                      Uzor Peters (PhD)
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex sm:flex-1 flex-col font-poppins gap-2 items-end justify-start w-[24%] sm:w-full">
                                  <div className="h-1.5 overflow-hidden relative w-full">
                                    <div className="w-full h-full absolute bg-gray_100 rounded-[3px]"></div>
                                    <div
                                      className="h-full absolute bg-orange_A200  rounded-[3px]"
                                      style={{ width: "49%" }}
                                    ></div>
                                  </div>
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    50% done
                                  </Text>
                                </div>
                              </div>
                              <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-center justify-between w-full">
                                <div className="flex sm:flex-1 flex-row gap-2.5 items-end justify-between w-[64%] sm:w-full">
                                  <Img
                                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                    src="images/img_ellipse2_50x50.png"
                                    alt="ellipseTwo"
                                  />
                                  <div className="flex flex-col items-start justify-start mt-[5px]">
                                    <Text
                                      className="text-base text-blue_gray-900"
                                      size="txtNunitoBold16"
                                    >
                                      LIN 112: Introduction to Linguistics
                                    </Text>
                                    <Text
                                      className="mt-1 text-blue_gray-900 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      By Otor John
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex sm:flex-1 flex-col gap-2 items-end justify-start w-[24%] sm:w-full">
                                  <div className="h-1.5 overflow-hidden relative w-full">
                                    <div className="w-full h-full absolute bg-gray_100 rounded-[3px]"></div>
                                    <div
                                      className="h-full absolute bg-orange_A200  rounded-[3px]"
                                      style={{ width: "72%" }}
                                    ></div>
                                  </div>
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    80% done
                                  </Text>
                                </div>
                              </div>
                              <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-center justify-between w-full">
                                <div className="flex sm:flex-1 flex-row gap-2.5 items-end justify-between w-3/5 sm:w-full">
                                  <Img
                                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                    src="images/img_ellipse2_1.png"
                                    alt="ellipseTwo"
                                  />
                                  <div className="flex flex-col items-start justify-start mt-[5px]">
                                    <Text
                                      className="text-base text-blue_gray-900"
                                      size="txtNunitoBold16"
                                    >
                                      PHY 111: Elementary Mechanics
                                    </Text>
                                    <Text
                                      className="mt-1 text-blue_gray-900 text-sm"
                                      size="txtPoppinsRegular14"
                                    >
                                      By Otor John
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex sm:flex-1 flex-col gap-2 items-end justify-start w-[24%] sm:w-full">
                                  <div className="h-1.5 overflow-hidden relative w-full">
                                    <div className="w-full h-full absolute bg-gray_100 rounded-[3px]"></div>
                                    <div
                                      className="h-full absolute bg-orange_A200  rounded-[3px]"
                                      style={{ width: "26%" }}
                                    ></div>
                                  </div>
                                  <Text
                                    className="text-blue_gray-900 text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    20% done
                                  </Text>
                                </div>
                              </div>
                            </List>
                            <Img
                              className="h-[209px]"
                              src="images/img_group43.svg"
                              alt="groupFortyThree"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pb-[5px] w-[32%] md:w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-start p-[18px] rounded-[10px] w-full">
                        <div className="flex flex-col items-start justify-start mb-[3px] w-4/5 md:w-full">
                          <Text
                            className="text-blue_gray-900 text-xl"
                            size="txtNunitoBold20"
                          >
                            Leaders Board
                          </Text>
                          <div className="flex flex-col gap-5 items-start justify-start mt-5 w-full">
                            <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-blue_gray-900"
                                  size="txtNunitoBold16"
                                >
                                  Otor John Stephen
                                </Text>
                                <Text
                                  className="mt-[3px] text-blue_gray-900 text-sm"
                                  size="txtPoppinsRegular14"
                                >
                                  230 points
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-2.5 items-start justify-start w-[94%] md:w-full">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_ellipse3_40x40.png"
                                alt="ellipseThree_One"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-blue_gray-900"
                                  size="txtNunitoBold16"
                                >
                                  Uzochukwu Faith
                                </Text>
                                <Text
                                  className="mt-1 text-blue_gray-900 text-sm"
                                  size="txtPoppinsRegular14"
                                >
                                  200 points
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-2.5 items-start justify-start w-[90%] md:w-full">
                              <Img
                                className="h-10 md:h-auto rounded-[50%] w-10"
                                src="images/img_ellipse3_1.png"
                                alt="ellipseThree_Two"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-blue_gray-900"
                                  size="txtNunitoBold16"
                                >
                                  Babajide Joshua
                                </Text>
                                <Text
                                  className="mt-[3px] text-blue_gray-900 text-sm"
                                  size="txtPoppinsRegular14"
                                >
                                  190 points
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="capitalize cursor-pointer font-medium font-poppins leading-[normal] min-w-[190px] mt-6 text-center text-sm"
                            size="sm"
                          >
                            View Leadersboard
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-nunito items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                      <div className="flex flex-col gap-[13px] items-start justify-start mb-4 w-[99%] md:w-full">
                        <Text
                          className="text-blue_gray-900 text-xl"
                          size="txtNunitoBold20"
                        >
                          Assignments
                        </Text>
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <div className="flex flex-col font-nunito gap-4 items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_checkboxicon_green_500.svg"
                                    alt="checkboxicon"
                                  />
                                  <Text
                                    className="line-through text-base text-blue_gray-900"
                                    size="txtNunitoBold16"
                                  >
                                    ENG 121: Structure of Modern English
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
                                <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_checkboxicon_green_500.svg"
                                    alt="checkboxicon_One"
                                  />
                                  <Text
                                    className="line-through text-base text-blue_gray-900"
                                    size="txtNunitoBold16"
                                  >
                                    LIN 112: Introduction to Linguistics
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start w-[85%] md:w-full">
                                <div className="flex flex-row font-nunito gap-2.5 items-start justify-start w-full">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_checkboxicon_blue_gray_900.svg"
                                    alt="checkboxicon_Two"
                                  />
                                  <Text
                                    className="text-base text-blue_gray-900"
                                    size="txtNunitoBold16"
                                  >
                                    PHY 111 Elementary Mechanics
                                  </Text>
                                </div>
                                <Text
                                  className="md:ml-[0] ml-[34px] mt-[3px] text-blue_gray-900 text-sm"
                                  size="txtPoppinsRegular14"
                                >
                                  Due Date: 12/08/2022
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="mt-7 text-base text-blue_gray-900"
                              size="txtPoppinsBold16Bluegray900"
                            >
                              2/4 completed
                            </Text>
                            <Text
                              className="leading-[24.00px] mt-3 text-blue_gray-900 text-sm w-4/5 sm:w-full"
                              size="txtPoppinsRegular14"
                            >
                              Do ensure to complete all assignment before the
                              deadline.
                            </Text>
                          </div>
                          <Img
                            className="h-[135px]"
                            src="images/img_group43.svg"
                            alt="groupFortyThree_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between mt-5 w-full">
                <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                      <div className="flex flex-col gap-[30px] items-start justify-start mb-[17px] w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-blue_gray-900 text-xl"
                            size="txtPoppinsBold20"
                          >
                            Instructors
                          </Text>
                          <Button
                            className="capitalize cursor-pointer font-medium leading-[normal] min-w-[119px] text-center text-sm"
                            size="sm"
                          >
                            View All
                          </Button>
                        </div>
                        <List
                          className="flex flex-col gap-6 w-[51%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-row gap-3.5 items-start justify-start w-[81%] md:w-full">
                            <Img
                              className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                              src="images/img_ellipse4.png"
                              alt="ellipseFour"
                            />
                            <div className="flex flex-col items-start justify-start mt-1">
                              <Text
                                className="text-base text-blue_gray-900"
                                size="txtNunitoBold16"
                              >
                                Uzor Peters (PhD)
                              </Text>
                              <Text
                                className="mt-[3px] text-blue_gray-900 text-sm"
                                size="txtPoppinsRegular14"
                              >
                                Basics of UI/UX Designs
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                            <Img
                              className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                              src="images/img_ellipse4_50x50.png"
                              alt="ellipseFour"
                            />
                            <div className="flex flex-col items-start justify-start mt-1">
                              <Text
                                className="text-base text-blue_gray-900"
                                size="txtNunitoBold16"
                              >
                                Zubairu Hussainat (PhD)
                              </Text>
                              <Text
                                className="mt-1 text-blue_gray-900 text-sm"
                                size="txtPoppinsRegular14"
                              >
                                Design Thinking: Best Principles
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3.5 items-start justify-between w-full">
                            <Img
                              className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                              src="images/img_ellipse4_1.png"
                              alt="ellipseFour"
                            />
                            <div className="flex flex-col items-start justify-start mt-1">
                              <Text
                                className="text-base text-blue_gray-900"
                                size="txtNunitoBold16"
                              >
                                Uduak Samuel (MSc)
                              </Text>
                              <Text
                                className="mt-[3px] text-blue_gray-900 text-sm"
                                size="txtPoppinsRegular14"
                              >
                                Fundamentals of UI/UX Designs
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-[19px] rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start mt-0.5 w-full">
                      <div className="flex flex-col gap-[33px] justify-start w-full">
                        <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start w-[96%] md:w-full">
                          <div className="flex flex-row items-start justify-between w-[81%] sm:w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-blue_gray-900 text-xl"
                                size="txtPoppinsBold20"
                              >
                                Weekly Attendance
                              </Text>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start w-[19%]">
                              <div className="bg-blue-A400 h-5 rounded w-5"></div>
                              <Text
                                className="text-blue_gray-900 text-sm"
                                size="txtPoppinsRegular14"
                              >
                                Present
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start w-[15%] sm:w-full">
                            <div className="bg-gray-300 h-5 rounded w-5"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtPoppinsRegular14"
                            >
                              Absent
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start md:ml-[0] ml-[7px] w-[99%] md:w-full">
                          <div className="md:h-[207px] h-[211px] sm:h-[333px] relative w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                              <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                                <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900 text-right text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    5
                                  </Text>
                                  <Line className="bg-black-900_33 h-px mb-[11px] sm:mt-0 mt-[5px] w-[97%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900 text-right text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    4
                                  </Text>
                                  <Line className="bg-black-900_33 h-px mb-[11px] sm:mt-0 mt-[5px] w-[97%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900 text-right text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    3
                                  </Text>
                                  <Line className="bg-black-900_33 h-px mb-[11px] sm:mt-0 mt-[5px] w-[97%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900 text-right text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    2
                                  </Text>
                                  <Line className="bg-black-900_33 h-px mb-[11px] sm:mt-0 mt-[5px] w-[97%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900 text-right text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    1
                                  </Text>
                                  <Line className="bg-black-900_33 h-px mb-[11px] sm:mt-0 mt-[5px] w-[97%]" />
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-between w-full">
                                  <Text
                                    className="text-blue_gray-900 text-right text-sm"
                                    size="txtPoppinsRegular14"
                                  >
                                    0
                                  </Text>
                                  <Line className="bg-black-900_4c h-px mb-[11px] sm:mt-0 mt-[5px] w-[97%]" />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute h-[195px] inset-y-[0] my-auto right-[3%]"
                              src="images/img_group290.svg"
                              alt="group290"
                            />
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end ml-11 md:ml-[0] mt-0.5 w-[90%] md:w-full">
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtPoppinsRegular14"
                            >
                              Mon
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[49px] text-blue_gray-900 text-sm"
                              size="txtPoppinsRegular14"
                            >
                              Tue
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[50px] text-blue_gray-900 text-sm"
                              size="txtPoppinsRegular14"
                            >
                              Wed
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[50px] text-blue_gray-900 text-sm"
                              size="txtPoppinsRegular14"
                            >
                              Thu
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[50px] text-blue_gray-900 text-sm"
                              size="txtPoppinsRegular14"
                            >
                              Fri
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[50px] text-blue_gray-900 text-sm"
                              size="txtPoppinsRegular14"
                            >
                              Sat
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[49px] text-blue_gray-900 text-sm"
                              size="txtPoppinsRegular14"
                            >
                              Sun
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-nunito items-center justify-start mt-6 pr-[3px] pt-[3px]">
                <Text
                  className="text-blue_gray-900_01 text-sm"
                  size="txtNunitoRegular14Bluegray90001"
                >
                  <span className="text-blue_gray-900 font-nunito text-left font-normal">
                    Copyright © 202
                  </span>
                  <span className="text-blue_gray-900 font-nunito text-left font-normal">
                    2
                  </span>
                  <span className="text-blue_gray-900 font-nunito text-left font-normal">
                    {" "}
                    ONL LMS. All rights reserved. Powered by
                  </span>
                  <span className="text-blue_gray-900_01 font-nunito text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-green-500 font-nunito text-left font-normal">
                    Omnswift | Terms of Use | Privacy Policy
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

"use client";

import type { TabsProps } from "antd";
import { ConfigProvider, Tabs } from "antd";
import GroupRecommended from "./GroupRecommended";
import GroupPriceHighest from "./GroupPriceHighest";
import GroupPriceLowest from "./GroupPriceLowest";
import GroupReviews from "./GroupReviews";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Recommended",
    children: <GroupRecommended />,
  },
  {
    key: "2",
    label: "Price (Highest)",
    children: <GroupPriceHighest />,
  },
  {
    key: "3",
    label: "Price (Lowest)",
    children: <GroupPriceLowest />,
  },
  {
    key: "4",
    label: "Reviews",
    children: <GroupReviews />,
  },
];

const GroupTab = () => (
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          itemHoverColor: "#242424",
          colorPrimary: "#3D53F5",
          colorText: "#242424",
          itemColor: "#878787",
          itemSelectedColor: "#242424",
          fontSize: 16,
        },
      },
    }}
  >
    <section className="pt-[28px] pb-[40px] px2 md:px-5">
      <div className="container">
        <div className=" p-4 ">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </section>
  </ConfigProvider>
);

export default GroupTab;

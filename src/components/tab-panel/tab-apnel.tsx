import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

interface TabColumnProps {
  tabTitles: string[];
  children?: any[] | JSX.Element | JSX.Element[];
  tabActive?: number;
}

const TabColumn = ({ tabTitles, children }: TabColumnProps) => {
  children = React.Children.toArray(children);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <Nav tabs pills vertical className="d-block border-0">
        {tabTitles.map((tabTitle, index) => (
          <NavItem key={index}>
            <NavLink
              className={`text-dark opacity-50 py-4 fw-semibold cursor-pointer ${
                activeTab === index ? "active opacity-100 fw-bold" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tabTitle}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {children.map((child: any, index: any) => {
          return (
            <TabPane key={index} tabId={index}>
              {child}
            </TabPane>
          );
        })}
      </TabContent>
    </div>
  );
};

export default TabColumn;

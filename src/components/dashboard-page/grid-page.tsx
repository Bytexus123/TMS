import React from "react";
import { Link } from "react-router-dom";

interface GridPageProps {
  name?: string;
  image?: string;
  variant: "small" | "large" | "normal" | "wide";
  link?: string;
}
const GridPage = ({ name, image, variant, link }: GridPageProps) => {
  return (
    <Link
      to={`${link}`}
      className={`grid grid_${variant}`}
      style={{ textDecoration: "none" }}
    >
      <div className="grid_icon">
        <img src={`./images/icons/${image}.png`} alt="icon" height={64} />
      </div>
      <div className="grid__name">{name || "Default Name"}</div>
    </Link>
  );
};

export default GridPage;

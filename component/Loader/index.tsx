import { LoaderComponent } from "next/dynamic";
import { FC } from "react";

export const Loader: FC = () => {
    return <p className="message">Loading...</p>;
  }
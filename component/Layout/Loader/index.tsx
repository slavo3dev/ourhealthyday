import { LoaderComponent } from "next/dynamic";
import { FC } from "react";

export const Loader: FC<LoaderComponent> = () => {
    return <p className="message">Loading...</p>;
}
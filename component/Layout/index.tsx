import { FC } from "react";

type Props = {
    children: React.ReactNode | any;
};

export const Layout: FC<Props> = (props) => {
	return (
		<main className="font-serif">
			{props.children}
		</main>
	);
};
import React, { FC } from "react";
import Link from "next/link";

interface HamburgerMenuProps {
	isOpen: boolean;
	handleToggleMenu: () => void;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ isOpen, handleToggleMenu })=> {

	return (
		<>
			<input
				type="checkbox"
				className="hamburger-input"
				checked={isOpen}
				onChange={handleToggleMenu}
				id="hamburger-input"
			/>
			<label className="hamburger-menu" htmlFor="hamburger-input">
				<nav className="sidebar-menu">
					<h3 className="border-2 border-white border-b-teal-500 pl-6">Menu</h3>
					<ul>
						<li className="pl-6">
							<Link className="nav-links" href="/">
                Home
							</Link>
						</li>
						<li className="pl-6">
							<Link className="nav-links" href="/blog">
                Blog
							</Link>
						</li>
						<li className="pl-6">
							<Link className="nav-links" href="/store">
                Store
							</Link>
						</li>
						<li className="pl-6">
							<Link className="nav-links" href="/contact">
                Contact
							</Link>
						</li>
						<li className="pl-6">
							<Link className="nav-links" href="/login">
                Login
							</Link>
						</li>
					</ul>
				</nav>
			</label>
		</>
	);
};
import React, { FC, useState } from "react";
import Link from "next/link";
import { HamburgerMenu } from "component/BurgerMenu";

export const NavBar: FC = () => {

	const [isOpen, setIsOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<nav className="w-full px-6 py-3 bg-white border-2 border-white border-b-teal-500 ... ">
				<div className="flex items-center justify-between text-blue-gray-900">
					<div className="mr-4 cursor-pointer py-1.5 text-black text-5xl">
						<Link href="/">Our Healthy Day</Link>
					</div>
					<div className="hidden lg:block">
						<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
							<div className="p-1 font-medium">
								<Link
									className="flex items-center text-teal-800 hover:text-blue-500 transition-colors text-lg"
									href="/"
								>
									<button>Home</button>
								</Link>
							</div>
							<div className="p-1 font-medium">
								<Link
									className="flex items-center text-teal-800 hover:text-blue-500 transition-colors text-lg"
									href="/blog"
								>
									<button>Blog</button>
								</Link>
							</div>
							<div className="p-1 font-medium">
								<Link
									className="flex items-center text-teal-800 hover:text-blue-500 transition-colors text-lg"
									href="/store"
								>
                Store
								</Link>
							</div>
							<div className="p-1 font-medium">
								<Link
									className="flex items-center text-teal-800 hover:text-blue-500 transition-colors text-lg"
									href="/contact"
								>
                Contact
								</Link>
							</div>
							<div className="p-1 font-medium">
								<Link
									className="flex items-center text-teal-800 hover:text-blue-500 transition-colors text-lg"
									href="/login"
								>
									<button>Login</button>
								</Link>
							</div>
						</ul>
					</div>
				</div>
			</nav>
			<HamburgerMenu isOpen={isOpen} handleToggleMenu={handleToggleMenu} />
		</>
	);
};
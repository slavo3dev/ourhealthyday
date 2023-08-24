import { FC } from "react";

export const BlogWelcome: FC = () => {
	return (
		<>
			<div className="flex flex-col bg-white justify-center items-center h-full p-8">
				<section className="py-20">
					<div>
						<div className="w-full">
							<div>
								<h2 className="mb-4 text-3xl font-bold font-heading text-center">
                    Welcome to our Blog!
								</h2>
								<p className="mb-8 leading-loose text-blueGray-400">
                    Here you will find articles that are published
                    every week. We hope that you will find a lot of
                    inspiration and creativity for improving your life
                    and health
								</p>
							</div>
							<div className="flex justify-center items-center">
								<img src="https://png.pngtree.com/png-clipart/20220709/ourmid/pngtree-book-color-open-book-stack-books-png-image_5836804.png"></img>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

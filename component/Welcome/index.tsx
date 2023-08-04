import React, { FC } from "react";

export const Welcome: FC = () => {
	return (
		<>
			<div className="flex flex-col bg-white justify-center items-center h-full p-8 welcome-block">
				<section className="py-20">
					<div className="container overflow-hidden">
						<div className="flex flex-wrap -mx-8">
							<div className="w-full lg:w-1/2 px-8">
								<div className="mb-12 ml-20 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0 welcome-message">
									<h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__ animate__fadeIn animated">
                    You searched about Brain Health, and now you're in the
                    right place!
									</h2>
									<p className="mb-8 leading-loose text-blueGray-400 wow animate__ animate__fadeIn animated">
                    Join our growing tribe of brain health enthusiasts today and embark on a journey of self-improvement like never before.
									</p>
								</div>
							</div>
							<div className="left-1/2 -ml-0.5 w-0.5 max-h-72 bg-teal-500"></div>{" "}
							{/*This empty div represents the green vertical line on the Welcome page*/}
							<div className="w-full lg:w-1/2 px-8">
								<ul className="space-y-12 ml-14 ul-margins">
									<li className="flex -mx-4 wow animate__ animate__fadeIn animated">
										<div>
											<span className="flex w-26 h-26 mx-auto items-center justify-center text-lg font-bold font-heading text-teal-600">
                        1. Ready
											</span>
										</div>
										<div className="px-5">
											<h3 className="text-xl font-semibold">
                        Make the plan
											</h3>
											<p className="text-blueGray-400 leading-loose">
                        Plan your daily routine carefully.
											</p>
										</div>
									</li>
									<li className="flex -mx-4 wow animate__ animate__fadeIn animated">
										<div>
											<span className="flex w-26 h-26 mx-auto items-center justify-center text-lg font-bold font-heading text-teal-600">
                        2. Set
											</span>
										</div>
										<div className="px-11">
											<h3 className="text-xl font-semibold">
                        Study about habits
											</h3>
											<p className="text-blueGray-400 leading-loose">
                        Put in some time and energy into research
											</p>
										</div>
									</li>
									<li className="flex -mx-4 wow animate__ animate__fadeIn animated">
										<div>
											<span className="flex w-26 h-26 mx-auto items-center justify-center text-lg font-bold font-heading text-teal-600">
                        3. Go!
											</span>
										</div>
										<div className="px-11">
											<h3 className="text-xl font-semibold">
                        You are ready
											</h3>
											<p className="text-blueGray-400 leading-loose">
                        Now go and change your life for better
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

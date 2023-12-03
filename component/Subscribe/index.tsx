import { FC, useState } from "react";
import axios from "axios";

export const Subscribe: FC = () => {
	const [email, setEmail] = useState<any>("");
	const [state, setState] = useState<any>("idle");

	const handleSubscribe = async (e: any) => {
		e.preventDefault();
		setState("Loading");
		try {
			await axios.post("/api/subscribe", { email });
			setState("Success");
			setTimeout(() => {
				setState("idle");
			}, 900);

			setEmail("");
		} catch (e: any) {
			setState("Error");
			setTimeout(() => {
				setState("idle");
			}, 900);
		}
	};

	const subscribeForm = (
		<div className="flex flex-wrap max-w-lg mx-auto">
			<div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-teal-500 border border-teal-300 rounded">
				<svg
					className="h-6 w-6 my-auto text-teal-300"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
				</svg>
				<input
					className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-teal-500 outline-none"
					type="text"
					placeholder="Type your e-mail"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</div>
			<button
				className="w-full md:w-auto py-4 px-8 text-xs text-teal text-teal-800 hover:text-teal font-semibold leading-none border border-teal-300 hover:border-teal-300 bg-white hover:bg-teal-500 rounded transition duration-300 ease-in-out"
				type="submit"
				onClick={handleSubscribe}
			>
				{" "}
        Sign Up{" "}
			</button>
		</div>
	);

	return (
		<>
			<div className="text-center max-w-xl mx-auto mb-11">
				<h2 className="mb-4 mt-20 text-3xl lg:text-3xl text-teal-600 font-bold font-heading">
					<span>Subscribe to </span>
					<span className="text-teal-300">OurHealthyDay </span> Newletter
				</h2>
				<p className="mb-8 text-gray-600">
          All your information is completely confidential
				</p>
				{state === "Success" ? (
					<p className="lg:text-4xl text-blueGray-200">
            Amazing, you made an account on Our Healthy Day
					</p>
				) : (
					subscribeForm
				)}
			</div>
			{state === "Error" &&
        alert("Oops Something went WORONG \nPlease Try Again or You are already a member !!!")}
		</>
	);
};

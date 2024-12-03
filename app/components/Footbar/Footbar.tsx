import Link from "next/link";
import React from "react";

const Footbar = () => {
	return (
		<div className="w-full bg-black/75 text-neutral-400 px-8 py-4 shadow-xl border-t-[1px] border-t-neutral-800 absolute bottom-0 flex items-center justify-between left-0">
			<div className="flex items-center justify-center w-fit gap-2 pl-8">
				<img src="/logo-nobackground.png" width={50} height={50} alt="" />
				<p>ⓒ Taskify 2024</p>
			</div>
			<div className=" pr-20 items-center justify-center gap-8 hidden md:flex">
				<Link href={"/dashboard"}>Dashboard</Link>
				<Link href={"/pomodoro"}>Pomodoro</Link>
			</div>
		</div>
	);
};

export default Footbar;

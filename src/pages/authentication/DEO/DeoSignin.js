import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const DeoSignin = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const goBack = () => {
        navigate("/");
    };
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh]">
                <div className="bg-[#000435] text-center">
                    <img
                        className="inline md:h-[400px] h-full md:mt-32 py-8 px-8 md:py-0 md:px-0"
                        src="/images/signup-new.webp"
                        alt="sd"
                    />
                </div>
                <div className="things md:px-32 px-4 md:mt-16 mt-4">
                    <div className="text-start">
                        <i
                            class="fa fa-arrow-left text-3xl text-[#5538c8] "
                            onClick={goBack}
                            style={{ cursor: "pointer" }}
                        ></i>
                    </div>
                    <div className="text-center">
                    </div>
                    <div className="mt-4">
                        <h1 className="text-center text-2xl font-bold whitespace-nowrap text-[#5538c8]">
                            Login As DEO
                        </h1>
                    </div>
                    <form>
                        
                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Email <span className="text-[red]">*</span>
                            </label>

                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type="email"
                                required
                                name="email"
                                placeholder="youremail@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="text-xs text-[red]"></span>
                        </div>
                       

                        <div className="w-full  mb-6 md:mb-0 mt-8">
                            <label
                                className="block  tracking-wide text-gray-700 text-base font-semibold mb-2 "
                                for="grid-first-name"
                            >
                                Password <span className="text-[red]">*</span>
                            </label>
                            <div className="io absolute right-[12%] mt-[9px] text-[#9fa5b0] hover:text-[#5538c8] cursor-pointer">
                                <i
                                    class="fa fa-eye"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <input
                                className="Name w-full py-2 px-2 border focus:outline-none"
                                type={showPassword ? "text" : "password"}
                                required
                                name="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>

                    <div className="flex justify-center mt-8 flex-col pb-4 md:pb-0 ">
                        <button
                            className="block w-full py-2 text-base text-white bg-[#000435]  hover:font-semibold px-8 mt-4"
                        >
                            Login
                        </button>
                        <Link to="/deo-signup">
                            <p className="mt-8 text-center font-semibold">
                                Dont have an acoount ?
                                <span className="text-[#5538c8] font-semibold hover:font-bold cursor-pointer">
                                    Signup
                                </span>
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeoSignin
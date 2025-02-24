import React from 'react';
import Button from "./Button";

function Navbar() {
    return (
        <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700'>
            <div className='nleft flex items-center'>
                <img className='h-18 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmbYGke0O_IhoLDpD7cWbpXa05Em3H8_wdA&s" alt="" />
                <div className='links flex gap-15 ml-28'>
                    {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
                        <a
                            key={index} // ✅ Added unique key
                            className='font-regular text-sm flex items-center gap-1'
                            href='#'
                        >
                            {index === 1 && (
                                <span
                                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                                    className='inline-block w-1 h-1 rounded-full bg-green-500'
                                ></span>
                            )}
                            {elem}
                        </a>
                    ))}
                </div>

            </div>
            <Button />
        </div>
    )
}

export default Navbar;
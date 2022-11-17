import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="text-6xl text-red-600 flex justify-center pt-2 pb-2">{count}</div>
                <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 active:bg-red-900 text-white w-96" type="button" onClick={() => setCount((count) => count + 1)}>
                    count+
                </button>
            </div>
        </div>
    )
}
export default Counter;
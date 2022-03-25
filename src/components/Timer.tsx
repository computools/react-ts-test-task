import React, {useEffect, useState} from "react";

const INTERVAL = 1000;

export const Timer = () => {
    const [tick, setTick] = useState<number>(0);

    useEffect(() => {
            const intervalHandler = setInterval(() => setTick(tick + 1), INTERVAL)
            return () => clearInterval(intervalHandler)
        }, [tick]
    )
    return (
        <div className="ticker">
            {tick}
        </div>

    )
}
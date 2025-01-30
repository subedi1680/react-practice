import React, { useState, useEffect, useRef, useCallback } from "react";

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalIdRef.current);
        }

        return () => clearInterval(intervalIdRef.current);
    }, [isRunning]);

    const start = useCallback(() => {
        if (!isRunning) {
            setIsRunning(true);
            startTimeRef.current = Date.now() - elapsedTime;
        }
    }, [isRunning, elapsedTime]);

    const stop = useCallback(() => {
        if (isRunning) {
            setIsRunning(false);
        }
    }, [isRunning]);

    const reset = useCallback(() => {
        setIsRunning(false);
        setElapsedTime(0);
        setLaps([]);
    }, []);

    const lap = useCallback(() => {
        setLaps([...laps, elapsedTime]);
    }, [laps, elapsedTime]);

    const formatTime = useCallback((time) => {
        const date = new Date(time);
        const hours = String(date.getUTCHours()).padStart(2, "0");
        const minutes = String(date.getUTCMinutes()).padStart(2, "0");
        const seconds = String(date.getUTCSeconds()).padStart(2, "0");
        const milliseconds = String(date.getUTCMilliseconds()).padStart(3, "0").slice(0, 2);
        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    }, []);

    return (
        <div className='stopwatch'>
            <div className='display'>
                {formatTime(elapsedTime)}
            </div>
            <div className="controls">
                <button onClick={start} className="start-button">Start</button>
                <button onClick={stop} className="stop-button">Stop</button>
                <button onClick={reset} className="reset-button">Reset</button>
                <button onClick={lap} className="lap-button">Lap</button>
                </div>
            {laps.length > 0 && (
                <table className="laps-table">
                    <thead>
                        <tr>
                            <th>Lap</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {laps.map((lapTime, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{formatTime(lapTime)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Stopwatch;

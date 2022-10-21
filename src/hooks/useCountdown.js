import { useState, useEffect } from 'react';

const fetchTime = async () => {
    try {
        const data = await fetch('https://worldtimeapi.org/api/timezone/America/New_York');
        const json = await data.json();
        return json.unixtime * 1000;
    } catch (e) {
        return new Date().getTime();
    }
};

const useCountdown = unixMilliseconds => {
    const [timeLeft, setTimeLeft] = useState({
        D: '-',
        H: '-',
        M: '-',
        S: '-',
    });
    const [done, setDone] = useState(false);
    const [initialFetchedTime, setInitialFetchedTime] = useState(0);
    const [called, setCalled] = useState(false);

    useEffect(() => {
        const interval = setInterval(async () => {
            const now = !called ? await fetchTime() : initialFetchedTime + 1000;
            setInitialFetchedTime(now);

            if (!called) setCalled(true);

            const distance = unixMilliseconds - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // check if done
            if (distance < 0) {
                setDone(true);
                clearInterval(interval);
            }

            setTimeLeft({
                D: days,
                H: hours,
                M: minutes,
                S: seconds,
            });
        }, 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [unixMilliseconds]);

    return [timeLeft, done];
};

export default useCountdown;

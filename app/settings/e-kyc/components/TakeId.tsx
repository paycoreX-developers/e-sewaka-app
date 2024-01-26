"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Camera, ChevronLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Webcam from "react-webcam";

const TakeId: React.FC = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [capturedResult, setCapturedResult] = useState<any>(null);
  const cameraRef = useRef<any>(null);
  const goto = useRouter();

  const timerHandler = () => {
    if (!isTimerRunning) {
      // Start the timer
      setIsTimerRunning(true);
    }
  };
  const capture = React.useCallback(() => {
    const imageSrc = cameraRef.current.getScreenshot();
    setCapturedResult(imageSrc);
  }, [cameraRef]);

  useEffect(() => {
    let timers: string | number | NodeJS.Timeout | undefined;

    if (isTimerRunning) {
      // Start the countdown timer
      timers = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    }

    // Stop the timer when it reaches 0
    if (timer === 0) {
      capture();
      setIsTimerRunning(false);
    }

    // Cleanup the timer on component unmount or when isTimerRunning changes
    return () => clearInterval(timers);
  }, [isTimerRunning, timer]);

  return (
    <div className="flex">
      <div className="w-3/4 grid place-content-center gap-3">
        <div className="relative">
          <Webcam
            width={500}
            screenshotFormat="image/jpeg"
            audio={false}
            ref={cameraRef}
            mirrored
            className={cn(
              timer - 1 === 0
                ? "animate-[pulse_1s_ease-in-out_1] duration-500 antialiased"
                : " border-blue-500 border-4"
            )}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                    w-[90%] h-[80%] z-20 border-2 border-white"
          ></div>
        </div>
        <p className="text-sm">Make sure your ID Card clearly and readable</p>
      </div>
      <div className="w-1/4">
        <div className="grid place-content-center w-full">
          <div className="text-7xl text-blue-500 font-extrabold flex items-center gap-4">
            <Button
              onClick={() => {
                timerHandler();
              }}
              variant="default"
              size="default"
              className="bg-blue-600 w-full"
            >
              <Camera />
              {timer <= 1 ? "" : `${timer - 1} Sec`}
            </Button>

            <select
              className="text-base w-fit h-fit p-2 rounded-lg"
              onChange={(event: React.ChangeEvent<any>) =>
                setTimer(event.target.value)
              }
            >
              <option value={1}>0 Sec</option>
              <option value={4}>3 Sec</option>
              <option value={6}>5 Sec</option>
            </select>
          </div>
        </div>
        <div className="min-h-[200px] w-full grid place-content-center">
          <img src={capturedResult} alt="" className="scale-75" />
          <Button className="w-full" variant="secondary">
            Upload
          </Button>
        </div>
        {/* <Button
					size={"icon"}
					variant={"secondary"}
					className="text-blue-500"
					onClick={() => goto(-1)}>
					<ChevronLeft />
				</Button> */}
      </div>
    </div>
  );
};

export default TakeId;

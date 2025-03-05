"use client";
import { addToast } from "@heroui/react";
import { useState, useEffect } from "react";

export default function ResendOtp() {
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    // Add your resend OTP logic here
    addToast({
      title: "Success",
      description: "OTP sended successfully",
      color: "success",
    });
    setTimer(60);
    setCanResend(false);
  };
  let timerdiv = <span className="text-primary">{timer}</span>;

  return (
    <div className="text-black text-base font-[800] text-center">
      <p className="">
        {timer > 0 ? (
          <>
            Resend OTP in <span className="text-primary">{timer}</span>s
          </>
        ) : (
          "Didn't get the OTP?"
        )}
      </p>
      <button
        className={`mt-2 cursor-pointer ${
          canResend ? "hover:text-primary" : "text-gray-400 cursor-not-allowed"
        }`}
        onClick={handleResend}
        disabled={!canResend}
      >
        Resend OTP
      </button>
    </div>
  );
}

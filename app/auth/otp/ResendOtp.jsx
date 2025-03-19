"use client";
import { verifyEmail } from "@/app/actions/auth/resetPass";
import { addToast } from "@heroui/react";
import { useState, useEffect } from "react";

export default function ResendOtp() {
  const [timer, setTimer] = useState(10);
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

  const handleResend = async () => {
    let email = {};
    if (typeof window !== "undefined") {
      email = JSON.parse(window.localStorage.getItem("otpEmail"));
    }
    // Add your resend OTP logic here
    const response = await verifyEmail(email);
    if (response.status === "success") {
      addToast({
        title: "Success",
        description: response.message,
        color: "success",
      });
      if (typeof window !== "undefined") {
        window.localStorage.setItem("otpEmail", JSON.stringify(email));
      }
    } else {
      addToast({
        title: "Error",
        description: response.message || "Failed to Send OTP",
        color: "danger",
        timeout: 1000,
      });
      setIsLoading(false);
    }
    setTimer(10);
    setCanResend(false);
  };

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

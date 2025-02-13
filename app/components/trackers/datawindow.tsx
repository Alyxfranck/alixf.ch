"use client";

import { useEffect, useState } from "react";
import {
  generateFingerprint,
  getClipboardData,
  getNetworkInfo,
  getDeviceInfo
} from "app/utils/fingerprint";

interface TrackingPayload {
  timestamp: string;
  fingerprint: unknown;
  network: unknown;
  clipboard: unknown;
  device: unknown;
}

function formatData(data: unknown): string {
  if (data === undefined || data === null) {
    return "N/A";
  }
  if (typeof data === "object") {
    try {
      return JSON.stringify(data, null, 2);
    } catch (error) {
      return String(data);
    }
  }
  return String(data);
}

export default function Datawindow() {
  const [trackingData, setTrackingData] = useState<TrackingPayload | null>(null);

  useEffect(() => {
    async function captureData() {
      try {
        // Capture all data in parallel
        const [fingerprint, networkInfo, clipboardData, deviceInfo] = await Promise.all([
          generateFingerprint(),
          getNetworkInfo(),
          getClipboardData(),
          getDeviceInfo()
        ]);

        const data: TrackingPayload = {
          timestamp: new Date().toISOString(),
          fingerprint,
          network: networkInfo,
          clipboard: clipboardData,
          device: deviceInfo
        };

        setTrackingData(data);

        // Optionally, send the data to your API
        await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error("Tracking error:", error);
      }
    }

    captureData();
  }, []);

  return (
    <div
  style={{
    
    bottom: "20px",
    right: "20px",
   
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "1.5rem",
    zIndex: 1000,
    fontSize: "0.9rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
   
  }}
>
  <h2
    style={{
      marginBottom: "1rem",
      fontSize: "1.2rem",
      fontWeight: "600",
      textAlign: "center",
    }}
  >
    Tracking Data
  </h2>
  {trackingData ? (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Network Info */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          borderBottom: "1px solid #eee",
          paddingBottom: "1rem",
        }}
      >
        <div
          style={{
           
            borderRadius: "50%",
            padding: "4px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M1.42 9a16 16 0 0 1 21.16 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12" y2="20" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              margin: 0,
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            Network Info
          </h3>
          <p style={{ margin: "0.5rem 0" }}>
            A brief overview of your current network settings:
          </p>
          <div style={{ marginLeft: "1rem" }}>
            {trackingData.network &&
            typeof trackingData.network === "object" ? (
              Object.entries(trackingData.network).map(([key, value]) => (
                <p key={key} style={{ margin: "0.2rem 0" }}>
                  <strong>{key}:</strong> {formatData(value)}
                </p>
              ))
            ) : (
              <p>{formatData(trackingData.network)}</p>
            )}
          </div>
        </div>
      </div>

      {/* Clipboard Data */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          borderBottom: "1px solid #eee",
          paddingBottom: "1rem",
        }}
      >
        <div
          style={{
          
            borderRadius: "50%",
            padding: "4px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              margin: 0,
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            Clipboard Data
          </h3>
          <p style={{ margin: "0.5rem 0" }}>
            The data you copied is displayed here:
          </p>
          <div style={{ marginLeft: "1rem" }}>
            <p>{formatData(trackingData.clipboard)}</p>
          </div>
        </div>
      </div>

      {/* Device Info */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          borderBottom: "1px solid #eee",
          paddingBottom: "1rem",
        }}
      >
        <div
          style={{
          
            borderRadius: "50%",
            padding: "4px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
            <line x1="12" y1="17" x2="12" y2="17" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              margin: 0,
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            Device Info
          </h3>
          <p style={{ margin: "0.5rem 0" }}>
            Information about your device is as follows:
          </p>
          <div style={{ marginLeft: "1rem" }}>
            {trackingData.device &&
            typeof trackingData.device === "object" ? (
              Object.entries(trackingData.device).map(([key, value]) => (
                <p key={key} style={{ margin: "0.2rem 0" }}>
                  <strong>{key}:</strong> {formatData(value)}
                </p>
              ))
            ) : (
              <p>{formatData(trackingData.device)}</p>
            )}
          </div>
        </div>
      </div>

      {/* Fingerprint */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <div
          style={{
        
            borderRadius: "50%",
            padding: "4px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
            <path d="M6.6 19.94a8.003 8.003 0 0 1 10.8 0" />
            <path d="M3 11h1" />
            <path d="M20 11h1" />
          </svg>
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              margin: 0,
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            Fingerprint
          </h3>
          <p style={{ margin: "0.5rem 0" }}>
            Your unique fingerprint is listed below:
          </p>
          <div style={{ marginLeft: "1rem" }}>
            <p>{formatData(trackingData.fingerprint)}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  )}
</div>
  );
}

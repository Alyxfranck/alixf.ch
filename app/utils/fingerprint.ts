export function generateFingerprint(): string {
    // Create a canvas element and draw text for canvas fingerprinting
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.textBaseline = "top";
      ctx.font = "14px Arial";
      ctx.fillText("User Fingerprint", 10, 50);
    }
  
    // Concatenate the required data points
    const fingerprintData = [
      `userAgent:${navigator.userAgent}`,
      `language:${navigator.language}`,
      `screenResolution:${window.screen.width}x${window.screen.height}`,
      `canvasData:${canvas.toDataURL()}`,
      `cpuCores:${navigator.hardwareConcurrency || "Unknown"}`,
      `timeZone:${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    ].join("||");
  
    // Generate a hash from the fingerprint data using the djb2 algorithm
    const hashedValue = djb2Hash(fingerprintData);
  
    // Convert the numeric hash to a base-36 string for a shorter representation
    return hashedValue.toString(36);
  }
  
  /**
   * A simple djb2 hash function.
   * For stronger hashing requirements, consider using the Web Crypto API.
   */
  function djb2Hash(str: string): number {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) + str.charCodeAt(i);
    }
    
    return hash >>> 0;
  }
  
export function getGPUFingerprint(): string {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") as WebGLRenderingContext || canvas.getContext("experimental-webgl") as WebGLRenderingContext;
    if (!gl) return "No WebGL";
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    return debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "Unknown GPU";
}

export function getDeviceInfo() {
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        vendor: navigator.vendor,
        GPU: getGPUFingerprint(),
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        cpuCores: navigator.hardwareConcurrency || "Unknown",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }
}

export function getNetworkInfo() {
    return fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => ({
            ip: data.ip,
            city: data.city,
            country: data.country_name,
            isp: data.org,
        }));
}

export function getBatteryInfo() {
    if ('getBattery' in navigator) {
        return (navigator as any).getBattery().then(battery => ({
            level: battery.level * 100,
            charging: battery.charging
        }));
    } else {
        return Promise.resolve({ level: "Unknown", charging: "Unknown" });
    }
}

export function getClipboardData() {
    return new Promise((resolve) => {
        navigator.clipboard.readText().then(text => resolve(text)).catch(() => resolve("Clipboard access denied"));
    });
}

export async function getBluetoothDevices() {
    try {
        const device = await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
        return device ? { name: device.name, id: device.id } : null;
    } catch (error) {
        return { error: "Bluetooth access denied or unavailable" };
    }
}
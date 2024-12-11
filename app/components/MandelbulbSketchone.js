// app/components/MandelbulbSketch.js

'use client'; // Ensure this is at the very top of the file

import React, { useEffect } from 'react';

export default function MandelbulbSketchone() {
  useEffect(() => {
    let p5Instance;

    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Dynamically import p5
      import('p5')
        .then((p5) => {
          const sketch = (p) => {
            // Sketch code starts here
            let DIM = 10;
            let maxiterations = 3;
            let targetDIM = 200;
            let targetMaxIterations = 10;
            let transitionSpeed =   1;
            let mandelbulb = [];
            let transitioning = true;

            // Setup the canvas with full window dimensions
            p.setup = () => {
              p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
              p.calculateMandelbulb(DIM, maxiterations); // Initial calculation
            };

            // Resize canvas on window resizing
            p.windowResized = () => {
              p.resizeCanvas(p.windowWidth, p.windowHeight);
            };

            p.calculateMandelbulb = (DIM, maxiterations) => {
              mandelbulb = []; // Reset the array
              for (let i = 0; i < DIM; i++) {
                for (let j = 0; j < DIM; j++) {
                  for (let k = 0; k < DIM; k++) {
                    let x = p.map(i, 0, DIM, -2, 2);
                    let y = p.map(j, 0, DIM, -2, 2);
                    let z = p.map(k, 0, DIM, -2, 2);
                    let zeta = p.createVector(0, 0, 0);
                    let n = 2.5; // You can adjust the power for different shapes
                    let iteration =3;
                    while (true) {
                      let c = spherical(zeta.x, zeta.y, zeta.z);
                      let newx =
                        Math.pow(c.r, n) *
                          Math.sin(c.theta * n) *
                          Math.cos(c.phi * n);
                      let newy =
                        Math.pow(c.r, n) *
                          Math.sin(c.theta * n) *
                          Math.sin(c.phi * n);
                      let newz = Math.pow(c.r, n) * Math.cos(c.theta * n);
                      zeta.x = newx + x;
                      zeta.y = newy + y;
                      zeta.z = newz + z;
                      iteration++;
                      if (c.r > 2 || iteration > maxiterations) {
                        break;
                      }
                    }
                    if (iteration === maxiterations) {
                      mandelbulb.push(
                        p.createVector(x * 200, y * 200, z * 200) // Scale for visibility
                      );
                    }
                  }
                }
              }
            };

            function spherical(x, y, z) {
              let r = Math.sqrt(x * x + y * y + z * z);
              let theta = Math.atan2(Math.sqrt(x * x + y * y), z);
              let phi = Math.atan2(y, x);
              return { r, theta, phi };
            }

            p.draw = () => {
              p.background(50,0.4);
              p.strokeWeight(0.1);
              p.stroke(0);
              p.noFill();
              p.rotateX(p.HALF_PI); // Rotate to make the Mandelbulb stand upright
              p.rotateZ(p.frameCount * 0.002); // Add rotation around the Z-axis
              p.beginShape(p.POINTS);
              for (let v of mandelbulb) {
                p.vertex(v.x, v.y, v.z);
              }
              p.endShape();
              if (transitioning) {
                p.updateValues();
              }
            };

            p.updateValues = () => {
              let needRecalculation = false;
              if (Math.abs(DIM - targetDIM) > 0.1) {
                DIM = p.lerp(DIM, targetDIM, transitionSpeed);
                needRecalculation = true;
              }
              if (Math.abs(maxiterations - targetMaxIterations) > 0.1) {
                maxiterations = p.lerp(
                  maxiterations,
                  targetMaxIterations,
                  transitionSpeed
                );
                needRecalculation = true;
              }

              if (needRecalculation) {
                p.calculateMandelbulb(
                  Math.floor(DIM),
                  Math.floor(maxiterations)
                );
              } else {
                transitioning = false;
              }
            };
          };

          // Instantiate the p5 sketch
          p5Instance = new p5.default(sketch);
        })
        .catch((error) => {
          console.error('Failed to load p5:', error);
        });
    }

    // Cleanup function to remove the p5 instance on component unmount
    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, []);

  return <div></div>;
}

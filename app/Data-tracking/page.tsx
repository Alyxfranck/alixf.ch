
import Datawindow from "app/components/trackers/datawindow";

export default function Page() {
  return (
    <section>
      <h1 className="mb-3 text-4xl font-semibold tracking-tighter">
        Data Tracking
      </h1>
      <p className="mb-6">
        Ever wondered what data your browser is leaking? This page demonstrates how to capture and display data from the browser.
      </p>
      {/* Render the Tracker debug window */}
      <Datawindow />
    </section>
  );
}

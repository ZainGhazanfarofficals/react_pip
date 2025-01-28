import React, { useCallback, useRef } from "react";
import ReactDOM from "react-dom/client";

type PiPExampleProps = {
  Component: React.ReactNode; // React component to render in PiP
  title?: string; // Optional title for the PiP window
  width?: number; // Optional width for the PiP window
  height?: number; // Optional height for the PiP window
  openButton?: React.ReactNode; // Custom button for opening the PiP window
  closeButton?: React.ReactNode; // Custom button for closing the PiP window
};

const React_PiP: React.FC<PiPExampleProps> = ({
  Component,
  title = "My PiP Library",
  width = 500,
  height = 100,
  openButton,
  closeButton,
}) => {
  const pipWindowRef = useRef<any>(null);
  const pipRootRef = useRef<ReturnType<typeof ReactDOM.createRoot> | null>(null);

  const openPiPWindow = useCallback(async () => {
    if (!pipWindowRef.current) {
      try {
        const dpip = await (window as any).documentPictureInPicture.requestWindow({
          width,
          height,
        });

        dpip.document.title = title;

        // Create a root element for React rendering in the PiP window
        const rootElement = dpip.document.createElement("div");
        dpip.document.body.appendChild(rootElement);
        pipRootRef.current = ReactDOM.createRoot(rootElement);

        // Render the provided React component in the PiP window
        pipRootRef.current.render(
          <div style={{ padding: "10px" }}>
            {Component}
          </div>
        );

        pipWindowRef.current = dpip;

        // Handle when PiP window is closed
        dpip.addEventListener("unload", () => {
          pipWindowRef.current = null;
        });
      } catch (error) {
        console.error("Error entering Picture-in-Picture:", error);
      }
    }
  }, [Component, title, width, height]);

  const closePiPWindow = useCallback(() => {
    if (pipWindowRef.current) {
      pipWindowRef.current.close();
      pipWindowRef.current = null;
    }
  }, []);

  return (
    <div>
      {/* Render custom or default Open Button */}
      {openButton ? (
        <div onClick={openPiPWindow} style={{ display: "inline-block", cursor: "pointer" }}>
          {openButton}
        </div>
      ) : (
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007AFF",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={openPiPWindow}
        >
          Open PiP Window
        </button>
      )}

      {/* Render custom or default Close Button */}
      {closeButton ? (
        <div onClick={closePiPWindow} style={{ display: "inline-block", cursor: "pointer" }}>
          {closeButton}
        </div>
      ) : (
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#E05242",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={closePiPWindow}
        >
          Close PiP Window
        </button>
      )}
    </div>
  );
};

export default React_PiP;

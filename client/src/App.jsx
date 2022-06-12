/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "animate.css";

function UploadFileZone({ uploadFile, error, setError }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/gif": [".gif"],
      "image/svg+xml": [".svg"],
    },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length) {
        uploadFile(acceptedFiles[0]);
        return;
      }
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    },
  });

  const openFileDialog = () => {
    document.getElementById("file-input").click();
  };

  return (
    <>
      <h1 className="text-center text-2xl font-medium tracking-[0.1rem] ">
        Upload your image
      </h1>
      <p className="text-center text-xs mt-4">File should be Jpeg, Png, ...</p>
      <div
        {...getRootProps({
          className: `dropzone border-2 ${
            error
              ? "border-rose-500 hover:bg-rose-500"
              : "border-[#57DCBE] hover:bg-[#57DCBE]"
          } aspect-video mt-12 border-dashed flex flex-col items-center justify-center w-full cursor-pointer transition-colors hover:text-zinc-900`,
        })}
      >
        <Icon
          icon="uil:image-upload"
          className="w-12 h-12 stroke-[0.4px] stroke-zinc-900"
        />
        <p className="text-sm mt-4 font-medium">Drag & Drop your image here</p>
        <input {...getInputProps()} />
      </div>
      <span className="font-medium text-center mt-6">OR</span>
      <button
        onClick={openFileDialog}
        className={`w-full border-2 ${
          error
            ? "border-rose-500 hover:bg-rose-500"
            : "border-[#57DCBE] hover:bg-[#57DCBE]"
        } hover:text-zinc-900 font-medium py-4 mt-6 tracking-[0.2rem] !text-sm`}
      >
        CHOOSE IMAGE
      </button>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files.length) {
            if (
              [".png", ".jpg", ".jpeg", ".gif", ".svg"].includes(
                e.target.files[0].type
              )
            ) {
              uploadFile(e.target.files[0]);
              return;
            }
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 1000);
          }
        }}
        className="hidden"
      />
    </>
  );
}

function Uploading() {
  return (
    <>
      <h1 className="w-full text-lg font-medium">Uploading...</h1>
      <div className="w-full h-1.5 bg-zinc-800 mt-6 rounded-full overflow-hidden flex">
        <div className="h-full flex justify-end transition-all duration-1000 animation">
          <div className="w-20 h-full bg-[#57DCBE] rounded-full"></div>
        </div>
      </div>
    </>
  );
}

function Uploaded({ imageUrl }) {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <Icon
        icon="uil:check-circle"
        className="w-16 h-16 stroke-[0.4px] stroke-zinc-900"
      />
      <h1 className="text-center text-2xl mt-2 font-medium tracking-[0.1rem] ">
        Uploaded Successfully!
      </h1>
      <img
        alt=""
        src={imageUrl}
        className="w-full h-full object-contain mt-6 border-2 border-[#57DCBE] p-2"
      />
      <div className="w-full border-2 border-[#57DCBE] overflow-hidden mt-4 flex flex-col sm:flex-row items-center flex-grow-0 h-20">
        <div className="text-center text-sm overflow-y-scroll px-6 container hidden sm:block">
          <div className="pr-6 whitespace-nowrap inline-block">
            {location.href.slice(0, -1)}
            {imageUrl}
          </div>
        </div>
        <button
          className="px-6 block h-full bg-[#57DCBE] text-zinc-900 whitespace-nowrap font-medium tracking-[0.2rem] !text-xs uppercase py-4 w-full sm:w-auto"
          onClick={() => {
            navigator.clipboard.writeText(
              `${location.href.slice(0, -1)}${imageUrl}`
            );
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
        >
          {copied ? "Copied!" : "Copy url"}
        </button>
      </div>
    </>
  );
}

function App() {
  const [stage, setStage] = useState(0);
  const [error, setError] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const uploadFile = async (file) => {
    setStage(1);
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    });
    if (response.status === 200) {
      const res = await response.json();
      if (res.message === "success") {
        setImageUrl(res.path);
        setStage(2);
      }
    }
  };

  return (
    <main
      className={`w-full px-8 h-screen bg-zinc-900 ${
        error ? "text-rose-500" : "text-[#57DCBE]"
      } flex flex-col items-center justify-center pb-10 font-['MiSans']`}
    >
      <div
        className={`w-full sm:w-8/12 lg:w-5/12 max-h-[calc(100%-8rem)] border-2 animate__animated animate__fast ${
          error ? "border-rose-500 animate__shakeX" : "border-[#57DCBE]"
        } p-8 flex flex-col items-center`}
      >
        {
          [
            <UploadFileZone
              key={0}
              uploadFile={uploadFile}
              setStage={setStage}
              setError={setError}
              error={error}
            />,
            <Uploading key={1} />,
            <Uploaded key={2} imageUrl={imageUrl} />,
          ][stage]
        }
      </div>
      <p className="text-sm text-center w-full pb-4 absolute bottom-0 left-1/2 -translate-x-1/2">
        Made with 💚 by{" "}
        <a
          className="underline"
          href="https://thecodeblog.net"
          target="_blank"
          rel="noreferrer"
        >
          Melvin Chia
        </a>
        . Project under MIT license.
      </p>
    </main>
  );
}

export default App;

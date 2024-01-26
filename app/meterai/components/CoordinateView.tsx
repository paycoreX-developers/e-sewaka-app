"use client";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Document, Page } from "react-pdf";

type Props = {
  file: any;
  setFile: any;
  setToCoordinat: any;
};

export default function CoordinateView({
  file,
  setFile,
  setToCoordinat,
}: Props) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [x, setX] = useState<any>("");
  const [y, setY] = useState<any>("");
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
      setX(coords.current.lastX);
      setY(coords.current.lastY);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      console.log(container.offsetWidth, box.clientWidth);

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="relative">
      <header className="bg-gray-300 p-3">
        <div className="bg-emerald-500 text-white px-5 py-2 flex justify-between">
          <span>{file.path}</span>
          <XCircle
            className="hover:scale-110 hover:cursor-pointer"
            onClick={() => {
              setFile(false);
              setToCoordinat(false);
            }}
          />
        </div>
        X: <span>{x}</span> {" | "}
        Y: <span>{y}</span> {" | "}
        Page: <span>{pageNumber}</span>
      </header>
      <div className="w-full grid place-content-center mb-5">
        <div className="w-fit flex gap-5 items-center mt-5 border-2 border-blue-600 rounded-full overflow-hidden">
          <Button
            variant="default"
            disabled={pageNumber === 1}
            className="bg-blue-600 w-[100px] rounded-none"
            onClick={() => setPageNumber((current: number) => current - 1)}
          >
            PREV
          </Button>
          Page {pageNumber} of {numPages}
          <Button
            variant="default"
            disabled={pageNumber === numPages}
            className="bg-blue-600 w-[100px] rounded-none"
            onClick={() => setPageNumber((current: number) => current + 1)}
          >
            NEXT
          </Button>
        </div>
      </div>
      <div className="w-full grid place-content-center bg-gray-300 p-6 ">
        <div
          className="max-w-fit max-h-fit relative overflow-hidden"
          ref={containerRef}
        >
          {/* <Document
            file={file ? file : "/other/example.pdf"}
            className={"max-w-full"}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              renderMode="canvas"
              renderTextLayer={false}
              className={"pointer-events-none"}
            />
          </Document> */}
          <div
            className="min-w-[2cm] aspect-square absolute top-0 left-0 z-40 text-xs
                     		cursor-move bg-[url('/assets/auth/materai.webp')] bg-center bg-cover"
            ref={boxRef}
          ></div>
        </div>
      </div>
    </div>
  );
}

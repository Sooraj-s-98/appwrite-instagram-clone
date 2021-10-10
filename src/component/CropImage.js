import React, { useState, useCallback, useRef, useEffect } from "react";

import "react-image-crop/dist/ReactCrop.css";

// Setting a high pixel ratio avoids blurriness in the canvas crop preview.
const pixelRatio = 10;
var imgheight;
var imgwidth;
// We resize the canvas down when saving on retina devices otherwise the image
// will be double or triple the preview size.
function getResizedCanvas(canvas, newWidth, newHeight) {
  const tmpCanvas = document.createElement("canvas");
  tmpCanvas.width = newWidth;
  tmpCanvas.height = newHeight;

  const ctx = tmpCanvas.getContext("2d");
  ctx.drawImage(
    canvas,
    0,
    0,
    canvas.width,
    canvas.height,
    0,
    0,
    newWidth,
    newHeight
  );

  return tmpCanvas;
}

function generateDownload(previewCanvas, crop) {
  if (!crop || !previewCanvas) {
    return;
  }

  const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);

  canvas.toBlob(
    (blob) => {
      const previewUrl = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.download = "cropPreview.png";
      anchor.href = URL.createObjectURL(blob);
      anchor.click();

      window.URL.revokeObjectURL(previewUrl);
    },
    "image/png",
    1
  );
}

function b64ToUint8Array(b64Image) {
  var img = atob(b64Image.split(",")[1]);
  var img_buffer = [];
  var i = 0;
  while (i < img.length) {
    img_buffer.push(img.charCodeAt(i));
    i++;
  }
  return new Uint8Array(img_buffer);
}

export default function App(props) {

  const {
    w,
    h,

  } = props;



  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState(null);
  const [resolutionError, setResolutionError] = useState(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [crop, setCrop] = useState({
    unit: "%",
    // width: 50,
    aspect: 16 / 9,
    // height: 50,   
    x: w,
    y: h,
  });
  const [completedCrop, setCompletedCrop] = useState(null);

  const onSelectFile = (e) => {
    // if (e.target.files && e.target.files.length > 0) {
    //   setSelectedFile(e.target.files[0]);
    //   const reader = new FileReader();
    //   reader.addEventListener("load", () => setUpImg(reader.result));
    //   reader.readAsDataURL(e.target.files[0]);

    //   setModalShow(true);
    // }

    // console.log("imageorg",imgRef.current)
    var reader = new FileReader();
    //Read the contents of Image File.
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      //Initiate the JavaScript Image object.
      var image = new Image();

      //Set the Base64 string return from FileReader as source.
      image.src = e.target.result;

      //Validate the File Height and Width.
      image.onload = function () {
        imgheight = this.height;
        imgwidth = this.width;
  
        return true;
      }
    };


    // const response =  generalClient.getImageDimension();
    // console.log(response);
    // let minWidth = 100;
    // let maxWidth = 5000;
    // let minHeight = 100;
    // let maxHeight = 5000;
    // console.log("imgconsole", imgwidth < minWidth && imgwidth > maxWidth && imgheight < maxHeight && imgheight > minHeight)
    // if (((imgwidth < minWidth && imgwidth > maxWidth) && (imgheight < maxHeight && imgheight > minHeight)) == false) {
    //   console.log("errorr")
    //   props.onSave(false);

    // }
    // else {
      const fileEvent = { target: { name: props.name, files: [e.target.files[0]] } };

      props.onSave(fileEvent);
    // }





  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    console.log("width,height", image.naturalWidth, image.naturalHeight)

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const b64Image = canvas.toDataURL("image/jpeg");
    const u8Image = b64ToUint8Array(b64Image);
    const newBlob = new Blob([u8Image], { type: "image/jpg" });

    const newFile = new File([newBlob], selectedFile.name);
    const fileEvent = { target: { name: props.name, files: [newFile] } };
    setFile(fileEvent);
    setPreview(b64Image);
  }, [completedCrop]);

  return (
    <>
      <div>
        {props.renderComponent({ onSelectFile, src })}
      </div>
      {/* <Modal
        show={modalShow}
        resolutionError={resolutionError}
        onHide={() => setModalShow(false)}
        onSave={() => {
          setSrc(preview);
          props.onSave(file);
          setModalShow(false);

        }}
        useorginal={() => {
          const fileEvent = { target: { name: props.name, files: [selectedFile] } };
          props.onSave(fileEvent);
          setModalShow(false)
        }}

      >
        <ReactCrop
          src={upImg}
          style={{ maxHeight: "550px" }}
          onImageLoaded={onLoad}
          crop={crop}
          minHeight={100}
          minWidth={100}

          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
        />
      </Modal> */}

      <canvas
        ref={previewCanvasRef}

        style={{
          width: 0,
          height: 0,
        }}
      />
    </>
  );
}

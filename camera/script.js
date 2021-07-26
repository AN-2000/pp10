let videoPlayer = document.querySelector("video");
let recordBtn = document.querySelector("#record");
let captureBtn = document.querySelector("#capture");
let body = document.querySelector("body");
let mediaRecorder;
let chunks = [];
let isRecording = false;

captureBtn.addEventListener("click", function () {
  let canvas = document.createElement("canvas");
  canvas.width = videoPlayer.videoWidth; //1280x720
  canvas.height = videoPlayer.videoHeight;

  let tool = canvas.getContext("2d");

  tool.drawImage(videoPlayer, 0, 0);

  let url = canvas.toDataURL();
  canvas.remove();

  let a = document.createElement("a");
  a.href = url;
  a.download = "image.png";
  a.click();
  a.remove();
});

recordBtn.addEventListener("click", function () {
  if (isRecording) {
    //recording ko stop krna h
    mediaRecorder.stop();
    isRecording = false;
  } else {
    //recording shuru krni hai
    mediaRecorder.start();
    isRecording = true;
  }
});

let promiseToUseCamera = navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});

promiseToUseCamera
  .then(function (mediaStream) {
    // lamen terms me mediaStream ek object hai jisme continously camera and mic ka input ara hai and wo input fir maine using objects video me dalra hu
    videoPlayer.srcObject = mediaStream;

    mediaRecorder = new MediaRecorder(mediaStream);

    mediaRecorder.addEventListener("dataavailable", function (e) {
      chunks.push(e.data);
    });

    mediaRecorder.addEventListener("stop", function (e) {
      let blob = new Blob(chunks, { type: "video/mp4" });
      chunks = [];

      let link = URL.createObjectURL(blob); //kisi tarike se blob ki link bnadi h

      let a = document.createElement("a");
      a.href = link;
      a.download = "video.mp4";
      a.click();
      a.remove();
    });
  })
  .catch(function () {
    console.log("user has denied the access of camera");
  });

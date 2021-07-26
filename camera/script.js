let videoPlayer = document.querySelector("video");
      let recordBtn = document.querySelector("#record");
      let mediaRecorder;
      let chunks = [];
      let isRecording = false;

      recordBtn.addEventListener("click", function () {
        if(isRecording){
            //recording ko stop krna h
            mediaRecorder.stop()
            isRecording = false
        }else{
            //recording shuru krni hai 
            mediaRecorder.start()
            isRecording = true
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

          });
        })
        .catch(function () {
          console.log("user has denied the access of camera");
        });
import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider";
import { firestore } from "../firebase";

import "./videoCard.css";

let VideoCard = (props) => {
  let [playing, setPlaying] = useState(false);
  let [commentBoxOpen, setCommentBoxOpen] = useState(false);
  let [currUserComment, setCurrUserComment] = useState("");
  let [comments, setComments] = useState([]);
  let user = useContext(authContext);

  let currUserLiked;
  if (user) {
    currUserLiked = props.data.likes.includes(user.uid);
  }

  useEffect(() => {
    let f = async () => {
      let commentsArr = props.data.comments;
      let arr = [];
      for (let i = 0; i < commentsArr.length; i++) {
        let commentDoc = await firestore
          .collection("comments")
          .doc(commentsArr[i])
          .get();

        arr.push(commentDoc.data());
      }

      setComments(arr);
    };
    f();
  }, [props]);

  return (
    <div className="video-card">
      <p className="video-card-username">{props.data.name}</p>
      <span className="video-card-music">
        <span className="material-icons">music_note</span>
        <marquee>some song</marquee>
      </span>

      <span
        onClick={(e) => {
          if (commentBoxOpen) {
            setCommentBoxOpen(false);
          } else {
            setCommentBoxOpen(true);
          }
        }}
        className="material-icons-outlined video-card-comment"
      >
        chat
      </span>

      <span
        className="material-icons-outlined video-card-like"
        onClick={() => {
          let likesArr = props.data.likes;
          if (currUserLiked) {
            likesArr = likesArr.filter((el) => el != user.uid);
          } else {
            likesArr.push(user.uid);
          }
          firestore
            .collection("posts")
            .doc(props.data.id)
            .update({ likes: likesArr });
        }}
      >
        {currUserLiked ? "favorite" : "favorite_border"}
      </span>

      {commentBoxOpen ? (
        <div className="video-card-comment-box">
          <div className="actual-comments">
            {comments.map((el) => {
              return (
                <div className="post-user-comment">
                  <img src={el.photo} />
                  <div>
                    <h5>{el.name}</h5>
                    <p>{el.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="comment-form">
            {/* jobhi mai input tag me likhunga wo meri state me save hota rahega  */}
            <input
              type="text"
              value={currUserComment}
              onChange={(e) => {
                setCurrUserComment(e.currentTarget.value);
              }}
            />
            <button
              onClick={async () => {
                //jo current comment state me hai use comments collection me add kr rha hu
                let docRef = await firestore.collection("comments").add({
                  name: user.displayName,
                  comment: currUserComment,
                  photo: user.photoURL,
                });

                setCurrUserComment("");
                //to jo abhi comment maine add kra hai uske document ke ref se wo comment ka document nikal lo
                let doc = await docRef.get();
                //us document ki id nikal lo
                let commentId = doc.id;

                //ye jo video card hai uska post document nikalo
                let postDoc = await firestore
                  .collection("posts")
                  .doc(props.data.id)
                  .get();
                //us document me comment arr hai whapr jo apne apni comment add kra h uski id insert krdo
                let postCommentsArr = postDoc.data().comments;

                postCommentsArr.push(commentId);

                // ab ye comments array firestore jakr update krdo
                await firestore.collection("posts").doc(props.data.id).update({
                  comments: postCommentsArr,
                });
              }}
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <video
        onClick={(e) => {
          if (playing) {
            e.currentTarget.pause();
            setPlaying(false);
          } else {
            e.currentTarget.play();
            setPlaying(true);
          }
        }}
        loop
        src={props.data.url}
        className="video-card-video"
      ></video>
    </div>
  );
};

export default VideoCard;

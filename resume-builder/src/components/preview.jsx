import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview = () => {
  let { fname, lname, city, state, email, phone, cgpa, college, degree, year } =
    useSelector((state) => state.details);

  let templateCode = useSelector((state) => state.template);
  return (
    <>
      <div className="preview-container">
        <p className={`template-${templateCode}`}>{fname}</p>
        <p className={`template-${templateCode}`}>{lname}</p>
        <p className={`template-${templateCode}`}>{email}</p>
        <p className={`template-${templateCode}`}>{phone}</p>
        <p className={`template-${templateCode}`}>{city}</p>
        <p className={`template-${templateCode}`}>{state}</p>
        <p className={`template-${templateCode}`}>{college}</p>
        <p className={`template-${templateCode}`}>{degree}</p>
        <p className={`template-${templateCode}`}>{cgpa}</p>
        <p className={`template-${templateCode}`}>{year}</p>
      </div>
    </>
  );
};

export default Preview;

import Image from "next/image";
import Link from "next/link";
import client1 from "../../../public/images/testimonial/client-04.png";
import client2 from "../../../public/images/testimonial/client-05.png";
import client3 from "../../../public/images/testimonial/client-06.png";

const ProfileShare = () => (
  <div className="rbt-like-total">
    <div className="profile-share">
      {[client1, client2, client3].map((client, index) => (
        <Link
          key={index}
          href="#"
          className="avatar"
          data-tooltip={`Client ${index + 1}`}
          tabIndex="0"
        >
          <Image src={client} width={55} height={55} alt="education" />
        </Link>
      ))}
      <div className="more-author-text">
        <h5 className="total-join-students">Join Over 3000+ Students</h5>
        <p className="subtitle">Have a new ideas every week.</p>
      </div>
    </div>
  </div>
);

export default ProfileShare;

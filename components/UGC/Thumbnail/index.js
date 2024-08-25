import Image from "next/image";
import client4 from "../../../public/images/testimonial/client-12.png";
import languageClub from "../../../public/images/banner/language-club.png";

const Thumbnail = () => (
  <div className="thumbnail-wrapper">
    <div className="thumbnail text-end">
      <Image
        src={languageClub}
        width={597}
        height={479}
        alt="Education Images"
      />
    </div>
    <div className="card-info bounce-slide">
      <div className="inner">
        <div className="name">
          Hillery. <span>/ USA</span>
        </div>
        <div className="rating-wrapper d-block d-sm-flex">
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
          </div>
          <span>(Google Review)</span>
        </div>
      </div>
      <div className="notify-icon">
        <Image src={client4} width={100} height={100} alt="Client Images" />
      </div>
    </div>
  </div>
);

export default Thumbnail;

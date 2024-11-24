import CountDownTwo from "@/components/Counters/CountDownTwo";

const Countdown = () => (
  <div
    className="rbt-countdown-area bg_image bg_image--6 bg_image_fixed rbt-section-gap"
    data-black-overlay="5"
  >
    <div className="container">
      <CountDownTwo />
    </div>
  </div>
);

export default Countdown;

import Link from "next/link";

const ButtonGroup = () => (
  <div className="rbt-button-group justify-content-start mt--30">
    <Link className="rbt-btn btn-gradient rbt-switch-btn" href="#">
      <span data-text="Sign Up Now">Sign Up Now</span>
    </Link>
    <Link className="rbt-btn btn-border rbt-switch-btn" href="#">
      <span data-text="Find Courses">Find Courses</span>
    </Link>
  </div>
);

export default ButtonGroup;

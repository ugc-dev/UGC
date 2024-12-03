import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/Context";
import { AccountType } from "@/public/constants";

import CreatorData from "../../../data/user.json";
import UserData from "../../../data/student.json";

const User = () => {
  const { handleLogout, userProfile } = useAppContext();
  const DataToMap =
    userProfile?.account_type === AccountType.USER ? UserData : CreatorData;
  return (
    <div className="rbt-user-menu-list-wrapper">
      {DataToMap &&
        DataToMap.user.map((person, index) => (
          <div className="inner" key={index}>
            <div className="rbt-admin-profile">
              <div className="admin-thumbnail">
                <Image
                  src={person.img}
                  width={43}
                  height={43}
                  alt="User Images"
                />
              </div>
              <div className="admin-info">
                <span className="name">{userProfile?.display_name}</span>
                <Link
                  className="rbt-btn-link color-primary"
                  href={
                    userProfile?.account_type === AccountType.USER
                      ? "/user/profile"
                      : "/creator/profile"
                  }
                >
                  View Profile
                </Link>
              </div>
            </div>
            <ul className="user-list-wrapper">
              {person.userList.map((list, innerIndex) => (
                <li key={innerIndex}>
                  <Link href={list.link}>
                    <i className={list.icon}></i>
                    <span>{list.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="mt--10 mb--10" />
            <ul className="user-list-wrapper">
              <li>
                <Link href="#">
                  <i className="feather-book-open"></i>
                  <span>Getting Started</span>
                </Link>
              </li>
            </ul>
            <hr className="mt--10 mb--10" />
            <ul className="user-list-wrapper">
              <li>
                <Link href="/instructor/instructor-settings">
                  <i className="feather-settings"></i>
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link onClick={handleLogout} href="/">
                  <i className="feather-log-out"></i>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default User;

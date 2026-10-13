import React from 'react';
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { LuMessageCircleX } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {BannerContext} from './Banner.jsx';
import styles1 from './Banner.module.css'
export default function BannerHeader({ children  }) {
  const { status , isSingleLine } = React.useContext(BannerContext);
  if(isSingleLine){
    throw new Error("BannerHeader can only be used inside a multi-line Banner component. Please use BannerBody for single-line banners.");
  }
  return (
    <div className={styles1['banner-header']}>
      {status === 'success' && <FaRegCheckCircle   />}
      {status === 'warning' && <IoIosWarning />}
      {status === 'error' && <LuMessageCircleX />}
      {status === 'info' && <IoIosInformationCircleOutline />}
      {children}
    </div>
  )
}
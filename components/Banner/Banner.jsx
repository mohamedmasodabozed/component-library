import styles1 from './Banner.module.css'
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";
import { LuMessageCircleX } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import React from 'react';
const BannerContext = React.createContext('success');
export default function Banner({children , status , isSingleLine = false ,...rest}){

  return (isSingleLine ? 
    <div className={`banner ${styles1[status]} `} {...rest}>
      {status === 'success' && <FaRegCheckCircle   />}
      {status === 'warning' && <IoIosWarning />}
      {status === 'error' && <LuMessageCircleX />}
      {status === 'info' && <IoIosInformationCircleOutline />}
      {children}
    </div> :
    <BannerContext.Provider value={{status , isSingleLine}}>
      <div className={`banner ${styles1[status]} ${styles1['multiLine']}`} {...rest}>
        {children}
      </div>
    </BannerContext.Provider>
);
}
export { BannerContext };
import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../images/images/logo.svg';
import backIcon from '../../images/images/icons/back.svg';

import  './styles.css';

function TeacherList() {
    return (
       <div id="page-teacher-list" className="container">
           <header className="page-header">
               <div className="top-bar-container">
                   <Link to="/">
                       <img src={backIcon} alt="votar" />
                   </Link>
                   <img src={logoImg} alt="Proffy" />
               </div>

               <div className="header-content">
                   <strong>Este são os proffys disponíveis.</strong>

               </div>
           </header>

       </div>
    )
}

export default TeacherList;
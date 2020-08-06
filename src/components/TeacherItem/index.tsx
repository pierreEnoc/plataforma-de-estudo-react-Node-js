import React from 'react';

import whatsappIcon from '../../assets/images/images/icons/whatsapp.svg';


import  './styles.css';

function TeacherItem() {
    return(
      
<article className="teacher-item">
<header>
    <img src="https://avatars3.githubusercontent.com/u/15196571?s=60&v=4" alt="pierre"/>
    <div>
        <strong>Pierre Enoc</strong>
        <span>Química</span>
    </div>
</header>
<p>
Química para Vestibular foram elaboradas para alunos que conhecem bem essa matéria e precisam revisar conceitos e fazer exercícios.
<br /><br />
  Recomendamos que alunos com pouco conhecimento de Química também estudem as aulas de Química do Ensino Médio. 
</p>

<footer>
    <p>
        Preço/hora
        <strong>R$ 20,00</strong>
    </p>
    <button type="button">
       <img src={whatsappIcon} alt="Whatsapp" /> 
       Entrar em contato
    </button>

</footer>
</article>
);
}

export default TeacherItem;

import React from 'react';

import PageHeader from '../../../components/PageHeader';

import Input from '../../../components/Input';

import WarningIcon from '../../images/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader  title="Que incrível que você quer dar aulas."
        description ="O primeiro passo é preencher esse formulario de inscricção"

        />

        <main>
            <fieldset>
                <legend>Seus dados</legend>

                <Input  name="name" label ="Nome completo" />
                <Input  name="avatar" label ="Avatar" />
                <Input  name="whatsappe" label ="Whatsapp" />

            </fieldset>

            <fieldset>
                <legend>Sobre a aula </legend>

                <Input  name="subject" label ="Matéria" />
                <Input  name="cost" label ="Custo da sua hora por aula" />
                <Input  name="whatsappe" label ="Whatsapp" />

            </fieldset>
            <footer>
                <p>
                  <img src={WarningIcon} alt="Aviso importante" />
                  Importante! <br />
                  Preencha todos os dados
                </p>
                <button type="button">
                    Salvar cadastro
                </button>

            </footer>
        </main>
    </div>
    )
}

export default TeacherForm;
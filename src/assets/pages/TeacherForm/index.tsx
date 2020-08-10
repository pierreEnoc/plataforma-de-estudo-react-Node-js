import React, {useState, FormEvent} from 'react';

import PageHeader from '../../../components/PageHeader';

import Input from '../../../components/Input';

import WarningIcon from '../../images/images/icons/warning.svg';

import Textarea from '../../../components/Textarea';
import Select from '../../../components/Select';

import './styles.css';
//import { useState } from 'react';

function TeacherForm() {

    // create state for each input    
    const [name, setName] = useState ('');

    const [avatar, setAvatar] = useState ('');

    const [Whatsapp, setWatsapp] = useState ('');

    const [bio, setBio] = useState ('');

    const [subject, setSubject] = useState ('');

    const [cost, setCost] = useState ('');

    const [ scheduleItems, setScheduleItems ] = useState(
        [
            { week_day: 0, from: '', to: '' }
             
         ]
    );

    function addNewScheduleItem () {

    }
    // setScheduleItemValue(0,'week_day', '2')
    function setScheduleItemValue (position: number, field: string, value: string) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return {...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

       setScheduleItems(updateScheduleItems);
    }

    function handleCreateClass (e: FormEvent) {
        e.preventDefault();

        console.log ({
            name,
            avatar,
            Whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        } );
    }

 // function addNewScheduleItem() {
    //  setScheduleItems([
     //   ...scheduleItems,
    // { week_day: 0, from: '', to: '' }
 // ]);
//}


    return (
        <div id="page-teacher-form" className="container">
        <PageHeader  title="Que incrível que você quer dar aulas."
        description ="O primeiro passo é preencher esse formulario de inscricção"
        />

        <main>
            <form onSubmit={handleCreateClass}>
            <fieldset>
                <legend>Seus dados</legend>

                <Input  
                 name="name" 
                 label ="Nome completo" 
                 value={name} 
                 //pegar o valor digitado do input
                 onChange={(e) => { setName(e.target.value)}} 
                 
                 />

                <Input  
                    name="avatar" 
                    label ="Avatar"
                    value={avatar} 
                    onChange={(e) => { setAvatar(e.target.value)}} 
                 
                     />

                <Input  
                    name="whatsappe" 
                    label ="Whatsapp"
                    value={Whatsapp} 
                    onChange={(e) => { setWatsapp(e.target.value)}} 
                 
                     />

                <Textarea 
                    name="bio" 
                    label ="Biografia" 
                    value={bio} 
                    onChange={(e) => { setBio(e.target.value)}} 
                 
                    />

            </fieldset>

            <fieldset>
                <legend>Sobre a aula </legend>

                <Select 
                 name="subject" 
                 label ="Matéria" 
                 value={subject}
                 onChange={(e) => { setSubject(e.target.value) }}
                 options={[
                     { value: 'Artes', label: 'Artes'},
                     { value: 'Biologia', label: 'Biologia'},
                     { value: 'Ciencias', label: 'Ciencias'},
                     { value: 'Educacao fisica', label: 'Educacao'},
                     { value: 'Fisica', label: 'Fisica'},
                     { value: 'Matematica', label: 'Matematica'},
                 ]}
                
                 />

                <Input  
                name="cost" 
                label ="Custo da sua hora por aula" 
                value={cost}
                 onChange={(e) => { setCost(e.target.value) }}
                />

                
            </fieldset>
            <fieldset>
                <legend>Horário disponíveis
                <button type="button" onClick= {addNewScheduleItem}>
                + Novo Horário
                </button>
                </legend>

                {scheduleItems.map((scheduleItem, index )=> {
                    return (

                <div key = {scheduleItem.week_day } className="schedule-item">
                 <Select 
                 name="week_day" 
                 label ="Dia da semana" 
                 value={scheduleItem.week_day}
                 onChange={e => setScheduleItemValue(index, 'week_day', e.target.value) }
                 options={[
                     { value: '0', label: 'Domingo'},
                     { value: '1', label: 'Segunda-feira'},
                     { value: '2', label: 'Terça-feira'},
                     { value: '3 fisica', label: 'Quarta-feira'},
                     { value: '4', label: 'Quinta-feira'},
                     { value: '5', label: 'Sexta-feira'},
                     { value: '6', label: 'Sábado'},
                    ]}
                 />
                 <Input 
                    name="from" 
                    label ="Das" 
                    type="time" 
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value) }
                    />
                 <Input 
                    name="to" 
                    label ="Até" 
                    type="time" 
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value) }
                    />

                </div>
                    );
                })}
                
            </fieldset>
            <footer>
                <p>
                  <img src={WarningIcon} alt="Aviso importante" />
                  Importante! <br />
                  Preencha todos os dados
                </p>
                <button type="submit">
                    Salvar cadastro
                </button>

            </footer>
            </form>
        </main>
    </div>
    )
}

export default TeacherForm;
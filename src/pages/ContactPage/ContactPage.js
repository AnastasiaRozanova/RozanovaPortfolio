import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { useInput } from '../../utils/useInput';
import { useValidationField } from '../../utils/useValidationField';
import { rules } from '../../components/Validation/rules';
import { Validation } from '../../components/Validation/Validation';
import { Modal } from '../../components/Modal/Modal';

import './style.css';

export const ContactPage = () => {
  const { value: surnameValue, onChange: surnameChangeHandler } = useInput('');
  const { value: firstNameValue, onChange: firstNameChangeHandler } = useInput('');
  const { value: phoneValue, onChange: phoneChangeHandler } = useInput('');
  const { value: emailValue, onChange: emailChangeHandler } = useInput('');
  const { value: messageValue, onChange: messageChangeHandler } = useInput('');

  const [surnameMsg, getValidSurname] = useValidationField(rules.text);
  const [firstNameMsg, getValidFirstName] = useValidationField(rules.text);
  const [phoneMsg, getValidPhone] = useValidationField(rules.phone);
  const [emailMsg, getValidEmail] = useValidationField(rules.email);
  const [messageMsg, getValidMessage] = useValidationField(rules.message);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const condition =
    [surnameValue, firstNameValue, phoneValue, emailValue, messageValue].every(item => item) &&
    ![surnameMsg, firstNameMsg, phoneMsg, emailMsg, messageMsg].every(item => item);

  const sendFeedback = (serviceID, templateId, variables, userId) => {
    emailjs
      .send(serviceID, templateId, variables, userId)
      .then(res => {
        console.log(res.data, 'Данные успешно отправлены!');
        setModalVisible(true);
        setSuccess(true);
        setTimeout(() => {
          setModalVisible(false);
          setSuccess(false);
          surnameChangeHandler('');
          firstNameChangeHandler('');
          phoneChangeHandler('');
          emailChangeHandler('');
          messageChangeHandler('');
        }, 4000);
      })
      .catch(err => {
        console.error(err, 'Данные не удалось отправить!');
        setModalVisible(true);
        setTimeout(() => setModalVisible(false), 4000);
      });
  };

  const sendData = () => {
    if (
      getValidSurname()(surnameValue) &
      getValidFirstName()(firstNameValue) &
      getValidPhone()(phoneValue) &
      getValidEmail()(emailValue) &
      getValidMessage()(messageValue)
    ) {
      const serviceID = 'mail_ru';
      const templateId = 'anastasiatest';
      const userId = 'user_tcXHoeYmYYl30DxZGzDbZ';
      const templateParams = {
        from_name: `${surnameValue} ${firstNameValue}`,
        to_name: 'Anastasiia',
        subject: 'Сообщение с сайта',
        phone: phoneValue,
        from_email: emailValue,
        message_html: messageValue,
      };
      sendFeedback(serviceID, templateId, templateParams, userId);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <header className="page-row page-header">
        <div className="header">
          <div className="header-preheading">Get in touch</div>
          <div className="header-heading">Contact Me</div>
        </div>
      </header>
      <div className="contact-page-main">
        <div className="contacts-wrapper">
          <div className="page-col header-postheading">
            Check out my GitHub or just send me an Email.
          </div>
          <div className="page-col contacts">
            <div className="technology-name-wrapper">
              <span className="technology-name">GitHub:</span>
              <a href="https://github.com/AnastasiaRozanova" target="_blank" rel="noreferrer">
                https://github.com/AnastasiaRozanova
              </a>
            </div>
            <div className="technology-name-wrapper">
              <span className="technology-name">Email:</span>abv789@inbox.ru
            </div>
          </div>
        </div>
        <div className="page-column">
          <div className="header-postheading">
            If you want to get in touch immediately, just fill out the form below and send a
            message.
          </div>
          <form className="form" onSubmit={event => event.preventDefault()}>
            {isModalVisible && <Modal isSuccess={isSuccess} />}
            <div className="form-row">
              <Validation msg={surnameMsg} className="form-item-wrapper">
                <label htmlFor="#surname" className="form-item-label">
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  className="form-item"
                  value={surnameValue}
                  onChange={event => getValidSurname(surnameChangeHandler)(event.target.value)}
                />
                {surnameValue && (
                  <span
                    className="close"
                    onClick={() => getValidSurname(surnameChangeHandler)('')}
                  />
                )}
              </Validation>
              <Validation msg={firstNameMsg} className="form-item-wrapper">
                <label htmlFor="#name" className="form-item-label">
                  First name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-item"
                  value={firstNameValue}
                  onChange={event => getValidFirstName(firstNameChangeHandler)(event.target.value)}
                />
                {firstNameValue && (
                  <span
                    className="close"
                    onClick={() => getValidFirstName(firstNameChangeHandler)('')}
                  />
                )}
              </Validation>
            </div>
            <div className="form-row">
              <Validation msg={phoneMsg} className="form-item-wrapper">
                <label htmlFor="#phone" className="form-item-label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-item"
                  value={phoneValue}
                  onChange={event => getValidPhone(phoneChangeHandler)(event.target.value)}
                />
                {phoneValue && (
                  <span className="close" onClick={() => getValidPhone(phoneChangeHandler)('')} />
                )}
              </Validation>
              <Validation msg={emailMsg} className="form-item-wrapper">
                <label htmlFor="#mail" className="form-item-label">
                  E-mail
                </label>
                <input
                  type="email"
                  id="mail"
                  className="form-item"
                  value={emailValue}
                  onChange={event => getValidEmail(emailChangeHandler)(event.target.value)}
                />
                {emailValue && (
                  <span className="close" onClick={() => getValidEmail(emailChangeHandler)('')} />
                )}
              </Validation>
            </div>
            <Validation msg={messageMsg}>
              <label htmlFor="#mail" className="form-item-label">
                Message
              </label>
              <textarea
                id="message"
                value={messageValue}
                onChange={event => getValidMessage(messageChangeHandler)(event.target.value)}
              />
            </Validation>
            <button className="button" onClick={sendData} disabled={!condition}>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="page-row contact-page-footer">
        <div>© 2021. All rights reserved</div>
        <div>Anastasiia Rozanova</div>
      </div>
    </div>
  );
};

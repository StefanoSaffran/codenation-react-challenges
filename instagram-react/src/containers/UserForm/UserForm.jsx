import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import api from '../../services/api';

import './UserForm.scss';

const UserForm = (
  { avatar, 
    name, 
    username, 
    email, 
    setName, 
    setEmail, 
    setUsername, 
    setAvatar
  }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    async function handleSubmit(e) {
      e.preventDefault();

      if (name === '' || username === '' || email === '') {
        alert('Nome, usuário e email são obrigatórios.')
      }

      try {           
        await fetch(`${api}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            username,
            email,
            avatar,
          })
        })
        
        setIsSubmitted(true)
        
      } catch (error) {
        
      }

    }

  return (
    <>
      <section className="post__form" data-testid="user-form">
        <div className="container">
          <form onSubmit={handleSubmit} className="post__form__wrapper">

            <label htmlFor="">Nome</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              value={name} 
              onChange={({ target }) => setName(target.value)}
            />

            <label htmlFor="">Usuário</label>
            <input 
              type="text" 
              placeholder="johndoe"
              value={username} 
              onChange={({ target }) => setUsername(target.value)}
            />

            <label htmlFor="">Email</label>
            <input 
              type="email" 
              placeholder="johndoe@gmail.com"
              value={email} 
              onChange={({ target }) => setEmail(target.value)}
          />

            <label htmlFor="">Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input 
              type="text" 
              placeholder="http://"
              value={avatar} 
              onChange={({ target }) => setAvatar(target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </section>

      {isSubmitted && <SuccessMessage />}
    </>
  );
};

export default UserForm;

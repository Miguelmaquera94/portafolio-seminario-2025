import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <input type="text" placeholder="Nombre" /><br/><br/>
        <input type="email" placeholder="Correo" /><br/><br/>
        <textarea placeholder="Mensaje"></textarea><br/><br/>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

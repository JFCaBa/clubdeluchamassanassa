import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, mensaje } = await request.json();

    // Basic validation
    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son obligatorios.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Por favor, introduce un email válido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // You should eventually verify your own domain
      to: ['jfca68@gmail.com'], // Testing with verified email, change to 'hola@clubdeluchamassanassa.com' after domain verification
      reply_to: email, // This allows the recipient to reply directly to the sender
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <h2>Nuevo mensaje de contacto del sitio web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
        <br>
        <p><em>Este mensaje fue enviado desde el formulario de contacto del sitio web de Club de Lucha Massanassa.</em></p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ error: 'Error al enviar el correo.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Error al procesar el formulario.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
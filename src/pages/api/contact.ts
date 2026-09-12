import { env } from 'node:process';
import nodemailer from 'nodemailer';
import type { APIRoute } from 'astro';

export const prerender = false;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: Record<string, boolean | string>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' }
  });

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return entities[character];
  });

export const POST: APIRoute = async ({ request }) => {
  let payload: { email?: unknown; subject?: unknown; message?: unknown; website?: unknown };

  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'El cuerpo de la petición no es válido.' }, 400);
  }

  // Honeypot for basic bots. Return success without sending anything.
  if (typeof payload.website === 'string' && payload.website.trim()) {
    return json({ ok: true });
  }

  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const subject = typeof payload.subject === 'string' ? payload.subject.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!emailPattern.test(email) || email.length > 180) {
    return json({ ok: false, error: 'Introduce un email válido.' }, 400);
  }

  if (!subject || subject.length > 180) {
    return json({ ok: false, error: 'El asunto es obligatorio y debe ser breve.' }, 400);
  }

  if (!message || message.length > 6000) {
    return json({ ok: false, error: 'El mensaje es obligatorio y no puede superar 6000 caracteres.' }, 400);
  }

  const smtpUser = env.SMTP_USER;
  const smtpPassword = env.SMTP_PASSWORD?.replace(/\s+/g, '');
  const recipient = env.CONTACT_TO ?? 'juanmanuel.adame@esginnova.com';
  const sender = env.CONTACT_FROM ?? smtpUser;

  if (!smtpUser || !smtpPassword || !sender) {
    return json({ ok: false, error: 'El servicio de correo todavía no está configurado en el servidor.' }, 503);
  }

  const port = Number(env.SMTP_PORT ?? 587);
  const secure = String(env.SMTP_SECURE ?? '') === 'true' || port === 465;
  const useTls = String(env.SMTP_USE_TLS ?? 'true') === 'true';
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br />');

  try {
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST ?? 'smtp.gmail.com',
      port: Number.isFinite(port) ? port : 587,
      secure,
      requireTLS: !secure && useTls,
      auth: { user: smtpUser, pass: smtpPassword }
    });

    await transporter.sendMail({
      from: sender,
      to: recipient,
      replyTo: email,
      subject,
      text: `Email de contacto: ${email}\n\n${message}`,
      html: `<p><strong>Email de contacto:</strong> ${escapeHtml(email)}</p><p>${safeMessage}</p>`
    });

    return json({ ok: true });
  } catch (error) {
    console.error('Contact email delivery failed:', error instanceof Error ? error.message : error);
    return json({ ok: false, error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.' }, 502);
  }
};

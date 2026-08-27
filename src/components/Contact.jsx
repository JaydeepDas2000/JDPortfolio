import React from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { theme } from "../theme";
import Eyebrow from "./Eyebrow";

export default function Contact({ contact }) {
  const mailHref =
    `mailto:${contact.email}` +
    `?subject=${encodeURIComponent(contact.emailSubject || "")}` +
    `&body=${encodeURIComponent(contact.emailBody || "")}`;

  const whatsappHref =
    `https://wa.me/${contact.whatsappNumber}` +
    (contact.whatsappText ? `?text=${encodeURIComponent(contact.whatsappText)}` : "");

  return (
    <footer id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
      <Eyebrow style={{ marginBottom: "18px" }}>{contact.eyebrow}</Eyebrow>
      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(2.4rem, 7vw, 5rem)",
          lineHeight: 1,
          marginBottom: "30px",
          maxWidth: "780px",
        }}
      >
        {contact.heading}
      </h2>

      <div className="flex flex-col gap-4 mb-14">
        <a href={`mailto:${contact.email}`} className="link-btn inline-flex items-center gap-3 w-fit" style={{ fontSize: "15px", color: theme.text }}>
          <Mail size={17} style={{ color: theme.accent }} /> {contact.email}
        </a>
        <a href={`tel:${contact.phoneHref}`} className="link-btn inline-flex items-center gap-3 w-fit" style={{ fontSize: "15px", color: theme.text }}>
          <Phone size={17} style={{ color: theme.accent }} /> {contact.phone}
        </a>
        <div className="inline-flex items-center gap-3 w-fit" style={{ fontSize: "15px", color: theme.muted }}>
          <MapPin size={17} style={{ color: theme.accent }} /> {contact.location}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="link-btn linkedin-btn inline-flex items-center justify-center gap-2"
            style={{
              padding: "12px 22px",
              borderRadius: "999px",
              background: theme.accent,
              color: "#0B0B0A",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
          <a
            href={mailHref}
            className="link-btn linkedin-btn inline-flex items-center justify-center gap-2"
            style={{
              padding: "12px 22px",
              borderRadius: "999px",
              border: `1px solid ${theme.accent}`,
              color: theme.accent,
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            <Mail size={18} /> Chat through Mail
          </a>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8"
        style={{ borderTop: `1px solid ${theme.line}` }}
      >
        <div className="flex gap-6 flex-wrap">
          {contact.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="nav-link" style={{ fontSize: "13px", color: theme.muted }}>
              {s.label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: "13px", color: theme.mutedDim }}>{contact.copyright}</p>
      </div>
    </footer>
  );
}

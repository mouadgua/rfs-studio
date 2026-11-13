"use client";

import { ExternalLink, Mail, Phone, Send } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

type ProfileLink = {
  label: string;
  href: string;
  icon: typeof ExternalLink;
};

type ProfileCardProps = {
  name: string;
  title: string;
  handle: string;
  avatarUrl: string;
  email?: string;
  phone?: string;
  links?: ProfileLink[];
};

export default function ProfileCard({
  name,
  title,
  handle,
  avatarUrl,
  email,
  phone,
  links = [],
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card || event.pointerType === "touch") return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    card.style.setProperty("--profile-rotate-x", `${(0.5 - y) * 10}deg`);
    card.style.setProperty("--profile-rotate-y", `${(x - 0.5) * 10}deg`);
    card.style.setProperty("--profile-glare-x", `${x * 100}%`);
    card.style.setProperty("--profile-glare-y", `${y * 100}%`);
  }

  function resetPointer() {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--profile-rotate-x", "0deg");
    card.style.setProperty("--profile-rotate-y", "0deg");
    card.style.setProperty("--profile-glare-x", "50%");
    card.style.setProperty("--profile-glare-y", "50%");
  }

  return (
    <div
      ref={cardRef}
      className="profile-card"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="profile-card__portrait">
        <Image
          src={avatarUrl}
          alt={`Portrait de ${name}`}
          fill
          sizes="(max-width: 640px) 90vw, 336px"
          className="profile-card__image"
        />
        <div className="profile-card__pattern" aria-hidden="true" />
        <div className="profile-card__shine" aria-hidden="true" />
        <div className="profile-card__identity">
          <p className="text-2xl font-semibold tracking-[-0.06em] text-[#f4f0e8]">
            {name}
          </p>
          <p className="mt-1 text-sm text-[#d7b995]">{title}</p>
        </div>
      </div>

      <div className="profile-card__footer">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{handle}</p>
          <p className="mt-1 flex items-center gap-2 text-xs text-[#68736b]">
            <span className="h-2 w-2 rounded-full bg-[#9aa88f]" aria-hidden="true" />
            Available for a conversation
          </p>
        </div>
        <div className="flex items-center gap-2">
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="profile-card__contact"
              aria-label={`Appeler ${name}`}
              style={{ background: "#1d2b24" }}
            >
              <Phone className="h-4 w-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="profile-card__contact"
              aria-label={`Envoyer un email à ${name}`}
            >
              <Send className="h-4 w-4" />
              Contact
            </a>
          )}
        </div>
      </div>

      {links.length > 0 && (
        <nav
          className="profile-card__links"
          style={{ gridTemplateColumns: `repeat(${links.length}, minmax(0, 1fr))` }}
          aria-label={`Coordonnées de ${name}`}
        >
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              title={label}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

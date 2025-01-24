import React from 'react';
import { SOCIAL_LINKS } from '../../constants/socialLinks';

const SocialLinks = React.memo(() => {
  return (
    <div className="leftLinks animate__animated animate__fadeIn animate__delay-2s">
      {SOCIAL_LINKS.map((link) => (
        <a key={link.name} className="leftLinksIcons" href={link.url}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="icons"
          >
            <title>{link.name}</title>
            {link.icon && <path className="pathHover" d={link.icon} />}
            {link.isRect && (
              <>
                <rect className="pathHover" x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path className="pathHover" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </>
            )}
          </svg>
        </a>
      ))}
      <div className="verticalLink" />
    </div>
  );
});

SocialLinks.displayName = 'SocialLinks';
export default SocialLinks;
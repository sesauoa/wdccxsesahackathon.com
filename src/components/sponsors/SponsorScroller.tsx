import Image from 'next/image';
import React from 'react';
import motion from 'motion';
export const SponsorScroller = () => {
  return (
    <div>
      <ul className="flex w-full flex-row justify-center gap-8 overflow-hidden">
        <li>
          <Image
            src="/logos/sponsors/atlassian.png"
            width={500}
            height={500}
            alt="Atlassian"
          />
        </li>
        <li>
          <Image
            src="/logos/sponsors/atlassian.png"
            width={500}
            height={500}
            alt="Atlassian"
          />
        </li>
        <li>
          <Image
            src="/logos/sponsors/atlassian.png"
            width={500}
            height={500}
            alt="Atlassian"
          />
        </li>
      </ul>
    </div>
  );
};

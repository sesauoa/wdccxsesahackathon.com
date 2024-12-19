import { H2 } from '@/components/common/Typography';
import Image from 'next/image';
import React from 'react';

interface WinnerCardProps {
  image: string;
}
export const WinnerCard: React.FC<WinnerCardProps> = ({ image }) => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-black/10 p-6">
      <Image src={image} alt="image" width={500} height={500} />
      <H2 className="my-2">Team Name</H2>
      <div className="mb-2 flex gap-4">
        <div className="rounded-lg bg-sesa-teal-light px-4 py-1 font-bold shadow-lg">
          2024
        </div>
        <div className="rounded-lg bg-[#D8D320] px-4 py-1 font-bold shadow-lg">
          2024
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas
        iaculis libero eget facilisis. Nullam eget rhoncus mi, ac imperdiet
        elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Sed vitae nulla vel nisl condimentum sollicitudin
        laoreet in velit. Pellentesque egestas volut
      </p>
    </div>
  );
};

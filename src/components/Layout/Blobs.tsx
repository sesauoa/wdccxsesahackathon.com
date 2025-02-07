'use client';
import React from 'react';
import {
  VerticalBlob,
  RotatingBlob,
  OffsetRotatingBlob,
  HorizontalBlob,
  InteractiveBlob,
} from './BlobComponents';

export const colors = {
  bg1: 'rgb(108, 0, 162)',
  bg2: 'rgb(0, 17, 82)',
  color1: 'rgb(8, 125, 241)',
  color2: 'rgb(73, 191, 170)',
  interactive: 'rgb(140, 100, 255)',
};

export const Blobs = () => {
  const blobs = [
    VerticalBlob,
    RotatingBlob,
    OffsetRotatingBlob,
    HorizontalBlob,
    InteractiveBlob,
  ];

  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[rgb(0,17,82)]">
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="h-full w-full" style={{ filter: 'url(#goo) blur(40px)' }}>
        {blobs.map((Blob, index) => (
          <Blob key={index} />
        ))}
      </div>
    </div>
  );
};

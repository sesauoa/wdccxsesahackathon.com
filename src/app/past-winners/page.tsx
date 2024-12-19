'use client';

import React from 'react';
import pastWinners from '@/data/pastWinners';
import { H1 } from '@/components/common/Typography';
import OrderedWinner from '@/components/winner/OrderedWinner';
import SpecialAward from '@/components/winner/SpecialAward';
import { WinnerCard } from './_components/WinnerCard';

export default function PastWinnersPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col p-8 text-white">
      <H1 className="mb-10">Past Winners</H1>
      <div>
        <H1 className="mb-10">2024</H1>
        <div className="mb-4 flex justify-between gap-4 max-lg:flex-col">
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
        </div>
        <div className="mb-4 flex justify-between gap-4">
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
        </div>
      </div>
      <div>
        <H1 className="mb-10">2023</H1>
        <div className="mb-4 flex justify-between gap-4 max-lg:flex-col">
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
        </div>
        <div className="mb-4 flex justify-between gap-4">
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
          <WinnerCard image="/images/2022/WDCC_SESA_HACKATHON_2022_IMG0033.jpg" />
        </div>
      </div>
    </div>
  );
}

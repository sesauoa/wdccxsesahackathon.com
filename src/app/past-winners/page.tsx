import pastWinners from '../../data/PastWinners';

export default function PastWinners() {
  const winner = pastWinners[0];

  return (
    <div className="h-screen w-full p-20">
      <h1 className="mb-20 text-6xl font-bold">Past Winners</h1>
      <h2 className="text-center text-4xl font-bold">{`${winner.place} : ${winner.teamName}`}</h2>
    </div>
  );
}

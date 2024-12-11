import React from 'react';

export function WinnerDetails({
  place,
  teamName,
  description,
  appLink,
  github,
}: {
  place: string;
  teamName: string;
  description: string;
  appLink?: string;
  github?: string;
}) {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold">
        {place} - {teamName}
      </h2>
      <p className="mb-4 text-xl text-white">{description}</p>
      <div className="flex flex-col space-y-2">
        {appLink && (
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline hover:text-blue-400"
          >
            🔗 GitHub Repo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline hover:text-blue-400"
          >
            🔗 Deployed Application
          </a>
        )}
      </div>
    </div>
  );
}

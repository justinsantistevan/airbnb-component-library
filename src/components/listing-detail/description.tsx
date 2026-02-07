import { useState } from 'react';

interface DescriptionProps {
  description: string;
  spaceDescription: string;
}

export function Description({ description, spaceDescription }: DescriptionProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-6 border-b border-gray-200">
      <div className="text-gray-800 leading-relaxed">
        <p>{description}</p>
        {showMore && (
          <>
            <p className="mt-4 font-semibold">The space</p>
            <p>{spaceDescription}</p>
          </>
        )}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 font-semibold underline"
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}

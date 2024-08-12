import React from 'react';
import './QuoteCard.css';

const QuoteCard = () => {
  return (
      <div className="relative py-3 sm:max-w-3xl sm:mx-auto group cardTemp">
        {/* Quotes */}
        <svg
          className="absolute transform -left-12 -top-12"
          width="100"
          height="78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 0H86.588L59.034 40.478v37.065h37.064V40.478H82.2L100 0zM40.966 0H27.554L0 40.478v37.065h37.064V40.478H23.165L40.965 0z"
            fill="#bf1e2e"
          />
        </svg>
        <svg
          className="absolute transform -right-12 -bottom-6 flip"
          width="101"
          height="78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2916 77.9999H0.880127L18.6808 37.5217H4.78164V0.457275H41.846V37.5217L14.2916 77.9999Z"
            fill="#bf1e2e"
          />
          <path
            d="M73.4115 78H60L77.8007 37.5218H63.9015V0.457397H100.966V37.5219L73.4115 78Z"
            fill="#bf1e2e"
          />
        </svg>
        {/* Card */}
        <div className="flex flex-row relative bg-white shadow-xl">
          <div className="relative px-4 py-6 sm:p-10 w-3/2 flex flex-wrap content-center">
            <div className="space-y-3">
              <p className="italic text-xl text-gray-800">
                There are two ways to write error-free programs; only the third one works. (Alan J. Perlis) You can’t have great software without a great team, and most software teams behave like dysfunctional families.
              </p>
              <div className="space-y-0">
                <p className="text-xl text-[#bf1e2e]">Darrell Steward</p>
                <p className="text-base text-gray-500">Bank of America</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default QuoteCard;

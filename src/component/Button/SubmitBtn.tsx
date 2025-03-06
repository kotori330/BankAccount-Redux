import React, { MouseEvent } from "react";

const SubmitBtn = ({
  handleSubmit,
}: {
  handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <>
      <button
        type="submit"
        className="bg-blue-300/80 px-4 py-2 rounded-2xl mx-2 border border-blue-400/40 hover:cursor-pointer hover:opacity-70 text-3xl w-full"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
};

// Memo component so that dispatch won't unnecessarily call when SubmitBtn re-dender 
export default React.memo(SubmitBtn);

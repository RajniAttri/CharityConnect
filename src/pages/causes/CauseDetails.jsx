import React from "react";
import { useParams } from "react-router-dom";

function CauseDetails() {
  const id = useParams().id;
  // Fetch cause data from an data store using the id parameter.

  return (
    <div className="flex justify-center text-5xl text-red-500">
      Showing cause details for {id}
    </div>
  );
}

export default CauseDetails;

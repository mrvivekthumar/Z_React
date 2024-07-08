import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const parameters = useParams();

  useEffect(() => { }, [parameters]);
  return (
    <div>
      <h1>{`Welcome Admin ${parameters.userId}.`}</h1>
    </div>
  );
}

export default Profile;

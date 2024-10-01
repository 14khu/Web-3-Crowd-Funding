import React, { useState } from "react";
import { createCampaign } from "C:/Users/Admin/Desktop/Web 3 react/Crowdfunding-dapp/src/services/src/services/campagin.js";

const CreateCampaign = () => {
  const [goal, setGoal] = useState("");
  const [deadline, setDeadline] = useState("");
  const [owner, setOwner] = useState("");  // Add wallet address logic

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createCampaign(owner, goal, deadline);
      console.log("Campaign Created: ", result);
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  return (
    <div>
      <h2>Create New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Goal Amount:</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Deadline (Unix Timestamp):</label>
          <input
            type="number"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Owner Wallet Address:</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaign;

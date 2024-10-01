import React, { useEffect, useState } from "react";
import { fetchCampaigns } from "C:/Users/Admin/Desktop/Web 3 react/Crowdfunding-dapp/src/services/src/services/campagin.js";

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const loadCampaigns = async () => {
      const data = await fetchCampaigns();
      setCampaigns(data);
    };
    loadCampaigns();
  }, []);

  return (
    <div>
      <h2>Active Campaigns</h2>
      {campaigns.length === 0 ? (
        <p>No campaigns available.</p>
      ) : (
        campaigns.map((campaign, index) => (
          <div key={index}>
            <h3>Campaign #{index + 1}</h3>
            <p>Goal: {campaign.goal}</p>
            <p>Raised: {campaign.raised}</p>
            <p>Deadline: {new Date(campaign.deadline * 1000).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CampaignList;

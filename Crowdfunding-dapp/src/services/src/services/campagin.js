import { AptosClient } from 'aptos';

const NODE_URL = 'https://fullnode.devnet.aptoslabs.com';  // Aptos Devnet node URL
const client = new AptosClient(NODE_URL);

// Function to create a new campaign on the blockchain
export const createCampaign = async (owner, goal, deadline) => {
  const payload = {
    type: "entry_function_payload",
    function: "0xYourContractAddress::Crowdfunding::create_campaign",
    arguments: [goal, deadline],
    type_arguments: [],
  };

  const transaction = await client.submitTransaction(owner, payload);
  return transaction;
};

// Fetch the list of active campaigns from the blockchain
export const fetchCampaigns = async () => {
  // You can customize this to fetch from your contract state
  const campaigns = []; // Mock campaigns for now
  return campaigns;
};

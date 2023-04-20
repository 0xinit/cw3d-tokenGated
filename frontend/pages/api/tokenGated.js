// Importing required libraries from alchemy-sdk
import { Network, Alchemy } from "alchemy-sdk";

export default async function handler(req, res) {
    // Parsing the required data from the request body
    const { address, chain } = JSON.parse(
        req.body
    );
    // console.log(chain);

    if (req.method !== "POST") {
        res.status(405).send({ message: "Only POST requests allowed" });
        return;
    }

    // Setting the API key and network for the Alchemy SDK
    const settings = {
        apiKey: process.env.ALCHEMY_API_KEY,
        network: Network[chain],
    };
    const alchemy = new Alchemy(settings);
    const contractAddress = "0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6";

    try {
        const isNftOwner = await alchemy.nft.verifyNftOwnership(address, contractAddress);
        console.log(isNftOwner);
        res.status(200).json({ isNftOwner });
    }
    catch (e) {
        // Logging the error and sending a response with an error message
        console.warn(e);
        res.status(500).send({
            message: "something went wrong, check the log in your terminal",
        });
    }
}
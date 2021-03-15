import Batch from "../models/batch.js";

export const getBatches = async (req, res) => {
  const batchesArr = await Batch.find({});

  const mappedBatches = await batchesArr.map((batch) => {
      return {
          uniqueNumber: batch.uniqueNumber,
          size: batch.size,
          color: batch.color,
          quantity: batch.quantity
      }
  }) 

  res.status(200).json(mappedBatches);
};

export const addBatch = async (req, res) => {
  const { size, color, quantity } = req.body;

  const uniqueNumber = (await Batch.countDocuments({})) + 1;
  try {
    const newBatch = new Batch({
      size,
      color,
      quantity,
      uniqueNumber,
    });

    await newBatch.save();

    res.status(200).json(newBatch);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// controllers/barangController.js
// const express = require('express');
// const router = express.Router();
const { Barang } = require('../models'); // Assuming your model is named 'Barang'

// // Create a new product
// exports.post('/', async (req, res) => {
//   try {
//     const product = await Barang.create(req.body);
//     return res.status(201).json(product);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });



// // Get all products
// exports.getAll('/', async (req, res) => {
//   try {
//     const products = await Barang.findAll();
//     return res.status(200).json(products);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Get a specific product by ID
// exports.getById('/:productId', async (req, res) => {
//   const { productId } = req.params;
//   try {
//     const product = await Barang.findByPk(productId);
//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     return res.status(200).json(product);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Update a specific product by ID
// router.put('/:productId', async (req, res) => {
//   const { productId } = req.params;
//   try {
//     const [updatedRows] = await Barang.update(req.body, {
//       where: { id: productId }
//     });
//     if (updatedRows === 0) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     const updatedProduct = await Barang.findByPk(productId);
//     return res.status(200).json(updatedProduct);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Delete a specific product by ID
// router.delete('/:productId', async (req, res) => {
//   const { productId } = req.params;
//   try {
//     const deletedRows = await Barang.destroy({
//       where: { id: productId }
//     });
//     if (deletedRows === 0) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     return res.status(204).send(); // 204 No Content for successful deletion
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });


// Create
exports.create = async (req, res) => {
  try {
    const { productName, brandName, quantity, price } = req.body;
    const newBarang = await Barang.create({
      productName,
      brandName,
      quantity,
      price,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(newBarang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the Barang by ID
    const barang = await Barang.findByPk(id);

    if (!barang) {
      // If the Barang is not found, return a 404 response
      return res.status(404).json({ error: 'Barang not found' });
    }

    // Respond with the found Barang
    res.status(200).json(barang);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};

// Get all products
exports.getAll = async (req, res) => {
  try {
    const products = await Barang.findAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getStokBarangById = async (barangId) => {
  try {
    const barang = await Barang.findByPk(barangId, { attributes: ['quantity'] });
    return barang ? barang.quantity : null;
  } catch (error) {
    console.error('Error fetching stok barang:', error);
    throw new Error('Internal Server Error');
  }
};

// Update
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, brandName, quantity, price } = req.body;

    const updatedBarang = await Barang.update(
      {
        productName,
        brandName,
        quantity,
        price,
        updatedAt: new Date(),
      },
      { where: { id } }
    );

    res.status(200).json(updatedBarang);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Barang.destroy({ where: { id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// module.exports = router;

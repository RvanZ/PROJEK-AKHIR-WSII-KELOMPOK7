// controllers/orderController.js
const { Orders, Barang } = require('../models'); // Assuming your model is named 'Orders'


exports.createOrder = async (req, res) => {
  try {
    const { salesId,orderNumber, idPelanggan, totalAmount, statusOrders } = req.body;

    // Cek apakah barang dengan salesId yang diberikan ada
    const salesBarang = await Barang.findByPk(salesId);
    if (!salesBarang) {
      return res.status(404).json({ error: 'Barang not found' });
    }

    // Buat order baru
    const newOrder = await Orders.create({
      salesId,
      orderNumber,
      idPelanggan,
      totalAmount,
      statusOrders,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.findAll({
      include: [
        {
          model: Barang,
          as: 'salesItem',
          attributes: ['productName'],
        },
      ],
    });

    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Error fetching order by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { statusOrders } = req.body;

    const updatedOrder = await Orders.update(
      {
        statusOrders,
        updatedAt: new Date(),
      },
      { where: { id } }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// // Create a new order
// router.post('/', async (req, res) => {
//   try {
//     const order = await Orders.create(req.body);
//     return res.status(201).json(order);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Get all orders
// router.get('/', async (req, res) => {
//   try {
//     const orders = await Orders.findAll();
//     return res.status(200).json(orders);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Get a specific order by ID
// router.get('/:orderNumber', async (req, res) => {
//     const { orderNumber } = req.params;
//     try {
//       const order = await Orders.findOne({
//         where: { orderNumber: orderNumber },
//       });
  
//       if (!order) {
//         return res.status(404).json({ error: 'Order not found' });
//       }
  
//       return res.status(200).json({
//         id: order.id,
//         orderNumber: order.orderNumber,
//         totalAmount: order.totalAmount,
//         salesId: order.salesId,
//         idPelanggan: order.idPelanggan,
//         createdAt: order.createdAt,
//         updatedAt: order.updatedAt,
//         // ... other fields you want to include
//       });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   });
  

// // Update a specific order by ID
// router.put('/:orderId', async (req, res) => {
//   const { orderId } = req.params;
//   try {
//     const [updatedRows] = await Orders.update(req.body, {
//       where: { id: orderId }
//     });
//     if (updatedRows === 0) {
//       return res.status(404).json({ error: 'Order not found' });
//     }
//     const updatedOrder = await Orders.findByPk(orderId);
//     return res.status(200).json(updatedOrder);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Delete a specific order by ID
// router.delete('/:orderId', async (req, res) => {
//   const { orderId } = req.params;
//   try {
//     const deletedRows = await Orders.destroy({
//       where: { id: orderId }
//     });
//     if (deletedRows === 0) {
//       return res.status(404).json({ error: 'Order not found' });
//     }
//     return res.status(204).send(); // 204 No Content for successful deletion
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });
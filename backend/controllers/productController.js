// Simple test controller
exports.getProducts = async (req, res) => {
    try {
      res.json([{ name: 'Test Product', price: 9.99 }]);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  };
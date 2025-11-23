// Dispense controller
const dispense = (req, res) => {
  try {
    const { compartment } = req.body;

    // Validate input
    if (!compartment) {
      return res.status(400).json({
        success: false,
        message: 'Missing required field: compartment'
      });
    }

    // Log the dispense request
    console.log(`Dispense requested for ${compartment}`);

    // Simulate dispensing
    res.json({
      success: true,
      message: 'Dispensing medicine...',
      compartment: compartment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = { dispense };


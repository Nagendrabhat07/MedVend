// Rule-based diagnosis controller
const diagnose = (req, res) => {
  try {
    const { symptoms, age, days } = req.body;

    // Validate input
    if (!symptoms || !age || !days) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: symptoms, age, days'
      });
    }

    const symptomsLower = symptoms.toLowerCase();
    let result = {};

    // Rule 1: Fever with age > 3
    if (symptomsLower.includes('fever') && age > 3) {
      result = {
        tablet: 'Paracetamol 500mg',
        dosage: '1-0-1',
        compartment: 'C1',
        message: 'For fever (age >3)'
      };
    }
    // Rule 2: Fever with age <= 3
    else if (symptomsLower.includes('fever') && age <= 3) {
      result = {
        tablet: 'Kids Fever Syrup 5ml',
        dosage: 'As per label',
        compartment: 'C5',
        message: 'For fever (age <=3)'
      };
    }
    // Rule 3: Cold or cough
    else if (symptomsLower.includes('cold') || symptomsLower.includes('cough')) {
      result = {
        tablet: 'Cold Relief Tablet',
        dosage: '1-0-1',
        compartment: 'C2',
        message: 'For cold/cough'
      };
    }
    // Rule 4: Dehydration, thirst, or vomit
    else if (symptomsLower.includes('dehydration') || 
             symptomsLower.includes('thirst') || 
             symptomsLower.includes('vomit')) {
      result = {
        tablet: 'ORS Packet',
        dosage: '1 sachet',
        compartment: 'C3',
        message: 'For dehydration/vomiting'
      };
    }
    // Rule 5: Cut, injury, or bleed
    else if (symptomsLower.includes('cut') || 
             symptomsLower.includes('injury') || 
             symptomsLower.includes('bleed')) {
      result = {
        tablet: 'Band-Aid / First Aid',
        dosage: 'n/a',
        compartment: 'C4',
        message: 'For cuts/injuries'
      };
    }
    // Rule 6: Headache
    else if (symptomsLower.includes('headache')) {
      result = {
        tablet: 'Pain Relief Tablet 250mg',
        dosage: '1 as needed',
        compartment: 'C1',
        message: 'For headache'
      };
    }
    // Default case
    else {
      result = {
        tablet: 'General Analgesic 250mg',
        dosage: '1-0-1',
        compartment: 'C1',
        message: 'General suggestion (demo)'
      };
    }

    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = { diagnose };


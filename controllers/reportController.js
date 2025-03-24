const Report = require('../models/report.model');

exports.createReport = async (req, res) => {
  try {
    const report = new Report({
      ...req.body,
      reporter_id: req.user.id
    });
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.resolveReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(
      req.params.reportId,
      { 
        status: 'resolved',
        resolved_at: Date.now(),
        resolved_by: req.user.id 
      },
      { new: true }
    );
    res.json(report);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};  
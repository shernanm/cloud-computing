const Subject = require('../models/subjects');
const logger = require('../logger');
const errors = require('../errors');

exports.createSubject = subject => {
  const subjectService = new Subject(subject);
  return subjectService.save().catch(error => {
    logger.error(error.message);
    throw errors.databaseError('Error processing request in database');
  });
};

exports.getSubjects = () =>
  Subject.find({ estado: true }).catch(error => {
    logger.error(error.message);
    throw errors.databaseError('Error processing request in database');
  });

exports.getSubjectById = id =>
  Subject.findById(id).catch(error => {
    logger.error(error.message);
    throw errors.databaseError('Error processing request in database');
  });

exports.updateSubject = (id, toUpdate) =>
  Subject.findByIdAndUpdate(id, toUpdate, { new: true }).catch(error => {
    logger.error(error.message);
    throw errors.databaseError('Error processing request in database');
  });

exports.deleteSubject = id =>
  Subject.findByIdAndUpdate(id, { estado: false }, { new: true }).catch(error => {
    logger.error(error.message);
    throw errors.databaseError('Error processing request in database');
  });

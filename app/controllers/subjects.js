const logger = require('../logger');
const subjectService = require('../services/subjects');

exports.createSubject = (req, res, next) => {
  logger.info('createSubject method start');
  return subjectService
    .createSubject(req.body)
    .then(subjectDB => {
      logger.info('Request successful. Subjects created');
      return res.status(201).send(subjectDB);
    })
    .catch(next);
};

exports.getSubjects = (req, res, next) => {
  logger.info('getSubjects method start');
  const { id } = req.query;
  if (!id) {
    return subjectService
      .getSubjects()
      .then(subjectsDB => {
        logger.info('Request successful. List of subjects retrieved');
        return res.send({ subjects: subjectsDB });
      })
      .catch(next);
  }
  return subjectService
    .getSubjectById(id)
    .then(subjectsDB => {
      logger.info(`Request successful. Subjects with id: ${id} retrieved`);
      return res.send({ subjects: subjectsDB });
    })
    .catch(next);
};

exports.updateSubject = (req, res, next) => {
  logger.info('updateSubject method start');
  const { id } = req.query;
  return subjectService
    .updateSubject(id, req.body)
    .then(subjectDB => {
      logger.info('Request successful. Subjects updated');
      return res.status(201).send(subjectDB);
    })
    .catch(next);
};

exports.deleteSubject = (req, res, next) => {
  logger.info('deleteSubject method start');
  const { id } = req.query;
  return subjectService
    .deleteSubject(id)
    .then(subjectDB => {
      logger.info('Request successful. Subjects deleted');
      return res.status(201).send(subjectDB);
    })
    .catch(next);
};

const { Router } = require('express');
const { getBooks, saveBooks, editBook, deleteBook } = require('../controllers/ReadingController');
const router = Router();

router.get('/', getBooks);
router.post('/savebooks', saveBooks);
router.put('/editBook', editBook);
router.delete('/deleteBook', deleteBook);

module.exports = router;
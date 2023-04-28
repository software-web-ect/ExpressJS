const router = require('express').Router();
const { karyawan } = require('../controllers');
const { asyncHandler } = require('../middlewares/asyncHandler');
const checkEmail = require('../middlewares/checkEmail');
const { signup: signupValidator, signin: signinValidator } = require('../validators/auth');
const authController = require('../controllers/auth.controller');


router.get('/karyawan', karyawan.getDataKaryawan);
router.get('/karyawan/:id', karyawan.getDataKaryawanByID);
router.post('/karyawan/add', karyawan.addDataKaryawan);
router.post('/karyawan/edit', karyawan.editDataKaryawan);
router.post('/karyawan/delete/', karyawan.deleteDataKaryawan);

router.route('/signup')
    .post(signupValidator, asyncHandler(checkEmail), asyncHandler(authController.signup));

router.route('/signin')
    .post(signinValidator, asyncHandler(authController.signin));

module.exports = router;
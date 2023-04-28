const router = require('express').Router();
const { karyawan } = require('../controllers');

router.get('/karyawan', karyawan.getDataKaryawan);
router.get('/karyawan/:id', karyawan.getDataKaryawanByID);
router.post('/karyawan/add', karyawan.addDataKaryawan);
router.post('/karyawan/edit', karyawan.editDataKaryawan);
router.post('/karyawan/delete/', karyawan.deleteDataKaryawan);

module.exports = router;
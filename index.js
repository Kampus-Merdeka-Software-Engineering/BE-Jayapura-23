const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { DataBarang } = require("./models");
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(
    cors({
        origin: "*"
    })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/cek-resi/:nomor_resi", async (req, res) => {
    try {
        const nomorResi = req.params.nomor_resi;
        const result = await DataBarang.findOne({
            nomorResi: nomorResi

        })
        if (result) {
            return res.send({
                message: "data berhasil di tampilkan",
                data: result
            })
        }
        return res.send({
            message: "nomor resi tidak ditemukan",

        })
    } catch (error) {
        return res.status(500), send({
            message: "gagal menampilkan data barang"
        })
    }
})
app.post("/input-data-barang", async (req, res) => {
    try {
        const body = req.body;
        const nama = body.nama;
        const nomorHP = body.nomorHP;
        const email = body.email;
        const alamatTujuan = body.alamatTujuan;
        const namaBarang = body.namaBarang;
        const nomorResi = new Date().getTime();

        await DataBarang.create({
            nama: nama,
            nomorHP: nomorHP,
            email: email,
            alamatTujuan: alamatTujuan,
            namaBarang: namaBarang,
            nomorResi: nomorResi,
        });

        return res.send({
            message: "data berhasil di inputkan",
            status: 200
        });
    } catch (error) {
        return res.status(500).send({
            message: " data gagal di inputkan",
            status: 500
        });
    }
});

app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`);
});

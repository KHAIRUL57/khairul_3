import React from "react";
import axios from "../../../node_modules/axios/dist/axios.js";

function todoList(event) {
  event.prevenDefault();

  const makanan = document.getElementById("makanan").value;
  const minuman = document.getElementById("minuman").value;
  const hidanganPenutup = document.getElementById("hidanganPenutup").value;
  const jumlah = document.getElementById("jumlah").value;

  const data = {
    makanan,
    minuman,
    hidanganPenutup,
    jumlah,
  };

  axios
    .post("http://localhost:3000/menu", data)
    .then((response) => {
      console.log("data  berhasil ditambah" + response);
    })
    .catch((error) => {
      console.log("data gagal di tambah" + error);
      window.alert("error");
    });
}

export default todoList;

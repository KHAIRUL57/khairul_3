import React from "react";
import axios from "../../../node_modules/axios/dist/axios.js";

let data = [];

axios
  .get("http://localhost:3000/menu")
  .then((response) => {
    console.log(response.data);
    const listData = document.getElementById("listData");
    data = response.data;

    data.forEach((data, id) => {
      const { makanan, minuman, hidanganPenutup, jumlah } = data;
      const tabelHTML = `
        <tr>
          <th scope="row">${id + 1}</th>
          <td>${makanan}</td>
          <td>${minuman}</td>
          <td>${hidanganPenutup}</td>
          <td>${jumlah}</td>
          <td>
            <button class="btn btn-danger" onclick="deleteBook(${data.id})">
              <i class="fas fa-trash-alt"></i>
            </button>
            &nbsp;
            <button class="btn btn-secondary" onclick="updateBook(${data.id})">
              <i class="fas fa-pen-alt"></i>
            </button>
          </td>
        </tr>
      `;

      listData.innerHTML += tabelHTML;
    });
  })
  .catch((error) => {
    console.log(error);
  });
const deleteBook = (id) => {
  axios
    .delete(`http://localhost:3000/menu/${id}`)
    .then((response) => {
      alert("data delete!");
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateBook = (id) => {
  const findData = data.find((data) => {
    return data.id === id;
  });
  console.log(findData);
  if (findData) {
    const makanan = window.prompt("Makanan", findData.makanan);
    const minuman = window.prompt("Minuman", findData.minuman);
    const hidanganPenutup = window.prompt(
      "Hidangan Penutup",
      findData.hidanganPenutup
    );
    const jumlah = window.prompt("Jumlah", findData.jumlah);

    const data = {
      makanan,
      minuman,
      hidanganPenutup,
      jumlah,
    };

    axios.put(`http://localhost:3000/menu/${id}`, data);
  }
};

export default data;

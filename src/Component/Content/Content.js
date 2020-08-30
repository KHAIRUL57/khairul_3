import React from "react";
import todoList from "../../Component/Content/script";
import "../../Todolist/Todo/Todo";

function content() {
  return (
    <div id="buku">
      <div id="wrap">
        <div id="header">
          <h1>TO DO LIST</h1>
        </div>
        <div className="row">
          <div className="col-3 col-m-5">
            <div id="silebar">
              <div id="judul_silebar">INPUT MENU</div>
              <div id="isi_silebar">
                <div className="container">
                  <div className="row">
                    <div className="offset-md-2 col-md-8">
                      <form id="addMakanan">
                        <label htmlFor="makanan">Nama Makanan</label>
                        <input
                          type="text"
                          className="form-control"
                          id="makanan"
                          name="makanan"
                        />

                        <label htmlFor="minuman">Minuman</label>
                        <input
                          type="text"
                          className="form-control"
                          id="minuman"
                          name="makanan"
                        />

                        <label htmlFor="hidanganPenutup">
                          Hidangan Penutup
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="hidanganPenutup"
                          name="hidanganPenutup"
                        />

                        <label htmlFor="jumlah">Jumlah</label>
                        <input
                          type="number"
                          className="form-control"
                          id="jumlah"
                          name="jumlah"
                        />
                        <div className="text-center" id="button">
                          <button
                            type="submit"
                            className="btn btn-secondary"
                            onClick={todoList}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 col-m-7">
            <div id="konten">
              <div className="col-12 col-m-12">
                <div className="pt-4">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Makanan</th>
                        <th scope="col">Minuman</th>
                        <th scope="col">Hidangan Penutup</th>
                        <th scope="col">Jumlah</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody id="listData"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default content;

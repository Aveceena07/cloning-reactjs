import React from "react";

function Home() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://static.wixstatic.com/media/d864c4_0660d796987e48ad83c7793bf987053f~mv2.jpg/v1/fill/w_1196,h_711,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d864c4_0660d796987e48ad83c7793bf987053f~mv2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://static.wixstatic.com/media/d864c4_955165c55fab494387121ea1d4b0ab01~mv2.jpg/v1/fill/w_1196,h_711,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d864c4_955165c55fab494387121ea1d4b0ab01~mv2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;

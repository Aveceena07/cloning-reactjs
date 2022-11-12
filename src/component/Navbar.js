import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="https://static.wixstatic.com/media/d864c4_c51d8ecfe5a0469b9218a2e4afb1b4d6~mv2.jpg/v1/crop/x_224,y_0,w_709,h_191/fill/w_191,h_49,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WARNA-BARU.jpg"
              alt=""
              width="150"
              height="50"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Size Chart
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://static.wixstatic.com/media/d864c4_955165c55fab494387121ea1d4b0ab01~mv2.jpg/v1/fill/w_1196,h_711,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d864c4_955165c55fab494387121ea1d4b0ab01~mv2.jpg"
              class="d-block w-100"
              alt=""
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
      <div className="about mt-5">
        <img
          src="https://static.wixstatic.com/media/d864c4_8003075d55f44f5b8140f2321ab6a014~mv2.png/v1/fill/w_321,h_202,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d864c4_8003075d55f44f5b8140f2321ab6a014~mv2.png"
          class="rounded mx-auto d-block"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div class="inti col-4 mt-5">
            <img
              src="https://static.wixstatic.com/media/d864c4_f503d1f6bffd40a7af3f65a7f647abda~mv2.jpg/v1/crop/x_0,y_148,w_1512,h_1144/fill/w_300,h_229,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/upper.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Upper Canvas 12oz</h5>
              <small class="card-text">
                Menggunakan material canvas 12oz berkualitas baik, cukup lembut,
                dan memiliki daya tahan yang kuat sehingga cocok untuk digunakan
                sehari-hari.
              </small>
            </div>
          </div>
          <div class="ave col-4 mt-5">
            <img
              src="https://static.wixstatic.com/media/d864c4_8901bbb7487a46f5817c4d44157f86a4~mv2.jpg/v1/crop/x_0,y_261,w_907,h_686/fill/w_300,h_229,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/insole.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Ultralite Foam Insole</h5>
              <small class="card-text">
                Teknologi Ultralite Foam membuat insole kami menjadi terasa
                empuk dan nyaman sehingga kaki menjadi tidak mudah pegal
              </small>
            </div>
          </div>
          <div class="ceena col-4 mt-5 ">
            <img
              src="https://static.wixstatic.com/media/d864c4_34475936141d43e1bd281a4fbdd2a273~mv2.png/v1/crop/x_0,y_73,w_600,h_454/fill/w_300,h_229,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d864c4_34475936141d43e1bd281a4fbdd2a273~mv2.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Stitching</h5>
              <small class="card-text">
                Stitching (Jahitan) yang rapih menjadikan sepatu memiliki bentuk
                yang bagus, kokoh, nyaman, dan tahan lama.
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="deskripsi text-secondary">
          <h1>ABOUT</h1>
          <br />
          <br />
          Ventela® Shoes mulai di perkenalkan pada tahun 2017 oleh William
          Ventela, seorang pemilik pabrik sepatu vulkanisir sejak tahun 1989 di
          Bandung, Jawa Barat. <br /> <br /> <br />
          Ventela® Shoes memiliki berbagai macam jenis dan model yang cocok di
          gunakan untuk berbagai jenis kegiatan. <br /> <br /> <br />
          Setiap pasang Ventela® Shoes melalui proses yang panjang dan detail,
          mulai dari pemilihan material, proses produksi hingga pemeriksaan
          kualitas yang sangat ketat. Hal ini dilakukan agar kualitas Ventela®
          Shoes terjaga dengan baik. <br /> <br /> <br />
          Dengan sumber daya yang berlimpah Ventela® Shoes mampu memproduksi
          sepatu dengan kuantitas besar dan kualitas terbaik sehingga semua
          kalangan dapat memiliki sepatu berkualitas tinggi dengan harga yang
          terjangkau. <br /> <br />
        </div>
        <div className="anjay mt-5">
          <div className="pemandangan">
            <img
              src="https://static.wixstatic.com/media/d864c4_174703fbbe0749dba8d4ea75f64debe7~mv2_d_1966_1311_s_2.jpg/v1/fill/w_1349,h_1062,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d864c4_174703fbbe0749dba8d4ea75f64debe7~mv2_d_1966_1311_s_2.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h1 class="barang text-secondary">PRODUCTS</h1>
        </div>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://topsystem.id/api/product//600/1645083273.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>Republic</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/2/10/f02c39f8-db4b-441d-b31f-258fd09ee25d.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>New Replubic</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/10/3/445ba5bc-627d-4a2f-9372-7d5844d74492.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>All Is Well</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-53194506/ventela_sepatu-ventela-armor-black-natural-slip-on_full01.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>Armor</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://cf.shopee.co.id/file/4ddc36d350d7dc765e778f96cb27ee05"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>Urban</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://img12.jd.id/Indonesia/amZzL3Q3My8zNjMvMjE2MDQ1MzI3Mi81MzQ4Ny9kYTY5YTMzMy81Zjg0NTYxZE4xZmFmMDc2Mw.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>Sang Sekerta</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://static.wixstatic.com/media/d864c4_92d45b2506724633b42e77fc2377e65a~mv2.jpg/v1/fill/w_560,h_316,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/natural1_edited.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>P'76 (public) Gum Series</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/14/499a56c3-6c46-43e6-8f33-48eda38f2cfd.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>Hard13 Noir</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://cf.shopee.co.id/file/a5e9b5081b302878613c3474a460cbd8"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>Public Suede Series</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://cf.shopee.co.id/file/76dfbe5cb6c5dd7dcaf65e3f7bb25e9b"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>Back To 70's Series</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://static.wixstatic.com/media/d864c4_50813fabfeb84aae815dec5cf2f222e4~mv2.jpg/v1/fill/w_560,h_316,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cream.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>P'76 (public) Series</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://lzd-img-global.slatic.net/g/p/db8315be830497c45bc64d74484d6c4f.jpg_720x720q80.jpg_.webp"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block text-light d-inline p-2 text-bg-secondary">
                <h5>Gum (bts) Series</h5>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="konten mt-5">
          <img
            src="https://static.wixstatic.com/media/d864c4_674de71d2d21433e9cb06d3286369702~mv2.jpg/v1/fill/w_560,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/basic-white.jpg"
            alt=""
            srcset=""
            width={1000}
          />
        </div>
        <br />
        <div className="aveceeena">
          <div class="d-inline p-2 text-bg-secondary">Lite Collection</div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="size text-light">
          <h1>SIZE CHART</h1>
          <h4>
            Silakan luangkan waktu sejenak untuk mengamati size chart kami. Ini
            akan membantumu untuk mengetahui ukuran yang sesuai.
          </h4>
          <br />
          <img
            src="https://static.wixstatic.com/media/d864c4_b531472f487b4550bc0d1c83cd161089~mv2.png/v1/fill/w_783,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sizechart.png"
            alt=""
            srcset=""
          />
          <h1 className="faq mt-5 text-light">
            <b>FAQ</b>
          </h1>
          <div
            class="accordion accordion-flush mt-5"
            id="accordionFlushExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Apakah Ventela Shoes Official Memilkiki Website Lain?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Tidak, website resmi Ventela® Shoes Official hanya
                  www.ventela.com
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Apakah Ventela Shoes Official Memiliki Website resmi?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Untuk saat ini kami belum memiliki toko resmi baik online
                  maupun offline. Untuk pembelian bisa dilakukan di seluruh
                  reseller yang terdapat di instagram dan marketplace yang
                  tersedia.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Bagaimana cara membeli produk
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Produk kami dapat dibeli dengan mudah di reseller-reseller
                  kami di Instagram dan marketplace seperti Shopee, Tokopedia,
                  dan lainnya dengan kata kunci "Ventela" atau "Ventela Shoes"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kontk">
        <h1>CONTACT</h1>
      </div>
      <div className="alamat mt-4">
        <h4>Head Office</h4>
        <br />
        <p>
          Jl. Kopo Katapang KM 12.8 <br /> Bandung 40971 - Indonesia
        </p>
        <br />
        <p>
          Phone : +62-22 5891445 <br /> Jl. Kopo Katapang KM 12.8 Bandung 40971
          - Indonesia <br /> <br /> WhatsApp : 08112406969
        </p>
      </div>
      <div className="container">
        <div className="kakian">
          <div class="card-footer bg-primary border-success">
            © 2021 Ventela. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

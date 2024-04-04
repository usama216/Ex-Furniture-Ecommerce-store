import React from 'react';

const TestCards = () => {
  return (
    <>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5"><strong>Bestsellers</strong></h4>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                  <img src="https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg?t=st=1710847953~exp=1710851553~hmac=7a501dbbb633f6ed62845626526c784d921b131582ccd33ac354e62fa942885d&w=740" className="w-100" alt="Product" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-primary ms-2">New</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="#!" className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href="#!" className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">$61.99</h6>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp" className="w-100" alt="Product" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-primary ms-2">New</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="#!" className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href="#!" className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">$61.99</h6>
                </div>
              </div>
            </div>



            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp" className="w-100" alt="Product" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5><span className="badge bg-primary ms-2">New</span></h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="#!" className="text-reset">
                    <h5 className="card-title mb-3">Product name</h5>
                  </a>
                  <a href="#!" className="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 className="mb-3">$61.99</h6>
                </div>
              </div>
            </div>






            {/* Add more product cards similarly */}
          </div>

          {/* Add more rows of product cards similarly */}
        </div>
      </section>
    </>
  );
}

export default TestCards;

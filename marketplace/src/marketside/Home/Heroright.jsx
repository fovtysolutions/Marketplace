import React from 'react';

export default function Heroright() {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-3 col-12  mb-30">
        <div className="sidebar-border mb-0">
          <div className="sidebar-head">
            <h6 className="color-gray-900">Product Gallery</h6>
          </div>
          <div className="sidebar-content">
            <div className="row">
              <div className="col-6 mb-2">
                <img style={{ width: '300px', height: '68px' }}  src="https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-2x1-1.jpg" alt="Product 1" className="img-fluid" />
                <center style={{ color: 'black'}}>Laptop</center>
              </div>
              <div className="col-6 mb-2">
                <img style={{ width: '300px', height: '68px' }}  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" alt="Product 1" className="img-fluid" />
                <center style={{ color: 'black'}}>Mobile</center>
              </div>
              <div className="col-6 mb-2">
                <img style={{ width: '300px', height: '68px' }}  src="https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=F4252bOrMfRTB8kWm2oM2jlb9JXY08tKCaO5G_ms1Uw=" alt="Product 1" className="img-fluid" />
                <center style={{ color: 'black'}}>Toys</center>
              </div>
              <div className="col-6 mb-2">
                <img style={{ width: '300px', height: '68px' }}  src="data:image/jpeg;base64,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" alt="Product 1" className="img-fluid" />
                <center style={{ color: 'black'}}>Fruits</center>
              </div>
              <div className="col-6 mb-2">
                <img style={{ width: '300px', height: '68px' }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQye4XW6HV_DPyjlPENw-e-GIPklLYJ0k_7Qg&s" alt="Product 1" className="img-fluid" />
                <center style={{ color: 'black'}}>Electricals</center>
              </div>
              <div className="col-6 mb-2">
                <img style={{ width: '300px', height: '68px' }}  src="https://media.istockphoto.com/id/1034249292/photo/set-of-car-parts-isolated-on-white-background-3d.jpg?s=612x612&w=0&k=20&c=BwXl3LzQau4v40nl9INYToE0mC1SYDA4gBkylspbYis=" alt="Product 1" className="img-fluid" />
                <center style={{ color: 'black'}}>Auto Parts</center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const Spec = () => {
  return (
  
<div id="carousel-with-lb" class="carousel slide carousel-multi-item" data-ride="carousel">

  <div class="controls-top">
    <a class="btn-floating btn-secondary" href="#carousel-with-lb" data-slide="prev"><i
        class="fas fa-chevron-left"></i></a>
    <a class="btn-floating btn-secondary" href="#carousel-with-lb" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
  </div>
  <ol class="carousel-indicators">
    <li data-target="#carousel-with-lb" data-slide-to="0" class="active secondary-color"></li>
    <li data-target="#carousel-with-lb" data-slide-to="1" class="secondary-color"></li>
    <li data-target="#carousel-with-lb" data-slide-to="2" class="secondary-color"></li>
  </ol>
  
  <div class="carousel-inner mdb-lightbox" role="listbox">
    <div id="mdb-lightbox-ui"></div>
   
    <div class=" carousel-item active text-center">

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
            class="img-fluid"/>
        </a>
      </figure>

    </div>
    <div class="carousel-item text-center">

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(22).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(22).jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg"
            class="img-fluid"/>
        </a>
      </figure>

    </div>
  
    <div class="carousel-item text-center">

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(44).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(44).jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(56).jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg"
            class="img-fluid"/>
        </a>
      </figure>

    </div>
   

  </div>
 

</div>


  );
}

export default Spec;
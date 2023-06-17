import './decor.css';
function Carosel(){

return(<div > 
  
<div id="carouselExample" class="carousel slide" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.etsystatic.com/24528021/r/il/edcac9/3776760985/il_794xN.3776760985_a174.jpg" class="d-block w-100" alt="curtains"/>
    </div>
    <div class="carousel-item">
      <img src="https://i.etsystatic.com/16157449/r/il/bd319e/3755332480/il_794xN.3755332480_k5fn.jpg" class="d-block w-100" alt="painting"/>
    </div>
    <div class="carousel-item ">
      <img src='https://i.etsystatic.com/30449428/r/il/0cb046/4402839091/il_794xN.4402839091_3qz4.jpg' class="d-block w-100" alt="plants"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden" >Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
 

);
}export default Carosel;
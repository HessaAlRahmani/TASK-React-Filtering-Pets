import { useState } from "react";

function PetItem({ pet }) {
  const [img, setImg] = useState(pet.image);
  const changeImg = () => setImg(pet.image2);
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={img} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" onClick={changeImg} className="btn btn-info">
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;

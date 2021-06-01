import React, { useEffect } from "react";
import "./style.css";
import { useAtom } from "jotai";
import places from "../../utils/places.json";
import PlaceTags from "../Place-Tags";
import { Places, Categories, Occasions } from "../../utils/Atoms";
import CatOccCard from "../CatOccCard";
import categories from "../../utils/categories.json";
import occasions from "../../utils/occasions.json";



const MainCard = (props) => {

  const [tag, setTags] = useAtom(Places);
  const [category, setCategories] = useAtom(Categories);
  const [occasion, setOccasions] = useAtom(Occasions);

  useEffect(() => {
    getTags();
    getCategories();
    getOccasions();
  });

  function getTags() {
    let currentPage = window.location.pathname;

    if (currentPage === "/" || "home") {
      setTags(places);
    }
  }
  function getCategories() {
    let currentPage = window.location.pathname;

    if (currentPage === "/" || "home") {
      setCategories(categories);
    }
  }

  function getOccasions() {
    let currentPage = window.location.pathname;

    if (currentPage === "/" || "home") {
      setOccasions(occasions);
    }
  }
  

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="section-header-spacing">
            <i className="fas fa-map-marker-alt">
              <span className="pl-3">Dates by Location</span>
            </i>
          </div>
          <div className="row">
            {tag.map((place) => (
              <div key={place.id}>
                <PlaceTags id={place.id} name={place.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="section-header-spacing">
            <i className="fas fa-map-marker-alt">
              <span className="pl-3">Dates by Category</span>
            </i>
          </div>
          <div className="row">
            {category.map((categor) => (
              <div key={categor.id}>
                <CatOccCard
                  onClick={categor.handleClick}
                  id={categor.id}
                  image={categor.image}
                  name={categor.name}
                  value={categor.name}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col">
          <div className="section-header-spacing">
            <i className="fas fa-map-marker-alt">
              <span className="pl-3">Dates by Occasion</span>
            </i>
          </div>
          <div className="row">
            {occasion.map((occ) => (
              <div key={occ.id}>
                <CatOccCard
                  onClick={occ.handleClick}
                  id={occ.id}
                  image={occ.image}
                  name={occ.name}
                  value={occ.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;

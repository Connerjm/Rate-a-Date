import React, { useEffect } from "react";
import { Container, Row, Col } from "../Grid";
import Hero from "../Hero";
import "./style.css";
import { useAtom } from "jotai";
import places from "../../utils/places.json";
import PlaceTags from "../Place-Tags";
import { Places, Categories, Occasions } from "../../utils/Atoms";
import CategoryCard from "../CategoryCard";
import categories from "../../utils/categories.json";
import occasions from "../../utils/occasions.json";
import OccasionCard from "../OccasionCards";

const MainCard = (props) => {
  const [tag, setTags] = useAtom(Places);
  const [category, setCategories] = useAtom(Categories);
  const [occasion, setOccasions] = useAtom(Occasions);

  useEffect(() => {
    getTags();
    getCategories();
    getOccasions();
    // eslint-disable-next-line
  }, []);

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

 
      <section className="container" id="mainCard">
      <Hero />
        <Container fluid>
          <Row>
            <Col size="12">
              <div className="section-header-spacing">
                <i class="fas fa-map-marker-alt">
                  <span className="pl-3">Dates by Location</span>
                </i>
              </div>
              <Row>
                {tag.map((place) => (
                  <div key={place.id}>
                    <PlaceTags id={place.id} name={place.name} />
                  </div>
                ))}
              </Row>
            </Col>
          </Row>

          <Row>
            <Col size="12">
              <div className="section-header-spacing">
                <i class="fas fa-map-marker-alt">
                  <span className="pl-3">Dates by Category</span>
                </i>
              </div>
              <Row>
                {category.map((categor) => (
                  <div key={categor.id}>
                    <CategoryCard
                      id={categor.id}
                      image={categor.image}
                      name={categor.name}
                    />
                  </div>
                ))}
              </Row>
            </Col>
    
            <Col size="12">
              <div className="section-header-spacing">
                <i class="fas fa-map-marker-alt">
                  <span className="pl-3">Dates by Occasion</span>
                </i>
              </div>
              <Row>
                {occasion.map((occ) => (
                  <div key={occ.id}>
                    <OccasionCard
                      id={occ.id}
                      image={occ.image}
                      name={occ.name}
                    />
                  </div>
                ))}
              </Row>
            </Col>
            
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MainCard;

import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>drinks selected only for you</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            dolor accusantium illum id. Neque assumenda soluta quasi architecto
            maiores temporibus.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, text, title } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

h4 {
  color: var(--clr-grey-4);
}
padding: 5rem 0;

background: var(--clr-grey-4);

.header h3 {
  margin-bottom: 2rem;
  color: var(--clr-white);
}
p {
  margin-bottom: 0;
  line-height: 1.8;
  color: var(--clr-white);
}
.services-center {
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;
}
.service {
  background: var(--clr-white);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);
  border: 2px solid var(--clr-grey-4);
  p {
    color: var(--clr-grey-4);
  }
}
span {
  width: 4rem;
  height: 4rem;
  display: grid;
  margin: 0 auto;
  place-items: center;
  margin-bottom: 1rem;
  border-radius: 50%;
  background: var(--clr-grey-4);
  color: var(--clr-white);
  svg {
    font-size: 2rem;
  }
}
@media (min-width: 992px) {
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 576px) {
  .services-center {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}
@media (min-width: 1280px) {
  padding: 0;
  .section-center {
    transform: translateY(5rem);
  }
}

`;

export default Services;

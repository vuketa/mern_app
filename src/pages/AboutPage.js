import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/ourstory.jpg";

const AboutPages = () => {
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis corrupti ab quod accusamus id nisi atque natus quas rerum ratione quia ex consequuntur dolore, dolorem eveniet maxime accusantium? Sed nesciunt voluptatum eveniet praesentium nam in quod voluptate libero ducimus itaque deserunt modi vel deleniti, nihil et, at expedita possimus ipsa necessitatibus culpa reiciendis repellat mollitia omnis. Necessitatibus tempore nulla aspernatur asperiores rerum inventore quasi, et voluptas nihil, minima dolorem sequi quisquam magnam ut modi laudantium, tempora impedit! Laboriosam, non?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPages;

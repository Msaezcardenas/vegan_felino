import styled from 'styled-components';

export const Wrapper = styled.nav`
  height: var(--nav-height);
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    display: flex;
    align-items: center;
  }

  img {
    width: 80px;
    height: auto;
    margin-right: 0.5rem;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    column-gap: 5rem;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      display: flex;
      width: 90vw;
      justify-content: space-between;
    }
  }
`;

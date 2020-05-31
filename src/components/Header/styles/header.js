import styled from "styled-components";

const HeaderStyle = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  h1 {
    color: ${props => props.theme.color};
  }

  a {
    border-bottom: 0;
    text-decoration: none;
    transition: 0.3s border ease-in-out;

    &:hover {
      border-bottom: 3px solid purple;
    }
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      margin-right: 15px;
    }
  }
`;

export default HeaderStyle;

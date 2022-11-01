import { Link } from 'react-router-dom';
import styled from 'styled-components';

import userIcon from 'assets/images/icon-user.svg';

const StyledProfileButton = styled(Link)`
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  text-decoration: none;

  &::before {
    content: '';

    width: 1.5rem;
    height: 1.5rem;

    background-image: url('${userIcon}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .username {
    width: 100%;

    font-family: 'Inter';
    font-weight: 500;

    color: rgb(var(--color-primary));

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export default StyledProfileButton;

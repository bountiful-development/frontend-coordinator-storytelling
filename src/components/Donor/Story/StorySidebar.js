import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../DonorCardscomponents/Card/Card';

const StorySidebar = () => {
  return (
    <div className="sidebar">
      <h4>Other Posts about Brazil</h4>
      <div className="card-container">
        <SideBarCard>
          <h3>Title</h3>
          <p>This is an except of text etc etc etc etc</p>
        </SideBarCard>
        <SideBarCard>
          <h3>Title</h3>
          <p>This is an except of text etc etc etc etc</p>
        </SideBarCard>
        <SideBarCard>
          <h3>Title</h3>
          <p>This is an except of text etc etc etc etc</p>
        </SideBarCard>
      </div>
    </div>
  );
};

const SideBarCard = styled(Card)`
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background: #fff;
  &:nth-child(even) {
    background: #fff;
  }
  h3 {
    margin-bottom: 1rem;
    text-align: left;
  }
  p {
    margin-bottom: 0;
  }
`;
export default StorySidebar;

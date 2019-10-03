import React from 'react';
import styled from 'styled-components';
import {tone} from './theme-colors';

const Toned = styled.div`
    background-color: ${tone('black')};
    width: 100px;
    height: 100px;
`;

export default function TonedDiv() {
    return <Toned className="border">TONED</Toned>;
}

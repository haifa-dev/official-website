import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ReactComponent as InfoIcon } from '../../assets/info-icon.svg';

export default function FieldDescription({ children }) {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{children}</Tooltip>}>
      <InfoIcon />
    </OverlayTrigger>
  );
}

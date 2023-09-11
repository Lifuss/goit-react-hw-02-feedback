import { StyledBoxBtn, StyledBtn } from './FeedbackRequest.styled';
import PropTypes from 'prop-types';

export const FeedbackRequest = ({ HandleButton }) => {
  return (
    <StyledBoxBtn>
      <StyledBtn onClick={HandleButton} value="good">
        Good
      </StyledBtn>
      <StyledBtn onClick={HandleButton} value="neutral">
        Neutral
      </StyledBtn>
      <StyledBtn onClick={HandleButton} value="bad">
        Bad
      </StyledBtn>
    </StyledBoxBtn>
  );
};

FeedbackRequest.propTypes = {
  HandleButton: PropTypes.func,
};

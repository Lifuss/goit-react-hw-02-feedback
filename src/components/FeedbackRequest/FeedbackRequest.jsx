import { StyledBoxBtn, StyledBtn } from './FeedbackRequest.styled';

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

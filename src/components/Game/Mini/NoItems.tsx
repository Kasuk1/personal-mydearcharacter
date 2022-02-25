import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const NoItemsStyles = styled.section`
  font-size: 1.55rem;
  opacity: 0.6;
  padding: 6rem 0;
  text-align: center;

  .icon {
    font-size: 3.5rem;
  }
`;

export const NoItems: React.FC<{ text: string }> = ({ text }) => {
  return (
    <NoItemsStyles>
      <FontAwesomeIcon className='icon' icon={faBoxOpen} />
      <p className='text'>{text}</p>
    </NoItemsStyles>
  );
};

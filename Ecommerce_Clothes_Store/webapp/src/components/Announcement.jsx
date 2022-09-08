import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    background-color: teal;
    color: white;
`;

const Announcement = () => {
    return <Container>Super deal! Free Shipping on Orders Over $58</Container>;
};

export default Announcement;

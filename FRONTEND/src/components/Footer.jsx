import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';
// Define a styled component called Container
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;
// Define a styled component called Left
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
// Define a styled component called Center
const Center = styled.div`
  flex: 1;
  ${mobile({ display: 'none' })}
`;
// Define a styled component called Logo
const Logo = styled.h1``;
// Define a styled component called Desc
const Desc = styled.p`
  margin: 20px 0px;
`;
// Define a styled component called SocialContainer
const SocialContainer = styled.div`
  display: flex;
`;
// Define a styled component called SocialIcon
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
// Define a styled component called Right
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: 'white' })}
`;
// Define a styled component called Title
const Title = styled.h3`
  margin-bottom: 30px;
`;
// Define a styled component called List
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
// Define a styled component called ListItem
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
// Define a functional component called Footer
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Style Walks</Logo>
        <Desc>We have Footwear of many brands for everybody!!</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4485F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Footwear</ListItem>
          <ListItem>Women's Footwear</ListItem>
          <ListItem>Kid's Footwear</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <Desc>Dayananda Sagar College Of Engineering</Desc>
        <Desc>Banglore-56019</Desc>
      </Right>
    </Container>
  );
};

export default Footer;

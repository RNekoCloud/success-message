import SuccessIcon from "../../assets/Message.svg";
import {
   Container,
   Wrapper,
   ImageWrapper,
   Image,
   Information,
   Greeting,
   Text,
   Button,
} from "./Success.style";

export const Success = () => {
   return (
      <Container>
         <Wrapper>
            <ImageWrapper>
               <Image src={SuccessIcon} alt='icon' />
            </ImageWrapper>
            <Information>
               <Greeting>Selamat Datang di CV Zaman Now</Greeting>
               <Text>Berhasil aktivasi akun</Text>
               <Button>Kembali ke halaman login</Button>
            </Information>
         </Wrapper>
      </Container>
   );
};

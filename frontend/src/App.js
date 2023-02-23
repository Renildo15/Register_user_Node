import GlobaStyle from "../src/styles/global";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import styled from "styled-components";
import Form from "./components/Form";
import Grid from "./components/Grid"


function App() {
  const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  `;
  const Title = styled.h2``;
  return (
    <div>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form/>
        <Grid/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobaStyle/>
    </div>
  );
}

export default App;

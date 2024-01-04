import HCButton from "../components/HCbutton/HCButton";

function Home() {
    return (
      <div>
        <br />
        <HCButton title={'Download'} isOutlined={true} icon={'src/assets/images/icons/arrow.svg'} />
        <br />
        <HCButton title={'Consult today'} isOutlined={false} />
      </div>
    );
  }
  
  export default Home;
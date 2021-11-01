import React, { useState } from "react";
//import MetaTags from 'react-meta-tags';
import {Helmet} from "react-helmet";
import "../../App.css";
import { Container, Card, Button, Modal } from "react-bootstrap";
import BackKey from "../contact/BackKey";
import ProductDetail from "../products/ProductDetail";
import Legumes from '../../images/legumes.jpeg'
import SmartSystems from '../../images/smartsystem.png'
import Textile from '../../images/textile.jpeg'
import DriedFruits from '../../images/dried-fruits.jpeg'
import BarleyWheat from '../../images/barley-wheat.jpeg'
import OliveOil from '../../images/olive-oil.jpeg'
import Rice from '../../images/rice.jpeg'
import Automotive from '../../images/car.jpeg'
import ArmouredVehicle from '../../images/armoured-vehicle.jpeg'
import Automation from '../../images/automation-system.jpeg'
import ParquetSofa from '../../images/parquet-sofa.jpeg'
import HomeTextile from '../../images/home-textile.jpeg'
import RopeFabric from '../../images/fabric-rope.jpeg'
import FurnitureArchitecture from '../../images/furniture-architecture.jpeg'
import MiningMaritimeIndustry from '../../images/mining-maritime-industry.jpeg'
import Medical from '../../images/medical.jpeg'

const ProductIndex = () => {
  const [showOtomotiv, setShowOtomotiv] = useState(false);
  const handleCloseOtomotiv = () => setShowOtomotiv(false);
  const handleShowOtomotiv = () => setShowOtomotiv(true);

  const [showBakliyat, setShowBakliyat] = useState(false);
  const handleCloseBakliyat = () => setShowBakliyat(false);
  const handleShowBakliyat = () => setShowBakliyat(true);

  const [showAkilliSistem, setShowAkilliSistem] = useState(false);
  const handleCloseAkilliSistem = () => setShowAkilliSistem(false);
  const handleShowAkilliSistem = () => setShowAkilliSistem(true);

  const [showTekstil, setShowTekstil] = useState(false);
  const handleCloseTekstil = () => setShowTekstil(false);
  const handleShowTekstil = () => setShowTekstil(true);

  const [showKuruyemis, setShowKuruyemis] = useState(false);
  const handleCloseKuruyemis = () => setShowKuruyemis(false);
  const handleShowKuruyemis = () => setShowKuruyemis(true);

  const [showArpaBugday, setShowArpaBugday] = useState(false);
  const handleCloseArpaBugday = () => setShowArpaBugday(false);
  const handleShowArpaBugday = () => setShowArpaBugday(true);

  const [showZeytingyag, setShowZeytingyag] = useState(false);
  const handleCloseZeytingyag = () => setShowZeytingyag(false);
  const handleShowZeytingyag = () => setShowZeytingyag(true);

  const [showPirinc, setShowPirinc] = useState(false);
  const handleClosePirinc = () => setShowPirinc(false);
  const handleShowPirinc = () => setShowPirinc(true);

  const [showEt, setShowEt] = useState(false);
  const handleCloseEt = () => setShowEt(false);
  const handleShowEt = () => setShowEt(true);

  const [showAltin, setShowAltin] = useState(false);
  const handleCloseAltin = () => setShowAltin(false);
  const handleShowAltin = () => setShowAltin(true);

  const [showKomur, setShowKomur] = useState(false);
  const handleCloseKomur = () => setShowKomur(false);
  const handleShowKomur = () => setShowKomur(true);

  const [showOto, setShowOto] = useState(false);
  const handleCloseOto = () => setShowOto(false);
  const handleShowOto = () => setShowOto(true);

  const [showZirhliSuv, setShowZirhliSuv] = useState(false);
  const handleCloseZirhliSuv = () => setShowZirhliSuv(false);
  const handleShowZirhliSuv = () => setShowZirhliSuv(true);

  const [showSmart, setShowSmart] = useState(false);
  const handleCloseSmart = () => setShowSmart(false);
  const handleShowSmart = () => setShowSmart(true);

  const [showSes, setShowSes] = useState(false);
  const handleCloseSes = () => setShowSes(false);
  const handleShowSes = () => setShowSes(true);

  const [showOtomasyon, setShowOtomasyon] = useState(false);
  const handleCloseOtomasyon = () => setShowOtomasyon(false);
  const handleShowOtomasyon = () => setShowOtomasyon(true);

  const [showKamera, setShowKamera] = useState(false);
  const handleCloseKamera = () => setShowKamera(false);
  const handleShowKamera = () => setShowKamera(true);

  const [showParke, setShowParke] = useState(false);
  const handleCloseParke = () => setShowParke(false);
  const handleShowParke = () => setShowParke(true);

  const [showEvTekstili, setShowEvTekstili] = useState(false);
  const handleCloseEvTekstili = () => setShowEvTekstili(false);
  const handleShowEvTekstili = () => setShowEvTekstili(true);

  const [showIpKumas, setShowIpKumas] = useState(false);
  const handleCloseIpKumas = () => setShowIpKumas(false);
  const handleShowIpKumas = () => setShowIpKumas(true);

  const [showMobilya, setShowMobilya] = useState(false);
  const handleCloseMobilya = () => setShowMobilya(false);
  const handleShowMobilya = () => setShowMobilya(true);

  const [showMadencilik, setShowMadencilik] = useState(false);
  const handleCloseMadencilik = () => setShowMadencilik(false);
  const handleShowMadencilik = () => setShowMadencilik(true);

  const [showMedical, setShowMedical] = useState(false);
  const handleCloseMedical = () => setShowMedical(false);
  const handleShowMedical = () => setShowMedical(true);

  
  return (        
    <React.Fragment>
       <Helmet>
        <title>Product</title>
        <meta data-react-helmet="true" name="description" content="trade, sales, abroad, managing trade, sales trade, product, legume, dried-fruits, automation, automation system, 
        parquet, sofa, parquet sofa, smart, smart system, fruits, smart systems, textile, furniture, architecture, furniture and architecture, furniture architecture, automation
        armoured, armoured vehicle, armoured car rent, rent a armoured car, rent a armoured vehicle, mining, maritime, industry, fabric, fabric and rope, rope, home textile, home,
        olive, oil, olive oil, rice, automative, barley, wheat, quality trade, safe, barley and wheat, trading, abroad, cheap trading, cheap trade"/>
        <meta property="og:title" content="Product" />
        <meta property="og:image" alt="legume" content="public/src/legume.jpeg" />
        <meta property="og:image" alt="dried fruits" content="public/src/dried-fruits.jpeg" />
        <meta property="og:image" alt="automation" content="public/src/automation-system.jpeg" />
        <meta property="og:image" alt="parquest and sofa" content="public/src/parquet-sofa.jpeg" />
        <meta property="og:image" alt="trade" content="public/src/trade.png" />
        <meta property="og:image" alt="smart system" content="public/src/smartsystem.png" />
        <meta property="og:image" alt="textile" content="public/src/textile.jpeg" />
        <meta property="og:image" alt="furniture and architecture" content="public/src/furniture-architecture.jpeg" />
        <meta property="og:image" alt="armoured vehicle" content="public/src/armoured-vehicle.jpeg" />
        <meta property="og:image" alt="mining, maritime and industry" content="public/src/mining-maritime-industry.jpeg" />
        <meta property="og:image" alt="fabric and rope" content="public/src/fabric-rope.jpeg" />
        <meta property="og:image" alt="home textile" content="public/src/home-textile.jpeg" />
        <meta property="og:image" alt="olive oil" content="public/src/olive-oil.jpeg" />
        <meta property="og:image" alt="rice" content="public/src/rice.jpeg" />
        <meta property="og:image" alt="automative" content="public/src/automative.jpeg" />
        <meta property="og:image" alt="barley and wheat" content="public/src/barley-wheat.jpeg" />
      </Helmet>
      
      <BackKey></BackKey>
      <div className="product-index">
        <Container>          
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Legumes}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Legumes</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowBakliyat}>
                Info
              </Button> */}
              <Modal show={showBakliyat} onHide={handleCloseBakliyat}>
                <Modal.Header closeButton>
                  <Modal.Title>Legumes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseBakliyat}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={SmartSystems}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Smart Systems</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowAkilliSistem}>
                Info
              </Button> */}
              <Modal show={showAkilliSistem} onHide={handleCloseAkilliSistem}>
                <Modal.Header closeButton>
                  <Modal.Title>Smart Systems</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAkilliSistem}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Textile}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Textile</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowTekstil}>
                Info
              </Button> */}
              <Modal show={showTekstil} onHide={handleCloseTekstil}>
                <Modal.Header closeButton>
                  <Modal.Title>Textil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseBakliyat}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={DriedFruits}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Dried Fruits</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowKuruyemis}>
                Info
              </Button> */}
              <Modal show={showKuruyemis} onHide={handleCloseKuruyemis}>
                <Modal.Header closeButton>
                  <Modal.Title>Dried Fruits</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseKuruyemis}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={BarleyWheat}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Barley and Wheat</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowArpaBugday}>
                Info
              </Button> */}
              <Modal show={showArpaBugday} onHide={handleCloseArpaBugday}>
                <Modal.Header closeButton>
                  <Modal.Title>Barley and Wheat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseArpaBugday}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={OliveOil}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Olive Oil</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowZeytingyag}>
                Info
              </Button> */}
              <Modal show={showZeytingyag} onHide={handleCloseZeytingyag}>
                <Modal.Header closeButton>
                  <Modal.Title>Olive Oil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseZeytingyag}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Rice}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Rice</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowPirinc}>
                Info
              </Button> */}
              <Modal show={showPirinc} onHide={handleClosePirinc}>
                <Modal.Header closeButton>
                  <Modal.Title>Rice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClosePirinc}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://d2w2p2n3.rocketcdn.me/wp-content/uploads/2018/09/et-urunleri-gidahatti.jpg"
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Beef</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" onClick={handleShowEt}>
                Info
              </Button>
              <Modal show={showEt} onHide={handleCloseEt}>
                <Modal.Header closeButton>
                  <Modal.Title>Beef</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseEt}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card> */}
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.altinkaynakstore.com/resim/yazi/gold.jpg"
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Saf İşlenmemiş Altın</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" onClick={handleShowAltin}>
                Info
              </Button>
              <Modal show={showAltin} onHide={handleCloseAltin}>
                <Modal.Header closeButton>
                  <Modal.Title>Rough Gold</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseAltin}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card> */}
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.sozcu.com.tr/wp-content/uploads/2016/04/27/komur-shutter.jpg"
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Kömür</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" onClick={handleShowKomur}>
                Info
              </Button>
              <Modal show={showKomur} onHide={handleCloseKomur}>
                <Modal.Header closeButton>
                  <Modal.Title>Coal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseKomur}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Automotive}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Automotive</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowOto}>
                Info
              </Button> */}
              <Modal show={showOto} onHide={handleCloseOto}>
                <Modal.Header closeButton>
                  <Modal.Title>Automotive</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseOto}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={ArmouredVehicle}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Armoured Vehicle</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowZirhliSuv}>
                Info
              </Button> */}
              <Modal show={showZirhliSuv} onHide={handleCloseZirhliSuv}>
                <Modal.Header closeButton>
                  <Modal.Title>Armoured SUV</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseZirhliSuv}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="http://smanest.com/images/data/articles/smahome.jpg"
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Smart Systems</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" onClick={handleShowSmart}>
                Info
              </Button>
              <Modal show={showSmart} onHide={handleCloseSmart}>
                <Modal.Header closeButton>
                  <Modal.Title>Smart Systems</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseSmart}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card> */}
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://productimages.hepsiburada.net/s/7/375/8863292260402.jpg"
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Ses Sistemleri</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" onClick={handleShowSes}>
                Info
              </Button>
              <Modal show={showSes} onHide={handleCloseSes}>
                <Modal.Header closeButton>
                  <Modal.Title>Audio Visual Systems</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseSes}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Automation}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Automation</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowOtomasyon}>
                Info
              </Button> */}
              <Modal show={showOtomasyon} onHide={handleCloseOtomasyon}>
                <Modal.Header closeButton>
                  <Modal.Title>Automation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseOtomasyon}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.dhresource.com/0x0/f2/albu/g5/M01/57/65/rBVaI1kMLuuADqWRAAH1t12ZoV8831.jpg/700tvl-cmos-color-24-led-night-vision-20m.jpg"
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>CCTV Kamera</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" onClick={handleShowKamera}>
                Info
              </Button>
              <Modal show={showKamera} onHide={handleCloseKamera}>
                <Modal.Header closeButton>
                  <Modal.Title>CCTV Camera Systems</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseKamera}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={ParquetSofa}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Parquet and Sofa</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowParke}>
                Info
              </Button> */}
              <Modal show={showParke} onHide={handleCloseParke}>
                <Modal.Header closeButton>
                  <Modal.Title>Parquet and Sofa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseParke}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.sozcu.com.tr/wp-content/uploads/2020/12/27/iecrop/tekstil-10-kasim_16_9_1609028984.jpg"
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Tekstil</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary" onClick={handleShowTekstil}>
                Info
              </Button>
              <Modal show={showTekstil} onHide={handleCloseTekstil}>
                <Modal.Header closeButton>
                  <Modal.Title>Textil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseTekstil}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={HomeTextile}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Home Textile</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowEvTekstili}>
                Info
              </Button> */}
              <Modal show={showEvTekstili} onHide={handleCloseEvTekstili}>
                <Modal.Header closeButton>
                  <Modal.Title>Home Textile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseEvTekstili}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={RopeFabric}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Rope and Fabric</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowIpKumas}>
                Info
              </Button> */}
              <Modal show={showIpKumas} onHide={handleCloseIpKumas}>
                <Modal.Header closeButton>
                  <Modal.Title>Rope and Fabric</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseIpKumas}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={FurnitureArchitecture}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Furniture and Architecture</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowMobilya}>
                Info
              </Button> */}
              <Modal show={showMobilya} onHide={handleCloseMobilya}>
                <Modal.Header closeButton>
                  <Modal.Title>İp ve Kumaş</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseMobilya}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={MiningMaritimeIndustry}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Mining, Maritime, Industry</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowMadencilik}>
                Info
              </Button> */}
              <Modal show={showMadencilik} onHide={handleCloseMadencilik}>
                <Modal.Header closeButton>
                  <Modal.Title>Mining, Navigate and Industry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseMadencilik}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Medical}
              className="img-thumbnail"
            />
            <Card.Body>
              <Card.Title>Medical</Card.Title>
              <Card.Text></Card.Text>
              {/* <Button variant="primary" onClick={handleShowMedical}>
                Info
              </Button> */}
              <Modal show={showMedical} onHide={handleCloseMedical}>
                <Modal.Header closeButton>
                  <Modal.Title>Medical</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseMedical}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </React.Fragment>    
  );            
};


export default ProductIndex;

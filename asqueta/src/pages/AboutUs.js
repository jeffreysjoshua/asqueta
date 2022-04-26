import React, { Component } from "react";

import bart from "../components/assets/bart.jpeg";
import homer from "../components/assets/homer.avif";
import lisa from "../components/assets/lisa.webp";
import marge from "../components/assets/marge.jpeg";

import {
  Card,
  CardLink,
  CardGroup,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const paragraphContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor:'#F5FFFA',
  alignItems: 'center',
}

const paragraphStyle = {
  margin:'auto',
  border: '1.2rem',
  borderStyle: 'solid',
  borderColor: '#0bbdbd',
  padding: '1rem',
  width: '40rem',
  color: 'black',
  fontFamily: 'avantaGarde',
  maxWidth:'100%'
}

const cardStyle = {
  padding: '0.625rem',
  borderRadius: '6px',
  boxShadow: '0px 1px 15px 1px #0bbdbd',
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
  margin: '1.5rem',
  backgroundColor: '#F5FFFA',
  width:'30rem',
  height: '30rem',
  maxWidth: '35rem',
  maxHeight: '40rem',
  marginBottom:'1.2rem'
}

class AboutUs extends Component {
  render() {
    return (
      <section style={{backgroundColor: '#F5FFFA'}}>
        <div style={{paragraphContainerStyle}}>
          <br></br>
          <h2 style={{fontFamily: 'avantaGarde', color: 'black'}}> About Us </h2>
          <br></br>
          <p style={paragraphStyle}>
            {" "}
            The Simpsons series is a satirical depiction of American life, epitomized by the Simpson family, which consists of Homer, Marge, Bart, Lisa, and Maggie. The show is set in the fictional town of Springfield and parodies American culture and society, television, and the human condition.
          </p>
        </div>
        <br></br>
        <CardGroup>
          <Card style={cardStyle}>
            <CardBody>
              <CardTitle style={{marginBottom:'0.5rem', color:'black', fontFamily: 'avantaGarde'}}>Homer Simpson</CardTitle>
              <CardSubtitle style={{color:'black', fontFamily: 'avantaGarde'}}>
                Beer lover & Dad
              </CardSubtitle>
            </CardBody>
            <img
              style={{borderRadius: '4px', height: '10rem', objectFit: 'cover'}}
              width="150px"
              height="170px"
              src={homer}
              alt="Card image cap"
            />
            <CardBody>
              <CardText style={{lineHeight:'1.7rem', color:'black', padding: '0.3rem 0', fontFamily: 'avantaGarde'}}>
              As the family's provider, Homer works at the Springfield Nuclear Power Plant as safety inspector. Homer embodies many American working class stereotypes: he is obese, immature, outspoken, aggressive, balding, lazy, ignorant, unprofessional, and addicted to beer, junk food and watching television.
              </CardText>
              <CardLink href="https://www.linkedin.com/in/jeffreysjoshua/">
                LinkedIn
              </CardLink>
              <CardLink href="https://github.com/jeffreysjoshua">
                GitHub
              </CardLink>
            </CardBody>
          </Card>
          <Card style={cardStyle}>
            <CardBody>
              <CardTitle style={{marginBottom:'0.5rem', color:'black', fontFamily: 'avantaGarde'}}>Marge Simpson</CardTitle>
              <CardSubtitle style={{color:'black', fontFamily: 'avantaGarde'}}>
                Goody two shoes & Mom
              </CardSubtitle>
            </CardBody>
            <img
              style={{borderRadius: '4px', height: '10rem', objectFit: 'cover'}}
              width="150px"
              height="170px"
              src={marge}
              alt="Card image cap"
            />
            <CardBody>
              <CardText style={{lineHeight:'1.7rem', color:'black', padding: '0.3rem 0', fontFamily: 'avantaGarde'}}>
              Marge is the matriarch of the Simpson family. With her husband Homer, she has three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. She is often portrayed as a stereotypical television mother and is often included on lists of top "TV moms".
              </CardText>
              <CardLink href="https://www.linkedin.com/in/robert-calpito/">
                LinkedIn
              </CardLink>
              <CardLink href="https://github.com/rccalpito">GitHub</CardLink>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card style={cardStyle}>
            <CardBody>
              <CardTitle style={{marginBottom:'0.5rem', color:'black', fontFamily: 'avantaGarde'}}>Lisa Simpson</CardTitle>
              <CardSubtitle style={{color:'black', fontFamily: 'avantaGarde'}}>
                Total snob & Daughter
              </CardSubtitle>
            </CardBody>
            <img
              style={{borderRadius: '4px', height: '10rem', objectFit: 'cover'}}
              width="150px"
              height="170px"
              src={lisa}
              alt="Card image cap"
            />
            <CardBody>
              <CardText style={{lineHeight:'1.7rem', color:'black', padding: '0.3rem 0', fontFamily: 'avantaGarde'}}>
              Intelligent, kind and passionate about the planet and all living things, Lisa Simpson, at eight years old, is the second child of Homer and Marge, the younger sister of Bart, and the older sister of Maggie. Lisa's high intellect and left-wing political stance creates a barrier between her and other children her age; therefore she is a bit of a loner and social outcast.
              </CardText>
              <CardLink href="https://www.linkedin.com/in/john-budd-60a7a822b/">
                LinkedIn
              </CardLink>
              <CardLink href="https://github.com/Jbudd512">GitHub</CardLink>
            </CardBody>
          </Card>
          <Card style={cardStyle}>
            <CardBody>
              <CardTitle style={{marginBottom:'0.5rem', color:'black', fontFamily: 'avantaGarde'}}>Bart Simpson</CardTitle>
              <CardSubtitle style={{color:'black', fontFamily: 'avantaGarde'}}>
                Commited to evil & Son
              </CardSubtitle>
            </CardBody>
            <img
              style={{borderRadius: '4px', height: '10rem', objectFit: 'cover'}}
              width="150px"
              height="170px"
              src={bart}
              alt="Card image cap"
            />
            <CardBody>
              <CardText style={{lineHeight:'1.7rem', color:'black', padding: '0.3rem 0', fontFamily: 'avantaGarde'}}>
              At ten years old, Bart is the eldest child and only son of Homer and Marge, and the brother of Lisa and Maggie. Bart's most prominent and popular character traits are his mischievousness, rebelliousness and disrespect for authority.
              </CardText>
              <CardLink href="https://www.linkedin.com/in/francisco-carbonero/">
                LinkedIn
              </CardLink>
              <CardLink href="https://github.com/Neuroblock">GitHub</CardLink>
            </CardBody>
          </Card>
        </CardGroup>
      </section>
    );
  }
}

export default AboutUs;
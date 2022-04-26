import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import cpicture1 from "../components/assets/cpicture1.png";
import cpicture2 from "../components/assets/cpicture2.jpg";
import cpicture3 from "../components/assets/cpicture3.jpg";
import cpicture4 from "../components/assets/cpicture4.jpg";
import cpicture5 from "../components/assets/cpicture5.jpg";
import cpicture6 from "../components/assets/cpicture6.jpg";
import cpicture7 from "../components/assets/cpicture7.jpg";
import cpicture8 from "../components/assets/cpicture8.jpg";
import cpicture9 from "../components/assets/cpicture9.jpg";
import cpicture10 from "../components/assets/cpicture10.jpg";
import cpicture11 from "../components/assets/cpicture11.jpg";

const listStyle = {
  color: 'black',
  fontFamily: 'avantaGarde',
}

const items = [
  {
    src: cpicture1,
    altText: 'Slide 1',
  },
  {
    src: cpicture2,
    altText: 'Slide 2',
  },
  {
    src: cpicture3,
    altText: 'Slide 3',
  },
  {
    src: cpicture4,
    altText: 'Slide 4',
  },
  {
    src: cpicture5,
    altText: 'Slide 5',
  },
  {
    src: cpicture6,
    altText: 'Slide 6',
  },
  {
    src: cpicture7,
    altText: 'Slide 7',
  },
  {
    src: cpicture8,
    altText: 'Slide 8',
  },
  {
    src: cpicture9,
    altText: 'Slide 9',
  },
  {
    src: cpicture10,
    altText: 'Slide 10',
  },
  {
    src: cpicture11,
    altText: 'Slide 11',
  }
];

const imgStyle = {
  maxHeight: 120,
  maxWidth: 120
}


class Commercial extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{ width: "39rem", height: "37rem"}}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div style={{backgroundColor:'#F5FFFA',}}>
        <br></br>
        <h1 style={{ color: 'black', fontFamily: 'avantaGarde', backgroundColor:'#F5FFFA', height:'3.5rem', marginBottom:'1rem'}}>Check out our Commercial Projects</h1>
        <h5><a style ={listStyle} href="/residential"> Click here to view Residential </a></h5>
        <br></br>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
    );
  }
}



export default Commercial;
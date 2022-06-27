import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
// import picture1 from "../components/assets/picture1.jpg";
// import picture2 from "../components/assets/picture2.jpg";
// import picture3 from "../components/assets/picture3.jpg";
// import picture4 from "../components/assets/picture4.jpg";
import picture5 from "../components/assets/picture5.png";
// import picture6 from "../components/assets/picture6.jpeg";
import picture7 from "../components/assets/picture7.jpg";
import picture8 from "../components/assets/picture8.jpg";
import picture9 from "../components/assets/picture9.jpg";
// import picture10 from "../components/assets/picture10.jpg";
// import picture11 from "../components/assets/picture11.jpeg";

const listStyle = {
  color: 'black',
  fontFamily: 'avantaGarde',
}

const items = [
  {
    src: picture5,
    altText: 'Slide 1',
  },
  {
    src: picture5,
    altText: 'Slide 2',
  },
  {
    src: picture5,
    altText: 'Slide 3',
  },
  {
    src: picture7,
    altText: 'Slide 4',
  },
  {
    src: picture7,
    altText: 'Slide 5',
  },
  {
    src: picture8,
    altText: 'Slide 6',
  },
  {
    src: picture7,
    altText: 'Slide 7',
  },
  {
    src: picture8,
    altText: 'Slide 8',
  },
  {
    src: picture9,
    altText: 'Slide 9',
  },
  {
    src: picture7,
    altText: 'Slide 10',
  },
  {
    src: picture5,
    altText: 'Slide 11',
  }
];

const imgStyle = {
  maxHeight: 120,
  maxWidth: 120
}


class Residential extends Component {
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
        <h1 style={{ color: 'black', fontFamily: 'avantaGarde', backgroundColor:'#F5FFFA', height:'3.5rem', marginBottom:'1rem'}}>Check out our Residential Projects</h1>
        <h5><a style ={listStyle} href="/commercial"> Click here to view Commercial </a></h5>
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



export default Residential;


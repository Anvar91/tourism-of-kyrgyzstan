import React from 'react';
import {withRouter} from 'react-router-dom';

class SingleTour extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tour: null
    }
  }

  async componentDidMount() {
    const tourId = this.props.match.params.tourId;
    const response = await fetch(`http://localhost:3000/tours/${tourId}`)
    const tour = await response.json()

    this.setState({
      tour
    })
  }

  render() {
    if (!this.state.tour) {
      return null;
    }

    return (
      <div className='tour1'>
        <h1>{this.state.tour.name}</h1>
        <img src={this.state.tour.image1}/>

        <div className='description'>
          <p>{this.state.tour.description}
            На протяжении всего пути приходится идти в гору, такое испытание под силу далеко не каждому. Среднее время похода в одну сторону — 3-4 часа.
            У озера есть необычная вершина под названием «Сахарная голова» с нависающим ледником. Высота этой вершины составляет 4253 м. Озеро завального происхождения, не имеет прямого стока и уходит под землю, вырываясь из под земли несколькими километрами ниже. Большую часть года озеро находится в замерзшем состоянии, а летом вода не прогревается больше чем 5 градусов по Цельсию, потому для купания оно малопригодно. Кель-Тор примечателен потрясающим бирюзовым цветом озера, особенно красивое сочетание красок можно застать там именно летом.
          </p>
        </div>

          <img src='../../../public/assets/koltor3.jpg'/>
        <div className='description'>
          <p>
            Длина пешеходного трека к озеру составляет 8 километров в одну сторону.
            Тропа видна четко, потому заблудиться будет довольно проблематично.
            Сама дорога крайне живописна: начинается она с довольно пологого и безлесого участка, постепенно уходя все выше и выше на лесистые склоны, а затем и на настоящие высокогорные альпийские луга.
            По дороге есть небольшой брод. Есть множество мест для стоянок или пикников.
          </p>
          <p><b>Цена:</b> {this.state.tour.price}</p>
          <button>Купить</button>
        </div>
      </div>
    )
  }
}



export default withRouter(SingleTour);
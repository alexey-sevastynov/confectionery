import './app.css';
import Cards from './components/Cards';
import ListItem from './components/ListItem';
import Header from './components/Header';
import Sort from './components/Sort';
import { Component } from 'react';


class App extends Component {

  state = {
    data: [
      {
        name: 'Брус Лісбудінвест зрощена конструкція 10х20х2000 мм сосна',
        img: 'https://cdn.27.ua/190/a3/9d/893853_4.jpeg',
        rating: 1,
        price: 35,
        priceSale: 10,
        category: 'beam',
        favorites: false,
        length: 2000,
        width: 10,
        height: 20
      },
      {
        name: 'Брус цільна конструкція 50х50х2000 мм сосна',
        img: 'https://cdn.27.ua/190/9d/5b/171355_4.jpeg',
        rating: 4,
        price: 62.4,
        priceSale: false,
        category: 'beam',
        favorites: false,
        length: 2000,
        width: 50,
        height: 50
      },
      {
        name: 'Брус ЛІСБУДІНВЕСТ зрощена 15х15х2000 мм сосна',
        img: 'https://cdn.27.ua/190/30/4e/274510_1.jpeg',
        rating: 4,
        price: 40,
        priceSale: false,
        category: 'beam',
        favorites: false,
        length: 2000,
        width: 15,
        height: 15
      },
      {
        name: 'Брус 50х50х3000 мм сосна імпрегнований',
        img: 'https://cdn.27.ua/190/8f/ce/167886_1.jpeg',
        rating: 3,
        price: 91.20,
        priceSale: 14,
        category: 'beam',
        favorites: false,
        length: 3000,
        width: 50,
        height: 50
      },
      {
        name: 'Брус Лісбудінвест зрощена конструкція 15х15х2500 мм сосна',
        img: 'https://cdn.27.ua/190/db/13/121619_1.jpeg',
        rating: 5,
        price: 50,
        priceSale: 3,
        category: 'beam',
        favorites: false,
        length: 2500,
        width: 15,
        height: 15
      },
      {
        name: 'Брус 100х100х4000 мм сосна імпрегнований',
        img: 'https://cdn.27.ua/190/8f/ce/167886_1.jpeg',
        rating: 5,
        price: 489.60,
        priceSale: false,
        category: 'beam',
        favorites: false,
        length: 4000,
        width: 100,
        height: 100
      },
      {
        name: 'Брус лавочний зрощена конструкція 40х40х3000 мм сосна декоративний',
        img: 'https://cdn.27.ua/190/8e/1b/6852123_6.jpeg',
        rating: 4,
        price: 396,
        priceSale: 40,
        category: 'beam',
        favorites: false,
        length: 3000,
        width: 40,
        height: 40
      },
      {
        name: 'Дошка цільна конструкція 25х150х3000 мм сосна оброблена',
        img: 'https://cdn.27.ua/190/8f/d6/167894_3.jpeg',
        rating: 2,
        price: 156.6,
        priceSale: false,
        category: 'board',
        favorites: false,
        length: 3000,
        width: 150,
        height: 25
      },
      {
        name: 'Дошка цільна 25х100х3000 мм сосна імпрегнована',
        img: 'https://cdn.27.ua/190/8f/d2/167890_1.jpeg',
        rating: 4,
        price: 91.20,
        priceSale: 1,
        category: 'board',
        favorites: false,
        length: 3000,
        width: 100,
        height: 25
      },
      {
        name: 'Дошка цільна 50х100х4000 мм сосна',
        img: 'https://cdn.27.ua/190/8f/d8/167896_1.jpeg',
        rating: 4,
        price: 520,
        priceSale: 25,
        category: 'board',
        favorites: false,
        length: 4000,
        width: 100,
        height: 50
      },
      {
        name: 'Дошка цільна конструкція 47х123х2000 мм сосна',
        img: 'https://cdn.27.ua/190/3e/18/540184_4.jpeg',
        rating: 5,
        price: 437,
        priceSale: false,
        category: 'board',
        favorites: false,
        length: 2000,
        width: 123,
        height: 47
      },
      {
        name: 'Дошка цільна 25х100х2000 мм сосна',
        img: 'https://cdn.27.ua/190/a6/6e/173678_1.jpeg',
        rating: 3,
        price: 62.40,
        priceSale: 2,
        category: 'board',
        favorites: false,
        length: 2000,
        width: 100,
        height: 25
      },
      {
        name: 'Рейка ЦБМ Осмолода зрощена 20х40х1500 мм смерека',
        img: 'https://cdn.27.ua/190/47/81/149377_1.jpeg',
        rating: 4,
        price: 43,
        priceSale: false,
        category: 'rail',
        favorites: false,
        length: 1500,
        width: 40,
        height: 20
      },
      {
        name: 'Рейка зрощена 20х40х3000 мм ялина',
        img: 'https://cdn.27.ua/190/d1/49/119113_1.jpeg',
        rating: 5,
        price: 86,
        priceSale: false,
        category: 'rail',
        favorites: false,
        length: 3000,
        width: 40,
        height: 20
      },
      {
        name: 'Рейка зрощена 20х40х2000 мм ялина',
        img: 'https://cdn.27.ua/190/d1/49/119113_1.jpeg',
        rating: 3,
        price: 57,
        priceSale: false,
        category: 'rail',
        favorites: false,
        length: 2000,
        width: 40,
        height: 20
      },
      {
        name: 'Рейка ЦБМ Осмолода цільна конструкція 15х30х3000 мм сосна',
        img: 'https://cdn.27.ua/190/aa/7b/174715_4.jpeg',
        rating: 5,
        price: 50,
        priceSale: false,
        category: 'rail',
        favorites: false,
        length: 3000,
        width: 30,
        height: 15
      },
      {
        name: 'Рейка зрощена 30х40х3000 мм ялина',
        img: 'https://cdn.27.ua/190/d1/4c/119116_1.jpeg',
        rating: 5,
        price: 127,
        priceSale: 7,
        category: 'rail',
        favorites: false,
        length: 3000,
        width: 40,
        height: 30
      },
    ],
  }



  onTaggleFavorite = (name) => {

    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.name === name) {

          return { ...item, favorites: !item.favorites }
        }

        return item;

      })



    }))
  }


  numbersStarActive = (num) => {
    let arr = [];
    for (let index = 0; index < num; index++) {
      arr.push(index);
      console.log('hi', num)
    }
    console.log(arr, num);
  }


  render() {

    const { data } = this.state;

    return (
      <>
        <Header data={data} />
        <div className='d-flex'>
          <ListItem />
          <div style={{ width: '100%' }}>
            <Sort />
            <Cards data={data} onTaggleFavorite={this.onTaggleFavorite} numbersStarActive={this.numbersStarActive} />
          </div>

        </div>


      </>

    );
  }
}

export default App;

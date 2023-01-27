import './app.css';
import Cards from './components/Main/Cards'
import ListItem from './components/SidePanel/ListItem';
import Header from './components/Head/Header';
import Sort from './components/Sort';
import { Component } from 'react';
import BasketWindow from './components/WindowBasket/BasketWindow';
import FavoriteWindow from './components/WindowFavorites/FavoriteWindow';

class App extends Component {

  state = {
    data: [
      {
        name: 'Брус Лісбудінвест зрощена конструкція 10х20х2000 мм сосна',
        img: 'https://cdn.27.ua/190/a3/9d/893853_4.jpeg',
        rating: 0,
        price: 35,
        priceSale: 99,
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
    newData: [
      {
        name: 'Брус Лісбудінвест зрощена конструкція 10х20х2000 мм сосна',
        img: 'https://cdn.27.ua/190/a3/9d/893853_4.jpeg',
        rating: 0,
        price: 35,
        priceSale: 99,
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
    searchText: '',
    dataSort: [],
    dataBasket: [],
    dataFavorite: [],
    basketOpened: false,
    favoriteOpened: false,
    dataSidePanel: [
      { name: 'Бруси, дошки та рейки', category: 'all', active: true, img: 'https://cdn.27.ua/799/8f/d6/167894_3.jpeg' },
      { name: 'Бруси', category: 'beam', active: false, img: 'https://cdn.27.ua/190/9d/5b/171355_4.jpeg' },
      { name: 'Дошки', category: 'board', active: false, img: 'https://cdn.27.ua/190/8f/d8/167896_1.jpeg' },
      { name: 'Рейки', category: 'rail', active: false, img: 'https://cdn.27.ua/190/aa/7b/174715_4.jpeg' }
    ],
    dataSortPanel: [
      { name: 'дешевше', styleActive: false },
      { name: 'дорожче', styleActive: false },
      { name: 'популярні', styleActive: false },
      { name: 'акції', styleActive: false }
    ]
  }



  sortByName(name) {
    const array = this.state.newData;

    switch (name) {
      case 'дешевше':
        return array.sort((a, b) => a.price > b.price ? 1 : -1)
      case 'дорожче':
        return array.sort((a, b) => a.price < b.price ? 1 : -1)
      case 'популярні':
        return array.sort((a, b) => a.rating < b.rating ? 1 : -1)
      case 'акції':
        const sale = array.filter(item => item.priceSale !== false);
        const noSale = array.filter(item => item.priceSale === false);
        const newArray = sale.concat(noSale);

        return newArray

      default:
        return array;
    }

  }

  arrayNewData(arr) {

    let array = [];

    for (let index = 0; index < arr.length; index++) {
      array = [...array, ...this.state.data.filter(item => arr.map(category => category)[index].toString() === item.category)];
    }

    return array.length === 0 ? this.state.data : array;
  }

  showCloseButtonAll(array) {
    const arrayActivesNew = array.filter(item => item === true);

    return arrayActivesNew.length === 0 || arrayActivesNew.length === 3 ? true : false;
  }


  search = (event) => {

    this.setState(() => ({
      searchText: event.target.value
    }))

  }

  searchCards = (string, obj) => {

    if (string.length === 0) {

      console.log('here');
      console.log(string.length);
      return obj;
    }

    return obj.filter(item => item.name.toLowerCase().indexOf(string) > -1);

  }

  onTaggleActiveSort = async (category, nameSort) => {

    await this.setState(({ dataSidePanel }) => ({

      dataSidePanel: dataSidePanel.map(item => {

        if (item.category === category) {

          return { ...item, active: !item.active }

        }

        return item;
      })

    }));

    const arrCategoryName = await this.state.dataSidePanel.filter(item => item.active).map(item => item.category); // [ beam, board ...]

    await this.setState(({ newData }) => ({

      newData: this.arrayNewData(arrCategoryName)

    }))

    const arrayActives = await this.state.dataSidePanel.map(item => item.active).splice(1); // [false, false, false]

    await this.setState(({ dataSidePanel }) => ({

      dataSidePanel: dataSidePanel.map(item => {

        if (item.category === 'all') {

          return { ...item, active: this.showCloseButtonAll(arrayActives) }

        }

        return item;
      }),

      newData: this.sortByName(nameSort)


    }));


  }

  sort = async (nameSort, styleActive) => {

    console.log(this.state.newData.map(item => item.price).sort((a, b) => a - b));

    await this.setState(({ dataSortPanel, newData }) => ({


      dataSortPanel: dataSortPanel.map(item => {

        if (item.name === nameSort) {
          return { ...item, styleActive: true }
        }

        if (nameSort === 'дешевше') {
          return { ...item, styleActive: (item.name === 'акції' || item.name === 'популярні' || item.name === 'дорожче') ? false : true }
        }
        if (nameSort === 'дорожче') {
          return { ...item, styleActive: (item.name === 'акції' || item.name === 'популярні' || item.name === 'дешевше') ? false : true }
        }
        if (nameSort === 'популярні') {
          return { ...item, styleActive: (item.name === 'дешевше' || item.name === 'дорожче' || item.name === 'акції') ? false : true }
        }
        if (nameSort === 'акції') {
          return { ...item, styleActive: (item.name === 'дешевше' || item.name === 'дорожче' || item.name === 'популярні') ? false : true }
        }

        return item;

      }),

      newData: this.sortByName(nameSort)

    }))



  }

  numbersStarActive = (num) => {
    let arr = [];
    for (let index = 0; index < num; index++) {
      arr.push(index);
    }
    console.log(arr, num);
  }

  changeStatebasketOpened = () => {
    console.log('call changeStatebasketOpened()');
    this.setState(({ basketOpened }) => ({
      basketOpened: !basketOpened,
      favoriteOpened: false
    }))
  }

  changeStateFavoriteOpened = () => {
    console.log('call changeStateFavoriteOpened()');
    this.setState(({ favoriteOpened }) => ({
      favoriteOpened: !favoriteOpened,
      basketOpened: false
    }))
  }

  addCardInBasket = (name) => {

    const item = this.state.newData.filter(item => item.name === name);

    if (!this.state.dataBasket.includes(...item)) {

      this.setState(({ dataBasket }) => ({

        dataBasket: [...dataBasket, ...item]

      }))
    }

  }

  removeCardFromBasket = (name) => {

    this.setState(({ dataBasket }) => ({

      dataBasket: dataBasket.filter(item => item.name !== name)

    }))

  }

  removeAllCardsFromBasket = () => {

    this.setState(({ dataBasket }) => ({

      dataBasket: []

    }))

  }

  removeAllCardsFromFavorite = () => {

    this.setState(({ newData }) => ({

      dataFavorite: [],
      newData: newData.map(item => {
        if (item.favorites === true) {
          return { ...item, favorites: false }
        }

        return item;
      })

    }))

  }

  addCardInFavorite = async (name) => {

    await this.setState(({ newData }) => ({
      newData: newData.map(item => {
        if (item.name === name) {
          return { ...item, favorites: !item.favorites }
        }

        return item;

      })
    }))

    const item = this.state.newData.filter(item => item.name === name);

    if (item[0].favorites) {

      await this.setState(({ dataFavorite }) => ({

        dataFavorite: [...dataFavorite, ...item]

      }))

    } else (

      await this.setState(({ dataFavorite }) => ({

        dataFavorite: dataFavorite.filter(item => item.name !== name)

      }))
    )
  }


  render() {

    const { newData, dataBasket, basketOpened, favoriteOpened, dataSidePanel, dataSortPanel, dataFavorite, searchText } = this.state;

    const visibleData = this.searchCards(searchText, newData);
    console.log(visibleData);

    const cardsBasket = (
      <BasketWindow
        dataBasket={dataBasket}
        newData={newData}
        removeCardFromBasket={this.removeCardFromBasket}
        removeAllCardsFromBasket={this.removeAllCardsFromBasket}


      />
    )

    const cardsFavorite = (
      <FavoriteWindow dataFavorite={dataFavorite} removeAllCardsFromFavorite={this.removeAllCardsFromFavorite} />
    )


    const main = (
      <div className='d-flex'>
        <ListItem
          onTaggleActiveSort={this.onTaggleActiveSort}
          dataSidePanel={dataSidePanel}
          dataSortPanel={dataSortPanel}
        />
        <div style={{ width: '100%' }}>
          <Sort dataSortPanel={dataSortPanel} sort={this.sort} />
          <Cards
            data={visibleData}
            dataBasket={dataBasket}
            addCardInFavorite={this.addCardInFavorite}
            numbersStarActive={this.numbersStarActive}
            basketOpened={basketOpened}
            favoriteOpened={favoriteOpened}
            addCardInBasket={this.addCardInBasket}
            removeCardFromBasket={this.removeCardFromBasket}

          />
        </div>

      </div>
    )



    return (
      <>


        <Header
          newData={newData}
          search={this.search}


          dataBasket={dataBasket}
          changeStatebasketOpened={this.changeStatebasketOpened}
          changeStateFavoriteOpened={this.changeStateFavoriteOpened}
        />

        {favoriteOpened ? cardsFavorite : null}
        {basketOpened ? cardsBasket : null}

        {!(favoriteOpened || basketOpened) ? main : null}







      </>

    );
  }
}

export default App;



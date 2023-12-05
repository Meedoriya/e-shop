import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ModalItem from "./components/ModalItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Sofa',
          img: 'sofa.png',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 2,
          title: 'Coffee Table',
          img: 'coffee-table.png',
          desc: 'Elegant wooden coffee table with a glass top, ideal for modern interiors.',
          category: 'table',
          price: '299.99'
        },
        {
          id: 3,
          title: 'Bookshelf',
          img: 'bookshelf.png',
          desc: 'Spacious bookshelf with multiple shelves, suitable for organizing books and decor.',
          category: 'shelf',
          price: '399.99'
        },
        {
          id: 4,
          title: 'Armchair',
          img: 'armchair.png',
          desc: 'Luxurious leather armchair, providing exceptional comfort and style.',
          category: 'chair',
          price: '449.99'
        },
        {
          id: 5,
          title: 'Dining Chair',
          img: 'dining-chair.png',
          desc: 'A sleek and modern dining chair, designed for both comfort and style in the dining area.',
          category: 'chair',
          price: '199.99'
        }
      ],
      modalItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onModalItem =this.onModalItem.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onModalItem={this.onModalItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.modalItem && <ModalItem item={this.state.fullItem} onAdd={this.addToOrder} onModalItem={this.onModalItem} />}
        <Footer />
      </div>
    );
  }

  onModalItem(item) {
    this.setState({fullItem: item})
    this.setState({modalItem: !this.state.modalItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items
        .filter((obj) => obj.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({
      orders: this.state.orders
        .filter((obj) => obj.id !== id)
    })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach((obj) => {
      if (obj.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;

import React, {Component} from 'react';
import Crypton from './CryptoCurrency'

class CryptoCurrency extends Component {
  
  constructor (props){
      super(props)
      this.state = {
          name: 'loading...',
          quotes: '',
          lastUpdateTime: new Date()
      }
  }

  componentDidMount () {
    setInterval(() => {
    const _url = "https://api.coinmarketcap.com/v2/ticker/?limit=20"   
    fetch(_url).then(resp => resp.json())
    .then(newCryptoData => {
      console.log(newCryptoData)
      this.setState({
        name:newCryptoData.data[1].name,
        quotes:newCryptoData.data[1].quotes.USD.price,
        symbol:newCryptoData.data[1].quotes.USD.percent_change_24h,
        lastUpdateTime: new Date(),
        name2:newCryptoData.data[2].name,
        quotes2:newCryptoData.data[2].quotes.USD.price,
        symbol2:newCryptoData.data[2].quotes.USD.percent_change_24h,
        name3:newCryptoData.data[1376].name,
        quotes3:newCryptoData.data[1376].quotes.USD.price,
        symbol3:newCryptoData.data[1376].quotes.USD.percent_change_24h
       })
     })
   }, 5000)
  }
   
   //Object.value
 

  render() {
    return (
      <div>
       <div>
       I know nothing about cryptocurrency!
       </div>
        <div>
         <h4>Last Updated At {this.state.lastUpdateTime.toLocaleString()}</h4>
        </div>
        <table>
          <thead>
         <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Percent Change 24H</th>
         </tr>
          </thead>
          <tbody>
          <tr>
           <td> <Crypton name={this.state.name}/> </td>
           <td> <Crypton quotes={this.state.quotes}/> </td>
           <td> <Crypton symbol={this.state.symbol}/> </td>
           </tr>
           <tr>
           <td> <Crypton name={this.state.name2}/> </td>
           <td> <Crypton quotes={this.state.quotes2}/> </td>
           <td> <Crypton symbol={this.state.symbol2}/> </td>
          </tr>
          <tr>
           <td> <Crypton name={this.state.name3}/> </td>
           <td> <Crypton quotes={this.state.quotes3}/> </td>
           <td> <Crypton symbol={this.state.symbol3}/> </td>
           </tr>
          </tbody>
        </table>
         
         </div>
    );
  }
}

export default CryptoCurrency;
import React, {Component} from 'react'

class Crypton extends Component{
   
    getIconURL () {
        return `https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.icon}.png`
    }
    
    render () {
        return(
            <section>
                <h3>{this.props.name}</h3>
                <h3>{this.props.quotes}</h3>
                <h3>{this.props.symbol}</h3>
        
                </section>
        )
    }

}

export default Crypton
import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'armchair'
                },
                {
                    key: 'bookshelf',
                    name: 'Bookshelf'
                },
                {
                    key: 'coffee_table',
                    name: 'Tables'
                },
                {
                    key: 'sofa',
                    name: 'Sofa'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map((obj) => (
                    <div key={obj.key} onClick={() => this.props.chooseCategory(obj.key)}>
                        {obj.name}
                    </div>
                ))}
            </div>
        )
    }
}

export default Categories
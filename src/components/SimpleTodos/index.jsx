import React from 'react'
import { Component } from 'react';

import TodoItems from '../TodoItems';

import './index.css'

const intialTodoList = [
    {
        id: 1,
        title: 'dcfvgbhnjmhbgvfdcfvgbhnjmkmnb',
    },
    {
        id: 2,
        title: 'dcfvgbhnjmhbgvfdcfvgbhnjmkmnb',
    },
    {
        id: 3,
        title: 'dcfvgbhnjmhbgvfdcfvgbhnjmkmnb',
    },
    {
        id: 4,
        title: 'dcfvgbhnjmhbgvfdcfvgbhnjmkmnb',
    },
    {
        id: 5,
        title: 'dcfvgbhnjmhbgvfdcfvgbhnjmkmnb',
    },
    {
        id: 6,
        title: 'dcfvgbhnjmhbgvfdcfvgbhnjmkmnb',
    },
    {
        id: 7,
        title: 'dcfvgbhnjmhbgvfdcfvgbhnjmkmnb',
    },
    {
        id: 8,
        title: 'dcfvgbhnjmhbgvfdcfvgbhnjmkmnb',
    },

];


class SimpleTodos extends Component {
    state = { todosList: intialTodoList }


    deleteTodo = () => {
        const { todosList } = this.state
    }


    render() {
        const { todosList } = this.state;

        return (
            <div className='todos-bg'>
                <div className='todos-card'>
                    <h1 className='todos-heading'>
                        Simple Todos
                    </h1>

                    <ul className='todos-items-con'>

                        { todosList.map(eachTodo => {
                            <TodoItems
                                todoItem={ eachTodo }
                                deleteTodo={ this.deleteTodo }
                                Key={ eachTodo.id } />
                            console.log(TodoItems)
                        }) }
                    </ul>
                </div>
            </div>
        )
    }

}

export default SimpleTodos;

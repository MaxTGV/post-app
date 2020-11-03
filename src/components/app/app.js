import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
//import styled  from 'styled-components';

/*const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
    margin-top: 100px;
    padding: 50px 30px 100px 30px;
    background-color: rgb(0, 0, 0);
    border-radius: 15px;
`
*/

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, like: false, id: this.randomGenerate()},
                {label: 'That is so good', important: false, like: false, id: this.randomGenerate()},
                {label: 'I need a break...', important: false, like: false, id: this.randomGenerate()}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.randomGenerate = this.randomGenerate.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        //this.maxID = this.randomGenerate;
    }

    deleteItem(id) {
       this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
           
            const newArr = [...data.slice(0, index), ...data.slice(index+1)];

            return {
                data: newArr
            }
       });
    }

    addItem(body) {

        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.randomGenerate()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            } 
        });
    }

    randomGenerate() {
        let res = '';
        const symbol = '0123456789qwertyuiopasdfghkl;zxcvbnm[]QWERTIDSBGLKBFCXMNV<MNB:';

        let maxPos = symbol.length-1;
        for (let i=0; i<10; ++i) {
            let pos = Math.floor(Math.random() * maxPos);
            res += symbol.substring(pos, pos+1); 
        }
        return res;
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter( (item) =>  {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter 
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList 
                posts={visiblePosts}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </div>
            )
    }
}
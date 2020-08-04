import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component{
    
  constructor(props){
      super(props);

      this.state = {
        term: '', //refers to the search term located in the search input
        location: '', //refers to the location to search near from the location input
        sortBy: 'best_match' //will represent the selected sorting option to use
      };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChnage = this.handleLocationChnage.bind(this);

      this.sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
        };

    }
    
    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOptions){
            return 'active';
        }
        else{
          return '';
        }
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});
        }
    
    handleTermChange(event){
          this.setState({term: event.target.value});
        }

    handleLocationChnage(event){
            this.setState({location: event.target.value});
        }


    



    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption =>{
           let sortByOptionValue = this.sortByOptions[sortByOption];
           return <li 
           key={sortByOptionValue}
           className={this.getSortByClass(sortByOptionValue)} // this will conditionally style each sort by option, displaying to the user which sorting option is currently selected 
           onClick= {this.handleSortByChange.bind(this,sortByOptionValue)} // This will allow us to both bind to the current value of this (as we usually do in the constructor()) but also bind the current sortByOptionValue as the first argument to the method call, ensuring the method is called with the appropriate value when clicked.
           >{sortByOption}</li>;
        });
    }
    
    render(){
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions()} 
                </ul>
            </div>
            <div className="SearchBar-fields">
              <input 
              placeholder="Search Businesses" 
              onChange={this.handleTermChange}
              />
              <input 
              placeholder="Where?"
              onChange= {this.handleLocationChnage}
              />
            </div>
            <div className="SearchBar-submit">
              <a href="www.#.com">Let's Go</a>
            </div>
          </div>
        );
    }

}
    
export default SearchBar;
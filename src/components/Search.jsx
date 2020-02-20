//search button didn't do anything, so now it searches for kittens!

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(e) => props.search(e.target.value)}/>
    <button className="btn hidden-sm-down" onClick={() => props.search('kittens')}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

export default Search;

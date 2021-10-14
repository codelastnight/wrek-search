import Search from '../Search';
import logo from '../../logo.png';


function Results(props: any) {
    return (
      <div className="result">
        <Search searchResult={props.searchResult} setSearch={props.setSearch} />

        <h3>1 Result(s):</h3>
        <div>
          <a href="https://wrek.org">
            <h3>
              WREK RADIO
            </h3>
          </a>
          <p>
            wrek radio official site
          </p>
        </div>
      </div>
    );
  }
  
  export default Results;
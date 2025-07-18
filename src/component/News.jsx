import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component'
export class News extends Component {

    static defaultProps = {
    country:"us",
    category:"general",
    pageSize:5,

  };
  static propTypes={
     country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number,
  }
 
    constructor(){
        super()
        console.log("now we are in news")
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
    }
    
    async componentDidMount(){
     
      await this.updateNews()
    }
   updateNews=async ()=>{
        //  
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.Api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        try{
          this.props.setProgress(10)
            this.setState({loading:true})
            const data=await fetch (url)
              this.props.setProgress(40)
        const parseData= await data.json()
          this.props.setProgress(70)
        console.log(parseData)
        this.setState({
            articles:parseData.articles,totalResults:parseData.totalResults,loading:false
        })
          this.props.setProgress(100)
        }catch(e){
            console.log(e)
        }
        
    }
    
    // handleNext=async ()=>{
    //     if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){
    //    this.setState({page:this.state.page+1})
    //   await this.updateNews()
        
    // } 
    // }
    // handlePrev= async()=>{
    //     console.log("in prev")
    //     if(this.state.page >1){
    //     this.setState({page:this.state.page-1})
    //     await this.updateNews()
        
    // }
    // }
    fetchMoreData = async()=>{
      
        const nextPage = this.state.page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.Api_key}&page=${nextPage}&pageSize=${this.props.pageSize}`;

        try {
          this.setState({ loading: true });
          const data = await fetch(url);
          const parseData = await data.json();
          console.log(parseData);

          this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            page: nextPage,
            loading: false,
          });
        } catch (e) {
          console.log(e);
        }
    };


  render() {
    return (
      <>
        <h2 className='text-center' >NewZMonk -Top headlines</h2>
         {this.state.loading===true&&<Spinner/>}
     <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Spinner />}
            endMessage={
              <div style={{ textAlign: 'center', margin: '3rem 0', color: 'gray' }}>
                <b>Yay! You have seen all the news.</b>
              </div>
            }
          >

            <div className='container my-3'>
                  <div className="row">
                      {this.state.articles.map((element)=>{
                          return (
                          <div className="col-md-4 my-3" key={element.url}>  
                          <NewsItem 
                          Api_key={this.props.Api_key}
                          title={element.title || ""} 
                          description={element.description || ""} 
                          imageUrl={element.urlToImage} 
                          newsUrl={element.url}
                            source={element.source.name}
                            date={element.publishedAt} 
                            author={element.author}/>
                          </div> )
                      })}
                  </div>
                </div>
        </InfiniteScroll>


        {/* <div className="container d-flex justify-content-between py-3">
            <button type="button" disabled={this.state.page===1?true:false} className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
            <button type="button" disabled={this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize)?true:false} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
    </>
    )
  }
}

export default News
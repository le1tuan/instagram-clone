import React from 'react';
import './style.css';
import { InfiniteLoader, List } from 'react-virtualized';

class InstagramContent extends React.Component {
  render() {
    return (
      <div className="instagram-content-container">
        {
          [0,1,2,3,4,5,6].map((item, index) => {
            return (
              <div className="instagram-content-item" key={index}>
                <header className="instagram-title">
                  <h4><i className="fas fa-bolt"></i> Logo</h4>
                </header>
                <section>
                  <img className="instagram-image" src="https://instagram.fhan5-1.fna.fbcdn.net/vp/0723b5c57fbecccbbe03d59f44882be8/5BA8455A/t51.2885-15/e35/32280103_202448097032735_1799726803242188800_n.jpg" />
                  <div className="instagram-content-body">
                    <div className="instagram-widget">
                      <div><i className="far fa-heart"></i></div>
                      <div><i className="far fa-comment-alt"></i></div>
                      <div id="book-mark__left"><i className="far fa-bookmark"></i></div>
                    </div>
                    <div className="instagram-like">
                      <p>42 likes</p>
                    </div>
                    <div className="insgram-title-post">
                      <p>logoplaceSnaily design made by @mandesgn</p>
                    </div>
                    <div className="instagram-comment">
                     <form>
                       <textarea className="instagram-comment-textarea" placeholder="Add a comment"></textarea>
                     </form>
                    </div>
                  </div>
                </section>
              </div>
            )
          })
        } 
      </div>
    )
  }
}

export default InstagramContent;
import React from 'react';
import './style.css';
class InstagramContent extends React.Component {
  render() {
    return (
      <div className="instagram-content-container">
        <div className="instagram-content-item">
          <header className="instagram-title">
            <h4>Logo</h4>
          </header>
          <section>
            <img className="instagram-image" src="https://instagram.fhan5-1.fna.fbcdn.net/vp/0723b5c57fbecccbbe03d59f44882be8/5BA8455A/t51.2885-15/e35/32280103_202448097032735_1799726803242188800_n.jpg" />
            <div className="instagram-widget">
              <div><i class="far fa-heart"></i></div>
              <div><i class="far fa-comment-alt"></i></div>
              <div id="book-mark__left"><i class="far fa-bookmark"></i></div>
            </div>
          </section>
        </div>
        <div className="instagram-content-item">
          <header className="instagram-title">
            <h4>Logo</h4>
          </header>
          <section>
            <img className="instagram-image" src="https://instagram.fhan5-1.fna.fbcdn.net/vp/0723b5c57fbecccbbe03d59f44882be8/5BA8455A/t51.2885-15/e35/32280103_202448097032735_1799726803242188800_n.jpg" />
            <div className="instagram-widget">
              <div><i class="far fa-heart"></i></div>
              <div><i class="far fa-comment-alt"></i></div>
              <div id="book-mark__left"><i class="far fa-bookmark"></i></div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default InstagramContent;
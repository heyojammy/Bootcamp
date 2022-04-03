import React from 'react';

const Links = () => {
    return (
        <div>
            <h3>All Things Cucco:</h3>
            <ul>
                <Resources/>
            </ul>
        </div>
    )

}

const Resources = (props) => {
    return (
        <div className="link-list">  
         {props.links.map((link, index) =>
            <li><a href={link.url}>{link.title}</a></li>
         )}   
        </div>
    )
}

Resources.defaultProps = { 
    links: [
        {
            title: "Why Cuccos ATTACK",
            url: 'https://screenrant.com/zelda-cucco-link-attack-chicken-fight-sword-angry/'
        },
        {
            title: "How to Beat Enemies with CHICKENS",
            url: 'https://www.eurogamer.net/articles/2017-03-10-zelda-breath-of-the-wild-players-have-worked-out-how-to-beat-enemies-with-a-chicken'
          },
          {
            title: "Cucco In Game Easter Eggs",
            url: 'https://gameranx.com/features/id/213464/article/hyrule-warriors-age-of-calamity-dont-miss-the-extremely-rare-cucco-riding-easter-egg/'
          }, 
          {
            title: "Shop Chickens on Etsy",
            url: 'https://www.etsy.com/market/zelda_chicken'
          }
    ]
}

export default Links;
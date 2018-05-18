import React from 'react';
import './views/activity-feed.css';
// import Activity from "./Activity";

function ActivityFeed(props) {
    return (
        //need to figure out how to make this dynamically rendered by what the user enters in the post box area
       <div className="star">
        <div className="html">
            <div className="activity-body">
                <div className="activity-feed-title"><h1 className="activity-feed-title-header">Group Activity Feed</h1></div>
                <section className=".section" >
                    <article className=".article">
                        <figure className="figure">
                            <h2 className="post-title">The North Shore of Oahu</h2>
                            <p className="post-words">Go to Laniakea Beach and take a photo with the green hawaiial sea turles.</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/09/top-10-places-to-visit-in-hawaii-north-shore-oahu-2.jpg' />
                    </article>
                    
                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Waikiki Beach</h2>
                            <p className="post-words">What does Waikiki mean? Hint: ask one of the native when visiting Waikiki Beach</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/09/top-10-places-to-visit-in-hawaii-waikiki-2.jpg'/>
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Na Pali State Wilderness Park</h2>
                            <p className="post-words">Hike to the shores, and bring back a sea shell.</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img  className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/09/top-10-places-to-visit-in-hawaii-na-pali-coast-state-wilderness-park-1.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Twin Falls</h2>
                            <p className="post-words">Travel down the Road to Hana, post a photo of your group at Twin Falls</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img  className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/05/2014-04-22_0006.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Volcanos National Park</h2>
                            <p className="post-words">Find the 500 year old lava cave, and bring back a piece of the land.</p>
                            <i class="far fa-star"></i>

                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2014/09/Top-10-Places-to-Visit-Hawaii-volcanoes-national-park.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Pride of Maui Sunset Cruise</h2>
                            <i class="far fa-star"></i>
                            <p className="post-words">Post a picture of your ticket</p>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2017/01/Top-50-Maui-Activities_Sunset-Dinner-Cruise_3-1.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Burning Love show</h2>
                            <p className="post-words">Snap a photo with "Elvis"</p>
                            <i class="far fa-star"></i>

                        </figure>
                        <img className="img" alt src='https://cdn2.veltra.com/ptr/20140605210535_1967757812_10611_0.jpg?&impolicy=custom' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Rent Ocean Toys</h2>
                            <p className="post-words">Snap a picture of someone in the group riding the waves.</p>
                        <i class="far fa-star"></i>
</figure>
                        <img className="img" alt src='https://alohanarentals.com/wp-content/uploads/2018/05/Kahaluu-Beach-Park-600x394-600x380.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Go Standup Paddling</h2>
                            <p className="post-words">Have someone snap a photo of your group and your boards</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2017/01/Top-50-Maui-Activities_SUP_3.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Experience Nah Leeyoh</h2>
                            <p className="post-words">Find out what Nah Leeyoh is in west Maui.</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2017/12/horses.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Kings Trail on Maui</h2>
                            <p className="post-words">Go see what sea creature's natural habitat is La Peruose?</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2017/12/2015-12-28_0006.jpg' />
                    </article>

                    <article className="article">
                        <figure className="figure">
                            <h2 className="post-title">Feast of Lele</h2>
                            <p className="post-words">Take a photo with one of the dancers</p>
                            <i class="far fa-star"></i>
                        </figure>
                        <img className="img" alt src='http://www.prideofmaui.com/blog/wp-content/uploads/2017/01/Top-50-Maui-Activities_Feast-at-Lele_6.jpg' />
                    </article>
                </section> 





                <svg width="0" height="0">
                    <defs>
                        <clipPath id="hexagono" clipPathUnits="objectBoundingBox">
                            <p className="post-words">olygon points=".25 0, .75 0, 1 .5, .75 1, .25 1, 0 .5" </p>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
</div>
    )
}

export default ActivityFeed;
